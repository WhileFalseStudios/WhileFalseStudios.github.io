
var GalleryDict = { };

var GalleryCounter = 0;

function getGeneratedGalleryId(id)
{
    return 'generated_gallery_id_' + id;
}

var GalleryPrototype = Object.create(HTMLDivElement.prototype);

GalleryPrototype.slideIndex = 1;

GalleryPrototype.showDivs = function(n)
{
    var i;
    var x = this.getElementsByClassName('mySlides');
    var dots = this.getElementsByClassName('demo');
    if (n > x.length) {this.slideIndex = 1} 
    if (n < 1) {this.slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" wfs-demo-selected", "");
    }
    x[this.slideIndex-1].style.display = "block"; 
    dots[this.slideIndex-1].className += " wfs-demo-selected";
}

GalleryPrototype.plusDivs = function(n)
{
    this.showDivs(this.slideIndex += n);
}

GalleryPrototype.currentDiv = function(n)
{
    this.slideIndex = n;
    this.showDivs(n);
}

GalleryPrototype.attachedCallback = function()
{
    this.className = 'wfs-gallery';

    this.style.maxWidth = '800px';

    var galleryName = getGeneratedGalleryId(GalleryCounter);
    GalleryDict[getGeneratedGalleryId(GalleryCounter)] = this;

    var images = this.getAttribute('images');

    var image_json = JSON.parse(images);

    for (var i = 0; i < image_json.images.length; i++)
    {
        var image = document.createElement('img');
        var href = document.createElement('a');
        href.setAttribute('href', image_json.images[i]);
        image.className = 'mySlides';
        image.style.width = '100%';
        image.setAttribute('src', image_json.images[i]);
        this.appendChild(href);
        href.appendChild(image);
    }

    var button_container = document.createElement('div');
    button_container.className = 'wfs-gallerybar';
    button_container.style.width = '100%';
    //button_container.style.display = 'inline-block';
    //button_container.style.transform = 'translateY(-200%)';
    this.appendChild(button_container);

    var left_btn = document.createElement('div');
    left_btn.className = 'wfs-icon wfs-icon-left material-icons';
    left_btn.onclick = function(e){e.target.parentElement.parentElement.plusDivs(-1)};
    left_btn.textContent = 'keyboard_arrow_left';

    var right_btn = document.createElement('div');
    right_btn.className = 'wfs-icon wfs-icon-right material-icons';
    right_btn.onclick = function(e){e.target.parentElement.parentElement.plusDivs(+1)};
    right_btn.textContent = 'keyboard_arrow_right';

    button_container.appendChild(left_btn);
    button_container.appendChild(right_btn);

    for (var i = 0; i < image_json.images.length; i++)
    {
        var button = document.createElement('span');
        button.setAttribute('index', i + 1);
        button.className = 'demo wfs-badge';
        button.onclick = function(e){e.target.parentElement.parentElement.currentDiv(parseInt(e.target.getAttribute('index')))};
        button_container.appendChild(button);
    }

    GalleryCounter++;
    this.showDivs(this.slideIndex);

};

document.registerElement('wfs-gallery', {
    prototype: GalleryPrototype,
    extends: 'div'
});