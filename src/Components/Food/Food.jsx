/* eslint-disable react/prop-types */

function Food({ alimentacion = [], onSelect }) {
 
  return (
    <div className="food">
      <h3>Alimentación</h3>
      {alimentacion.map((food, index) => (
        <div key={index} onClick={() => onSelect(food)}>
          <img src={food.imagen}  />
          <h4>{food.titulo}</h4>
          <p>Precio: ${food.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default Food;

