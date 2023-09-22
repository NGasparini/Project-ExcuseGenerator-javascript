function Excuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  var excuseWho = who[Math.floor(Math.random() * 4)];
  var excusesAction = action[Math.floor(Math.random() * 4)];
  var excuseswhat = what[Math.floor(Math.random() * 3)];
  var excuseswhen = when[Math.floor(Math.random() * 5)];

  var finalExcuse =
    "" +
    excuseWho +
    " " +
    excusesAction +
    " " +
    excuseswhat +
    " " +
    excuseswhen;

  document.getElementById("excuse").innerHTML = finalExcuse;
}
