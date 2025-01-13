export const advancedAnimations = [
    
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