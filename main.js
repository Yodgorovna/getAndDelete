const box = document.querySelector(".box");

const render = (data) => {
  box.innerHTML = data
    .map(
      (item) => `
    <div>
    <h1>${item.title}
    </h1>
    <button data-delete = '${item.id}'>delete</button></div>
  `
    )
    .join("");
};
const getData = () => {
  fetch("http://localhost:3600/todos", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      render(data);
    });
};

getData();

box.addEventListener("click", (e) => {
  if (e.target.dataset.delete) {
    fetch(`http://localhost:3600/todos/${e.target.dataset.delete}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        getData();
      });
  }
});
