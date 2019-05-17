function roll() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomImage2);

    switch (true) {
        case randomNumber1 > randomNumber2:
            document.querySelector(".result").innerHTML = "You win! <br /><i class='fas fa-smile'></i>";
            break;
        case randomNumber1 < randomNumber2:
            document.querySelector(".result").innerHTML = "You lost! <br /><i class='fas fa-frown'></i>";
            break;
        case randomNumber1 == randomNumber2:
            document.querySelector(".result").innerHTML = "It's a draw! <br /><i class='fas fa-meh'></i>";
            break;
    }

}
