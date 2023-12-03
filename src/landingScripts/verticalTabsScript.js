const verticalTabsScript = () => {
  const imageNames = {
    grainy: {
      base: "grainy.jpg",
      overlay: "grainyInverted.webp",
    },
    blurry: {
      base: "blurry.jpeg",
      overlay: "blurryInverted.webp",
    },
    scratched: {
      base: "scratched.jpeg",
      overlay: "scratchedInverted.webp",
    },
  };

  const openTab = (event, imageType) => {
    const tabs = document.getElementsByClassName("tabs");

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" activeButton", "");
    }

    document.getElementById("base").src = `/landingImages/${imageNames[imageType].base}`;
    document.getElementById("overlay").src = `/landingImages/${imageNames[imageType].overlay}`;
    event.currentTarget.className += " activeButton";
  };

  window.openTab = openTab;
};

export default verticalTabsScript;
