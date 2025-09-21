export const useEncodingWorkerStore = defineStore('encoding-worker', () => {
  let worker = new Worker(
    new URL('../util/encoding-worker/encoding-worker', import.meta.url),
    {
      type: 'module',
    },
  )

  return { get: () => worker }
})
