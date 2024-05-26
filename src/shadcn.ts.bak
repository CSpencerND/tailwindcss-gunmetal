import plugin from "tailwindcss/plugin";

import { rose, yellow } from "tailwindcss/colors";
import { rgb } from "./colors";

export default plugin(
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
                "--ring": rgb[300],
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
                "--ring": rgb[300],
            },
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
                        foreground: "rgb(var(--card-foreground))",
                    },

                    popover: {
                        DEFAULT: "rgb(var(--popover))",
                        foreground: "rgb(var(--popover-foreground))",
                    },

                    primary: {
                        DEFAULT: "rgb(var(--primary))",
                        foreground: "rgb(var(--primary-foreground))",
                    },

                    secondary: {
                        DEFAULT: "rgb(var(--secondary))",
                        foreground: "rgb(var(--secondary-foreground))",
                    },

                    muted: {
                        DEFAULT: "rgb(var(--muted))",
                        foreground: "rgb(var(--muted-foreground))",
                    },

                    accent: {
                        DEFAULT: "rgb(var(--accent))",
                        foreground: "rgb(var(--accent-foreground))",
                    },

                    destructive: {
                        DEFAULT: rose[900],
                        foreground: rose[100],
                    },

                    warning: {
                        DEFAULT: yellow[900],
                        foreground: yellow[100],
                    },

                    border: "rgb(var(--border))",
                    input: "rgb(var(--input))",
                    ring: "rgb(var(--ring))",
                },
            },
        },
    }
);
