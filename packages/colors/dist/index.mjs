// src/index.ts
import plugin from "tailwindcss/plugin";
var colors = {
  50: "#d8dee3",
  100: "#bec7cf",
  200: "#a5b0bb",
  300: "#8e99a7",
  400: "#788392",
  500: "#646e7e",
  600: "#50596a",
  700: "#3e4656",
  800: "#2e3342",
  900: "#1e222e",
  950: "#10121a"
};
var src_default = plugin(() => {
}, {
  theme: {
    extend: {
      colors: {
        gunmetal: colors
      }
    }
  }
});
export {
  colors,
  src_default as default
};
