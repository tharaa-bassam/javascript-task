function changeImage() {
  var countrySelect = document.getElementById("countrySelect");
  var flagImage = document.getElementById("flagImage");

  var selectedCountry = countrySelect.value; 
  var flagImagePath = "";

  switch (selectedCountry) {
    case "norway":
      flagImagePath = "imges/norway-flag-removebg-preview (1).png";
      break;
    case "jordan":
      flagImagePath = "imges/jordan-flag-removebg-preview (1).png";
      break;

  }

  flagImage.src = flagImagePath;
}