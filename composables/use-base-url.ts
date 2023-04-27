export function useBaseUrl() {
  let config = useRuntimeConfig()
  let baseUrl = config.public.baseURL ?? '/'
  if (!baseUrl.endsWith('/')) {
    baseUrl += '/'
  }
  return baseUrl
}

export function useAbsoluteUrl(file: string) {
  return useBaseUrl() + file.replace(/^\/*/, '')
}
