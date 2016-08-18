function translate3d(x, y, z)
{
    return "translate3d(" + x.toString() + "px, " + y.toString() + "px, " + z.toString() + "px)";
}

function InitMovingBackground(item)
{
    $(document).ready(function()
    {
        $(document).mousemove(function(e)
        {
            var xDiff = e.pageX - ($(item).width() / 2);
            var yDiff = e.pageY - ($(item).width() / 2);
            $(item).css('transform', translate3d(xDiff / 50, yDiff / 50, 0));
        });
    });
}