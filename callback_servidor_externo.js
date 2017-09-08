
// function get para hacer la llamada externa al api
// Este tipo de codigo puede traer problemas de Callback Hell

function get(URL, callback) {
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
  const DONE = 4
  const OK = 200
  if (this.readyState === DONE){
    if(this.status === OK){
      // todo ok
      callback(null, JSON.parse(this.responseText))
    } else {
      // hubo un error
      callback(new Error(`Se produjo un error al realizar el reques: ${this.status}`), )
    }
  }
}

xhr.open('GET', URL);
xhr.send(null)
  
}

/* Función para tratar el error */

function _handleError(err){
  console.log(`Request faild: ${err}`)
}


/* Llamada al metodo get */
get('https://swapi.co/api/people/1/', function onResponse(err, luke){
  if (err) return _handleError(err)

  /* Para traer el mundo */

  get(luke.homeworld, function onHomeworldResponse(err, homeworld){
    if(err) return _handleError(err)

      luke.homeworld = homeworld
      console.log(`${luke.name} nació en ${luke.homeworld.name}`)

  })
  
  console.log(`Request Succeded`)
  console.log('luke', luke)


})