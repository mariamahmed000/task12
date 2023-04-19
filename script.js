//dropdown list
function myFunction1(){
  document.getElementById("myDropdownUs").style.display="block"

}
function myFunction2(){
  document.getElementById("myDropdownEg").style.display="block"

}
function myFunction3(){
  document.getElementById("myDropdownFr").style.display="block"

}
function myFunction4(){
  document.getElementById("myDropdownIt").style.display="block"

}

window.onclick = function(e) {
  if (!e.target.matches('.butt')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    // console.log(dropdowns)
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      // console.log(openDropdown); 
      openDropdown.style.display='none'
    }
  }
}

//api

let api;
let country=document.querySelectorAll('ul li ')
var x;
// console.log(country);
let categ=document.querySelectorAll('.dropdown-content a')
var y;
// console.log(categ);
function news(){
  let x =getCountry()
  let y= getCategory()
  console.log(x)
  console.log(y)
  let reqHttp = new XMLHttpRequest();
  reqHttp.open('Get',`https://newsapi.org/v2/top-headlines?country=${x}&category=${y}&apiKey=00d42180233240a6afbf5edc68db09dc`)
  reqHttp.send();
  // console.log(y)
  // console.log(x)
  reqHttp.addEventListener("readystatechange", function () {
    if (reqHttp.readyState == 4) {
      api = JSON.parse(reqHttp.response).articles;
      console.log(api);
      displayData();
    }
  });
}
function getCountry() {
  // let x;
  for (let i = 0; i < country.length; i++) {
      country[i].addEventListener('click',function() {
          x=country[i].getAttribute('countryCode')
          console.log(x);
          return x;
          
        })
        // categ[i].addEventListener('click',function() {
        //   y=categ[i].getAttribute('categ')
        //   console.log(y)
        //   // return y;
        // })
        // news(x,y)
  }  
}

function getCategory() {
  // let y;
  let x=getCountry()
  console.log(x)
  for (let i = 0; i < categ.length; i++) {
    categ[i].addEventListener('click',function() {
      y=categ[i].getAttribute('categ')
      console.log(y)
      news(x,y)
    })
    // console.log(y) 
  }
  
}
// getCountry()
getCategory()
// news()  

// console.log(y)

// news()
// x=getCategory()
// y=getCountry()
// news(y)
// getCountry()
// getCategory()
// news()



function displayData() {
  let joj = ``;
  for (let i = 0; i < api.length; i++) {
    joj += `<div id="cards" class="cards">
    <div id="card-img" class="card-img">
    <img src="${api[i].urlToImage}" >
    <div id="content" class="content">
    <h3>${api[i].title}</h3>
    <p>${api[i].description}</p>
    </div>
    <div class="overlay"></div>
    <p class="author">${api[i].author}</p></div>
        </div>`;
    console.log("haloo");
  }
  document.getElementById("card").innerHTML = joj;
}
