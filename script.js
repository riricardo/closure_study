//Closure of a function inside an event listener
function setup(id, fn) {
  document.getElementById(id).addEventListener("click", fn);
}

setup("btn1", () => {
  console.log(
    "This is a log closure example using the command pattern. The closure has a message array that stay in memory. It can add messages and print all."
  );

  function createClosureLogger(messages) {
    return {
      log: (msg) => {
        messages.push(msg);
      },
      print: () => {
        console.log(messages.join("\n"));
      },
    };
  }

  let messages = [];
  const logger = createClosureLogger(messages);
  logger.log("First message");
  logger.log("Second message");
  logger.print();
  logger.log("Third message");
  logger.print();
});

setup("btn2", () => {
  console.log(
    "The closure here is used to create a factory pattern having a custom way to define the logger."
  );

  function createClosureLogger(prefix) {
    return function (msg) {
      console.log(`[${prefix}] ${msg}`);
    };
  }

  const infoLogger = createClosureLogger("INFO");
  const errorLogger = createClosureLogger("ERROR");

  infoLogger("This is an informational message.");
  errorLogger("This is an error message.");
});

setup("btn3", () => {
  console.log(
    "This closure example demonstrates the usage of module pattern considering a situation of theme control."
  );

  function createClosureThemeManager() {
    let theme;
    let language;

    return {
      setTheme: (newTheme) => {
        theme = newTheme;
      },
      setLanguage: (newLanguage) => {
        language = newLanguage;
      },
      getSettings: () => {
        return { theme, language };
      },
    };
  }

  const themeManager = createClosureThemeManager();
  themeManager.setTheme("dark");
  themeManager.setLanguage("en");
  console.log(themeManager.getSettings());
});
