import { useState } from "react";
import Casilla from "./Casilla";
import "./Tablero.css";

function Tablero(){
    const filas = 6;
    const columnas = 6;
    const tamaño = filas * columnas;
    const [grid,setGrid] = useState<String[][]>( () => {
        const newGrid:String[][] = Array(6).fill(null).map(() => Array(6).fill(null));
        newGrid[0][0] = "emoji";
        return newGrid;
    }) 

    
    return(
        <>
        <div className="tablero">
            {grid.map((i, index) => (
                <div key={index} >
                       {i.map((j,indexJ) => (
                        <Casilla index={indexJ} emoji=''/>
                       )
                    )}
                </div>
            ))}
        </div>
        </>
    )
}

export default Tablero;