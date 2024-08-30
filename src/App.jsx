
import { useState } from 'react';
import './App.css';
import data from './data'
import Receipt from './Components/Receipt/Receip';
import Destination from './components/Destination/Destination';
import Food from './Components/Food/Food';
import Hotel from './components/Hotel/Hotel';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item) => {
    setSelectedItems((prevItems) => {
      const filteredItems = prevItems.filter(
        (prevItem) =>
          (prevItem.nombre && !item.nombre) ||
          (prevItem.titulo && !item.titulo)
      );
      
      return [...filteredItems, item];
    });
  };

  return (
    <div className="app">
      <div className="left-side">
        <Receipt selectedItems={selectedItems} />
      </div>
      <div className="right-side">
        <Destination destinos={data.destinosdla} onSelect={handleSelect} />
        <Food alimentacion={data.alimentacion} onSelect={handleSelect} />
        <Hotel hoteles={data.hoteles} onSelect={handleSelect} />
      </div>
    </div>
  );
}

export default App;