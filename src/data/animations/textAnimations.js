export const textAnimations = [
    
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
  ]