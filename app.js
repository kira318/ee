document.querySelector("#menu-toggle").addEventListener("click", function(e) {
  e.preventDefault();
  if(document.querySelector("#wrapper").classList.contains("toggled")){
    document.querySelector("#wrapper").classList.remove("toggled");
  }else{
    document.querySelector("#wrapper").classList.add("toggled");
  }
});


// FILTERS FUNCTIONS 

// default price and rating
document.querySelector(".price-range").innerHTML = document.querySelector(".price-form-range").value
document.querySelector(".rating-range").innerHTML = document.querySelector(".rating-form-range").value

// function for price change
function updatePriceRange(val){
  document.querySelector(".price-range").innerHTML = val
}
// function for rating change
function updateRatingRange(val){
  document.querySelector(".rating-range").innerHTML = val
}