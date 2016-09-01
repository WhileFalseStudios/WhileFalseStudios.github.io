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

function GoDark()
{
    $('#main-style').attr('href', '/css/site-dark.css');
    alert('1973 Mode Engaged!');
}