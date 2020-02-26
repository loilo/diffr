/**
 * Generate a mixin for listening to events outside a component's subtree
 *
 * @param {EventTarget|() => EventTarget} target   The target to attach an event listener to
 * @param {string}                        event    The event to listen to
 * @param {(event: Event) => void}        listener The listener callback to execute
 */
export default function listenOutside(target, event, listener) {
  let targetObject, targetListener

  return {
    mounted() {
      // Allow functions for client-only targets
      targetObject = typeof target === 'function' ? target() : target
      targetListener = listener.bind(this)

      targetObject.addEventListener(event, targetListener)
    },
    destroyed() {
      targetObject.removeEventListener(event, targetListener)
    }
  }
}
