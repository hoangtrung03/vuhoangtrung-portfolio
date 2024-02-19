import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        36: '36px',
        38: '38px',
        40: '40px',
        44: '44px',
        48: '48px',
        64: '64px'
      },
      boxShadow: {
        1: '0px 4px 10px rgba(0,0,0,0.15)',
        2: '0px 1px 3px 0px rgba(0, 0, 0, 0.20);',
        3: '0px 2px 0px 0px rgba(0, 0, 0, 0.25)',
        4: '2px 2px 8px 0px rgba(14, 52, 148, 0.20);',
        5: '0px 4px 10px 0px rgba(0, 0, 0, 0.15);',
        6: '0px 4px 28px 0px rgba(0, 0, 0, 0.10);',
        7: '0px 3px 10px 0px rgba(0, 0, 0, 0.20);',
        8: '0px 3px 10px 0px rgba(0, 0, 0, 0.05), 0px 10px 50px 0px rgba(0, 0, 0, 0.06);'
      },
      dropShadow: {
        1: '0px 4px 4px rgba(0, 0, 0, 0.10)'
      },
      colors: {
        primary: '#0E3494',
        secondary: '#FF3860',
        third: '#171717',
        'secondary-active': '#730001',
        'secondary-hover': '#b82b32',
        gray: {
          1: '#2e2e2e'
        }
      },
      lineHeight: {
        1: '1',
        '1-1': '1.1',
        '1-2': '1.2',
        '1-4': '1.4',
        '1-5': '1.5',
        2: '2'
      },
      padding: {
        60: '60px'
      }
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1472px'
      },
      padding: {
        DEFAULT: '16px'
      }
    }
  },
  plugins: []
}
export default config
