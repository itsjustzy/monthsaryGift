/* --- Countdown Clock Logic --- */
function updateTimer() {
    const now = new Date();
    let targetDate = new Date();
    
    // Countdown targets the 16th of this month (or next month if the 16th already passed)
    if (now.getDate() < 16) {
        targetDate.setDate(16);
    } else {
        targetDate.setMonth(targetDate.getMonth() + 1);
        targetDate.setDate(16);
    }
    targetDate.setHours(0, 0, 0, 0);

    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = "<span style='font-family: \"Press Start 2P\", cursive; font-size: 0.8rem; color: var(--pixel-red);'>HAPPY MONTHSARY, CLARISE! 🏆</span>";
        clearInterval(intervalId);
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = d < 10 ? '0' + d : d;
    document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
    document.getElementById('mins').innerText = m < 10 ? '0' + m : m;
    document.getElementById('secs').innerText = s < 10 ? '0' + s : s;
}

updateTimer();
const intervalId = setInterval(updateTimer, 1000);


/* --- Memory Data Stack (37 Cards) --- */
const cardData = [
    { id: 37, name: "<3", desc: "ABANG ABANG MAKUHA SILA", imagePath: "abangustomakuha.jpg" },
    { id: 36, name: "<3", desc: "PIC WITH LAPPY", imagePath: "piclappy.jpg" },
    { id: 35, name: "<3", desc: "alagang alaga siya", imagePath: "nails.jpg" },
    { id: 34, name: "<3", desc: "GALING NI KATNISS", imagePath: "katniss.jpg" },
    { id: 33, name: "<3", desc: "payat pa natin here", imagePath: "first meet.jpg" },
    { id: 32, name: "<3", desc: "steak and salmon combo", imagePath: "foodie!.jpg" },
    { id: 31, name: "<3", desc: "BUTI NAPAYAGAN HAWHAHWHAWHHAW", imagePath: "galawithfam.jpg" },
    { id: 30, name: "<3", desc: "STOLEN PIC HAWHHAWHAHWHA", imagePath: "goingdown.jpg" },
    { id: 29, name: "<3", desc: "YUN OH JACKPOT SI KOYA", imagePath: "hot.jpg" },
    { id: 28, name: "<3", desc: "SARAPPPP BLUEBERRY MATCHA", imagePath: "loghouse.jpg" },
    { id: 27, name: "<3", desc: "WOW RICH TITA?!?!?", imagePath: "mayora.jpg" },
    { id: 26, name: "<3", desc: "ang aking princess", imagePath: "misisko.jpg" },
    { id: 25, name: "<3", desc: "HAWHHAWHAHWHAWHAHW GOOD BJ HEAVEN", imagePath: "momol.jpg" },
    { id: 24, name: "<3", desc: "nakuha ren natin sila finally!", imagePath: "moodenglilo.jpg" },
    { id: 23, name: "<3", desc: "Checking out new menus and testing flavors.", imagePath: "coffee.jpg" },
    { id: 22, name: "<3", desc: "ENJOYED THE MOVIE", imagePath: "moviedate.jpg" },
    { id: 21, name: "<3", desc: "hahatid na siya sa school", imagePath: "offtoschool.jpg" },
    { id: 20, name: "<3", desc: "3 PEATTTTTTTTTT", imagePath: "3years.jpg" },
    { id: 19, name: "<3", desc: "iyak pagtapos class eh", imagePath: "offtoschoolagain.jpg" },
    { id: 18, name: "<3", desc: "rich looking wowza", imagePath: "outfitcheck.jpg" },
    { id: 17, name: "<3", desc: "YUMMY LAVA CAKE AND FOODDDD", imagePath: "pepper.jpg" },
    { id: 16, name: "<3", desc: "first momol", imagePath: "annivfirst.jpg" },
    { id: 15, name: "<3", desc: "pogi and maganda", imagePath: "photo.jpg" },
    { id: 14, name: "<3", desc: "YELLOWWWWWWW", imagePath: "bdayceleb.jpg" },
    { id: 13, name: "<3", desc: "heheheh with juju", imagePath: "picbday.jpg" },
    { id: 12, name: "<3", desc: "finding bookmark", imagePath: "booktag.jpg" },
    { id: 11, name: "<3", desc: "PRONTO PRONTO PRONTO", imagePath: "pronto.jpg" },
    { id: 10, name: "<3", desc: "Out late", imagePath: "0.5.jpg" },
    { id: 9,  name: "<3", desc: "AGAIN AGAIN AGAIN", imagePath: "prontoagain.jpg" },
    { id: 8,  name: "<3", desc: "parang mhie at dhie after eh", imagePath: "annivsecond.jpg" },
    { id: 7,  name: "<3", desc: "WOW YAYAMANIN", imagePath: "sb.jpg" },
    { id: 6,  name: "<3", desc: "100% super-like compatibility score generated.", imagePath: "cute.jpg" },
    { id: 5,  name: "<3", desc: "GOOD FOOODDDDD", imagePath: "steak.jpg" },
    { id: 4,  name: "<3", desc: "Frames on frames on frames.", imagePath: "annivbooth.jpg" },
    { id: 3,  name: "<3", desc: "kunwari hindi nilalamig", imagePath: "sweet.jpg" },
    { id: 2,  name: "<3", desc: "LLAO LLAO FTW!", imagePath: "llaollao.jpg" },
    { id: 1,  name: "<3", desc: "Where the adventure first kicked off.", imagePath: "first.jpg" }
];


/* --- Tinder Swipe Engine --- */
const deck = document.getElementById('deck');
const emptyMsg = document.getElementById('emptyMsg');

// Dynamically compile cards from data structure array
cardData.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('tinder-card');
    
    // Check if user specified a real picture link, fallback to geometric SVG placeholder if empty
    const imageSrc = data.imagePath ? data.imagePath : `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='340' height='300' viewBox='0 0 340 300'><rect width='100%' height='100%' fill='%23eae7e1'/><text x='50%25' y='50%25' font-family='&quot;Press Start 2P&quot;, monospace' font-size='10' fill='%231a1a1a' dominant-baseline='middle' text-anchor='middle'>Memory #${data.id}</text><text x='50%25' y='65%25' font-family='Inter, sans-serif' font-size='11' fill='%23707070' dominant-baseline='middle' text-anchor='middle'>[INSERT PHOTO]</text></svg>`;

    card.innerHTML = `
        <div class="card-photo">
            <img src="${imageSrc}" alt="${data.name}">
        </div>
        <div class="card-info">
            <h3 class="card-name">${data.name}</h3>
            <p class="card-desc">${data.desc}</p>
        </div>
    `;
    deck.appendChild(card);
});

// Capture generated card references inside DOM array safely in active rendering order.
// cardData is ordered 47 -> 1, so DOM order is 47 (first) ... 1 (last).
// No reverse: cards[last] = id 1 (First Date, top of stack, swiped first),
// cards[0] = id 47 (Current Moment, bottom, swiped last).
let cards = Array.from(deck.querySelectorAll('.tinder-card'));
let activeCardIndex = cards.length - 1;

// Assign z-index so the visual stack matches the active index:
// higher index = higher in the stack, so the active card always sits on top.
cards.forEach((card, i) => {
    card.style.zIndex = i;
});

let isDragging = false;
let startX = 0;
let currentX = 0;

function initSwipe() {
    if (activeCardIndex < 0) {
        emptyMsg.style.display = 'flex';
        return;
    }
    const card = cards[activeCardIndex];

    // Remove old listeners to prevent stacking bugs
    const newCard = card.cloneNode(true);
    card.parentNode.replaceChild(newCard, card);
    cards[activeCardIndex] = newCard;

    // cloneNode drops inline z-index, so reapply it to keep the active card on top
    newCard.style.zIndex = activeCardIndex;

    newCard.addEventListener('touchstart', (e) => startDrag(e.touches[0].clientX), { passive: true });
    newCard.addEventListener('touchmove', (e) => moveDrag(e.touches[0].clientX), { passive: true });
    newCard.addEventListener('touchend', endDrag);

    newCard.addEventListener('mousedown', (e) => startDrag(e.clientX));
}

// Global mouse tracking handlers for smooth desktop dragging
window.addEventListener('mousemove', (e) => { if (isDragging) moveDrag(e.clientX); });
window.addEventListener('mouseup', endDrag);

function startDrag(clientX) {
    if (activeCardIndex < 0) return;
    isDragging = true;
    startX = clientX;
    cards[activeCardIndex].style.transition = 'none';
}

function moveDrag(clientX) {
    if (!isDragging || activeCardIndex < 0) return;
    currentX = clientX - startX;
    const card = cards[activeCardIndex];
    const rotation = currentX / 15;
    card.style.transform = `translateX(${currentX}px) rotate(${rotation}deg)`;
}

function endDrag() {
    if (!isDragging || activeCardIndex < 0) return;
    isDragging = false;
    const card = cards[activeCardIndex];
    
    if (currentX > 120) {
        dismissCard(1); 
    } else if (currentX < -120) {
        dismissCard(-1); 
    } else {
        card.style.transition = 'transform 0.3s ease';
        card.style.transform = 'translateX(0) rotate(0deg)';
    }
    currentX = 0;
}

function dismissCard(direction) {
    if (activeCardIndex < 0) return;
    const card = cards[activeCardIndex];
    card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    card.style.transform = `translateX(${direction * 500}px) rotate(${direction * 30}deg)`;
    card.style.opacity = '0';
    card.style.pointerEvents = 'none';

    activeCardIndex--;
    initSwipe();
}

// Fixed Button Event Handlers to match visual stack order
document.getElementById('nopeBtn').addEventListener('click', () => {
    if (activeCardIndex >= 0) {
        dismissCard(-1);
    }
});

document.getElementById('likeBtn').addEventListener('click', () => {
    if (activeCardIndex >= 0) {
        dismissCard(1);
    }
});

// Start the engine
initSwipe();