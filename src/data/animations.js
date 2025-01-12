export const animations = {
  hover: [
        {
          title: 'Hover Glow',
          cssClass: 'hover-glow',
          cssCode: `<!-- HTML -->
    <div class="hover-glow">
      <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
    </div>
    
    <!-- CSS -->
    @keyframes glow {
      0% {
        box-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
      }
      50% {
        box-shadow: 0 0 20px rgba(0, 255, 255, 1);
      }
      100% {
        box-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
      }
    }
    .hover-glow {
      transition: box-shadow 0.3s ease;
    }
    .hover-glow:hover {
      animation: glow 1s infinite alternate;
    }`
        },
        {
          title: 'Hover Scale',
          cssClass: 'hover-scale',
          cssCode: `<!-- HTML -->
    <div class="hover-scale">
      <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
    </div>
    
    <!-- CSS -->
    @keyframes scale {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.3);
      }
      100% {
        transform: scale(1);
      }
    }
    .hover-scale {
      transition: transform 0.3s ease;
    }
    .hover-scale:hover {
      animation: scale 0.5s infinite alternate;
    }`
        },
        {
          title: 'Hover Shadow',
          cssClass: 'hover-shadow',
          cssCode: `<!-- HTML -->
    <div class="hover-shadow">
      <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
    </div>
    
    <!-- CSS -->
    @keyframes shadow {
      0% {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }
      50% {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
      }
      100% {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }
    }
    .hover-shadow {
      transition: box-shadow 0.3s ease;
    }
    .hover-shadow:hover {
      animation: shadow 0.5s infinite alternate;
    }`
        },
    
    {
      title: 'Hover Float',
      cssClass: 'hover-float',
      cssCode: `<!-- HTML -->
<div class="hover-float">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
.hover-float {
  transition: transform 0.3s ease;
}
.hover-float:hover {
  transform: translateY(-8px);
}`
    },
    {
      title: 'Hover Pulse',
      cssClass: 'hover-pulse',
      cssCode: `<!-- HTML -->
<div class="hover-pulse">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
.hover-pulse {
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}
.hover-pulse:hover {
  transform: scale(1.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}`
    },
    {
      title: 'Hover Shadow Grow',
      cssClass: 'hover-shadow-grow',
      cssCode: `<!-- HTML -->
<div class="hover-shadow-grow">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
.hover-shadow-grow {
  transition: box-shadow 0.3s ease;
}
.hover-shadow-grow:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}`
    },
    {
      title: 'Hover Border',
      cssClass: 'hover-border',
      cssCode: `<!-- HTML -->
<div class="hover-border">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
.hover-border {
  transition: border 0.3s ease;
}
.hover-border:hover {
  border: 3px solid rgba(0, 0, 0, 0.3);
}`
    }
  ],
  
  loaders: [
        {
          title: 'Circle Bounce',
          cssClass: 'circle-bounce',
          cssCode: `<!-- HTML -->
    <div class="circle-bounce">
      <div class="w-16 h-16 bg-blue-500 rounded-full"></div>
    </div>
    
    <!-- CSS -->
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }
    .circle-bounce {
      display: flex;
      justify-content: center;
      align-items: center;
      animation: bounce 1s ease-in-out infinite;
    }`
        },
        {
          title: 'Pulsing Circle',
          cssClass: 'pulse-circle',
          cssCode: `<!-- HTML -->
    <div class="pulse-circle">
      <div class="w-16 h-16 bg-blue-500 rounded-full"></div>
    </div>
    
    <!-- CSS -->
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
    .pulse-circle {
      display: flex;
      justify-content: center;
      align-items: center;
      animation: pulse 1.5s ease-in-out infinite;
    }`
        },
        {
          title: 'Dual Ring Loader',
          cssClass: 'dual-ring',
          cssCode: `<!-- HTML -->
    <div class="dual-ring">
      <div class="ring"></div>
      <div class="ring"></div>
    </div>
    
    <!-- CSS -->
    @keyframes dualRing {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    .dual-ring {
      position: relative;
      display: inline-block;
    }
    
    .dual-ring .ring {
      width: 40px;
      height: 40px;
      border: 4px solid transparent;
      border-top-color: #3498db;
      border-radius: 50%;
      position: absolute;
      animation: dualRing 1s linear infinite;
    }
    
    .dual-ring .ring:nth-child(2) {
      animation-delay: -0.5s;
      border-top-color: #e74c3c;
    }`
        },
        {
          title: 'Fading Bars',
          cssClass: 'fading-bars',
          cssCode: `<!-- HTML -->
    <div class="fading-bars">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    
    <!-- CSS -->
    @keyframes fadingBars {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
    
    .fading-bars {
      display: flex;
      justify-content: space-between;
      width: 50px;
    }
    
    .fading-bars .bar {
      width: 10px;
      height: 30px;
      background-color: #3498db;
      animation: fadingBars 1.5s infinite;
    }
    
    .fading-bars .bar:nth-child(1) {
      animation-delay: 0s;
    }
    
    .fading-bars .bar:nth-child(2) {
      animation-delay: 0.5s;
    }
    
    .fading-bars .bar:nth-child(3) {
      animation-delay: 1s;
    }`
        },

    {
      title: 'Spinner',
      cssClass: 'spinner',
      cssCode: `<!-- HTML -->
<div class="spinner">
  <div class="w-16 h-16 bg-blue-500 rounded-full"></div>
</div>

<!-- CSS -->
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.spinner {
  display: inline-block;
  animation: spinner 1s linear infinite;
}`
    },
    {
      title: 'Shimmer',
      cssClass: 'shimmer',
      cssCode: `<!-- HTML -->
<div class="shimmer">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
.shimmer {
  background: linear-gradient(90deg, 
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.8) 50%,
    rgba(255,255,255,0) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}`
    },
    {
      title: 'Loading Dots',
      cssClass: 'loading-dots',
      cssCode: `<!-- HTML -->
<div class="loading-dots">
  <div></div>
  <div></div>
  <div></div>
</div>

<!-- CSS -->
@keyframes loadingDots {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
.loading-dots {
  display: flex;
  gap: 4px;
}
.loading-dots > div {
  width: 8px;
  height: 8px;
  background-color: currentColor;
  border-radius: 50%;
}
.loading-dots > div:nth-child(1) {
  animation: loadingDots 1.4s infinite ease-in-out both;
}
.loading-dots > div:nth-child(2) {
  animation: loadingDots 1.4s infinite ease-in-out both 0.16s;
}
.loading-dots > div:nth-child(3) {
  animation: loadingDots 1.4s infinite ease-in-out both 0.32s;
}`
    }
  ],
  
  text: [
    
    {
      title: 'Neon Text',
      cssClass: 'neon-text',
      cssCode: `<!-- HTML -->
<div class="neon-text">
  <p class="text-2xl font-bold">Neon Effect</p>
</div>

<!-- CSS -->
@keyframes neon {
  0% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 1);
  }
  50% {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 50px rgba(0, 255, 255, 1);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 1);
  }
}
.neon-text {
  animation: neon 1.5s infinite alternate;
};`
    },
    {
      title: 'Pulse Glow',
      cssClass: 'pulse-glow',
      cssCode: `<!-- HTML -->
<div class="pulse-glow">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 5px rgba(0, 255, 255, 1);
  }
  50% {
    transform: scale(1.2);
    box-shadow: 0 0 10px rgba(0, 255, 255, 1);
  }
}
.pulse-glow {
  animation: pulseGlow 2s infinite;
}`
    },
    {
      title: 'Text-Glow',
      cssClass: 'text-glow',
      cssCode: `<!-- HTML -->
<div class="text-glow">
  <p class="text-2xl font-bold">Glow Text</p>
</div>

<!-- CSS -->
@keyframes textGlow {
  0% {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.9), 0 0 20px rgba(0, 255, 255, 1);
  }
  100% {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5);
  }
}
.text-glow {
  animation: textGlow 2s infinite;
}`
    },
    {
      title: 'Fancy Border',
      cssClass: 'fancy-border',
      cssCode: `<!-- HTML -->
    <div class="fancy-border">
      <p>Hover Me</p>
    </div>
    
    <!-- CSS -->
    .fancy-border {
      position: relative;
      display: inline-block;
      padding: 10px 20px;
      font-size: 1.2rem;
      color: #fff;
      background-color: #3498db;
      overflow: hidden;
    }
    .fancy-border:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 200%;
      height: 100%;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.3), transparent);
      animation: fancyBorder 1.5s linear infinite;
    }
    @keyframes fancyBorder {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }`
    }
,
{
  title: 'Glow Ripple',
  cssClass: 'glow-ripple',
  cssCode: `<!-- HTML -->
<div class="glow-ripple">
  <div></div>
</div>

<!-- CSS -->
@keyframes glowRipple {
  0% {
    transform: scale(0);
    opacity: 1;
    box-shadow: 0 0 10px rgba(0, 255, 255, 1);
  }
  100% {
    transform: scale(3);
    opacity: 0;
    box-shadow: 0 0 50px rgba(0, 255, 255, 0.1);
  }
}
.glow-ripple {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.glow-ripple div {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(10, 125, 125, 0.9);
  animation: glowRipple 1.5s infinite;
}` 
},
    {
      title: 'Waving Text',
      cssClass: 'waving-text',
      cssCode: `<!-- HTML -->
    <div class="waving-text">
      <span>Wave</span>
      <span>Effect</span>
    </div>
    
    <!-- CSS -->
    @keyframes wave {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    .waving-text {
      display: flex;
      gap: 10px;
    }
    .waving-text span {
      display: inline-block;
      animation: wave 1s ease-in-out infinite;
    }
    .waving-text span:nth-child(1) {
      animation-delay: 0s;
    }
    .waving-text span:nth-child(2) {
      animation-delay: 0.2s;
    }`
    },
    {
      title: 'Bounce',
      cssClass: 'bounce',
      cssCode: `<!-- HTML -->
<div class="bounce">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
.bounce {
  animation: bounce 1s infinite;
}`
    },
    {
      title: 'Bounce Fade',
      cssClass: 'bounce-fade',
      cssCode: `<!-- HTML -->
<div class="bounce-fade">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes bounceFade {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-20px);
    opacity: 0;
  }
}
.bounce-fade {
  animation: bounceFade 2s infinite;
}`
    },
    {
      title: 'Bounce Horizontal',
      cssClass: 'bounce-horizontal',
      cssCode: `<!-- HTML -->
<div class="bounce-horizontal">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes bounceHorizontal {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-20px);
  }
}
.bounce-horizontal {
  animation: bounceHorizontal 1s infinite;
}`
    },
    {
      title: 'Pulse',
      cssClass: 'pulse',
      cssCode: `<!-- HTML -->
<div class="pulse">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
.pulse {
  animation: pulse 2s infinite;
}`
    },
    {
      title: 'Fade',
      cssClass: 'fade',
      cssCode: `<!-- HTML -->
<div class="fade">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes fade {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.fade {
  animation: fade 2s infinite;
}`
    },
    {
      title: 'Text Slide',
      cssClass: 'text-slide',
      cssCode: `<!-- HTML -->
<div class="text-slide">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes textSlide {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.text-slide {
  animation: textSlide 1s ease-out;
}`
    }
  ],
  transitions: [
    {
      title: 'Button Click',
      cssClass: 'button-click',
      cssCode: `<!-- HTML -->
<button class="button-click bg-blue-500 text-white px-4 py-2 rounded-md">
  Click me
</button>

<!-- CSS -->
.button-click {
  transition: transform 0.1s ease;
}
.button-click:active {
  transform: scale(0.95);
}`
    },
    {
      title: 'Flip In',
      cssClass: 'flip-in',
      cssCode: `<!-- HTML -->
<div class="flip-in">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes flipIn {
  0% {
    transform: rotateY(-180deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
}
.flip-in {
  animation: flipIn 1s ease-out;
}`
    },
    {
      title: 'Wiggle',
      cssClass: 'wiggle',
      cssCode: `<!-- HTML -->
<div class="wiggle">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(10deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  45% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.wiggle {
  animation: wiggle 1s ease infinite;
}`
    },
    {
      title: 'Zoom In',
      cssClass: 'zoom-in',
      cssCode: `<!-- HTML -->
<div class="zoom-in">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes zoomIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.zoom-in {
  animation: zoomIn 0.5s ease-out;
}`
    },
    {
      title: 'Zoom Out',
      cssClass: 'zoom-out',
      cssCode: `<!-- HTML -->
<div class="zoom-out">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes zoomOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
.zoom-out {
  animation: zoomOut 0.5s ease-out;
}`
    },
    {
      title: 'Flicker',
      cssClass: 'flicker',
      cssCode: `<!-- HTML -->
<div class="flicker">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes flicker {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.flicker {
  animation: flicker 1s infinite;
}`
    },
    {
      title: 'Ripple',
      cssClass: 'ripple',
      cssCode: `<!-- HTML -->
<div class="ripple">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
.ripple {
  position: relative;
  overflow: hidden;
}
.ripple:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: ripple 1.5s infinite;
  transform: translate(-50%, -50%);
}`
    },
    {
      title: 'Bounce In',
      cssClass: 'bounce-in',
      cssCode: `<!-- HTML -->
<div class="bounce-in">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes bounceIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.bounce-in {
  animation: bounceIn 1s ease-out;
}`
    }
  ],
  
  advanced: [
    
    {
      title: 'Morphing Shape',
      cssClass: 'morphing-shape',
      cssCode: `<!-- HTML -->
    <div class="morphing-shape">
      <div></div>
    </div>
    
    <!-- CSS -->
    @keyframes morph {
      0%, 100% {
        border-radius: 50%;
      }
      50% {
        border-radius: 20%;
      }
    }
    .morphing-shape {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 100px;
    }
    .morphing-shape div {
      width: 80px;
      height: 80px;
      background-color: #e74c3c;
      animation: morph 2s infinite;
    }`
    },
{
  title: '3D Flip Card',
  cssClass: 'flip-card',
  cssCode: `<!-- HTML -->
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front bg-blue-500 text-white">
      Front
    </div>
    <div class="flip-card-back bg-green-500 text-white">
      Back
    </div>
  </div>
</div>

<!-- CSS -->
.flip-card {
  width: 150px;
  height: 100px;
  perspective: 1000px;
}
.flip-card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}
.flip-card-back {
  transform: rotateY(180deg);
}`
},
    {
      title: 'Pulse Heart',
      cssClass: 'heart-pulse',
      cssCode: `<!-- HTML -->
<div class="heart-pulse">
  <svg class="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
  </svg>
</div>

<!-- CSS -->
@keyframes pulseHeart {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}
.pulse-heart {
  animation: pulseHeart 1.5s ease infinite;
}`
    },
    {
      title: 'Heartbeat',
      cssClass: 'heartbeat',
      cssCode: `<!-- HTML -->
<div class="heartbeat">
  <svg class="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
  </svg>
</div>

<!-- CSS -->
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}
.heartbeat {
  animation: heartbeat 1.5s ease infinite;
}`
    },
    {
      title: 'Swing',
      cssClass: 'swing',
      cssCode: `<!-- HTML -->
<div class="swing">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes swing {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-15deg);
  }
}
.swing {
  animation: swing 2s ease-in-out infinite;
}`
    },
    {
      title: 'Tilt',
      cssClass: 'tilt',
      cssCode: `<!-- HTML -->
<div class="tilt">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes tilt {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}
.tilt {
  animation: tilt 1s ease-in-out infinite;
}`
    },
    {
      title: 'Rainfall',
      cssClass: 'rainfall',
      cssCode: `<!-- HTML -->
<div class="rainfall">
  <div class="w-16 h-16 bg-blue-500 rounded-md"></div>
</div>

<!-- CSS -->
@keyframes rainfall {
  0% {
    transform: translateY(-200px);
    opacity: 0;
  }
  100% {
    transform: translateY(200px);
    opacity: 1;
  }
}
.rainfall {
  animation: rainfall 2s ease-out infinite;
}`
    }
  ]
};
