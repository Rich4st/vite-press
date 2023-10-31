import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    liveReload(__dirname + '/**/*.php')
  ],
  root: '',
  base: process.env.NODE_ENV === 'development'
    ? '/'
    : '/dist/',

  build: {
    outDir: resolve(__dirname, './dist'),
    emptyOutDir: true,
    manifest: true,
    target: 'es2018',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './vite.entry.js'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      },
    },
    minify: true,
    write: true
  },

})
