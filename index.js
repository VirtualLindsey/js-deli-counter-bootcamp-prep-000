var katzDeliLine = []

let num = 0; 

function takeANumber(katzDeliLine){
  katzDeliLine.push(num + 1)
  return `You are ticket number ${num}.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${.shift()}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0 ){
    return "The line is currently empty."
  } else {
    var str = `The line is currently: 1. ${katzDeliLine[0]}`
    for (var i = 1; i < katzDeliLine.length; i++){
      str = str + `, ${i+1}. ${katzDeliLine[i]}`
    }
    return str
  }
}
