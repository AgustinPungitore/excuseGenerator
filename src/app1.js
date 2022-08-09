const who = ["the dog", "the cat", "my parents", "my girlfriend"];
const verb = ["ate", "broked", "humillated", "crushed"];
const when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];
const what = ["my homework", "my Playstation", "my heart", "my car"];

for (i = 0; i < who.length; i++) {
  for (j = 0; j < verb.length; j++) {
    for (k = 0; k < what.length; k++) {
      for (z = 0; z < when.length; z++) {
        console.log(who[i] + verb[j] + what[k] + when[z]);
      }
    }
  }
}
