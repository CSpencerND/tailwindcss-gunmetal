"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => colors_default
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
var import_plugin = __toESM(require("tailwindcss/plugin"));
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
var colors_default = (0, import_plugin.default)(
  ({ addBase }) => {
    addBase({
      ":root": {
        "--background": "theme('colors.gunmetal.200')",
        "--foreground": "theme('colors.gunmetal.950')"
      },
      "[data-theme='dark']": {
        "--background": "theme('colors.gunmetal.950')",
        "--foreground": "theme('colors.gunmetal.200')"
      }
    });
  },
  {
    theme: {
      extend: {
        colors: {
          gunmetal: hex,
          background: "var(--background)",
          foreground: "var(--foreground)"
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
