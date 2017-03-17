
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementById("subtitles").children;
    var sDisplay = document.getElementById("subtitle-display");
        var elementsLength = elements.length;
        var i;
        var subtitle =[];
        for (i =0;i< elementsLength ;i++){
            subtitle.push(elements[i].textContent.trim().split(""));
        }
        var index = 1;
        setInterval(function () {
            if (index >= elementsLength){
                index =0;
            }
            sDisplay.textContent = "";
            var element = subtitle[index];
            var eleLength = element.length;
            var count = 0;
            function frame() {
                if(count>=eleLength){
                    index++;
                    cancelAnimationFrame(id);
                }else {
                    sDisplay.innerHTML +=element[count];
                    count++;
                    id = requestAnimationFrame(frame);
                }
            }
            var id = requestAnimationFrame(frame);

        },7000);
    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    document.getElementById("menu-btn").addEventListener("click",menuBtn);
    function menuBtn() {
        var menu = document.getElementById("navbar-menu");

        if(this.classList.contains("change") && menu.style.display == "block"){
            menu.style.display = "none";
            this.classList.toggle("change");
        }else {
            this.classList.toggle("change");
            menu.style.display = "block";
        }
    }

    window.addEventListener("resize",function () {
        // var width = document.body.clientWidth;
        // var width2 = document.documentElement.clientWidth;
        var width = window.innerWidth;
        var menu = document.getElementById("navbar-menu");
        // var btn = document.getElementById("menu-btn");
        if(width >= 996){
            menu.style.display = "block";
        }else {
            menu.style.display= "none";
        }
    });


    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

    (function () {
        var cards = document.getElementsByClassName("card");
        var _length = cards.length;
        var i = 0;
        for(i;i < _length ; i++){
            cards[i].addEventListener("mouseover",setOpacity,false);
            cards[i].addEventListener("mouseout",setOut,false);
        }
        function setOpacity() {
            var z = 0;
            for(z;z < _length ;z++){
                cards[z].style.opacity = .4;
            }
            console.log(this);
            this.style.opacity = 1;
        }
        function setOut() {
            var x = 0;
            for(x;x < _length ;x++){
                cards[x].style.opacity = 1;
            }
        }
    })();

    //////////////////////// Change Color schem ///////////////////////////
    ///////////////////////////////////////////////////
    var themeLink = document.getElementById("color-schem");
    var colors = document.getElementById("color-Parent").children;
    for(var c = 0 ; c < colors.length; c++){
      colors[c].addEventListener("click",changeColor);
    }
    function changeColor(){
      themeLink.href = this.getAttribute("data-value");
    }
});
