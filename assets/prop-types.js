// A more concise API for defining Vue component props

function getType(fn) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/)
  return match ? match[1] : ''
}

function isPlainObject(obj) {
  return String(obj) === '[object Object]'
}

const simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/
function assertType(value, type) {
  let valid
  const expectedType = getType(type)
  if (simpleCheckRE.test(expectedType)) {
    const t = typeof value
    valid = t === expectedType.toLowerCase()
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value)
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value)
  } else {
    valid = value instanceof type
  }
  return {
    valid,
    expectedType
  }
}

class AnyConstraint {
  constructor() {
    this.properties({
      default: undefined,
      required: false,
      allowedItems: null,
      userValidator: null,
      type: null,
      validator: this.rawValidator.bind(this)
    })
  }

  properties(map) {
    for (const key in map) {
      let value = map[key]
      Object.defineProperty(this, key, {
        enumerable: false,
        get: () => value,
        set: v => (value = v)
      })
    }
  }

  def(value) {
    return this.clone({ default: value })
  }

  get mandatory() {
    return this.clone({ required: true })
  }

  validate(userValidator) {
    return this.clone({ userValidator })
  }

  oneOf(...allowedItems) {
    return this.clone({ allowedItems })
  }

  clone(data = {}) {
    const instance = new this.constructor()

    for (const key of Object.getOwnPropertyNames(this)) {
      instance[key] = this[key]
    }
    for (const key in data) {
      instance[key] = data[key]
    }

    instance.validator = instance.rawValidator.bind(instance)
    return instance
  }

  rawValidator(value) {
    if (this.userValidator !== null && !this.userValidator(value)) return false
    if (this.allowedItems !== null && !this.allowedItems.includes(value))
      return false
    return true
  }
}

class BooleanConstraint extends AnyConstraint {
  constructor() {
    super()
    this.type = Boolean
  }
}

class NumberConstraint extends AnyConstraint {
  constructor() {
    super()

    this.type = Number

    this.properties({
      lowerBound: -Infinity,
      upperBound: Infinity,
      lowerExclusive: false,
      upperExclusive: false
    })
  }

  rawValidator(value) {
    return (
      super.rawValidator.call(this, value) &&
      !isNaN(+value) &&
      (this.lowerExclusive
        ? value > this.lowerBound
        : value >= this.lowerBound) &&
      (this.upperExclusive ? value < this.upperBound : value <= this.upperBound)
    )
  }

  get loose() {
    return this.clone({
      type: [String, Number]
    })
  }

  min(lowerBound) {
    return this.clone({ lowerBound, lowerExclusive: false })
  }

  greaterThan(lowerBound) {
    return this.clone({ lowerBound, lowerExclusive: true })
  }

  max(upperBound) {
    return this.clone({ upperBound, upperExclusive: false })
  }

  lowerThan(upperBound) {
    return this.clone({ upperBound, lowerExclusive: true })
  }
}

class FloatConstraint extends NumberConstraint {
  rawValidator(value) {
    return super.rawValidator.call(this, value) && isFinite(+value)
  }
}

class IntegerConstraint extends FloatConstraint {
  isInteger(value) {
    const num = +value
    if (Number.isInteger) {
      return Number.isInteger(num)
    } else {
      return Math.floor(num) === num
    }
  }

  rawValidator(value) {
    return super.rawValidator.call(this, value) && this.isInteger(value)
  }
}

class ArrayConstraint extends AnyConstraint {
  constructor() {
    super()

    this.type = Array

    this.properties({
      minLength: 0,
      maxLength: Infinity,
      itemType: null,
      allowedAnyItems: null
    })
  }

  rawValidator(value) {
    if (!super.rawValidator.call(this, value)) return false
    if (value.length < this.minLength) return false
    if (value.length > this.maxLength) return false
    if (
      this.allowedAnyItems !== null &&
      !value.every(item => this.allowedAnyItems.includes(item))
    )
      return false
    if (this.itemType !== null) {
      for (const item of value) {
        if (!assertType(item, this.itemType)) {
          return false
        }
      }
    }
    return true
  }

  anyOf(...allowedAnyItems) {
    return this.clone({ allowedAnyItems })
  }

  min(minLength) {
    return this.clone({ minLength })
  }

  max(maxLength) {
    return this.clone({ maxLength })
  }

  of(itemType) {
    return this.clone({ itemType })
  }
}

class ObjectConstraint extends AnyConstraint {
  constructor() {
    super()

    this.type = Object

    this.properties({
      itemType: null
    })
  }

  rawValidator(value) {
    if (!super.rawValidator.call(this, value)) return false
    if (this.itemType !== null) {
      for (const key in value) {
        if (!assertType(value[key], this.itemType)) {
          return false
        }
      }
    }
    return true
  }

  of(itemType) {
    return this.clone({ itemType })
  }
}

class StringConstraint extends AnyConstraint {
  constructor() {
    super()

    this.type = String

    this.properties({
      minLength: 0,
      maxLength: Infinity,
      regex: null
    })
  }

  rawValidator(value) {
    if (!super.rawValidator.call(this, value)) return false
    if (value.length < this.minLength) return false
    if (value.length > this.maxLength && this.maxLength !== -1) return false
    if (this.regex && !this.regex.test(value)) return false

    return true
  }

  min(minLength) {
    return this.clone({ minLength })
  }

  max(maxLength) {
    return this.clone({ maxLength })
  }

  match(regex) {
    return this.clone({ regex })
  }
}

class FunctionConstraint extends AnyConstraint {
  constructor() {
    super()

    this.type = Function
  }
}

export const any = new AnyConstraint()
export const boolean = new BooleanConstraint()
export const integer = new IntegerConstraint()
export const number = new NumberConstraint()
export const float = new FloatConstraint()
export const string = new StringConstraint()
export const array = new ArrayConstraint()
export const object = new ObjectConstraint()
export const func = new FunctionConstraint()
export function types(...types) {
  const constraint = new AnyConstraint()
  if (types.length === 1) {
    constraint.type = types[0]
  } else if (types.length > 1) {
    constraint.type = types
  }
  return constraint
}
