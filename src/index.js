
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

// console.log('project wired!')
const aTags = document.querySelectorAll('nav a')


aTags.forEach((el, i) => {
  const navInx = 'nav-item-' + (i+1)
  el.textContent = siteContent.nav[navInx]
  el.className = 'italic'
})


//CTA
document.querySelector('h1').textContent = siteContent.cta['h1'];
document.querySelector('button').textContent = siteContent.cta['button'];

const headers = document.querySelectorAll('.main-content h4')
const pTags = document.querySelectorAll('.main-content p')

const keys = Object.keys(siteContent["main-content"])
let headerPTR = 0;
let pTagPTR = 0;

for(let i=0; i<keys.length; i++){
  const key = keys[i];
  if(i % 2 === 0){
    headers[headerPTR].textContent = siteContent["main-content"][key];
    headerPTR++;
  }
  else {
    pTags[pTagPTR].textContent = siteContent["main-content"][key];
    pTagPTR++;
  }
}

// for(let i=0; i<headers.length;i++){
//   headers[i].textContent = siteContent["main-content"][i]
//   pTags[i].textContent = siteContent["main-content"][i]
// }

// //FEATURES
// headers[0].textContent = siteContent["main-content"]["features-h4"]
// pTags[0].textContent = siteContent["main-content"]["features-content"]
// //ABOUT
// headers[1].textContent = siteContent["main-content"]["about-h4"]
// pTags[1].textContent = siteContent["main-content"]["about-content"]
// //SERVICES
// headers[2].textContent = siteContent["main-content"]["services-h4"]
// pTags[2].textContent = siteContent["main-content"]["services-content"]
// //PRODUCT
// headers[3].textContent = siteContent["main-content"]["product-h4"]
// pTags[3].textContent = siteContent["main-content"]["product-content"]
// //VISION
// headers[4].textContent = siteContent["main-content"]["vision-h4"]
// pTags[4].textContent = siteContent["main-content"]["vision-content"]

//CONTACT
const contactHead = document.querySelector('.contact h4')
const contactP = document.querySelectorAll('.contact p')


contactHead.textContent = siteContent.contact["contact-h4"]

contactP[0].textContent = siteContent.contact.address
contactP[1].textContent = siteContent.contact.phone
contactP[2].textContent = siteContent.contact.email

//FOOTER
const footerA = document.querySelector('footer a')
footerA.className = 'bold'
footerA.textContent = siteContent.footer.copyright


const logo = document.getElementById('logo-img');
logo.src = "http://localhost:9000/img/logo.png"

const ctaImg = document.getElementById('cta-img');
ctaImg.src="http://localhost:9000/img/cta.png"

const midImg = document.getElementById('middle-img')
midImg.src = "http://localhost:9000/img/accent.png"
