import { defineConfig } from "tsup";

export default defineConfig([
    {
        entry: ["./src/index.ts"],
        outDir: "dist",
        target: "esnext",
        clean: true,
        dts: true,
        format: ["esm", "cjs"],
        external: ["tailwindcss"],
    },
]);
