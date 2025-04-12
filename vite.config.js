import { defineConfig } from 'vite';

export default defineConfig({
  root: 'StopWatch',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html'       // <- this is the fix!
    }
  }
});
