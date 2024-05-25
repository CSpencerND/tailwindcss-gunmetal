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
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_plugin = __toESM(require("tailwindcss/plugin"));
var import_colors = require("@tailwindcss-gunmetal/colors");
var import_colors2 = require("tailwindcss/colors");
var import_colors3 = require("tailwindcss/colors");
var src_default = (0, import_plugin.default)(
  ({ addBase, theme }) => {
    addBase({
      ":root": {
        "--background": theme("gunmetal.950"),
        "--foreground": theme("gunmetal.50"),
        "--card": theme("gunmetal.950"),
        "--card-foreground": theme("gunmetal.50"),
        "--popover": theme("gunmetal.950"),
        "--popover-foreground": theme("gunmetal.50"),
        "--primary": theme("gunmetal.50"),
        "--primary-foreground": theme("gunmetal.900"),
        "--secondary": theme("gunmetal.800"),
        "--secondary-foreground": theme("gunmetal.50"),
        "--muted": theme("gunmetal.800"),
        "--muted-foreground": theme("gunmetal.400"),
        "--accent": theme("gunmetal.800"),
        "--accent-foreground": theme("gunmetal.50"),
        "--destructive": theme("rose.900"),
        "--destructive-foreground": theme("rose.100"),
        "--border": theme("gunmetal.800"),
        "--input": theme("gunmetal.800"),
        "--ring": theme("gunmetal.300")
      },
      ".dark": {
        "--background": theme("gunmetal.950"),
        "--foreground": theme("gunmetal.50"),
        "--card": theme("gunmetal.950"),
        "--card-foreground": theme("gunmetal.50"),
        "--popover": theme("gunmetal.950"),
        "--popover-foreground": theme("gunmetal.50"),
        "--primary": theme("gunmetal.50"),
        "--primary-foreground": theme("gunmetal.900"),
        "--secondary": theme("gunmetal.800"),
        "--secondary-foreground": theme("gunmetal.50"),
        "--muted": theme("gunmetal.800"),
        "--muted-foreground": theme("gunmetal.400"),
        "--accent": theme("gunmetal.800"),
        "--accent-foreground": theme("gunmetal.50"),
        "--destructive": theme("rose.900"),
        "--destructive-foreground": theme("rose.100"),
        "--border": theme("gunmetal.800"),
        "--input": theme("gunmetal.800"),
        "--ring": theme("gunmetal.300")
      }
    });
  },
  {
    theme: {
      extend: {
        colors: {
          background: import_colors.colors[950],
          foreground: import_colors.colors[50],
          card: {
            DEFAULT: import_colors.colors[950],
            foreground: import_colors.colors[50]
          },
          popover: {
            DEFAULT: import_colors.colors[950],
            foreground: import_colors.colors[50]
          },
          primary: {
            DEFAULT: import_colors.colors[50],
            foreground: import_colors.colors[900]
          },
          secondary: {
            DEFAULT: import_colors.colors[800],
            foreground: import_colors.colors[50]
          },
          muted: {
            DEFAULT: import_colors.colors[800],
            foreground: import_colors.colors[400]
          },
          accent: {
            DEFAULT: import_colors.colors[800],
            foreground: import_colors.colors[50]
          },
          destructive: {
            DEFAULT: import_colors2.rose[900],
            foreground: import_colors2.rose[100]
          },
          warning: {
            DEFAULT: import_colors3.yellow[900],
            foreground: import_colors3.yellow[100]
          },
          border: import_colors.colors[800],
          input: import_colors.colors[800],
          ring: import_colors.colors[300]
        }
      }
    }
  }
);
