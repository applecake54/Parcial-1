/* eslint-disable react/prop-types */

function Destination({ destinos = {}, onSelect }) {
  return (
    <div className="destination">
      <h3>Destinos</h3>
      {Object.keys(destinos).map((key) => {
        const destino = destinos[key];
        return (
          <div key={key} onClick={() => onSelect(destino)}>
            <img src={destino.imagen}  />
            <h4>{destino.nombre}</h4>
            <p>Precio: ${destino.precio}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Destination;
