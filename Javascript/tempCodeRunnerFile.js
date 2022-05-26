function* helloWorld(a) {
  if (true) {
    console.log(a);
    b= yield (a*2) ;
    console.log(b);
  }
//   if (true) {
//     console.log(a);
//     yield a + " World";
//     console.log(a);
//   }
}

const generatorHello = helloWorld(2);

console.log(generatorHello.next(3));
console.log(generatorHello.next(4));