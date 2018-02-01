
$(document).ready(function(){

  $.get("https://pokeapi.co/api/v2/pokemon/1/", function(res){
    $('#info').html("<h2>" + res.abilities[0].ability.name + "</h2>");
  }, "json");

});
