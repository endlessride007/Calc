/**
 * Created with JetBrains WebStorm.
 * User: gaurava
 * Date: 11/19/14
 * Time: 4:56 PM
 * To change this template use File | Settings | File Templates.
 */
  function Display(x){

      var obj = document.getElementById('txtID').innerHTML
      var b = Validate(obj,x);

  }

function calculate(){
    var x = document.getElementById('txtID').innerHTML;
    showResult(eval(document.getElementById('txtID').innerHTML));
}

function showResult(value){
    document.getElementById('txtID').innerHTML = value;
}

function Validate(x1,x){
    var len = x1.length;
    var str = x1.charAt(len-1);

    if ((str == "+" || str == "-" || str == "*" || str == "/" || str == "+") &&( x == "+"||x == "-" || x == "*" || x == "/" || x == ".") ){
        x1 = x1.replace(str,x);
        document.getElementById('txtID').innerHTML = x1 ;
    }
    else{
        document.getElementById('txtID').innerHTML += x ;
    }
}

function clearScreen(){
    document.getElementById('txtID').innerHTML = "" ;
}

function back(){
    var obj = document.getElementById('txtID').innerHTML;
    var len = obj.length;
    document.getElementById('txtID').innerHTML = obj.substr(0,len-1);
}

function divideCal(){
    var iCal = eval(document.getElementById('txtID').innerHTML);
    showResult(eval(1/iCal));
}