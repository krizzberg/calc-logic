//Biz logic

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

//UI logic
$(document).ready(function() {
  $("form#add").submit(function(event){
    event.preventDefault();
    var number1= parseInt($("#add1").val());
    var number2= parseInt($("#add2").val());
    var result = add(number1,number2);
    $("#output1").text(result);
  });
  $("form#subtract").submit(function(){
    event.preventDefault();
    var number1= parseInt($("#subtract1").val());
    var number2= parseInt($("#subtract2").val());
    var result = subtract(number1,number2);
    $("#output2").text(result);
  });
  $("form#multiply").submit(function(){
    event.preventDefault();
    var number1= parseInt($("#multiplication1").val());
    var number2= parseInt($("#multiplication2").val());
    var result = multiply(number1,number2);
    $("#output3").text(result);
  });
  $("form#divide").submit(function(){
    event.preventDefault();
    var number1= parseInt($("#division1").val());
    var number2= parseInt($("#division2").val());
    var result= divide(number1,number2);
    $("#output4").text(result);

  });
});
