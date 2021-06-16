import axios from "axios"

const BASE_URL= "https://www.thecocktaildb.com/api/json/v1/1"

export const randomCocktail = async () =>{
    const res = await axios.get(`${BASE_URL}/random.php`)
    const data = await res.data
    return await data.drinks[0]
}

export const searchCocktail = async (cocktailName) =>{
    let data;
    const res = await axios.get(`${BASE_URL}/search.php`,{
        params:{
            s: cocktailName
    }})
    if (res.data.drinks !== null){
        data = await res.data.drinks[0]
        
    }
    else{
         data = {}
    }
    return await data
    
}
