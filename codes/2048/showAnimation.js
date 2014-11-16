function showNumAnimation(i,j,Number){
    $("#number-cell-"+i+"-"+j)
        .text(Number)
        .css({
            background:getNumberBackgroundColor(Number),
            color: getNumberColor(Number),
            borderRadius:borderRadius

        }).animate({
            width:cellSideLength,
            height:cellSideLength,
            lineHeight:cellSideLength+"px",
            top:getPosTop(i,j),
            left:getPosLeft(i,j)
        },50)
}
function  showMoveAnimation(fromX,fromY,toX,toY){
    $(".scoreAdd").stop();
    $("number-cell-"+fromX+"-"+fromY).animate(
        {
            top: getPosTop(toX,toY),
            left:getPosLeft(toX,toY)

        },200
    )
}