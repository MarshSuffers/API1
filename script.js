const myLink =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";
fetch(myLink)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
