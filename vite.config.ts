import { resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  plugins: [
    react(),
    dts({
      root: '.',
      include: ['src/types/**/*.d.ts'],
      outDir: 'dist',
      copyDtsFiles: true,
    }),
    tsConfigPaths(),
    libCss(),
  ],
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'ContributionCalendar',
      formats: ['es', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        assetFileNames: 'styles/[name].[ext]',
      },
    },
    emptyOutDir: true,
  },
})
