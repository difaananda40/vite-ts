import { defineConfig } from 'vite'

// Uses babel
// import react from '@vitejs/plugin-react'

// Uses React SWC
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
