import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"
import {resolve} from 'path';
// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(),vueJsx()],
  build: {
    rollupOptions:
      {
        input: {
          main: resolve(__dirname, "index.html"),
          demo1: resolve(__dirname, "page/demo/demo1/index.html"),
        }
      }
  }
});
