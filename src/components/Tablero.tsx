import { useState } from "react";
import Casilla from "./Casilla"; // Importamos el componente Casilla
import "./Tablero.css"; // Importamos los estilos del tablero

function Tablero() {
    const filas = 6;     // Número de filas en el tablero
    const columnas = 6;  // Número de columnas en el tablero

    

    // Creamos una matriz 6x6 inicializada con casillas vacías
    const [grid, setGrid] = useState(
        Array.from({ length: filas }, () =>
            Array.from({ length: columnas }, () => ({
                emoji: "",  
                tipo: "null", 
                nivel: 0     
            }))
        )
    );

    // Colocamos los emojis en las posiciones específicas
    // Iniciales (Siempre permanetes)
    grid[0][0] = {emoji: "☁️", tipo: "agua", nivel: 10};
    grid[5][5] = {emoji: "🌋", tipo: "fuego", nivel: 10};
    
    // Objetos generables
    const elementos = {
        agua: { emoji: "💧", tipo: "agua", nivel: 1 },
        fuego: { emoji: "🔥", tipo: "fuego", nivel: 1 }
    };

    // Subida de nivel
    const elementosMejora = {
        agua2: { emoji: "🥤", tipo: "agua", nivel: 2},
        fuego2: { emoji: "🍳", tipo: "fuego", nivel: 2},
        agua3: { emoji: "🚰", tipo: "agua", nivel: 3},
        fuego3: { emoji: "🥓", tipo: "fuego", nivel: 3},
        agua4: { emoji: "🚚", tipo: "agua", nivel: 4},
        fuego4: { emoji: "🍔", tipo: "fuego", nivel: 4},
    };

    // Estado para rastrear la casilla que se está arrastrando
    const [draggedCell, setDraggedCell] = useState<{ fila: number; columna: number, nivel: number, tipo: string} | null>(null);

    // ################## FUNCIONES ##################

    // ################## GENERAR

    // Función para buscar todas las casillas vacías
    const buscarCasillasVacias = () => {
        let casillasVacias: { fila: number; columna: number }[] = [];

        for (let fila = 0; fila < filas; fila++) {
            for (let columna = 0; columna < columnas; columna++) {
                if (grid[fila][columna].nivel === 0 && grid[fila][columna].emoji === "") {
                    casillasVacias.push({ fila, columna });
                }
            }
        }

        return casillasVacias;
    };

    // Función que selecciona una casilla vacía aleatoria y genera un nuevo elemento
    const generarElemento = (tipo: string) => {
        const casillasVacias = buscarCasillasVacias();

        if (casillasVacias.length === 0) {
            //console.log("No hay casillas vacías disponibles.");
            return;
        }

        // Elegimos una casilla vacía al azar
        const indiceAleatorio = Math.floor(Math.random() * casillasVacias.length);
        const { fila, columna } = casillasVacias[indiceAleatorio];

        // Clonamos la matriz y actualizamos la casilla seleccionada
        const nuevoGrid = [...grid];
        nuevoGrid[fila][columna] = elementos[tipo as keyof typeof elementos];

        // Actualizamos el estado con el nuevo tablero
        setGrid(nuevoGrid);

        //console.log(`${tipo} generado en la posición (${fila}, ${columna})`);
    };

    // Función que se ejecutará al hacer clic en (0,0) o (5,5)
    const generar = (rowIndex: number, colIndex: number) => {
        const tipo = grid[rowIndex][colIndex].tipo;

        if (tipo !== "null") {
            //console.log(`Generando elemento de tipo: ${tipo}`);
            generarElemento(tipo);
        } else {
            //console.log("Esta casilla no tiene un tipo válido para generar.");
        }
    };

    // ################## ARRASTRAR

    // Función que se ejecuta cuando se empieza a arrastrar
    const arrastrarDragStart = (fila: number, columna: number, nivel: number, tipo: string) => {
        setDraggedCell({ fila, columna, nivel, tipo});
    };

    // Permitir soltar sobre una casilla
    const arrastrarDragOver = (e: React.DragEvent) => {
        e.preventDefault(); 
    };

    // Función que se ejecuta cuando se suelta una casilla en otra
    const arrastrarDrop = (fila: number, columna: number, nivel: number, tipo: string) => {
        if (!draggedCell) return;

        // No permitir soltar en la misma posición
        if (fila === draggedCell.fila && columna === draggedCell.columna) return;

        // Solo permite soltar si el nivel y tipo coinciden
        if (draggedCell.nivel !== nivel || draggedCell.tipo !== tipo) return;

        // Determinar el siguiente nivel usando elementosMejora
        const mejora = `${tipo}${nivel + 1}` as keyof typeof elementosMejora;
        
        if (elementosMejora[mejora]){
            // Clonar el tablero
            const nuevoGrid = [...grid];

            // Actualizamos la casilla con la mejora
            nuevoGrid[fila][columna] = elementosMejora[mejora];

            // Vaciar casilla de origen
            nuevoGrid[draggedCell.fila][draggedCell.columna] = { emoji: "", tipo: "null", nivel: 0 };
            
            // Actualizamos el estado
            setGrid(nuevoGrid);
            setDraggedCell(null); 
        }         

        
    };

    // ################## VISTA ##################

    return (
        <div className="tablero"> {/* Contenedor principal del tablero */}
            {grid.map((row, rowIndex) => ( // Iteramos sobre cada fila
                <div key={rowIndex} className="fila">
                    {row.map((cell, colIndex) => ( // Iteramos sobre cada columna
                        <Casilla
                        key={`${rowIndex}-${colIndex}`}
                        index={colIndex}    // Enviamos el indice
                        emoji={cell.emoji}  // Enviamos el emoji
                        tipo={cell.tipo}    // Enviamos el tipo
                        nivel={cell.nivel}  // Enviamos el nivel
                        fila={rowIndex}     // Enviamos el fila
                        columna={colIndex}  // Enviamos el columna
                        // Solo permite hacer clic en las casillas (0,0) y (5,5) para ejecutar la función generar()
                        onClick={(rowIndex === 0 && colIndex === 0) || (rowIndex === 5 && colIndex === 5)  ? () => generar(rowIndex, colIndex) : undefined}
                        // Maneja el evento de arrastre cuando se inicia el arrastre de una casilla
                        onDragStart={() => arrastrarDragStart(rowIndex, colIndex, cell.nivel, cell.tipo)}
                        // Maneja el evento de soltar cuando un elemento se suelta en esta casilla
                        onDrop={() => arrastrarDrop(rowIndex, colIndex, cell.nivel, cell.tipo)}
                        // Permite que los elementos arrastrados puedan soltarse en esta casilla (evita el comportamiento por defecto)
                        onDragOver={arrastrarDragOver}
                    />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Tablero;
