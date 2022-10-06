// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.

//  TEST CASES:

        // convertToRoman(3) should return the string III.
        // convertToRoman(4) should return the string IV.
        // convertToRoman(5) should return the string V.
        // convertToRoman(9) should return the string IX.
        // convertToRoman(12) should return the string XII.
        // convertToRoman(16) should return the string XVI.
        // convertToRoman(29) should return the string XXIX.
        // convertToRoman(44) should return the string XLIV.
        // convertToRoman(45) should return the string XLV.
        // convertToRoman(68) should return the string LXVIII
        // convertToRoman(83) should return the string LXXXIII
        // convertToRoman(97) should return the string XCVII
        // convertToRoman(99) should return the string XCIX
        // convertToRoman(400) should return the string CD
        // convertToRoman(500) should return the string D
        // convertToRoman(501) should return the string DI
        // convertToRoman(649) should return the string DCXLIX
        // convertToRoman(798) should return the string DCCXCVIII
        // convertToRoman(891) should return the string DCCCXCI
        // convertToRoman(1000) should return the string M
        // convertToRoman(1004) should return the string MIV
        // convertToRoman(1006) should return the string MVI
        // convertToRoman(1023) should return the string MXXIII
        // convertToRoman(2014) should return the string MMXIV
        // convertToRoman(3999) should return the string MMMCMXCIX



function convertToRoman(num) {
 var res="";

 while(num>=1000){
   res+="M";
   num-=1000;
 }

 while(num>=900){
   res+="CM";
   num-=900;
 }

 while(num>=500){
   res+="D";
   num-=500;
 }

 while(num>=400){
   res+="CD";
   num-=400;
 }

 while(num>=100){
   res+="C";
   num-=100;
 }

 while(num>=90){
  res+="XC";
   num-=90;
 }

 while(num>=50){
   res+="L";
   num-=50;
 }

 while(num>=40){
   res+="XL";
   num-=40;
 }

 while(num>=10){
   res+="X";
   num-=10;
 }

 while(num>=9){
   res+="IX";
   num-=9;
 }

 while(num>=5){
   res+="V";
   num-=5;
 }

 while(num>=4){
   res+="IV";
   num-=4;
 }

 while(num>0){
   res+="I";
   num-=1;
 }
 
 return res;
}

convertToRoman(36);