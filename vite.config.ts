import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@components": `${path.resolve(__dirname, "./src/shared/components/index.tsx")}`,
            "@hooks": `${path.resolve(__dirname, "./src/shared/hooks/index.ts")}`,
            "@utils": `${path.resolve(__dirname, "./src/shared/utils/index.ts")}`,
            "@localtypes": `${path.resolve(__dirname, "./src/shared/types/index.tsx")}`,
            "@constants": `${path.resolve(__dirname, "./src/shared/constants/index.ts")}`,

            "@API": `${path.resolve(__dirname, "./src/app/api/index.ts")}`,

            "@widgets": `${path.resolve(__dirname, "./src/widgets/")}`,
            "@reducers": `${path.resolve(__dirname, "./src/app/store/reducers/")}`,
            "@app": `${path.resolve(__dirname, "./src/app/")}`,
        },
    },
});
