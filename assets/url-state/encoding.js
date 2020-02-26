// Handle the actual LZ encoding/decoding

import {
  decompressFromEncodedURIComponent,
  compressToEncodedURIComponent
} from 'lz-string'

export function encode(string) {
  return compressToEncodedURIComponent(string)
}

export function decode(string) {
  return decompressFromEncodedURIComponent(string)
}
