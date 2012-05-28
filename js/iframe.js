var test1 = "test1"
$(document).ready(function() {
    
    
    ifr =  document.getElementById("iframe2").contentDocument;
    
    
    //$('#Overlay1Div').overlay().close();
    $('h3').css("color", "blue");

    $('p').click(function(e) {
        alert("p clicked");
        return false;
    });

    document.addEventListener("click",onContextMenu, true);  

        $(ifr).find("p").live("click", function (e) {
            e.preventDefault();
            alert("click from iframe.js");
        });

    function onContextMenu(e){
        alert("doc clk "+ test1);
        e.preventDefault();
        e.stopPropagation();
        
    }

});
