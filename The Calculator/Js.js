$(document).ready(function(e) {
  var final_result = $('#final_result');
  var res = 0;
  var numbers = [];
      numbers[0] = 0;
    $('.but').click(function(){
      var v = $(this).val();	
      $('#result')[0].innerHTML += v
      if(!res){
        numbers[0] += $(this).val();
      }else {
        numbers[1] += $(this).val();
      }
    });
    $('.clear').click(function(){
      $('#result')[0].innerHTML = ''
      final_result[0].innerHTML = ''
      numbers[0] = 0;
      numbers[1] = 0;
      numbers[2] = '';
      res = 0
    });
    $('.operations').click(function(){
      var op = $(this).val();
      $('#result')[0].innerHTML += $(this).val()
      numbers[1] = 0
      numbers[2] = op
      res = numbers[0]
    })
    $('#equals').click(function(){
      get_final_res(numbers);
    })
function get_final_res(number_result){
  if(number_result[2] === '+'){
    res = Number(number_result[0]) + Number(number_result[1])
  }else if(number_result[2] === '-'){
    res = Number(number_result[0]) - Number(number_result[1])
  }else if (number_result[2] === '*') {
    res = Number(number_result[0]) * Number(number_result[1])
  }else if (number_result[2] === '/') {
    res = Number(number_result[0]) / Number(number_result[1])
  }
  final_result[0].innerHTML = res
  number_result[0] = res
}
});
