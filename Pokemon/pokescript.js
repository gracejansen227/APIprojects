
$(document).ready(function(){

var pokeURL = "http://pokeapi.co/media/sprites/pokemon/";
var id =0;
function loopPoke(){
  for (var i =1; i < 152; i++){
    id += i;\
    pokeURL = pokeURL + 'i'.png;
  }
  return id;
}

$.get("http://pokeapi.co/media/sprites/pokemon/", loopPoke()){


  

})

});
