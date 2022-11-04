// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  
  document.querySelector("#btn-generate").addEventListener("click", () => {  
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

function generateExcuse () {
  let who = ['the dog','my granma','his turtle','my bird'];
  let what = ['eat','pissed','crushed','broked'];
  let item = ['my homework','my report','my backpack','my car keys','my skateboard']
  let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

  let whoInd = who[Math.floor(Math.random() * who.length )];
  let whatInd = what[Math.floor(Math.random() * what.length)];
  let itemInd = item[Math.floor(Math.random() * item.length)]
  let whenInd = when[Math.floor(Math.random() * when.length)];

  return whoInd + " " + whatInd + " " + itemInd + " " + whenInd;
}
};
