function searchproduct() {

const input = document.getElementById('searchbar').value.toUppercase()
;
const cardContainer= document.getElementById('card-lists');
console.log(cardContainer);

const cards= document.getElementById('card');
console.log(cards);


for(let i = 0;i<cards.length ; i++ )
{

let title = cards[i].querySelector(".card-body h5.card-title");
console.log(title);

if(title.innerText.toUpperCase.indexof(input) > -1)
  {
  cards[i].style.display = "" ;
  }
else
{
    cards[i].style.display = "none" ;
} 

}

}