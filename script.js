const toggleSwitch = document.querySelector('input[type="checkbox"]')

// Switch Theme function
function SwitchTheme(event) {
	// console.log(event.target.checked)
	if (event.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark")
		darkMode() // For the indiv elements
	} else {
		document.documentElement.setAttribute("data-theme", "light")
		lightMode() // For the indiv elements
	}
}

// Event listener
toggleSwitch.addEventListener("change", SwitchTheme)

// For brute force changing elements
const nav = document.getElementById("nav")
const toggleIcon = document.getElementById("toggle-icon")
const image_01 = document.getElementById("image_01")
const image_02 = document.getElementById("image_02")
const image_03 = document.getElementById("image_03")
const textBox = document.getElementById("text-box")

// Dark Mode styles
function darkMode() {
	nav.style.backgroundColor = "rgb(0 0 0 / 50%)"
	textBox.style.backgroundColor = "rgb(255 255 255 / 50%)"
	// Changing the toggle icon
	toggleIcon.children[0].textContent = "Dark Mode"
	toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")

	// Changing the images
	imageThemeSwitch("dark")
}

// Light mode styles
function lightMode() {
	nav.style.backgroundColor = "rgb(255 255 255 / 50%)"
	textBox.style.backgroundColor = "rgb(0 0 0 / 50%)"
	// Changing the toggle icon
	toggleIcon.children[0].textContent = "Light Mode"
	toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")

	// Changing the images
	imageThemeSwitch("light")
}

// Changing the images
function imageThemeSwitch(color) {
	// Changing the images
	image_01.src = `img/undraw_proud_coder_${color}.svg`
	image_02.src = `img/undraw_feeling_proud_${color}.svg`
	image_03.src = `img/undraw_conceptual_idea_${color}.svg`
}

// Detecting the system theme
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
if (darkThemeMq.matches) {
	// Theme set to dark.
	console.log("Dark")
	toggleSwitch.checked = true
	document.documentElement.setAttribute("data-theme", "dark")
	darkMode()
} else {
	console.log("Light")
	// Theme set to light.
}
