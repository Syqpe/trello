import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@components": `${path.resolve(__dirname, "./src/shared/components/index.tsx")}`,
            "@API": `${path.resolve(__dirname, "./src/app/api/index.ts")}`,
            "@pages": `${path.resolve(__dirname, "./src/pages/index.tsx")}`,
            "@utils": `${path.resolve(__dirname, "./src/shared/utils/index.ts")}`,
            "@types": `${path.resolve(__dirname, "./src/shared/types/index.ts")}`,
            "@localtypes": `${path.resolve(__dirname, "./src/shared/types/index.tsx")}`,
            "@hooks": `${path.resolve(__dirname, "./src/shared/hooks/index.tsx")}`,
        },
    },
});
