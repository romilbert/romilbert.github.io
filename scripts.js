const canvas = document.getElementById("interactiveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const circles = [];

for (let i = 0; i < 100; i++) {
  circles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 10 + 5,
    dx: Math.random() * 2 - 1,
    dy: Math.random() * 2 - 1
  });
}

function drawCircles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(circle => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(0, 150, 255, 0.5)";
    ctx.fill();
  });
}

function updateCircles() {
  circles.forEach(circle => {
    circle.x += circle.dx;
    circle.y += circle.dy;

    if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
      circle.dx *= -1;
    }
    if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
      circle.dy *= -1;
    }
  });
}

function animate() {
  drawCircles();
  updateCircles();
  requestAnimationFrame(animate);
}

animate();