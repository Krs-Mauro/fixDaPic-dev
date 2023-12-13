import createRoot from "../main";

const reactInitializer = () => {
  if (window.location.pathname.includes("/app") || window.location.pathname.includes("/user")) {
    document.querySelector("main").style.display = "none";
    createRoot();
  } else {
    document.getElementById("root").style.display = "none";
    document.querySelector("main").style.display = "block";
  }
};

export default reactInitializer;
