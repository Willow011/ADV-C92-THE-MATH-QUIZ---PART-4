function send() {
    player1_name = document.getElementById.value; 
    player2_name = document.getElementById.value; 

actual_answer = parseInt(number1) * parent(number2)
}

question_number = "<h4>" + number1 + "X" + number + "</h4>";
input_box = "<br>Answer : <input type='text' id='input_chack_box'>";
check_button = "<br><br><button class='bnt bnt-info' onclick='check()'>Check</button>"
question_number = "<h4>" + number1 + "X + number2 + "</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number| + input_box + check_button ;


document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

function check()
{
get_answer = document.getElementById("input_check_box").value;
if (get_answer ==
actual answer)
{
if (answer_turn == "player]")
{
update_player1_score = player1_score +1;
document.getElementById("player1 score").innerHTML = update player1 score;
}
else
{
update_player2_score = player2 score +1;
document.getElementById("player2 score"). innerHTML = update player2 score;
}

if (question_turn == "player1")
    {
    question_turn ="player2"
    document.getElementById ("player question" ). innerHTML= "Question Turn - " + player2_name;
    }
    else
    {
    question_turn ="player1"
    document.getElementById("player question").innerHTML = "Question Turn - " + player1_name ;
    }