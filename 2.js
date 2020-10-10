function Count_vowels(text){
//keva
  let countVokal = 0
  const vokal = ['a','i','u','e','o']
  for(let i = 0;i<text.length;i++){
    if(vokal.includes(text[i])){
      countVokal++
    }
  }

  return countVokal
}
const param = 'programmer'
Count_vowels(param)