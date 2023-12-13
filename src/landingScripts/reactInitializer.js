import createRoot from "../main";

const reactInitializer = () => {
  const showApp = (user = false) => {
    document.querySelector("main").style.display = "none";

    const appDiv = document.getElementById("root");

    appDiv.style.display = "block";
    appDiv.scrollIntoView({ behavior: "smooth" });

    if (user) return createRoot(user);
    return createRoot();
  };

  window.showApp = showApp;
};

export default reactInitializer;
