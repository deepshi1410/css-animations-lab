/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 1s infinite',
        'hover-border': 'hoverBorder 1s infinite',
        'hover-float': 'hoverFloat 1s infinite',
        'hover-shadow-grow': 'hoverShadowGrow 1s infinite',
        'hover-border': 'hoverBorder 1s infinite',
        'pulse': 'pulse 2s infinite',
        'shake': 'shake 0.5s infinite',
        'spin': 'spin 1s infinite linear',
        'fade': 'fade 2s infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'pop-up': 'popUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'shimmer': 'shimmer 2s infinite',
        'notification': 'notification 2s ease infinite',
        'loading-dots': 'loadingDots 1.4s infinite ease-in-out both',
        'skeleton': 'skeleton 1.5s infinite',
        'heartbeat': 'heartbeat 1.5s ease infinite',
        'spinner': 'spinner 1.5s infinite',
        'zoom-in': 'zoomIn 0.5s ease-out',
        'zoom-out': 'zoomOut 0.5s ease-out',
        'flicker': 'flicker 1s infinite',
        'ripple': 'ripple 1.5s infinite',
        'bounce-in': 'bounceIn 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'jelly': 'jelly 1s ease-in-out infinite',
        'glow': 'glow 1.5s ease-in-out infinite',
        'blink': 'blink 1s infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
        'rainfall': 'rainfall 2s ease-out infinite',
        'tilt': 'tilt 1s ease-in-out infinite',
        'swing': 'swing 2s ease-in-out infinite',
        'twitch': 'twitch 0.5s ease-in-out infinite',
        'heart-pulse': 'heartPulse 1.5s ease-in-out infinite',
        'neon-text': 'neon 1.5s infinite alternate',
        'text-glow': 'textGlow 2s infinite',
        'text-slide': 'textSlide 1s ease-out',
        'neon-border': 'neonBorder 1.5s ease-out infinite',
        'flip-in': 'flipIn 1s ease-out',
        'wiggle': 'wiggle 1s ease infinite',
        'bounce-horizontal': 'bounceHorizontal 1s infinite',
        'zoom-in-fast': 'zoomInFast 0.3s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'slide-down': 'slideDown 1s ease-out',
        'pulse-circle': 'pulseCircle 2s infinite',
        'pulse-border': 'pulseBorder 1s infinite',
        'flip-horizontal': 'flipHorizontal 1s ease-in-out',
        'shake-horizontal': 'shakeHorizontal 0.5s infinite',
        'zoom-slide': 'zoomSlide 1s ease-in-out',
        'bounce-fade': 'bounceFade 2s infinite',
        'heart-beat': 'heartBeat 1s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' }
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        fade: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        popUp: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '80%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        notification: {
          '0%': { transform: 'rotate(0)' },
          '10%, 30%': { transform: 'rotate(15deg)' },
          '20%, 40%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(0)' }
        },
        loadingDots: {
          '0%, 80%, 100%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1)' }
        },
        skeleton: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' }
        },
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        zoomOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' }
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(3)', opacity: '0' }
        },
        bounceIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '60%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' }
        },
        jelly: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1) rotate(15deg)' },
          '50%': { transform: 'scale(0.9) rotate(-15deg)' },
          '75%': { transform: 'scale(1.1) rotate(5deg)' },
          '100%': { transform: 'scale(1) rotate(0)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 255, 255, 1)' },
          '100%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)' }
        },
        blink: {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' }
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 5px rgba(0, 255, 255, 1)' },
          '50%': { transform: 'scale(1.2)', boxShadow: '0 0 10px rgba(0, 255, 255, 1)' }
        },
        rainfall: {
          '0%': { transform: 'translateY(-200px)', opacity: '0' },
          '100%': { transform: 'translateY(200px)', opacity: '1' }
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' }
        },
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(-15deg)' }
        },
        twitch: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' }
        },
        heartPulse: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' }
        },
      },
    },
  },
  plugins: [],
};
