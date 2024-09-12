import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Include React plugin
import fs from 'fs';

export default defineConfig({
  plugins: [react()], // Keep React plugin
  server: {
    https: {
      key: fs.readFileSync('G:/JavaScript/P1/SpringBack/p1/privatekey.pem'),
      cert: fs.readFileSync('G:/JavaScript/P1/SpringBack/p1/certificate.pem'),
    },
  },
});
