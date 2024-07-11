import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
console.log ("filename", __filename)

const __dirname = path.dirname(__filename);
console.log ("Dirname", __dirname)
// https://vitejs.dev/config/
export default defineConfig({
    root: path.resolve(__dirname, './src'),
    server: {
    port: 3001,
    hot: true
  },
});


