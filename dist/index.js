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
  gunmetalColors: () => colors_default,
  gunmetalHex: () => hex,
  gunmetalRgb: () => rgb,
  gunmetalShadcn: () => shadcn_default
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
var colors_default = (0, import_plugin.default)(() => {
}, {
  theme: {
    extend: {
      colors: {
        gunmetal: hex
      },
      boxShadow: {
        small: "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3), inset 0 0 0 1px rgb(0 0 0 / 0.14)",
        medium: "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3), inset 0 0 0 1px rgb(0 0 0 / 0.14)",
        large: "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3), inset 0 0 0 1px rgb(0 0 0 / 0.14)",
        dark: "inset 0 0 0 1px rgb(255 255 255 / 0.07)"
      }
    }
  }
});

// src/shadcn.ts
var import_plugin2 = __toESM(require("tailwindcss/plugin"));
var import_colors = require("tailwindcss/colors");
var shadcn_default = (0, import_plugin2.default)(
  ({ addBase }) => {
    addBase({
      ":root": {
        "--background": rgb[950],
        "--foreground": rgb[50],
        "--card": rgb[950],
        "--card-foreground": rgb[50],
        "--popover": rgb[950],
        "--popover-foreground": rgb[50],
        "--primary": rgb[50],
        "--primary-foreground": rgb[900],
        "--secondary": rgb[800],
        "--secondary-foreground": rgb[50],
        "--muted": rgb[800],
        "--muted-foreground": rgb[400],
        "--accent": rgb[800],
        "--accent-foreground": rgb[50],
        "--destructive": import_colors.rose[900],
        "--destructive-foreground": import_colors.rose[100],
        "--border": rgb[800],
        "--input": rgb[800],
        "--ring": rgb[300]
      },
      ".dark": {
        "--background": rgb[950],
        "--foreground": rgb[50],
        "--card": rgb[950],
        "--card-foreground": rgb[50],
        "--popover": rgb[950],
        "--popover-foreground": rgb[50],
        "--primary": rgb[50],
        "--primary-foreground": rgb[900],
        "--secondary": rgb[800],
        "--secondary-foreground": rgb[50],
        "--muted": rgb[800],
        "--muted-foreground": rgb[400],
        "--accent": rgb[800],
        "--accent-foreground": rgb[50],
        "--destructive": import_colors.rose[900],
        "--destructive-foreground": import_colors.rose[100],
        "--border": rgb[800],
        "--input": rgb[800],
        "--ring": rgb[300]
      }
    });
  },
  {
    theme: {
      extend: {
        colors: {
          background: "rgb(var(--background) / <alpha-value>))",
          foreground: "rgb(var(--foreground) / <alpha-value>))",
          card: {
            DEFAULT: "rgb(var(--card) / <alpha-value>))",
            foreground: "rgb(var(--card-foreground) / <alpha-value>))"
          },
          popover: {
            DEFAULT: "rgb(var(--popover) / <alpha-value>))",
            foreground: "rgb(var(--popover-foreground) / <alpha-value>))"
          },
          primary: {
            DEFAULT: "rgb(var(--primary) / <alpha-value>))",
            foreground: "rgb(var(--primary-foreground) / <alpha-value>))"
          },
          secondary: {
            DEFAULT: "rgb(var(--secondary) / <alpha-value>))",
            foreground: "rgb(var(--secondary-foreground) / <alpha-value>))"
          },
          muted: {
            DEFAULT: "rgb(var(--muted) / <alpha-value>))",
            foreground: "rgb(var(--muted-foreground) / <alpha-value>))"
          },
          accent: {
            DEFAULT: "rgb(var(--accent) / <alpha-value>))",
            foreground: "rgb(var(--accent-foreground) / <alpha-value>))"
          },
          destructive: {
            DEFAULT: import_colors.rose[900],
            foreground: import_colors.rose[100]
          },
          warning: {
            DEFAULT: import_colors.yellow[900],
            foreground: import_colors.yellow[100]
          },
          border: "rgb(var(--border) / <alpha-value>))",
          input: "rgb(var(--input) / <alpha-value>))",
          ring: "rgb(var(--ring) / <alpha-value>))"
        }
      }
    }
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  gunmetalColors,
  gunmetalHex,
  gunmetalRgb,
  gunmetalShadcn
});
