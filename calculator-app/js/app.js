const updateResultBar = (element) => {
  let result = document.getElementById("result").innerHTML;
  if (result == "0") {
    result = "";
  }
  result += element.innerHTML;
  document.getElementById("result").innerHTML = result;
};

const clearResult = () => {
  let result = document.getElementById("result").innerHTML;
  result = "0";
  document.getElementById("result").innerHTML = result;
};

const calculateResult = () => {
  let result = document.getElementById("result").innerHTML;
  if (result.includes("÷")) {
    result = result.replaceAll("÷", "/");
  } else if (result.includes("x")) {
    result = result.replaceAll("x", "*");
  }
  result = eval(result);
  document.getElementById("result").innerHTML = result;
};

const del = () => {
  let result = document.getElementById("result").innerHTML;
  let resultArr = result.split("");
  resultArr.pop();
  result = resultArr.join("");
  document.getElementById("result").innerHTML = result;
};
