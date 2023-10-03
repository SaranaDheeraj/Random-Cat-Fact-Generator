const generate = document.querySelector("button");
const ul = document.querySelector("ul");
const content = document.querySelector(".content");

const generateFact = async () => {
  try {
    const r = Math.floor(Math.random() * 139) + 1;
    const res = await axios.get(`https://catfact.ninja/facts?limit=140`);
    const facts = res.data.data;
    return facts[r].fact;
  } catch (e) {
    console.log(e);
  }
};

generate.addEventListener("click", async () => {
  while (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  }
  content.style.backgroundColor = "";
  content.style.marginBottom = "100px";

  const fact = await generateFact();
  const f = document.createElement("h5");
  f.innerText = fact;
  ul.append(f);
  content.style.backgroundColor = "#c5f6fa";
  content.style.marginBottom = "50px";
});
