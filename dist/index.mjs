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
          background: "rgb(var(--background))",
          foreground: "rgb(var(--foreground))",
          card: {
            DEFAULT: "rgb(var(--card))",
            foreground: "rgb(var(--card-foreground))"
          },
          popover: {
            DEFAULT: "rgb(var(--popover))",
            foreground: "rgb(var(--popover-foreground))"
          },
          primary: {
            DEFAULT: "rgb(var(--primary))",
            foreground: "rgb(var(--primary-foreground))"
          },
          secondary: {
            DEFAULT: "rgb(var(--secondary))",
            foreground: "rgb(var(--secondary-foreground))"
          },
          muted: {
            DEFAULT: "rgb(var(--muted))",
            foreground: "rgb(var(--muted-foreground))"
          },
          accent: {
            DEFAULT: "rgb(var(--accent))",
            foreground: "rgb(var(--accent-foreground))"
          },
          destructive: {
            DEFAULT: rose[900],
            foreground: rose[100]
          },
          warning: {
            DEFAULT: yellow[900],
            foreground: yellow[100]
          },
          border: "rgb(var(--border))",
          input: "rgb(var(--input))",
          ring: "rgb(var(--ring))"
        }
      }
    }
  }
);
export {
  colors_default as gunmetalColors,
  shadcn_default as gunmetalShadcn
};
