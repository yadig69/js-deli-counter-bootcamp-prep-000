function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "currently serving" + katzDeliLine.shift() + ".";
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  let current = [];
  if (katzDeliLine.length > 0) {
    for ()
  }
}