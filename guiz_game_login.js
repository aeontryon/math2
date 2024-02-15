
function addUser()
{
      player1_name= document.getElementById("player1_name_input");
      player2_name= document.getElementById("player2_name_input");

      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);

      window.location = "game_page.html";
}
console.log(player1_name)
console.log(player2_name)

function send() {
      number1 = document.getElementById("number1").value;
      number1 = document.getElementById("number1").value;
actual_answer = parseInt(number1) * parseInt(number2);
}