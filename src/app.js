/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let who = ["the dog", "the cat", "my parents", "my girlfriend"];
let verb = ["ate", "broked", "humillated", "crushed"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let what = ["my homework", "my Playstation", "my heart", "my car"];

function onLoad() {
  //write your code here

  // for (let i = 0; i < who.length; i++) {
  //   for (let j = 0; j < verb.length; j++) {
  //     for (let k = 0; k < what.length; k++) {
  //       for (let z = 0; z < when.length; z++) {
  //         document.write(who[i] + verb[j] + what[k] + when[z]);
  //       }
  //     }
  //   }
  // }

  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * verb.length);
  let random3 = Math.floor(Math.random() * what.length);
  let random4 = Math.floor(Math.random() * when.length);

  document.write(
    who[random1] +
      " " +
      verb[random2] +
      " " +
      what[random3] +
      " " +
      when[random4]
  );
}
onLoad();
