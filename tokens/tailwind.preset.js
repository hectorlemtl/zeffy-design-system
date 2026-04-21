/**
 * Zeffy Tailwind preset.
 * Consumers: drop this into `tailwind.config.js`:
 *
 *   module.exports = {
 *     presets: [require('./tokens/tailwind.preset')],
 *     content: [...],
 *   };
 *
 * Token values are mirrored from tokens/*.json (DTCG) — source of truth.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT:       '#5555e7',
          primary:       '#5555e7',
          'primary-dark':'#2a2ac4',
          darkest:       '#06006d',
          light:         '#bfbfff',
          '60':          '#8181ff',
          quiet:         '#f3f3ff',
          moderate:      '#e0e0ff',
          midnight:      '#0f0e5b',
          frozen:        '#1b1bb5',
          ink:           '#0a093d',
        },
        accent: {
          green:         '#09cfaf',
          'green-dark':  '#068a75',
          'green-darkest':'#056757',
          'green-light': '#84e7d7',
          yellow:        '#ffe68e',
          'yellow-warm': '#ffbf47',
          orange:        '#ffb424',
          blue:          '#89b8ff',
          'blue-quiet':  '#f8fbfd',
          plum:          '#803773',
        },
        status: {
          success:       '#068a75',
          warning:       '#996b16',
          danger:        '#ed4a55',
          'danger-strong':'#ff3947',
        },
        ink: {
          primary:       '#0f0e5b',
          heading:       '#0a093d',
          secondary:     '#57568c',
          muted:         '#88979c',
          inverted:      '#ffffff',
          'inverted-secondary': '#dddde8',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Arial', 'sans-serif'],
        body:    ['Roboto',  'Arial', 'sans-serif'],
      },
      fontSize: {
        'zeffy-xs':       '0.75rem',
        'zeffy-sm':       '0.8125rem',
        'zeffy-regular':  '0.875rem',
        'zeffy-medium':   '1rem',
        'zeffy-medium-2': '1.125rem',
        'zeffy-lg':       '1.25rem',
        'zeffy-xl':       '1.5rem',
        'zeffy-2xl':      '1.875rem',
        'zeffy-large':    '2rem',
        'zeffy-3xl':      '2.5rem',
        'zeffy-4xl':      '3.375rem',
        'zeffy-5xl':      '3.625rem',
      },
      spacing: {
        'zeffy-tiny':    '0.25rem',
        'zeffy-xxs':     '0.5rem',
        'zeffy-xs':      '0.75rem',
        'zeffy-sm':      '1rem',
        'zeffy-md':      '1.25rem',
        'zeffy-lg':      '1.5rem',
        'zeffy-xl':      '2rem',
        'zeffy-2xl':     '3rem',
        'zeffy-3xl':     '4rem',
        'zeffy-4xl':     '6rem',
        'zeffy-5xl':     '8rem',
      },
      borderRadius: {
        'zeffy-8':  '0.5rem',
        'zeffy-10': '0.625rem',
        'zeffy-12': '0.75rem',
        'zeffy-16': '1rem',
      },
      boxShadow: {
        'zeffy-soft':   '0 2px 8px #10344212',
        'zeffy-raised': '0 8px 24px #10344212',
        'zeffy-glow':   '0 0 0 4px #bfbfff',
      },
      screens: {
        'zeffy-mobile-lg': '480px',
        'zeffy-tablet':    '768px',
        'zeffy-desktop':   '992px',
        'zeffy-desktop-lg':'1280px',
        'zeffy-desktop-xl':'1440px',
      },
      transitionTimingFunction: {
        'zeffy-standard':   'cubic-bezier(0.4, 0, 0.2, 1)',
        'zeffy-emphasize':  'cubic-bezier(0.2, 0, 0, 1)',
        'zeffy-decelerate': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
};
