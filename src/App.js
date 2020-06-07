import React from 'react';
import './App.css'
import Dinner from './dinner.js'
function App() {
  return (
    <div className="App">
      {/* <Dinner></Dinner>*/}
      <Dinner dishName="Chicken Karahi" sweetDish="Kheer" />
      <hr/>
      <Dinner dishName="Chicken Biryani" sweetDish="Jaleebi" />
      <hr/>
      <Dinner dishName="Nihari" sweetDish="Gajar Ka Halwa" />
    </div>
  );
}

export default App;