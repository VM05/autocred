import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteRadar from 'vite-plugin-radar'


// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [
//     vue(),
//     ViteRadar({
//       enableDev: false,
//       // Google Analytics tag injection
//       analytics: [{
//         id: 'G-W14GHXEK2S',
//       }],
//       pixel: {
//         id: '6b6ae67a-e1b2-4508-9c12-629992ce2545',
//       },
//     })
//   ]
// })

export default defineConfig(({ command, mode }) => {
  if (mode === 'development') {
    return {
      plugins: [
        vue(),
      ]
    }
  } else {
    return {
      plugins: [
        vue(),
        ViteRadar({
          // Google Analytics tag injection
          analytics: [{
            id: 'G-W14GHXEK2S',
            config: {
              cookie_domain: 'auto',
              cookie_expires: 63072000,
              cookie_prefix: 'none',
              cookie_update: true,
              cookie_flags: '',
              send_page_view: true,
              allow_google_signals: true,
              allow_ad_personalization_signals: true,
            },
          }],
          pixel: {
            id: '6b6ae67a-e1b2-4508-9c12-629992ce2545',
          },
          gtm: [
            {
              id: 'GTM-NCBTPD5',
            }
          ],
        })
      ]
    }
  }
})
