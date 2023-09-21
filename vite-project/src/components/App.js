import React from 'react';
import NavBar from './components/NavBar'; // Asegúrate de que la ruta sea correcta
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;
