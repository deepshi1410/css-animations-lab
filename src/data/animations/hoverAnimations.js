export const hoverAnimations = [
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
]