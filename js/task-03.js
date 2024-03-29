const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');
galleryList.style.display = 'flex';
galleryList.style.flexWrap = 'wrap';
galleryList.style.gap = '30px';
galleryList.style.listStyle = 'none';

const imgEl = images.map(({ url, alt }) => {
  return `<li> <img src = '${url}' alt = '${alt}' width = 1280px ></li>`;
});

console.log(imgEl);

galleryList.insertAdjacentHTML('afterbegin', imgEl.join(''));
