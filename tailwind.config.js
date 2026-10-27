const v = (n) => `rgb(var(--${n}) / <alpha-value>)`
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { bg: v('bg'), panel: v('panel'), ink: v('ink'), mute: v('mute'), line: v('line'), accent: v('accent'), warm: v('warm') },
      fontFamily: { display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'], sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
