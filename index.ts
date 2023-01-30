//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################

let mynumber1, mynumber2, mynumber3: number;

mynumber1 = parseInt(prompt('أكتب العدد الأول'));
mynumber2 = parseInt(prompt('أكتب العدد الثاني'));
mynumber3 = mynumber1 * mynumber2;

if (mynumber3 > 0) {
  console.log(' العدد موجب ');
} else {
  console.log(' العدد سالب ');
}
console.log(' النهاية ');
