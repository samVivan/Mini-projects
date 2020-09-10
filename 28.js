var Game28 = {
'J':[1,3],
'9':[2,2],
'A':[3,1],
'10':[4,1],
'K':[5,0],
'Q':[6,0],
'8':[7,0],
'7':[8,0]};
var total_point=28;
teamA=0;
teamB=0;


function game(p1,p2,p3,p4){
        var p1_point=0;
        var p2_point=0;
        var p3_point=0;
        var p4_point=0;

        if (Game28[p1][0] < Game28[p2][0] && Game28[p1][0] < Game28[p3][0] && Game28[p1][0] <Game28[p4][0]) {
                console.log("Player 1 wins the round");
                p1_point+=Game28[p1][1];
                teamA+=p1_point;
                total_point-=p1_point;
                console.log(p1_point+" Points added to TeamA");
                console.log("_______________________________");
        }
        else if(Game28[p2][0] < Game28[p1][0] && Game28[p2][0] < Game28[p3][0] && Game28[p2][0] < Game28[p4][0]){
                console.log("Player 2 wins the round");
                p2_point+=Game28[p2][1];
                teamB+=p2_point;
                total_point-=p2_point;
                console.log(p2_point+" Points added to TeamB");
                console.log("_______________________________");
        }
        else if(Game28[p3][0] < Game28[p1][0] && Game28[p3][0] < Game28[p2][0] && Game28[p3][0] < Game28[p4][0]){
                console.log("Player 3 wins the round");
                p3_point+=Game28[p3][1];
                teamA+=p3_point;
                total_point-=p3_point;
                console.log(p3_point+" Points added to Team A");
                console.log("_______________________________");
        }
        else if(Game28[p4][0] < Game28[p1][0] && Game28[p4][0] < Game28[p2][0] && Game28[p4][0] < Game28[p3][0]){
                console.log("Player 4 wins the round");
                p4_point+=Game28[p4][1];
                teamB+=p4_point;
                total_point-=p4_point;
                console.log(p4_point+" Points added to Team B");
                console.log("_______________________________");
        }
        if(teamA > teamB){
                console.log("Team A wins")
        }
        else{
                console.log("Team B wins");
        }
        //console.log(total_point+" Points left")
}

game('J','9','A','8');
game('9','7','A','8');
game('8','9','J','8');
game('Q','K','A','8');
game('10','9','A','8');
game('Q','9','A','8');
game('7','9','A','8');


