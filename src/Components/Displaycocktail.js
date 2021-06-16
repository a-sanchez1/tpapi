import React from 'react'
import'./Displaycocktail.css'
function Displaycocktail({currentCocktail}) {
    if(Object.entries(currentCocktail).length===0){
    return (
        
            <div className='DisplayCocktail'>
                <span className='chooseCocktail'>
                    Por Favor, Ingrese un cocktail valido en el buscador o elija uno random
                </span>
            </div>
        )}
    
    else{
        return (
            <div className='DisplayCocktail'>
                <img src={currentCocktail.strDrinkThumb} className='DisplayCocktail__img' />
                <div className="DisplayCocktail__info">
                    <p className="name"><span>Drink:</span> {currentCocktail.strDrink}</p>
                    <p className="category"><span>Category:</span> {currentCocktail.strCategory}</p>
                    <p className="alcoholic"><span>Is Alcoholic?</span> {currentCocktail.strAlcoholic} </p>
                    <p className="glass"><span>Type of Glass: </span> {currentCocktail.strGlass}</p>
                    <p className="intructions"><span>How to prepare:</span> {currentCocktail.strInstructions}</p>
                </div>
            </div>
        )}
}

export default Displaycocktail
