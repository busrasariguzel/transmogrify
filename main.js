const biggify = function(num) {
  return num + 9000;
}

const nasafy = function(num) {
  let arr = [];
  for (let i=num; i>0; i--){
    arr.push(i)
}
arr.push('Blast off!')
return arr
}

const reversify = function(str) {
  return str.split('').reverse('').join('')
  
}

const titleify = function(str) {
  let newStr= ''
  str = str.toLowerCase();
  for (let i = 0; i<str.length; i++){
    if (str[i-1] === ' '){
      newStr = newStr+ str[i].toUpperCase();
    } else if (i===0){
      newStr = newStr+ str[i].toUpperCase();
    } else {
      newStr = newStr+ str[i].toLowerCase();
    }
  }
  return newStr
}

const crazify = function(str) {
let newStr = ''
let count = 0
  for (let i = 0 ; i<str.length; i++) {
    if (str[i] === ' ' ) {
      newStr += ' '
      }
    else if (count % 2 === 0) {
        newStr += str[i].toLowerCase()
        count++
    } else  {
        newStr +=str[i].toUpperCase()
        count++
      }
    }
    return newStr
  }


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}