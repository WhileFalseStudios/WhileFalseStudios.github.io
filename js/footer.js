window.onresize = function() { setHeader(); }
window.onload = function() { setHeader(); }

function setHeader()
{
    var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    var footer = document.getElementById("footer");
    var footerHeight = footer.offsetHeight;
    footer.style.top = height - footerHeight + "px";
}