import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  define: {
    FILE_UPLOAD_URL: JSON.stringify('https://joey-file-upload.s3.ap-southeast-2.amazonaws.com/imsg_backup'),
    AUTH0_DOMAIN: JSON.stringify('auth.joey.dablr.io'),
    AUTH0_CLIENT_ID: JSON.stringify('5My14JuP5LK4RvXm4zCO0IuARSibulMu'),
  },
}));
