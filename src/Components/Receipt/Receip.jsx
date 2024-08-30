/* eslint-disable react/prop-types */

function Receipt({ selectedItems }) {
  const totalPrice = selectedItems.reduce((total, { precio = 0, costo = 0 }) => total + (precio || costo), 0);

  return (
    <div className="receipt">
      <h2>Resumen del Viaje</h2>
      <ul>
        {selectedItems.map(({ nombre, titulo, precio, costo }, index) => (
          <li key={index}>
            {nombre || titulo}: ${precio || costo}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}

export default Receipt;

