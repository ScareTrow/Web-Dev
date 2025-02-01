let styles = ["Jazz", "Bluz"];
styles.push("Rock&Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classic";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
