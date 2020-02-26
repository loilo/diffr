/**
 * Read a blob or file and convert it to another data type
 *
 * @param {Blob}  blob    The blob or file to read
 * @param {string} target The format to target
 *                        Defaults to "text", might be one of
 *                        "text", "dataURL" or "ArrayBuffer"
 * @return {Promise}
 */
export function readBlob(blob, target = 'text') {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = reject
    reader[`readAs${target.slice(0, 1).toUpperCase()}${target.slice(1)}`](blob)
  })
}

/**
 * Create a Promise that resolves when a certain event is triggerd on a DOM element
 *
 * @param {Element} element   The DOM element to listen for events
 * @param {string}  eventName The event name to listen for
 * @param {number}  timeout   A timeout in milliseconds after which to stop
 *                            listening and reject the promise (0 for no timeout)
 * @return {Promise<void>}
 */
export function whenEventDispatches(element, eventName, timeout = 0) {
  return new Promise((resolve, reject) => {
    let timeoutId

    // Event handler which resolves the returned promise
    const handler = () => {
      element.removeEventListener(eventName, handler)
      clearTimeout(timeoutId)
      resolve()
    }

    element.addEventListener(eventName, handler)

    // Handle timeout
    if (timeout) {
      timeoutId = setTimeout(() => {
        element.removeEventListener(eventName, handler)

        reject(
          new Error(
            `Waiting for event "${eventName}" timed out after ${timeout} milliseconds`
          )
        )
      }, timeout)
    }
  })
}

/**
 * Get a Promise that resolves after the given number of milliseconds
 *
 * @param {number} ms Number of milliseconds to wait
 * @return {Promise<void>}
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
