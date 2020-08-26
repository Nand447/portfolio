		window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav").style.background = "white";
        document.getElementById("nand1").style.color = "black";
        document.getElementById("nand2").style.color = "black";
        document.getElementById("nand3").style.color = "black";
        document.getElementById("nand4").style.color = "black";
        document.getElementById("nand5").style.color = "black";
        document.getElementById("nand6").style.color = "black";
        document.getElementById("nand6").style.filter = "black";
    } else {
        document.getElementById("nav").style.background = "black";
        document.getElementById("nand1").style.color = "white";
        document.getElementById("nand2").style.color = "white";
        document.getElementById("nand3").style.color = "white";
        document.getElementById("nand4").style.color = "white";
        document.getElementById("nand5").style.color = "white";
        document.getElementById("nand6").style.color = "white";
    }
  
}


function just() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });







    function best() {
    document.body.scrollTop = 575;
    document.documentElement.scrollTop = 575;
}
    function test() {
    document.body.scrollTop = 1150;
    document.documentElement.scrollTop = 1150;
}
    function skill() {
    document.body.scrollTop = 1880;
    document.documentElement.scrollTop = 1880;
}
    function contact() {
    document.body.scrollTop = 2380;
    document.documentElement.scrollTop = 2380;
}
