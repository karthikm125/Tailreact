let num =67
while(num>10){
 num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
  console.log(num);