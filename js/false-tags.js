class WFSDrawer extends HTMLElement
{
    get open()
    {
        return this.hasAttribute('open');
    }

    set open(val)
    {
        if (val)
        {
            this.setAttribute('open', '');
        }
        else
        {
            this.removeAttribute('open');
        }

        this.ToggleDrawer();
    }

    get disabled()
    {
        return this.hasAttribute('disabled');
    }

    set disabled(val)
    {
        if (val)
        {
            this.setAttribute('disabled', '');
        }
        else
        {
            this.removeAttribute('disabled');
        }
    }

    constructor()
    {
        super();

        this.addEventListener('click', e=>
        {
            if (this.disabled)
            {
                return;
            }
            this.ToggleDrawer();
        });
    }

    ToggleDrawer()
    {
        console.log('drawer toggled');
    }

}

customElements.define('wfs-drawer', WFSDrawer);