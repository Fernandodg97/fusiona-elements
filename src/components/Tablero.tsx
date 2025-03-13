import Casilla from "./Casilla";
import "./Tablero.css";

function Tablero(){
    const filas = 6;
    const columnas = 6;
    const tamaño = filas * columnas;
    
    return(
        <>
        <div className="tablero">
            {Array.from({length: tamaño }).map((_, index) => (
                <div key={index} className="celdas" >
                        {
                                <Casilla index={index} emoji={ index === 1 ? '🐥' : index === 35? 'huevo' : ''}/>
                        }
                </div>
            ))}
        </div>
        </>
    )
}

export default Tablero;