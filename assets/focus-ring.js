// Add a [data-focus] attribute to an element that was (likely) focused via keyboard

const queue = []

/**
 * Enqueue a callback that will be run in a future call stack
 * Enqueued actions are guaranteed to be executed in order
 *
 * @param {'start'|'end'} location Where to insert the action
 * @param {() => void)}   action   The callback to enqueue
 */
function enqueue(location, action) {
  if (location === 'start') {
    queue.unshift(action)
  } else {
    queue.push(action)
  }

  if (queue.length === 1) {
    setTimeout(() => {
      while (queue.length > 0) {
        queue.shift()()
      }
    }, 0)
  }
}

let hadRecentPointerInteraction = false

/**
 * Register hint for pointer usage
 */
function pointerHintHandler() {
  hadRecentPointerInteraction = true

  enqueue('end', () => {
    hadRecentPointerInteraction = false
  })
}

function focusHandler(event) {
  const target = event.currentTarget

  // We defer evaluation of interaction slightly because the "click" event
  // dispatched through a label element fires slightly after the "focus" event.
  enqueue('start', () => {
    if (!hadRecentPointerInteraction) {
      target.dataset.focus = ''
    }
  })
}

function blurHandler(event) {
  delete event.currentTarget.dataset.focus
}

export default {
  bind(el) {
    // Mousedown as regular interaction before focus
    el.addEventListener('mousedown', pointerHintHandler)

    // Click for interaction with labels
    el.addEventListener('click', pointerHintHandler)

    el.addEventListener('focus', focusHandler)
    el.addEventListener('blur', blurHandler)
  },
  unbind(el) {
    el.removeEventListener('mousedown', pointerHintHandler)
    el.removeEventListener('click', pointerHintHandler)
    el.removeEventListener('focus', focusHandler)
    el.removeEventListener('blur', blurHandler)
  }
}
