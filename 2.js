function isiArray(param1,param2) {
  let init = 2;
  let arr = [];
  for(let i = 0; i < param1; i++){
    for(let j = 0; j < param2; j++){
      arr.push(`${init} `);
      init += 6;
    }
    arr.push("\n");
  }
  return arr.join("");
}

isiArray(3,5);