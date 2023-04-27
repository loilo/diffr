// The manifest.webmanifest file is placed in the wrong folder by VitePWA,
// so we need to fix this after building.

import { defineNuxtModule } from '@nuxt/kit'

import fs from 'node:fs'
import * as path from 'node:path'

import consola from 'consola'

export default defineNuxtModule({
  async setup(_options, nuxt) {
    if ((nuxt.options.app.baseURL ?? '/') === '/') return

    nuxt.hook('close', async () => {
      let outDir = path.join(nuxt.options.rootDir, '.output', 'public')

      let wrongManifestPath = path.join(
        outDir,
        nuxt.options.app.baseURL,
        'manifest.webmanifest',
      )
      let correctManifestPath = path.join(outDir, 'manifest.webmanifest')

      if (fs.existsSync(wrongManifestPath)) {
        consola.info('Moving manifest.webmanifest')
        fs.renameSync(wrongManifestPath, correctManifestPath)
      } else {
        consola.success('No inappropiate manifest.webmanifest found')
      }
    })
  },
})
