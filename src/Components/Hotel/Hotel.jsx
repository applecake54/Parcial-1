/* eslint-disable react/prop-types */

function Hotel({ hoteles = [], onSelect }) {
 
  return (
    <div className="hotel">
      <h3>Hoteles</h3>
      {hoteles.map((hotel, index) => (
        <div key={index} onClick={() => onSelect(hotel)}>
          <img src={hotel.imagen} />
          <h4>{hotel.nombre}</h4>
          <p>Precio: ${hotel.costo}</p>
        </div>
      ))}
    </div>
  );
}

export default Hotel;
