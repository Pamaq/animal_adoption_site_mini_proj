const img = document.querySelector("img");
const btn = document.querySelector(".btn");
const URL = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click", () => {
	fetch(URL)
		.then((res) => res.json())
		.then((data) => img.setAttribute("src", data.message))
		.catch((err) => console.error(err));
});
