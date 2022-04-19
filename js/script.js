
/* ###################################################### */ 
let dayElement = document.querySelector("#days");
let hourElement = document.querySelector("#hours");
let minElement = document.querySelector("#mins");
let secElement = document.querySelector("#sec");

function countDown(){
    const open = "14 May 2022";
    const openDate = new Date(open);
    const currentDate = new Date();

    const secounds = (openDate - currentDate)/1000;
    const days = Math.floor(secounds/3600/24);
    const hours = Math.floor(secounds/3600) % 24;
    const mins = Math.floor(secounds/60) % 60;
    const sec =  Math.floor(secounds) % 60;

    dayElement.innerHTML = days;
    hourElement.innerHTML = formatTime(hours);
    minElement.innerHTML = formatTime(mins);
    secElement.innerHTML = formatTime(sec);

}
setInterval(countDown,1000); 

function formatTime(time){
    return time;
}


/* ###################################################### */

(function(){
  let liElement = document.querySelector('#menuUl');
  const menuArray = ['početna', 'cenovnik', 'usluge', 'lokacije', 'kontakt'];
  
  menuArray.forEach( link => {
    liElement.innerHTML += 
     `<li class="nav-item">
         <a class="nav-link" href="#${link}">
          ${link}
          </a> 
      </li>`;
  });
})();


/* ###################################################### */


  /* ###################################################### */

const countersValue = document.querySelectorAll('.value');

  countersValue.forEach(counter => {
      counter.innerHTML = '0';

      (function(){
        const target = counter.getAttribute('data-target');
        const c =+counter.innerText;
        const increment = target/250;
          if(c<target) {
            counter.innerText = `${Math.ceil(c+increment)}`;
            window.setTimeout(arguments.callee, 1);
          }
        })();
  });




  /* ###################################################### */

 
  const priceList = [
      {
        priceTitle: 'Standard',
        time: '00-24',
        price: '3290',
        mon: '/mesečno',
        desc: 'Bez dodatnih troškova sve je uključeno u cenu'
      },
      {
        priceTitle: 'Student',
        price: '2790',
        time: '00-24  ',
        mon: '/mesečno',
        desc: 'Bez dodatnih troškova sve je uključeno u cenu'
      },
      {
        priceTitle: 'Dnevno',
        price: '2490',
        time: '06-16 ',
        mon: '/mesečno',
        desc: 'Bez dodatnih troškova sve je uključeno u cenu'
      },
  ];

  let priceBoxElement = document.querySelector('.pricing-card');

function price(priceElement){
  priceElement = priceList.map( list => {
    priceBoxElement.innerHTML += ` 
    <div class="col-lg-3">
      <div class="pricing-box"> 
        <h2 class="pricing-box-title">${list.priceTitle}</h2>
            <p>${list.time}</p>
            <h3>${list.price} RSD</h3>
            <p>${list.mon}</p>
            <span>${list.desc}</span>
            <button class="priceBtn">TRENIRAJ ODMAH</button>
        </div>
    </div>
    `;
})
return priceElement;
}

price();

   /* ###################################################### */


    const trainignList = [
        {
          training: 'Grupni treninzi',
          desc: 'Više od 30 različitih grupnih treninga i 120+ termina! Imamo treninge za sve nivoe fitnesa',
          img: 'grupniTreninzi.jpg',
          cat: 'trening'
        },
        {
            training: ' Personalni treninzi',
            desc: 'Početnik ili ne, personalni trener ti pomaže da ostaneš fokusiran i brže ostvariš svoje ciljeve!',
            img: 'grupniTreninzi.jpg',
            cat: 'trening'
        },
        {
            training: 'Ženska zona',
            desc: 'Svaka naša lokacija ima fitnes zonu ekskluzivnu za žene! Za treninge bez ometanja, bez pogleda!',
            img: 'grupniTreninzi.jpg',
            cat: 'zene'
        },
    ];

  let trainingZoneElement = document.querySelector('.trainingZone');
  
  const womenZone = trainignList.filter( training => training.cat === 'zene');

  function women(zone){
    zone = womenZone.forEach( x => {
      trainingZoneElement.innerHTML += `
      <div class="row womenZone">
        <div class="col-lg-5 training-img">
            <img src="img/${x.img}" alt="">
        </div>
        <div class="col-lg-6 training-box ">
          <h1>${x.training}</h1>
          <p>${x.desc}</p>
        </div></div>
        `;
    });
    return zone;
  }

  women();

  function trainign(zone){
    zone =  trainignList.forEach( t => {
      if(t.cat === 'trening'){
        trainingZoneElement.innerHTML +=  `
          <div class="row trainingZone" >
             <div class="col-lg-6 training-box ">
                <h1>${t.training}</h1>
                <p>${t.desc}</p>
            </div>
            <div class="col-lg-5 training-img">
              <img src="img/${t.img}" alt="">
            </div>
          </div>`;
        }
      })
    return zone;
  }

  trainign();

    

 /* ###################################################### */


const locationList = [
    {
    locationTitle: 'Zemun',
    address: 'Glavna 7',
    phone: '+3816412345678',
    img : 'card8.jpg'
  },
  {
    locationTitle: 'Dimitrijala',
    address: 'Dimitrija Tucovića 32',
    phone: '+3816412345678',
    img : 'card3.jpg'
  },
  {
   locationTitle: 'Autokomanda',
    address: 'Rudnička 1',
    phone: '+3816412345678',
    img : 'card1.jpg'
  },
  {
    locationTitle: 'Big Fashion',
    address: 'Višnjička 84',
    phone: '+3816412345678',
    img : 'card2.jpg'
  },

  {
    locationTitle: 'Novi Sad',
    address: 'Narodnih Heroja 1',
    phone: '+3816412345678',
    img : 'card5.jpg'
  },
  {
    locationTitle: 'Banovo Brdo',
    address: 'Požeška 31',
    phone: '+3816412345678',
    img : 'card6.jpg'
  },
  {
    locationTitle: 'Vojislava Ilića',
    address: 'Vojislava Ilića 73',
    phone: '+3816412345678',
    img : 'card7.jpg'
  },
    {
    locationTitle: 'Aviv Park',
    address: 'Živka Davidovića 86',
    phone: '+3816412345678',
    img : 'card4.jpg'
  },

];

/* */ 
let result = locationList.reduce((acc, person) => acc + 1, 0);
let dataLocation = document.getElementById('data-location');
dataLocation.textContent = result;


let locationElement = document.querySelector('#locationElements');

locationList.sort( (a, b) => {
  if(a.locationTitle < b.locationTitle) { return -1; }
  return 0;
});


(function(){
  locationList.forEach( (location) => {
    locationElement.innerHTML +=  `
      <div class="location-card">
      <div class="location-image">
    
          <img src="img/${location.img}" class="location-thumb" alt="">
      </div>
      <div class="location-info p-2">
          <h2 class="location-title p-2">${location.locationTitle}</h2>
          <p class="location-address p-2">${location.address}</p>
          <span class="phone">${location.phone}</span>
      </div>
  </div>
      `;
  });
})();



const locationContainers = document.querySelectorAll('.location-container');
const nxtBtn =document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

locationContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


/* ###################################################### */

let scroll =  () => window.scrollTo(0,0);

let scrollElement = document.getElementById('scroll');
scrollElement.onclick = scroll;

  /* ###################################################### */


 
 let odogvori = odgovor => (odgovor === "Da!") ? "Dobili ste 5% popusta na sledecu clanarinu!"
 : (odgovor === "Ne.") ? "Prvi trening je besplatan, poseti nas!"
 : (odgovor === "Ne, ali zelim biti!") ? "Ocekujemo te!"
 :  " Moras izabrati nesto od ponudjenih odgovora" 
 
 let vrati = () => document.program.sale[document.program.sale.selectedIndex].text;
 

