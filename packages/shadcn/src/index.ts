import plugin from "tailwindcss/plugin";
import { colors } from "@tailwindcss-gunmetal/colors";
import { rose } from "tailwindcss/colors";
import { yellow } from "tailwindcss/colors";

export default plugin(
    ({ addBase, theme }) => {
        addBase({
            ":root": {
                "--background": colors[950],
                "--foreground": colors[50],
                "--card": colors[950],
                "--card-foreground": colors[50],
                "--popover": colors[950],
                "--popover-foreground": colors[50],
                "--primary": colors[50],
                "--primary-foreground": colors[900],
                "--secondary": colors[800],
                "--secondary-foreground": colors[50],
                "--muted": colors[800],
                "--muted-foreground": colors[400],
                "--accent": colors[800],
                "--accent-foreground": colors[50],
                "--destructive": rose[900],
                "--destructive-foreground": rose[100],
                "--border": colors[800],
                "--input": colors[800],
                "--ring": colors[300],
            },
            ".dark": {
                "--background": colors[950],
                "--foreground": colors[50],
                "--card": colors[950],
                "--card-foreground": colors[50],
                "--popover": colors[950],
                "--popover-foreground": colors[50],
                "--primary": colors[50],
                "--primary-foreground": colors[900],
                "--secondary": colors[800],
                "--secondary-foreground": colors[50],
                "--muted": colors[800],
                "--muted-foreground": colors[400],
                "--accent": colors[800],
                "--accent-foreground": colors[50],
                "--destructive": rose[900],
                "--destructive-foreground": rose[100],
                "--border": colors[800],
                "--input": colors[800],
                "--ring": colors[300],
            },
        });
    },
    {
        theme: {
            extend: {
                colors: {
                    background: colors[950],
                    foreground: colors[50],

                    card: {
                        DEFAULT: colors[950],
                        foreground: colors[50],
                    },

                    popover: {
                        DEFAULT: colors[950],
                        foreground: colors[50],
                    },

                    primary: {
                        DEFAULT: colors[50],
                        foreground: colors[900],
                    },

                    secondary: {
                        DEFAULT: colors[800],
                        foreground: colors[50],
                    },

                    muted: {
                        DEFAULT: colors[800],
                        foreground: colors[400],
                    },

                    accent: {
                        DEFAULT: colors[800],
                        foreground: colors[50],
                    },

                    destructive: {
                        DEFAULT: rose[900],
                        foreground: rose[100],
                    },

                    warning: {
                        DEFAULT: yellow[900],
                        foreground: yellow[100],
                    },

                    border: colors[800],
                    input: colors[800],
                    ring: colors[300],
                },
            },
        },
    }
);
