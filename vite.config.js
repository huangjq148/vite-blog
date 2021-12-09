import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import { md } from './plugins/md';

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [md(), react()],
  base: "./",
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: pathResolve("node_modules") + "/",
      },
      {
        // /@/xxxx  =>  src/xxx
        find: /@\//,
        replacement: pathResolve("src") + "/",
      },
    ],
  },
})
