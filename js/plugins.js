////////////////////////////////////
(function () {
    var menuElements = document.getElementById("navbar-menu").children;
    var cards = document.getElementsByClassName("card-parent");
    var cardLength = cards.length;
    var i = 0;
    var length = menuElements.length;

    for(i;i < length ; i++){
        menuElements[i].firstChild.addEventListener("click",sortCards,false);
    }

    function sortCards(event) {
        var data = this.getAttribute("data-section");
        if(data >= 0){
            event.preventDefault();
        }

        var z =0;
        if(data == 0){
            for (z; z < cardLength ; z++){
                cards[z].style.display = "block";
                cards[z].style.opacity = 1;
            }
        }else {
            for (z; z < cardLength ; z++){
                var elementValue = cards[z].getAttribute("data-section");
                if(elementValue == data){
                    cards[z].style.display = "block";
                    cards[z].style.opacity = 1;
                    console.log(cards[z]);
                }else {
                    cards[z].style.opacity = 0;
                    cards[z].style.display = "none";
                }

            }
        }
    }
})();