export const transitionAnimations = [
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
  title: 'Expanding Ripple',
  cssClass: 'expanding-ripple',
  cssCode: `<!-- HTML -->
<div class="expanding-ripple"></div>

<!-- CSS -->
.expanding-ripple {
position: relative;
width: 100px;
height: 100px;
background: transparent;
border-radius: 50%;
overflow: hidden;
}

.expanding-ripple::after {
content: '';
position: absolute;
top: 50%;
left: 50%;
width: 0;
height: 0;
background: rgba(0, 255, 255, 0.5);
border-radius: 50%;
transform: translate(-50%, -50%);
animation: expandingRipple 1.5s ease-out infinite;
}

@keyframes expandingRipple {
0% {
  width: 0;
  height: 0;
  opacity: 1;
}
100% {
  width: 200%;
  height: 200%;
  opacity: 0;
}
}`
},
{
  title: 'Dual Ripple',
  cssClass: 'dual-ripple',
  cssCode: `<!-- HTML -->
<div class="dual-ripple"></div>

<!-- CSS -->
.dual-ripple {
position: relative;
width: 100px;
height: 100px;
background: transparent;
border-radius: 50%;
overflow: hidden;
}

.dual-ripple::before,
.dual-ripple::after {
content: '';
position: absolute;
top: 50%;
left: 50%;
width: 0;
height: 0;
background: rgba(255, 0, 150, 0.4);
border-radius: 50%;
transform: translate(-50%, -50%);
animation: dualRipple 1.5s ease-out infinite;
}

.dual-ripple::after {
animation-delay: 0.75s;
}

@keyframes dualRipple {
0% {
  width: 0;
  height: 0;
  opacity: 1;
}
100% {
  width: 200%;
  height: 200%;
  opacity: 0;
}
}`
},
{
  title: 'Pulsing Ripple',
  cssClass: 'pulsing-ripple',
  cssCode: `<!-- HTML -->
<div class="pulsing-ripple"></div>

<!-- CSS -->
.pulsing-ripple {
position: relative;
width: 100px;
height: 100px;
background: rgba(0, 123, 255, 0.3);
border-radius: 50%;
animation: pulsingRipple 1.5s infinite alternate;
}

@keyframes pulsingRipple {
0% {
  transform: scale(1);
  opacity: 1;
}
100% {
  transform: scale(1.5);
  opacity: 0.6;
}
}`
},
{
  title: 'Color Changing Ripple',
  cssClass: 'color-changing-ripple',
  cssCode: `<!-- HTML -->
<div class="color-changing-ripple"></div>

<!-- CSS -->
.color-changing-ripple {
position: relative;
width: 100px;
height: 100px;
border-radius: 50%;
background: transparent;
overflow: hidden;
}

.color-changing-ripple::after {
content: '';
position: absolute;
top: 50%;
left: 50%;
width: 0;
height: 0;
border-radius: 50%;
background: radial-gradient(circle, #ff6b6b, #ffcc00, #1dd1a1);
transform: translate(-50%, -50%);
animation: colorChangingRipple 2s infinite;
}

@keyframes colorChangingRipple {
0% {
  width: 0;
  height: 0;
  opacity: 1;
}
100% {
  width: 300%;
  height: 300%;
  opacity: 0;
}
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
]