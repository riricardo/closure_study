//Closure of a function inside an event listener
function setup(id, fn) {
  document.getElementById(id).addEventListener("click", fn);
}

setup("btn1", () => {
  console.log(
    "This is a log closure example using the command pattern. The closure has a message array that stay in memory. It can add messages and print all.\n"
  );

  function logClosure() {
    let messages = [];

    return {
      log: (msg) => {
        messages.push(msg);
      },
      print: () => {
        console.log(messages.join("\n"));
      },
    };
  }

  const logger = logClosure();
  logger.log("First message");
  logger.log("Second message");
  logger.print();
  logger.log("Third message");
  logger.print();
});

setup("btn2", () => {
  alert("Button 2 clicked!");
});

setup("btn3", () => {
  alert("Button 3 clicked!");
});
