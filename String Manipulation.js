function manipulateString(str) {
    return function logString() {
      console.log("The manipulated string is: " + str.toUpperCase());
    };
  }
  const logManipulatedString = manipulateString("Hello World!");
  logManipulatedString();  