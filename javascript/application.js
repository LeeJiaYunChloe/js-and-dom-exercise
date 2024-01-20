console.log("Hello from JavaScript!");

// const abba = ['bjorn', 'benny', 'ami', 'agnetta'];
// let content = '';

// abba.forEach((element) => {
//   content += `<li>${element}</li>`;
// });

// content = `<ul>${content}</ul>`;
// console.log(content);
// document.body.insertAdjacentHTML('beforeend', content);

const element = document.getElementById("agnetta");
console.log(`${element.innerText}: ${element.dataset.instrument}`);

const picture = document.getElementById("romain");
picture.addEventListener("click", (thing) => {
  console.log("Yo Wassup");
  console.log(thing.currentTarget);
});

const testClick = document.getElementById("testTest");
console.log(testClick);
testClick.addEventListener("click", (newThing) => {
  console.log("Slay Yo!");
  console.log(newThing.currentTarget);
  newThing.currentTarget.classList.toggle("testEvent");
});
