import Casilla from "./Casilla";
import "./Tablero.css";

function Tablero() {
    const filas = 6;
    const columnas = 6;

    const grid = Array.from({ length: filas }, () =>
        Array.from({ length: columnas }, () => "")
    );

    grid[0][0] = "🐥"; 
    grid[5][5] = "🥚"; 

    return (
        <>
            <div className="tablero">
            {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="fila">
                        {row.map((cell, colIndex) => (
                            <Casilla index={colIndex} emoji={cell}/>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Tablero;
