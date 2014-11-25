

var board = [];
var hasConflicted = [];
var isWin = false;
var
  scoreAdd = 0,
  fontSize;

//获取视口的宽度
var deviceWidth = screen.availWidth;
/*if(typeof  deviceWidth != "number"){
  if(document.compatMode == "CSS1Compat"){
      deviceWidth = document.documentElement.clientWidth;
  }else{
      deviceWidth = document.body.clientWidth;
  }
}*/

var cellWrap = deviceWidth * 0.92,
  borderRadius = deviceWidth * 0.02,
  cellSideLength = 0.18 * deviceWidth,
  cellSpace = 0.04 * deviceWidth;
var startX=0,startY=0,endX=0,endY=0;

$(document).ready(function(){
  prepareForMobile();

  if(localStorage.gameState == undefined){
    newGame();
  }else{
    var gamestate =  localStorage.gameState.split(',').slice();
    for( var i = 0 ; i < 4 ; i ++ ){
      board[i] = [];
      hasConflicted[i] = [];
      for( var j = 0 ; j < 4 ; j ++ ){
        board[i][j] = parseInt(gamestate[i*4+j],10);
        hasConflicted[i][j] = false;
      }
    }
    init();
    updateBoardView()
    $("#score").text(localStorage.score)
  }

});
function prepareForMobile(){

  if(deviceWidth>640){
    cellWrap = 500 ;
    cellSideLength = 100 ;
    borderRadius = 6;
    cellSpace = 20;
    fontSize = 40;
  }
  $(".cell-wrap").css({"width":cellWrap,"height":cellWrap,"border-radius":borderRadius,"fontSize":fontSize});
  $(".grid-cell").css({"width":cellSideLength,"height":cellSideLength,"border-radius":borderRadius});
  $("header,.gameover").css({"width":cellWrap});

}

function newGame(){
  $(".gameover").hide();
  //重置本局分数
  localStorage.score = 0;
  //初始化棋盘格
  for( var i = 0 ; i < 4 ; i ++ ){
    board[i] = [];
    hasConflicted[i] = [];

    for( var j = 0 ; j < 4 ; j ++ ){
      board[i][j] = 0;
      hasConflicted[i][j] = false;
    }
  }
  init();
  updateBoardView();
  //在随机两个格子生成数字
  generateRandom();
  generateRandom();
}

function init(){
  for( var i = 0 ; i < 4 ; i ++ ){
    for( var j = 0 ; j < 4 ; j ++ ){
      var gridCell = $('#grid-cell-'+i+"-"+j);
      gridCell.css('top', getPosTop( i , j )  );
      gridCell.css('left', getPosLeft( i , j )  );
    }
  }

}

function updateBoardView(){
  $(".number-cell").remove();
  for( var i = 0 ; i < 4 ; i ++ ){
    hasConflicted[i] = [];
    for( var j = 0 ; j < 4 ; j ++ ){
      hasConflicted[i][j] = false;
      $(".cell-wrap").append( '<div class="number-cell"  id="number-cell-'+i+'-'+j+'"></div>' );
      var theNumberCell = $('#number-cell-'+i+'-'+j);

      if( board[i][j] == 0 ){
        theNumberCell.css('width','0px');
        theNumberCell.css('height','0px');
        theNumberCell.css('top',getPosTop(i,j) + 50 );
        theNumberCell.css('left',getPosLeft(i,j) + 50 );
      }
      else{
        theNumberCell.css('width',cellSideLength);
        theNumberCell.css('height',cellSideLength);
        theNumberCell.css( 'lineHeight',cellSideLength+"px")
        theNumberCell.css('top',getPosTop(i,j));
        theNumberCell.css('left',getPosLeft(i,j));
        theNumberCell.css('background-color',getNumberBackgroundColor( board[i][j] ) );
        theNumberCell.css('color',getNumberColor( board[i][j] ) );
        theNumberCell.text( board[i][j] );
        if(board[i][j] == 2048 &&  !isWin ){
          theNumberCell.addClass("win")
          isWin = true;
        }
      }
    }
  }


  $("#score").text(localStorage.score);

  if(scoreAdd != 0){
    $(".scoreAdd").remove();
    $("<p class='scoreAdd'></p>").text("+"+scoreAdd).appendTo(".score");
    scoreAdd = 0;
  }
  if(localStorage.bestScore == undefined){
    localStorage.bestScore = 0;
  }else{
    if(parseInt(localStorage.bestScore) < parseInt(localStorage.score)){
      localStorage.bestScore= localStorage.score;
    }
  }
  $("#bestScore").text(localStorage.bestScore);

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
  var randomNum = Math.random()<0.9?2:4;

  board[randomX][randomY] = randomNum;
  showNumAnimation(randomX,randomY,randomNum);
  localStorage.gameState = board.slice();

}
$(document).keydown(function(event){
  switch (event.keyCode){
    case 37://left
      if(moveLeft()){

        setTimeout("generateRandom()",210)
        setTimeout("isGameOver()",300)
      }
      break;
    case 38://up
      if(moveUp()){

        setTimeout("generateRandom()",210)
        setTimeout("isGameOver()",300)
      }
      break;
    case 39://right
      if(moveRight()){

        setTimeout("generateRandom()",210)
        setTimeout("isGameOver()",300)
      }
      break;
    case 40://down
      if(moveDown()){

        setTimeout("generateRandom()",210)
        setTimeout("isGameOver()",300)
      }
      break;
    default :
      break

  }
})
document.addEventListener("touchstart",function(event){
  startX = event.touches[0].pageX;
  startY = event.touches[0].pageY;
})
document.addEventListener("touchmove",function(event){
  event.preventDefault();
})
document.addEventListener("touchend",function(event){
  endX = event.changedTouches[0].pageX;
  endY = event.changedTouches[0].pageY;
  var deltaX = endX - startX;
  var deltaY = endY - startY;
  if( Math.abs(deltaX) < 0.1 * deviceWidth  && Math.abs(deltaY) <0.1 * deviceWidth )
    return ;

  if(Math.abs(deltaX) > Math.abs(deltaY)){
    if(deltaX<0){
      if(moveLeft()){

        setTimeout("generateRandom()",210)

        setTimeout("isGameOver()",300)

      }
    }else{
      if(moveRight()){

        setTimeout("generateRandom()",210)
        setTimeout("isGameOver()",300)
      }
    }
  }else{
    if(deltaY<0){
      if(moveUp()){

        setTimeout("generateRandom()",210)
        setTimeout("isGameOver()",300)
      }
    }else{
      if(moveDown()){

        setTimeout("generateRandom()",210)
        setTimeout("isGameOver()",300)
      }
    }
  }
})
function moveLeft(){
  if(!canMoveLeft(board))
    return false;
  for(var i = 0;i<4;i++){
    for(var j =1;j<4;j++){
      if(board[i][j]!=0){
        for(var k = 0 ;k<j;k++){
          if(board[i][k]==0 && noBlockHorizontal(i,k,j,board) ){
            //move
            showMoveAnimation(i,j,i,k);
            board[i][k] = board[i][j];
            board[i][j] = 0;

            continue;
          }else if(board[i][k] == board[i][j] && noBlockHorizontal(i,k,j,board) && !hasConflicted[i][k]){
            //move
            //add
            showMoveAnimation(i,j,i,k);
            board[i][k] += board[i][j] ;
            localStorage.score=board[i][k]+parseInt(localStorage.score);
            scoreAdd = board[i][k];
            board[i][j] = 0;
            hasConflicted[i][k] = true;
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
          }else if(board[i][k] == board[i][j] && noBlockHorizontal(i,j,k,board) && !hasConflicted[i][k] ){
            //move
            //add
            showMoveAnimation(i,j,i,k);
            board[i][k] += board[i][j] ;
            board[i][j] = 0;
            localStorage.score =board[i][k] +parseInt(localStorage.score);
            scoreAdd = board[i][k];
            hasConflicted[i][k] = true;
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
          }else if(board[k][j] == board[i][j] &&  noBlockVertical(k,i,j,board) && !hasConflicted[k][j]){
            //move
            //add
            showMoveAnimation(i,j,k,j);
            board[k][j] += board[i][j] ;
            board[i][j] = 0;
            localStorage.score =board[k][j] +parseInt(localStorage.score);
            scoreAdd = board[k][j];
            hasConflicted[k][j] = true;
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
          }else if(board[k][j] == board[i][j] &&  noBlockVertical(i,k,j,board) && !hasConflicted[k][j]){
            //move
            //add
            showMoveAnimation(i,j,k,j);
            board[k][j] += board[i][j] ;
            board[i][j] = 0;
            localStorage.score =board[k][j] +parseInt(localStorage.score);
            scoreAdd = board[k][j];
            hasConflicted[k][j] = true;
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
  if(nospace(board) && !canMoveDown(board) && !canMoveUp(board) && !canMoveLeft(board) && !canMoveRight(board) ){
    $(".gameover").show()
  }
}





