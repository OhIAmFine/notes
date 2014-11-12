

var board = new Array();
var score = 0;

$(document).ready(function(){
    newGame();
});

function newGame(){
    //初始化棋盘格
    init();
    //在随机两个格子生成数字
    generateRandom();
    generateRandom();
}

function init(){
    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 0 ; j < 4 ; j ++ ){

            var gridCell = $('#grid-cell-'+i+"-"+j);
            gridCell.css('top', getPosTop( i , j ) );
            gridCell.css('left', getPosLeft( i , j ) );
        }

    for( var i = 0 ; i < 4 ; i ++ ){
        board[i] = new Array();
        for( var j = 0 ; j < 4 ; j ++ ){
            board[i][j] = 0;
        }
    }

    updateBoardView();
}

function updateBoardView(){

    $(".number-cell").remove();
    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 0 ; j < 4 ; j ++ ){
            $(".cell-wrap").append( '<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>' );
            var theNumberCell = $('#number-cell-'+i+'-'+j);

            if( board[i][j] == 0 ){
                theNumberCell.css('width','0px');
                theNumberCell.css('height','0px');
                theNumberCell.css('top',getPosTop(i,j) + 50 );
                theNumberCell.css('left',getPosLeft(i,j) + 50 );
            }
            else{
                theNumberCell.css('width','100px');
                theNumberCell.css('height','100px');
                theNumberCell.css('top',getPosTop(i,j));
                theNumberCell.css('left',getPosLeft(i,j));
                theNumberCell.css('background-color',getNumberBackgroundColor( board[i][j] ) );
                theNumberCell.css('color',getNumberColor( board[i][j] ) );
                theNumberCell.text( board[i][j] );
            }
        }
}
function generateRandom(){
    //随机生成一个位置
    var randomX = parseInt(Math.random()*4);
    var randomY = parseInt(Math.random()*4);

    while(true){
        if(board[randomX][randomY] == 0){
            break;
        }
        randomX = parseInt(Math.random()*4);
        randomY = parseInt(Math.random()*4);
    }
    var randomNum = Math.random()<0.5?2:4;
    board[randomX][randomY] = randomNum;
    showNumAnimation(randomX,randomY,randomNum);

}
$(document).keydown(function(event){
    switch (event.keyCode){
        case 37://left
            if(moveLeft()){
                generateRandom();
                isGameOver();
            }
            break;
        case 38://up
            if(moveUp()){
                generateRandom();
                isGameOver();
            }
            break;
        case 39://right
            if(moveRight()){
                generateRandom();
                isGameOver();
            }
            break;
        case 40://down
            if(moveDown()){
                generateRandom();
                isGameOver();
            }
            break;
        default :
            break

    }
})

function moveLeft(){
    if(!canMoveLeft(board))
        return false;
    for(var i = 0;i<4;i++){
        for(var j =1;j<4;j++){
            if(board[i][j]!=0){
                for(var k = 0 ;k<j;k++){
                    if(board[i][k]==0 && noBlockHorizontal(i,k,j,board)){
                        //move
                        showMoveAnimation(i,j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }else if(board[i][k] == board[i][j] && noBlockHorizontal(i,k,j,board)){
                        //move
                        //add
                        showMoveAnimation(i,j,i,k);
                        board[i][k] += board[i][j] ;
                        board[i][j] = 0;
                        continue;
                    }
                }
            }

        }
    }
    setTimeout("updateBoardView()",200);
    return true;



}

function canMoveLeft(board){
    for (var i = 0; i<4 ; i++){
        for(var j =1;j<4 ;j++ ){
            if(board[i][j] != 0 ){
                if(board[i][j-1]==0 || board[i][j] == board[i][j-1])
                    return true;
            }

        }
    }
    return false
}


function moveRight(){
    if(!canMoveRight(board))
        return false;
    for(var i = 0;i<4;i++){
        for(var j =2;j>=0;j--){
            if(board[i][j]!=0){
                for(var k = 3 ;k>j;k--){
                    if(board[i][k]==0 && noBlockHorizontal(i,j,k,board)){
                        //move
                        showMoveAnimation(i,j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }else if(board[i][k] == board[i][j] && noBlockHorizontal(i,j,k,board)){
                        //move
                        //add
                        showMoveAnimation(i,j,i,k);
                        board[i][k] += board[i][j] ;
                        board[i][j] = 0;
                        continue;
                    }
                }
            }

        }
    }
    setTimeout("updateBoardView()",200);
    return true;
}

function canMoveRight(board){
    for (var i = 0; i<4 ; i++){
        for(var j =2;j>=0 ;j-- ){
            if(board[i][j] != 0 ){
                if(board[i][j+1]==0 || board[i][j] == board[i][j+1])
                    return true;
            }

        }
    }
    return false;
}


function moveUp(){
    if(!canMoveUp(board))
        return false;
    for(var i = 1;i<4;i++){
        for(var j =0;j<4;j++){
            if(board[i][j]!=0){
                for(var k = 0 ;k<i;k++){
                    if(board[k][j]==0 && noBlockVertical(k,i,j,board)){
                        //move
                        showMoveAnimation(i,j,k,j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }else if(board[k][j] == board[i][j] &&  noBlockVertical(k,i,j,board)){
                        //move
                        //add
                        showMoveAnimation(i,j,k,j);
                        board[k][j] += board[i][j] ;
                        board[i][j] = 0;
                        continue;
                    }
                }
            }

        }
    }
    setTimeout("updateBoardView()",200);
    return true;



}

function canMoveUp(board){
    for (var i = 1; i<4 ;i++){
        for(var j =0;j<4 ;j++ ){
            if(board[i][j] != 0 ){
                if(board[i-1][j]==0 || board[i][j] == board[i-1][j])
                    return true;
            }

        }
    }
    return false;
}



function moveDown(){
    if(!canMoveDown(board))
        return false;
    for(var i = 2;i>=0;i--){
        for(var j =0;j<4;j++){
            if(board[i][j]!=0){
                for(var k = 3 ;k>i;k--){
                    if(board[k][j]==0 && noBlockVertical(i,k,j,board)){
                        //move
                        showMoveAnimation(i,j,k,j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }else if(board[k][j] == board[i][j] &&  noBlockVertical(i,k,j,board)){
                        //move
                        //add
                        showMoveAnimation(i,j,k,j);
                        board[k][j] += board[i][j] ;
                        board[i][j] = 0;
                        continue;
                    }
                }
            }

        }
    }
    setTimeout("updateBoardView()",200);
    return true;



}

function canMoveDown(board){
    for (var i = 2; i>=0 ;i--){
        for(var j =0;j<4 ;j++ ){
            if(board[i][j] != 0 ){
                if(board[i+1][j]==0 || board[i][j] == board[i+1][j])
                    return true;
            }

        }
    }
    return false;
}


function isGameOver(){

}