module.exports = function toReadable (number) {
     const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
     const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
     const hundreds = ' hundred';
     let result;
 
     if (number < 20) return units[number];
     else{
          if (number < 100){
               result = (number%10 == 0) ? tens[number/10 - 2] : tens[Math.trunc(number/10 - 2)] + ' ' + units[number%10];
          }
          else
               result = (number%100 == 0) ? units[number/100] + hundreds : result = units[Math.trunc(number/100)] + hundreds + ' ' + toReadable(number%100);
          return result;
     }
}