let count = 0;


//Counter Function
function counter(number) {
    let showScore = document.getElementById("score");
    showScore.innerHTML = "Total Donuts = " + count;
    
    let show = document.getElementById("donutAmt");
    show.innerHTML = "You have made " + count + " donuts.";
    number = count++;

    if (number >= 10) {
        displayClickerMsg();
    }

    return number;
}

//Display Elements Function
function displayClickerMsg() {
    let msg = document.getElementById("message");
    let clickerOne = document.getElementById("clicker1");
    msg.style.display = "block";
    clickerOne.style.display = "block";
    purchaseAClicker();
}



function purchaseAClicker(number2) {
    let autoClick1 = document.getElementById("clicker1Donuts");
    number2 = count - 11;
    count++;
    autoClick1.innerHTML = "First Clicker has " + number2 + " donuts made.";
}


