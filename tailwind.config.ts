// tailwind.config.ts (새로 만들기)

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // App Router를 사용하므로 이 경로가 가장 중요합니다.
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;