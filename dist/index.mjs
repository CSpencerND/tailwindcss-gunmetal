// src/colors.ts
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
var theme = {
  light: {
    background: hex[300],
    foreground: hex[950],
    surface1: {
      DEFAULT: hex[200],
      foreground: hex[800]
    },
    surface2: {
      DEFAULT: hex[100],
      foreground: hex[700]
    },
    surface3: {
      DEFAULT: hex[50],
      foreground: hex[600]
    },
    divider: "rgba(17, 17, 17, 0.14)",
    focus: "#006FEE",
    primary: {
      DEFAULT: "#006FEE",
      foreground: "#e6f1fe"
    },
    secondary: {
      DEFAULT: "#7828c8",
      foreground: "#f2eafa"
    },
    success: {
      DEFAULT: "#17c964",
      foreground: "#e8faf0"
    },
    warning: {
      DEFAULT: "#f5a524",
      foreground: "#fefce8"
    },
    danger: {
      DEFAULT: "#f31260",
      foreground: "#fee7ef"
    }
  },
  dark: {
    background: hex[950],
    foreground: hex[300],
    surface1: {
      DEFAULT: hex[800],
      foreground: hex[200]
    },
    surface2: {
      DEFAULT: hex[700],
      foreground: hex[100]
    },
    surface3: {
      DEFAULT: hex[600],
      foreground: hex[50]
    },
    divider: "rgba(255, 255, 255, 0.14)",
    focus: "#006FEE",
    primary: {
      DEFAULT: "#006FEE",
      foreground: "#e6f1fe"
    },
    secondary: {
      DEFAULT: "#9353d3",
      foreground: "#f2eafa"
    },
    success: {
      DEFAULT: "#17c964",
      foreground: "#e8faf0"
    },
    warning: {
      DEFAULT: "#f5a524",
      foreground: "#fefce8"
    },
    danger: {
      DEFAULT: "#f31260",
      foreground: "#fee7ef"
    }
  }
};
var colors_default = plugin(
  ({ addBase }) => {
    addBase({
      ":root": {
        "--background": rgb[100],
        "--foreground": rgb[950]
      },
      "[data-theme='dark']": {
        "--background": rgb[950],
        "--foreground": rgb[100]
      }
    });
  },
  {
    theme: {
      extend: {
        colors: {
          gunmetal: hex,
          background: "rgb(var(--background))",
          foreground: "rgb(var(--foreground))"
        },
        boxShadow: {
          small: "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3), inset 0 0 0 1px rgb(0 0 0 / 0.14)",
          medium: "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3), inset 0 0 0 1px rgb(0 0 0 / 0.14)",
          large: "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3), inset 0 0 0 1px rgb(0 0 0 / 0.14)",
          dark: "inset 0 0 0 1px rgb(255 255 255 / 0.07)"
        }
      }
    }
  }
);
export {
  colors_default as default
};
