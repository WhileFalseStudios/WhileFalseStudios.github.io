var mDrawerEnabled = true;

function ToggleMobileDrawer()
{
    mDrawerEnabled = !mDrawerEnabled;
    var menu = $('#wfs-mob-menu');
    var blackout = $('#blackout');

    if (mDrawerEnabled)
    {
        menu.css('left', '100%');
        blackout.css('background-color', 'rgba(0, 0, 0, 0)')
    }
    else
    {
        menu.css('left', '20%');
        blackout.css('background-color', 'rgba(0, 0, 0, 0.75)')
    }
}

//Drop down menus

function toggleDropDown(event) {
    console.log(event);
    console.log(event.target.attributes);
    var linked = event.target.getAttribute('linked');
    console.log(linked);
    document.getElementById(linked).classList.toggle("show");
    return false;
}

window.onclick = function(event) {
    console.log(event.target);
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName("wfs-dropdown-content");
        var i;
        for (i =0; i < dropdowns.length; i++) {
            var open = dropdowns[i];
            if (open.classList.contains('show')) {
                open.classList.remove('show');
            }
        }
    }
}