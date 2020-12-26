function cetakPola(param1) {
    let arr = [];
    for (let i=1;i<=param1;i++){
          for (let j=1;j<=i;j++){
              arr.push(" ");
          }
          for (let k=i;k<=param1;k++){
              arr.push("* ");
          }
          for (let l=i+1;l<=param1;l++){
              arr.push("* ");
          }
          arr.push("\n");
      }
    return arr.join("");
  }
  
  
  cetakPola(7);