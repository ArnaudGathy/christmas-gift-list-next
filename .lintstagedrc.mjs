export default {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": ["prettier --write"],
  "src/**/*.{ts,tsx}": ["npm run lint"],
};
