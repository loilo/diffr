export const useEncodingWorkerStore = defineStore('encoding-worker', () => {
  let worker = new Worker(
    new URL('../utils/encoding-worker/encoding-worker', import.meta.url),
    {
      type: 'module',
    },
  )

  return { get: () => worker }
})
