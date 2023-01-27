// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery');
const items = []

galleryItems.forEach(element => {
    const galleryItem = document.createElement('div')
    galleryItem.className = 'gallery__item'
    const galleryLink =document.createElement('a')
    galleryLink.className = 'gallery__link'
    galleryLink.href = element.original
const galleryImage = document.createElement ('img')
galleryImage.className ='gallery__image'
galleryImage.src = element.preview
galleryImage.setAttribute('data-source', element.original)
galleryImage.alt = element.description

galleryItem.append(galleryLink)
galleryLink.append(galleryImage)
items.push(galleryItem)
})

gallery.append(...items)

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`)
    {
        onShow: () => {
            document.addEventListener('keydown', onEscapeButton);
        }
        onClose: () => {
            document.removeEventListener('keydown', onEscapeButton);
        }
    };

    instance.show()

    let gallery = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt'
       
    } );

    function onEscapeButton(evt) {
        if (evt.key === 'Escape') {
            instance.close();
        }
    }

    // document.addEventListener('keydown', e => {
    //     if (e.key === 'Escape') {
    //         instance.close()
    //     }
    // })
})


