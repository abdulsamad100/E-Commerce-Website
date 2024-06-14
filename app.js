const api = fetch('https://fakestoreapi.com/products');
api.then(function (res) {
  return res.json();
}).then(function (posts) {
  const maindiv = document.getElementById("main");
  for (let i = 0; i < posts.length; i++) {
    const thisPost = posts[i];
    let h1 = `<h1 id="${thisPost.id}">${thisPost.title}</h1>`;
    let img = `<img src="${thisPost.image}" alt="">`;
    let price = `<p>${thisPost.price}$</p>`;
    let addToCart = `<button class="cartbtn" onclick="showSuccessMessage()">Add to Cart</button>`;

    if (thisPost.id == 6 || thisPost.id == 8) {
      img = `<img id="overflow" src="${thisPost.image}" alt="">`;
    }

    const div = `<div class="card">${img + h1 + price + addToCart}</div>`;
    maindiv.innerHTML += div;
  }
});

function showSuccessMessage() {
  const fadeDiv = document.getElementById('fade');
  fadeDiv.classList.remove('displaynone');
  setTimeout(() => {
    fadeDiv.classList.add('displaynone');
  }, 1500);
}
function search(){
  var tosearch=document.getElementById("searchBox").value
  console.log(tosearch);
  window.location.hash=tosearch;
}
