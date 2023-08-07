document.addEventListener("DOMContentLoaded", () => {
    const board = document.querySelector(".board");
    const cells = document.querySelectorAll("[data-cell]");
    const status = document.querySelector(".status");
    const restartButton = document.querySelector(".restart-button");

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;

    const checkWin = () => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                gameActive = false;
                cells[a].style.backgroundColor = "#4caf50";
                cells[b].style.backgroundColor = "#4caf50";
                cells[c].style.backgroundColor = "#4caf50";
                status.textContent = `Player ${currentPlayer} wins!`;
                break;
            }
        }

        if (!gameBoard.includes("") && gameActive) {
            gameActive = false;
            status.textContent = "It's a draw!";
        }
    };

    const handleCellClick = (cell, index) => {
        if (!gameActive || gameBoard[index] !== "") {
            return;
        }

        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.style.color = currentPlayer === "X" ? "#f44336" : "#2196f3";
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = `Player ${currentPlayer}'s turn`;

        checkWin();
    };

    const handleRestart = () => {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameActive = true;
        status.textContent = `Player ${currentPlayer}'s turn`;

        cells.forEach((cell) => {
            cell.textContent = "";
            cell.style.backgroundColor = "#fff";
            cell.style.color = "#000";
        });
    };

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => handleCellClick(cell, index));
    });

    restartButton.addEventListener("click", handleRestart);
});
