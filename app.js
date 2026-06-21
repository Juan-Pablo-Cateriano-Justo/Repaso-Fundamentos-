document.addEventListener("DOMContentLoaded", () => {
    console.log("Módulos interactivos acoplados correctamente.");

    // --- LÓGICA PARA MATRICES ---
    const matrixContainer = document.getElementById("matrixContainer");
    const matrixInfo = document.getElementById("matrixInfo");

    if (matrixContainer) {
        const mockMatrix = [[0, 1, 2], [1, 0, 3], [2, 3, 1]];
        mockMatrix.forEach((row, idxRow) => {
            row.forEach((value, idxCol) => {
                const cell = document.createElement("div");
                cell.className = "matrix-cell";
                cell.textContent = value;
                cell.addEventListener("mouseenter", () => {
                    matrixInfo.textContent = `M[${idxRow}][${idxCol}] = ${value} (Dirección en memoria)`;
                });
                cell.addEventListener("mouseleave", () => matrixInfo.textContent = "");
                matrixContainer.appendChild(cell);
            });
        });
    }

    // --- LÓGICA PARA EL CANVAS DE VECTORES ---
    const canvas = document.getElementById("vectorCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        const sliderX = document.getElementById("sliderX");
        const sliderY = document.getElementById("sliderY");
        const scale = 25; // Escala de píxeles por unidad vectorial

        function drawVectorPlane() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            // Dibujar Ejes Cartesianos
            ctx.strokeStyle = "#475569";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, cy); ctx.lineTo(canvas.width, cy); // Eje X
            ctx.moveTo(cx, 0); ctx.lineTo(cx, canvas.height); // Eje Y
            ctx.stroke();

            // Leer valores de los sliders
            const vx = parseFloat(sliderX.value);
            const vy = parseFloat(sliderY.value);

            // Dibujar el Vector Activo
            ctx.strokeStyle = "#38bdf8";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            // Invertimos 'vy' en el dibujo porque en canvas el eje Y baja
            ctx.lineTo(cx + vx * scale, cy - vy * scale); 
            ctx.stroke();

            // Cabeza de la flecha
            ctx.fillStyle = "#38bdf8";
            ctx.beginPath();
            ctx.arc(cx + vx * scale, cy - vy * scale, 5, 0, 2 * Math.PI);
            ctx.fill();
        }

        sliderX.addEventListener("input", drawVectorPlane);
        sliderY.addEventListener("input", drawVectorPlane);
        drawVectorPlane(); // Inicializar dibujo
    }
});
