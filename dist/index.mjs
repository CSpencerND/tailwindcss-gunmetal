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
var colors_default = plugin(() => {
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
import plugin2 from "tailwindcss/plugin";
import { rose, yellow } from "tailwindcss/colors";
var shadcn_default = plugin2(
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
        "--destructive": rose[900],
        "--destructive-foreground": rose[100],
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
        "--destructive": rose[900],
        "--destructive-foreground": rose[100],
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
            DEFAULT: rose[900],
            foreground: rose[100]
          },
          warning: {
            DEFAULT: yellow[900],
            foreground: yellow[100]
          },
          border: "rgb(var(--border) / <alpha-value>))",
          input: "rgb(var(--input) / <alpha-value>))",
          ring: "rgb(var(--ring) / <alpha-value>))"
        }
      }
    }
  }
);
export {
  colors_default as gunmetalColors,
  hex as gunmetalHex,
  rgb as gunmetalRgb,
  shadcn_default as gunmetalShadcn
};
