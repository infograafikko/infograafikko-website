import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import ViteFonts from 'vite-plugin-fonts';
import mdPlugin from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    solidPlugin(),
    mdPlugin({mode: 'html'}),
    ViteFonts({
      google: {
        families: [
        {
          name: 'Roboto',
          styles: 'wght@300'
        },
        {
          name: 'Palanquin',
          styles: 'wght@600;700'
        }
      ]
      },
    })
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    outDir: 'dist'
  },
});
