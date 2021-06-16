import { useEffect,useState } from 'react';
import './App.css';
import {randomCocktail,searchCocktail} from './helpers/API'
import Displaycocktail from './Components/Displaycocktail';

function App() {
  const [currentCocktail,setCurrentCocktail] = useState({});
  const [currentInput,setCurrentInput] = useState('')
  
 
  
  const searchInputCocktail = async ()=>{
    const dataCocktail =await searchCocktail(currentInput)
    console.log(currentInput)
    if(dataCocktail !==null){
      setCurrentCocktail(await dataCocktail)
    }
  }

  

  return (
    <div className="App">
      <header>COCKTAIL APP</header>
      <main>
        <div className="buscadores">
          <div className="buscador">
            <input id='buscadorCocktail' type="text" placeholder='Search your cocktail' onBlur={r => setCurrentInput(r.target.value)}/> 
            <button onClick={()=>searchInputCocktail()}><span>Search</span></button>
          </div>
          <div className="randomCocktail">
            <button onClick={()=>{randomCocktail().then(res => setCurrentCocktail(res))}}> <span> Random Cocktail</span></button>
          </div>
        </div>
      <Displaycocktail 
      currentCocktail={currentCocktail}
      />
      
      
      </main>
      
    </div>
  );
}

export default App;
