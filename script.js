// Array of stylesheets to load on page load
const stylesheets = [
	"./css/variables.css",
	"./css/atoms.css",
	"./css/molecules.css",
	"./css/some.css",
];

// Load stylesheets
stylesheets.forEach((stylesheet) => {
	const link = document.createElement("link");
	link.href = stylesheet;
	link.rel = "stylesheet";
	document.head.appendChild(link);
});
