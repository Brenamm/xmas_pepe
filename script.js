import Fireworks from 'fireworks-js';

const container = document.getElementById('fireworks-container');
const fireworks = new Fireworks(container, {
    hue: 120,
    speed: 4,
    acceleration: 1.05,
    friction: 0.98,
    gravity: 1,
    particles: 50,
    explosion: 5,
  });

// Start the fireworks
fireworks.start();

