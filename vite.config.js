import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import { resolve } from "path";

// Helper to copy directory recursively
function copyDir(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }
  const entries = readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = resolve(src, entry.name);
    const destPath = resolve(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig({
  root: "portfolio",
  plugins: [
    react(),
    {
      name: "copy-static-folders",
      closeBundle() {
        const distDir = resolve(__dirname, "dist");
        const srcDir = resolve(__dirname, "portfolio");

        // Copy static folders to dist
        const staticFolders = ["assets", "data", "css"];
        for (const folder of staticFolders) {
          const srcPath = resolve(srcDir, folder);
          const destPath = resolve(distDir, folder);
          if (existsSync(srcPath)) {
            copyDir(srcPath, destPath);
            console.log(`  ✓ Copied ${folder}/`);
          }
        }

        console.log("\n📦 Build complete! All static files copied to dist/");
      },
    },
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "portfolio/index.html"),
      },
      output: {
        entryFileNames: "assets/react-components-[hash].js",
        chunkFileNames: "assets/react-[name]-[hash].js",
      },
    },
  },
});