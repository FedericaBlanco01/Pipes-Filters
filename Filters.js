    function upperCase(string) {
    return string.toUpperCase();
  }

  function revert(string) {
    return string.split("").reverse().join("");
  }
  function length(string) {
    return string + string.length;
  }

  function descontarIVA(inputs){
    let total = 0;
    inputs.forEach(element => {
        total += element - (element * 0.22)
    });
    return total;
  }
  
  function calcularGanancia(sumatoria){
    if(sumatoria < 50000){
        return sumatoria * 0.80 ;
    } else if(sumatoria <= 100000){
        return sumatoria * 0.75 ;
    }else if(sumatoria > 100000){
        return sumatoria * 0.70 ;
    }
  }

  module.exports = { descontarIVA, calcularGanancia};