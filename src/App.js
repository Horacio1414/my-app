import logo from './logo.svg';
import './App.css';

import ItemCount from './components/ItemCount';
import { useState } from 'react';

function App() {
  const [stockActual, setStockActual] = useState(5);

   
    var restartStock = (e, nuevoStock) => { 
    
      e.preventDefault();

      if(stockActual > 0) {
        setStockActual((stockActual) => stockActual - nuevoStock );

      }
      
      

   }
   
    
   
  
  
  

  return (
    <div className="App">
      <ItemCount stock ={stockActual} initial={1} onAdd={restartStock} />
    </div>
  );
}

export default App;
