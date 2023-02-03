//Defina "player1_name" com a função localStorage.setItem()
//Defina "player2_name" com a função localStorage.setItem()
player1_name = localStorage.setItem("player1_name");
player2_name = localStorage.setItem("player2_name");

//Obtenha "player1_name" atraves da função colalStorage.getItem() e atribua-o em player1_name
//Obtenha "player2_name" atraves da função colalStorage.getItem() e atribua-o em player2_name
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

// Crie a função addUser()
function addUser(){

  // Obtenha o valor do usuário através das ids player1_name_input e player2_name_input
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

// Armazene esses valores localmente
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

// Atribua "game_page.html" para window.location
    window.location = "game_page.html";
}

