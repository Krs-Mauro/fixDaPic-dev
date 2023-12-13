const hideApp = () => {
  document.getElementById("root").style.display = "none";

  const main = document.querySelector("main");
  main.style.display = "block";

  document.querySelector("body").scrollIntoView({ behavior: "smooth" });
};

export default hideApp;
