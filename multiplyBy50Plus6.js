function problem(x){
  if (typeof x === 'string' || x === ""){
    return "Error"
  }else if (typeof x !== 'string'){
    return (x * 50) + 6
  }
}
