const countElement = document.querySelector('.no_of_count');
const tech = document.getElementById("tech");
const Marketing = document.getElementById("Marketing");
const Engineering = document.getElementById("Engineering");
const Finance = document.getElementById("Finance");

(async function() {
  const response = await fetch('/login/count');
  const data = await response.json();
  if (countElement) {
    countElement.innerText = data.count;
  } else {
    console.error('Element with class "no_of_count" not found');
  }
})();


(async function() {
  const response = await fetch('/login/findSales');
  const data = await response.json();
  if (tech) {
    tech.innerText = data.count;
  } else {
    console.error('Element with class "no_of_count" not found');
  }
})();

(async function() {
  const response = await fetch('/login/findMarketing');
  const data = await response.json();
  if (Marketing) {
    Marketing.innerText = data.count;
  } else {
    console.error('Element with class "no_of_count" not found');
  }
})();

(async function() {
  const response = await fetch('/login/findEngineering');
  const data = await response.json();
  if (Engineering) {
    Engineering.innerText = data.count;
  } else {
    console.error('Element with class "no_of_count" not found');
  }
})();

(async function() {
  const response = await fetch('/login/findFinance');
  const data = await response.json();
  if (Finance) {
    Finance.innerText = data.count;
  } else {
    console.error('Element with class "no_of_count" not found');
  }
})();