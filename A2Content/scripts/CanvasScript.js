/*
 * Anirudh Giran
 * 991570520
 * Assignment 2
 * Date: February 6,2020
 */
var canvas, can,nameX=0,nameY=22, interval =0;
var sq1X=0,sq1Y=0, sq2X=250,sq2Y=100, sq3X=250, sq3Y=0,sq4X=0,sq4Y=100;

function startUp(){
    canvas = document.getElementById("canvas");
    can = canvas.getContext("2d");
}

function showName(){
    clearCanvas();
    can.fillStyle="blue";
    can.font = "20px bahnschrift";
    can.fillText("Anirudh Giran",nameX,nameY);
    nameY= nameY + 30;
    if(nameY === 172){
        nameX = 0;
        nameY = 0;
    }
}

function movingSquare(){
    can.clearRect(0,0,500,160);
    can.fillStyle="cyan";
    can.fillRect(sq1X,sq1Y,50,50);
    sq1X = sq1X + 10;
    sq1Y = sq1Y + 10;
    if(sq1Y===100){
        sq1X = 0;
        sq1Y = 0;
    }
    
    can.fillStyle="cyan";
    can.fillRect(sq3X,sq3Y,50,50);
    sq3X = sq3X - 10;
    sq3Y = sq3Y + 10;
    if(sq3Y===100){
        sq3X = 250;
        sq3Y = 0;
    }
    
    can.fillStyle="purple";
    can.fillRect(sq2X,sq2Y,50,50);
    sq2X = sq2X - 10;
    sq2Y = sq2Y - 10;
    if(sq2Y===0){
        sq2X = 250;
        sq2Y = 100;
    }
    
     can.fillStyle="purple";
    can.fillRect(sq4X,sq4Y,50,50);
    sq4X = sq4X + 10;
    sq4Y = sq4Y - 10;
    if(sq4Y===0){
        sq4X = 0;
        sq4Y = 100;
    }
}

function squareLoop(){
    interval = setInterval(movingSquare,250);
}


function showInitialA(){
    can.lineWidth="2";
    
    can.strokeStyle="purple";
    can.beginPath();
    can.moveTo(60,109.5);
    can.lineTo(60,50);
    can.lineTo(105,50);
    can.lineTo(105,109.5);
    can.stroke();
    can.beginPath();
    can.moveTo(60,80);
    can.lineTo(105,80);
    can.stroke();
}
function showInitialG(){
    can.lineWidth="2";
    can.strokeStyle="blue";
    can.beginPath();
    can.moveTo(155,60);
    can.lineTo(155,50);
    can.lineTo(115,50);
    can.lineTo(115,109.5);
    can.lineTo(155,109.5);
    can.lineTo(155,90);
    can.lineTo(140,90);
    can.stroke();
}
function showInitialS(){
    can.lineWidth="2";
    can.strokeStyle="orange";
    can.beginPath();
    can.moveTo(210,50);
    can.lineTo(170,50);
    can.lineTo(170,80);
    can.lineTo(210,80);
    can.lineTo(210,109.5);
    can.lineTo(170,109.5);
    can.stroke();
    
}


function clearCanvas(){
    clearInterval(interval);
    can.clearRect(0,0,500,160);
}




