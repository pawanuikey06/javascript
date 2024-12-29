

function sayhello(){
    console.log("hii");
}
clearTimeout(sayhello)
setTimeout(sayhello,4000)



let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);