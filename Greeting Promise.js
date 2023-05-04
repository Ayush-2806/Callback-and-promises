function greet(name) {
    return new Promise((resolve, reject) => {
      if (typeof name === 'string') {
        resolve(`Hello, ${name}!`);
      } else {
        reject('Name should be a string');
      }
    });
  }

  greet("Mithun").then((message) =>{
    console.log(message);
  })