const factBtn = document.querySelector("#factBtn");

factBtn.addEventListener("click", async (_) => {
  const factArea = document.querySelector("#fact");
  const lengthCount = document.querySelector("#lengthCount");
  const showFact = await getFact();
  factArea.innerHTML = showFact.fact;
  lengthCount.innerHTML = showFact.length;
});

const getFact = async (_) => {
  const fact = await fetch("https://catfact.ninja/fact").then((response) =>
    response.json(),
  );

  return fact;
};
