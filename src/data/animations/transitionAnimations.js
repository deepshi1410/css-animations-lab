export const transitionAnimations =  [
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
  ]