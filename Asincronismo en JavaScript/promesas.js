const somethingsWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("hey");
    } else {
      let error = new Error("Error en el metodo 1");
      reject(error);
    }
  });
};

// somethingsWillHappen()
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const somethingsWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("true");
      }, 2000);
    } else {
      const error = new Error("NOOOO");
      reject(error);
    }
  });
};

somethingsWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

Promise.all([somethingsWillHappen(), somethingsWillHappen2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((error) => {
    console.error("Algo salio mal");
  });
