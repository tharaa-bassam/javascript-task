let name = ["tharaa", "ghena", "eman"];

function capitalize(names) {
  let capitalizedNames = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
  return capitalizedNames;
}

console.log(capitalize(name));
