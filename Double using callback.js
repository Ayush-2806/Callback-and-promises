function doubleArray(arr, callback) {
    const doubledArr = arr.map(callback);
    return doubledArr;
  }
  
  const arr = [1, 2, 3];
  const callback = (num) => num * 2;
  
  console.log(doubleArray(arr, callback));