// Handle LZ encoding/decoding from/to the URL hash in a worker

/* eslint-disable-next-line import/no-webpack-loader-syntax */
import Worker from 'workerize-loader!./encoding'

const lz = Worker()

export async function read() {
  const hash = document.location.hash.slice(1)
  if (!hash) {
    return null
  }

  try {
    return JSON.parse(await lz.decode(hash))
  } catch (_) {
    return {}
  }
}

export async function write(jsonString) {
  const hash = await lz.encode(jsonString)

  if (
    typeof URL === 'function' &&
    typeof history === 'object' &&
    typeof history.replaceState === 'function'
  ) {
    const url = new URL(location)
    url.hash = hash
    history.replaceState(null, null, url.href)
  } else {
    location.hash = hash
  }
}
