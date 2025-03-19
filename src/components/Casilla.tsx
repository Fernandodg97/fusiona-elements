type CasillaParametros = {
  index: number;  // Índice de la columna dentro de la fila
  emoji: string;  // Emoji que se mostrará en la casilla
  // No visibles al usuario
  tipo: string; // Tipo que se le asigna a la casilla
  nivel: number // Nivel que se le asigna a la casilla
  fila: number;
  columna: number; 
  onClick?: () => void;  // Función opcional que se ejecutará al hacer clic en la casilla
  onDragStart?: (fila: number, columna: number) => void;
  onDrop?: (fila: number, columna: number) => void;
  onDragOver?: (e: React.DragEvent) => void;
};

// Definimos el componente funcional Casilla
const Casilla: React.FC<CasillaParametros> = ({ index, emoji, nivel, fila, columna,  onClick, onDragStart, onDrop, onDragOver }) => {
  return (
    // Creamos un div con una clase "casilla" y un atributo data-index
    // Si se hace clic en la casilla y tiene un onClick, se ejecutará la función
    <div 
    className="casilla" 
    data-index={index} 
    onClick={onClick}
    draggable={nivel < 10 && nivel > 0} // Solo es arrastrable si su nivel es menor a 10 y mayor a 0
    onDragStart={() => onDragStart?.(fila, columna)}
    onDrop={() => onDrop?.(fila, columna)}
    onDragOver={(e) => onDragOver?.(e)}
    >
      {emoji}
    </div>
  );
};

export default Casilla;
