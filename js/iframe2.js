var test2 = "test2"
$(document).ready(function() {
    //$('#Overlay1Div').overlay().close();
    $('h3').css("color", "red");

    $('xxp').click(function(e) {
        alert("p clicked iframe2 " + "parent.test1 = " + parent.test1);
        return false;
    });

//        target.find("*").andSelf().prop("onmouseover", null).prop("onchange", null).prop("onclick", null).prop("ondblclick", null).prop("onfocus", null).prop("onkeydown", null).prop("onkeypress", null).prop("onmouseover", null).prop("onkeypress", null).prop("onload", null).prop("onmousedown", null).prop("onmouseup", null).prop("onmousemove", null).prop("onmouseout", null).prop("onreset", null).prop("onselect", null).prop("onsubmit", null).prop("onunload", null);
       $("*").andSelf().prop("onmouseover", null).prop("onchange", null).prop("onxxxclick", null).prop("ondblclick", null).prop("onfocus", null).prop("onkeydown", null).prop("onkeypress", null).prop("onmouseover", null).prop("onkeypress", null).prop("onload", null).prop("onmousedown", null).prop("onmouseup", null).prop("onmousemove", null).prop("onmouseout", null).prop("onreset", null).prop("onselect", null).prop("onsubmit", null).prop("onunload", null).prop("contextmenu", null);

 //parent.$("*").trigger("click");

});
