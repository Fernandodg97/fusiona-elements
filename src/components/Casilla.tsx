type CasillaParametros = {
  index: number;
  emoji: string
};

const Casilla: React.FC<CasillaParametros> = ({ index, emoji }) => {
  return <div className="casilla" data-index={index}>{emoji}</div>;
};

export default Casilla;
