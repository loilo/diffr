import {
  decompressFromEncodedURIComponent,
  compressToEncodedURIComponent,
} from 'lz-string'

export function encode(data: any) {
  return compressToEncodedURIComponent(JSON.stringify(data))
}

export function decode(serialized: any) {
  return JSON.parse(decompressFromEncodedURIComponent(serialized))
}
