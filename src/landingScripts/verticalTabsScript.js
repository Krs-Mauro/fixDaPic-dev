const verticalTabsScript = () => {
  const openTab = (event, imageId) => {
    const tabContent = document.getElementsByClassName("imageContainer");

    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    const tabs = document.getElementsByClassName("tabs");

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" activeButton", "");
    }

    document.getElementById(imageId).style.display = "block";
    event.currentTarget.className += " activeButton";
  };

  window.openTab = openTab;
};

export default verticalTabsScript;
