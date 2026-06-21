document.addEventListener("DOMContentLoaded", () => {
    console.log("Bitácora Académica cargada de manera limpia y tranquila.");

    // Generador dinámico para el ejemplo interactivo de matrices.html
    const matrixContainer = document.getElementById("matrixContainer");
    const matrixInfo = document.getElementById("matrixInfo");

    if (matrixContainer) {
        // Datos de ejemplo para una matriz de 3x3
        const mockMatrix = [
            [0, 1, 2],
            [1, 0, 3],
            [2, 3, 1]
        ];

        mockMatrix.forEach((row, idxRow) => {
            row.forEach((value, idxCol) => {
                const cell = document.createElement("div");
                cell.className = "matrix-cell";
                cell.textContent = value;

                // Evento interactivo
                cell.addEventListener("mouseenter", () => {
                    matrixInfo.textContent = `Elemento seleccionado: M[${idxRow}][${idxCol}] = ${value}`;
                });

                cell.addEventListener("mouseleave", () => {
                    matrixInfo.textContent = "";
                });

                matrixContainer.appendChild(cell);
            });
        });
    }
});
