// Handle LZ encoding/decoding from/to the URL hash in a worker

import type {
  WorkerMessage,
  EncodingWorkerResponse,
  DecodingWorkerResponse,
} from '~/util/encoding-worker/encoding-utils'

export function useUrlState<T = any>() {
  if (import.meta.env.SSR)
    return {
      async read() {
        return null
      },
      async write() {},
      async encode(data: T) {},
      async decode(serialized: string) {},
    }

  let worker = useEncodingWorkerStore().get()

  function decode(serialized: string) {
    return new Promise<T>(resolve => {
      let id = crypto.randomUUID()

      let stop = useEventListener(
        worker,
        'message',
        (event: MessageEvent<DecodingWorkerResponse>) => {
          if (event.data?.id !== id) return

          stop()
          resolve(event.data.payload)
        },
      )

      worker.postMessage({
        type: 'decode',
        id,
        payload: serialized,
      } satisfies WorkerMessage)
    })
  }

  async function read() {
    const hash = document.location.hash.slice(1)
    if (!hash) {
      return null
    }

    return decode(hash)
  }

  function encode(data: T) {
    return new Promise<string>(resolve => {
      let id = crypto.randomUUID()

      let stop = useEventListener(
        worker,
        'message',
        (event: MessageEvent<EncodingWorkerResponse>) => {
          if (event.data?.id !== id) return

          stop()
          resolve(event.data.payload)
        },
      )

      worker.postMessage({
        type: 'encode',
        id,
        payload: data,
      } satisfies WorkerMessage)
    })
  }

  async function write(data: T) {
    let hash = await encode(data)

    const url = new URL(window.location.href)
    url.hash = hash
    history.replaceState(history.state, '', url.href)
  }

  return { read, write, encode, decode }
}
