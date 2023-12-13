const hideApp = () => {
  document.getElementById("root").style.display = "none";
  const main = document.querySelector("main");
  main.style.display = "block";
  main.scrollIntoView({ behavior: "smooth" });
};

export default hideApp;
