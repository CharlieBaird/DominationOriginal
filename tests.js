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
  var friendlyList = ["M", "B", "T", " Quad", " Quint", " Sext", " Sept", " Oct", " Non"];
  if (didntForLoop == undefined) {
    var didntForLoop = true;
  }
  if (didntForLoop) {
    for (i=33; i<10000; i++) {
      if (i%3 == 0) {
        friendlyList.push(`*10<sup>${i}</sup>`);
      }
      var didntForLoop = false;
    }
  }
  if (String(num).length > 6) {
    var length = (Math.floor(Number(String(num).length-1)/3))-2;
    let remainder = String(num).length%3;
    let num2 = String(num).substr(0,4)

    let myVar = String(num).search(".");
    let myNum = 9.7
    let myVar2 = String(myNum).search("0");
    if (String(num).search(".") != 0) {
      let word1 = String(num).substr(0,1);
      let word2 = String(num).substr(2,num.length);
      num = word1 + word2;
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
console.log(friendlyNum(120000000000000007237489128463287463333333236273856782365786238756237856082657823723678562786578236587268975692873657182635782635789623785623785628736587236587926357823657823675826378561111111111111111111122233344455566677788899956378562879365872365987263523659786239587623879562783965978123653333333333344434));
console.log((String(120000000000000007237489128463287463333333236273856782365786238756237856082657823723678562786578236587268975692873657182635782635789623785623785628736587236587926357823657823675826378561111111111111111111122233344455566677788899956378562879365872365987263523659786239587623879562783965978123653333333333344434)));

