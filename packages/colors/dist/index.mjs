// src/index.ts
import plugin from "tailwindcss/plugin";
var hex = {
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
var rgb = {
  50: "216 222 227",
  100: "190 199 207",
  200: "165 176 187",
  300: "142 153 167",
  400: "120 131 146",
  500: "100 110 126",
  600: "80 89 106",
  700: "62 70 86",
  800: "46 51 66",
  900: "30 34 46",
  950: "16 18 25"
};
var src_default = plugin(() => {
}, {
  theme: {
    extend: {
      colors: {
        gunmetal: hex
      }
    }
  }
});
export {
  src_default as default,
  hex,
  rgb
};
