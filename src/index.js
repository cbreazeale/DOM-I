
const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')
const navBar = document.getElementsByClassName('container')
const cta = document.getElementsByClassName('cta')
const main = document.getElementsByClassName('main-content')
const contact = document.getElementsByClassName('contact')
// contact.appendChild(document.createElement('h4'))

// const h4 = contact.appendChild(document.createElement('h4'))
// h4.textContent = 'Contact'



const aTags = document.querySelectorAll('a')
aTags[0].textContent = "Services"
aTags[1].textContent = "Product"
aTags[2].textContent = "Vision"
aTags[3].textContent = "Features"
aTags[4].textContent = "About"
aTags[5].textContent = "Contact"



aTags.forEach(el => {
  el.className = 'italic'
})

aTags[6].className = 'bold'
aTags[6].textContent = "Copyright Great Idea! 2021"


const logo = document.getElementById('logo-img');
logo.src = "http://localhost:9000/img/logo.png"

const ctaImg = document.getElementById('cta-img');
ctaImg.src="http://localhost:9000/img/cta.png"

const midImg = document.getElementById('middle-img')
midImg.src = "http://localhost:9000/img/accent.png"
