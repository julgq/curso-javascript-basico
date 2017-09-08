// Cuando usemos en proyecto Async-await, posiblemente estaremos usando babel.
// Importante manejar:
//https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js


function handleError(err){
  console.log(`Request faild: ${err}`)
}

async function getLuke(){
  try {
  const response = await fetch("https://swapi.co/api/people/1/")
  const lukeFetch = await response.json()
  const responseHomeworld = await fetch(lukeFetch.homeworld)
  
  lukeFetch.homeworld = await responseHomeworld.json() 
   console.log(`${lukeFetch.name} nació en ${lukeFetch.name}, código con FETCH`);
  } catch (err) {
    handleError(err)
  }

}
getLuke()

