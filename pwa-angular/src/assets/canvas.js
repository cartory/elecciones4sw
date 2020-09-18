function loadCanvas() {
    console.log("test");
    // const width = document.body.width;
    const canvas = document.getElementById('canvas');
    // canvas.width = width;
    const context = canvas.getContext("2d");
    canvas.height = 500;
    canvas.width = 500;
    const k = 2.2;
    const dx = 70;
    const dy = 100;
    // TOP
    context.beginPath();
    context.lineWidth = 5;
    context.fillStyle = "yellow";
    context.fillStyle = "rgba(255, 255, 0, 0.6)";
    context.fillRect(50 + dx / 2, 20, 60 * k, 100 * k);
    context.stroke();
    // MID
    context.beginPath();
    context.lineWidth = 5;
    context.fillStyle = "rgba(0, 128, 0, .6)";
    context.fillRect(20 + dx / 3, 50 + dy / 3, 60 * k, 100 * k);
    context.stroke();
    // BOTTOM
    context.beginPath();
    context.lineWidth = 5;
    context.fillStyle = "rgba(255, 0, 0, 0.6)";
    context.fillRect(60 + dx, 80 + 2 * dy / 3, 60 * k, 100 * k);
    context.stroke();
    // SQUARE
    context.beginPath();
    context.lineWidth = 15;
    context.strokeStyle = "rgba(160,161,162, .9)";
    context.rect(10, 105 + dy, 120 * k, 115 * k);
    context.stroke();
}