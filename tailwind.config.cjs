/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                '18': '4.5rem',
            },
            colors: {
                /*
                  --background-primary: hsl(220,calc(var(--saturation-factor, 1)*7.7%),22.9%);
                  --background-secondary: hsl(223,calc(var(--saturation-factor, 1)*6.9%),19.8%);
                  --background-secondary-alt: hsl(220,calc(var(--saturation-factor, 1)*6.8%),17.3%);
                  --background-tertiary: hsl(216,calc(var(--saturation-factor, 1)*7.2%),13.5%);
                  --background-accent: hsl(217,calc(var(--saturation-factor, 1)*7.6%),33.5%);
                  --background-floating: hsl(225,calc(var(--saturation-factor, 1)*7.7%),10.2%);
                  --background-nested-floating: hsl(223,calc(var(--saturation-factor, 1)*6.9%),19.8%);
                  --background-mobile-primary: hsl(220,calc(var(--saturation-factor, 1)*7.7%),22.9%);
                  --background-mobile-secondary: hsl(223,calc(var(--saturation-factor, 1)*6.9%),19.8%);
                  --chat-background: hsl(220,calc(var(--saturation-factor, 1)*7.7%),22.9%);
                  --chat-border: hsl(216,calc(var(--saturation-factor, 1)*7.2%),13.5%);
                  --chat-input-container-background: hsl(220,calc(var(--saturation-factor, 1)*7.7%),22.9%);
                  --background-modifier-hover: hsla(217,calc(var(--saturation-factor, 1)*7.6%),33.5%,0.4);
                  --background-modifier-active: hsla(217,calc(var(--saturation-factor, 1)*7.6%),33.5%,0.48);
                  --background-modifier-selected: hsla(217,calc(var(--saturation-factor, 1)*7.6%),33.5%,0.6);
                  --background-modifier-accent: hsla(217,calc(var(--saturation-factor, 1)*7.6%),33.5%,0.48);
                  --brand-experiment: hsl(235,calc(var(--saturation-factor, 1)*85.6%),64.7%);
                  --text-normal: hsl(210,calc(var(--saturation-factor, 1)*2.9%),86.7%);
                 */
                'background-primary': 'hsl(220,calc(var(--saturation-factor, 1)*7.7%),22.9%)',
                'background-secondary': 'hsl(223,calc(var(--saturation-factor, 1)*6.9%),19.8%)',
                'background-secondary-alt': 'hsl(220,calc(var(--saturation-factor, 1)*6.8%),17.3%)',
                'background-tertiary': 'hsl(216,calc(var(--saturation-factor, 1)*7.2%),13.5%)',
                'background-floating': 'hsl(225,calc(var(--saturation-factor, 1)*7.7%),10.2%)',
                'brand-experiment': 'hsl(235,calc(var(--saturation-factor, 1)*85.6%),64.7%)',
                'text-normal': 'hsl(210,calc(var(--saturation-factor, 1)*2.9%),86.7%)',
                'background-modifier-accent': 'hsla(217,calc(var(--saturation-factor, 1)*7.6%),33.5%,0.48)',
            }
        },
    },
    plugins: [],
}
