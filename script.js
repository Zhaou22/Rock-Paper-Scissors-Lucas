const player_status_label = document.querySelector(".player_status tr td");

const hand_button = document.getElementsByClassName("hand_button");
const computer_indicator = document.querySelector("img.computer_indicator");

const score_indicator = document.getElementsByClassName("score");
// score_indicator index -> 0. Player | 1. Draw | 2. Computer //
var in_game_score = [0,0,0];

const timeout = 750;

hand_button[0].addEventListener("click",function(){
    change_status(turn_computer(1));
});

hand_button[1].addEventListener("click",function(){
    change_status(turn_computer(2));
});

hand_button[2].addEventListener("click",function(){
    change_status(turn_computer(3));
});

var change_status = function(result){
    switch(result)
    {
        case 0 :
            player_status_label.textContent = "DRAW";
            player_status_label.style.color = "rgba(0, 0, 0, 0.267)";
            in_game_score[1]++;
            score_indicator[1].textContent = in_game_score[1];

            break;
        case 1 :
            player_status_label.textContent = "WIN";
            player_status_label.style.color = "rgba(0, 0, 255, 0.727)";
            in_game_score[0]++;
            score_indicator[0].textContent = in_game_score[0];
            break;
        case 2 :
            player_status_label.textContent = "LOSE";
            player_status_label.style.color = "rgba(255, 0, 0, 0.727)";
            in_game_score[2]++;
            score_indicator[2].textContent = in_game_score[2];

            break;
        default : break;
    }
    
}

var turn_computer = function(hand){
    // 1. Rock | 2. Paper | 3. Scissors //
    // Return -> 0. Draw | 1. Win | 2. Lose //
    var computer_hand = Math.round(Math.random() * 3 + 1);
    roll_computer_image();

    setTimeout(function(){
        switch(computer_hand)
        {
            case 1 :
                computer_indicator.setAttribute("src","asset/rock_icon.png"); break;
            case 2 :
                computer_indicator.setAttribute("src","asset/paper_icon.png"); break;
            case 3 :
                computer_indicator.setAttribute("src","asset/scissors_icon.png"); break;
            default : break;
        }
    },timeout);


    if (hand == computer_hand)
    {
        return 0;
    }
    else if((hand == 1 && computer_hand == 2) || (hand == 2 && computer_hand == 3) || (hand == 3 && computer_hand == 1) )
    {
        return 2;
    }
    else
    {
        return 1;
    }

}

// Roll Computer Image
var roll_computer_image = function(){
    // computer_indicator
    const handImage = ["rock","paper","scissors"];
    let i = 0;

    const startTime = new Date().getTime();

    setInterval(function(){
        if(new Date().getTime() - startTime > timeout){
            clearInterval;
            return;
        }

        computer_indicator.setAttribute("src","asset/"+handImage[i++]+"_icon.png");
        if(i == handImage.length){i = 0};
    }, 50);
}