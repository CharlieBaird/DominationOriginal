function numberToString(num) {
    let numStr = String(num);
    if (Math.abs(num) < 1.0) {
        let e = parseInt(num.toString().split('e-')[1]);
        if (e) {
            let negative = num < 0;
            if (negative) num *= -1
            num *= Math.pow(10, e - 1);
            numStr = '0.' + (new Array(e)).join('0') + num.toString().substring(2);
            if (negative) numStr = "-" + numStr;
        }
    }
    else {
        let e = parseInt(num.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            num /= Math.pow(10, e);
            numStr = num.toString() + (new Array(e + 1)).join('0');
        }
    }
    return numStr;
}

function friendlyNum(num) {
  var num = numberToString(num);
  console.log(num);
  let friendlyList = ["M", "B", "T", " Quad", " Quint", " Sext", " Sept", " Oct", " Non", "*10<sup>33</sup>"];
  if (String(num).length > 5) {
    var length = (Math.floor(Number(String(num).length-1)/3))-2; //issue here somewhere
    let remainder = String(num).length%3;
    let num2 = String(num).substr(0,4)

    let myVar = String(num).search(".");
    let myNum = 9.7
    let myVar2 = String(myNum).search("0");
    if (String(num).search(".") != 0) {
      let word1 = String(num).substr(0,1);
      let word2 = String(num).substr(2,num.length);
      num = word1 + word2;
      // console.log("word1 is -" + word1 + "- word2 is -" + word2 + "-" + num);
    }

    if (remainder == 0) {
      let str1 = num2.substr(0,3);
      let str2 = num2.substr(3,1);
      let str3 = (str1 + "." + str2);
      str3 = str3 + friendlyList[length];
      return (str3);
    }
    else if (remainder == 1) {
      let str1 = num2.substr(0,1);
      let str2 = num2.substr(1,3);
      let str3 = (str1 + "." + str2);
      str3 = str3 + friendlyList[length];
      return (str3);
    }
    else if (remainder == 2) {
      let str1 = num2.substr(0,2);
      let str2 = num2.substr(2,2);
      let str3 = (str1 + "." + str2);
      str3 = str3 + friendlyList[length];
      return (str3);
    }
  }
  else {
    return (num);
  }
}

// console.log(friendlyNum(1101000)) // 1.000M 1,101,000
// console.log(friendlyNum(12010001)) // 1.000M
// console.log(friendlyNum(130100011)) // 1.000M
// console.log(friendlyNum(1401000111)) // 1.000M
// console.log(friendlyNum(15010001111)) // 1.000M
// console.log(friendlyNum(160100011111)) // 1.000M
// console.log(friendlyNum(1701000111111)) // 1.000M
// console.log(friendlyNum(18010001111111)) // 1.000M
// console.log(friendlyNum(190100011111111)) // 1.000M
// console.log(friendlyNum(190100011111111111111136576235726823647236482634862374)) // 1.000M
// console.log(friendlyNum(128824214421)) //128,824,214,421 128.8B
// console.log(friendlyNum(32473264762)) //  32,473,264,762 32.47B
// console.log(friendlyNum(376587326576237856723)) //376,587,326,576,237,856,723 376.5 Quintillion
// console.log(friendlyNum(621784612876417264712641677777777777))
console.log(friendlyNum(12000000000000000));

