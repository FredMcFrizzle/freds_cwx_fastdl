import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase, ref, set, get, push, child } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";
	
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBj3YZIxw4X7_FK-SrAjA89uYfE2WfVWp0",
  authDomain: "tf2server-invsystem.firebaseapp.com",
  databaseURL: "https://tf2server-invsystem-default-rtdb.firebaseio.com",
  projectId: "tf2server-invsystem",
  storageBucket: "tf2server-invsystem.firebasestorage.app",
  messagingSenderId: "613269989407",
  appId: "1:613269989407:web:4055049653d12a122d8d2a",
  measurementId: "G-G3HPZFW9R2"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



const ITEMS_PER_PAGE = 16;
let currentPage = 0;
let playerInv = [];
let selectedItem = null;

const steamInfo = getSteamInfo();
console.log("Steam Info:", steamInfo);

async function loadInventory(id) {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, `inventories/${id}`));
  if (snapshot.exists())  
  {
    console.log("inventory:", snapshot.val());
    const inventory = await get(child(dbRef, `inventories/${id}/items`))
    if (inventory.exists())
    {
      return inventory.val();
    }
    else
    {
      return [];
    }
  } 
  else 
  {
    console.log("No inventory found user, creating inventory...");
    try {
      await set(child(dbRef, `inventories/` + id), {
        items: [
          {
            "name": "",
            "id": "",
            "quantity": 0,
            "quality": "",
            "sound": "",
            "uid": "",
            "stats": [
              {"text": "No stats available", "color": "Description"}
            ]
          }
        ]
      });
      console.log("Default inventory created.");
      return [];
    } catch (e) {
      console.error("Failed to create default inventory:", e);
      return [];
    }
  }
}

const qualityTextColors = {
    Normal: '#B2B2B2',
    Unique: '#FFD700',
    Vintage: '#476291',
    Genuine: '#4D7455',
    Strange: '#CF6A32',
    Unusual: '#8650AC',
    Haunted: '#38F3AB',
    Collectors: '#AA0000',
    Community: '#70B04A',
    Valve: '#A50F79'
};

const inventoryEl = document.getElementById('inventory');
const itemPreview = document.getElementById('item-preview');
const itemName = document.getElementById('name');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const equip = document.getElementById('equip');
const pageDisplay = document.getElementById('pageDisplay');
const InvTitle = document.getElementById('InvTitle');

const { steamID } = getSteamInfo();
loadInventory(steamID).then(inv => {
  playerInv = inv;
  renderInventory();
});

function renderInventory() {
  if (!Array.isArray(playerInv)) {
    playerInv = [];
  }
  inventoryEl.innerHTML = '';

  const start = currentPage * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const visibleItems = playerInv.slice(start, end);

  for (let i = 0; i < ITEMS_PER_PAGE; i++) {
    const item = visibleItems[i];
    const slot = document.createElement('div');
    slot.className = 'slot';

    if (item) {
        if (item.quantity > 1) {
            slot.innerHTML = 
            `<img src="${item.id}" alt="${item.name}"> 
            <div class="item-quantity">X${item.quantity}</div>`;
        }else{
            slot.innerHTML = 
            `<img src="${item.id}" alt="${item.name}">`;
        }
        slot.title = `${item.name} (x${item.quantity})`;
        slot.onclick = () => preview(item);
        slot.classList.add(`${item.quality}`)
    }
    else {
    slot.classList.add('empty'); // Add empty class to unused slots
    }

    inventoryEl.appendChild(slot);
  }

  updateButtons();
  updatePageDisplay();
  updateTitle();
}

function updateButtons() {
  const totalPages = Math.ceil(playerInv.length / ITEMS_PER_PAGE);
  prevBtn.disabled = currentPage <= 0;
  nextBtn.disabled = currentPage >= totalPages;
  equip.disabled = true;
}

function updatePageDisplay() {
  if (playerInv.length != 0)
  {
    pageDisplay.textContent = `${currentPage + 1} / ${Math.ceil(playerInv.length / ITEMS_PER_PAGE)}`;
  } else {
    pageDisplay.textContent = `Empty`
  }
}

function updateTitle() {
  const { steamName } = getSteamInfo();
  InvTitle.innerHTML = `<u>${steamName}'s Backpack:</u>`;
}


function preview(item) {
    selectedItem = item;
    const qualities = Object.keys(qualityTextColors);
    const grabSound = new Audio(`sound/pickup/${item.sound}.wav`);
    grabSound.play();
    itemPreview.innerHTML = `<img src="${item.id}" alt="${item.name}">;`;
    qualities.forEach(q => itemPreview.classList.remove(q));
    itemPreview.classList.add(`${item.quality}`);

    itemName.textContent = `${item.name}`;
    itemName.style.color = qualityTextColors[item.quality];
    itemName.style.fontFamily = "tf2build"
    itemName.style.marginTop = "2%"
    equip.disabled = false;
    equip.textContent = `EQUIP`

    const statsEl = document.getElementById("stats");
    if (Array.isArray(item.stats)) {
      statsEl.innerHTML = item.stats.map(stat => {
        if (typeof stat === 'string') {
          // support legacy string-only stats
          return `<div>${stat}</div>`;
        } else {
          const safeText = stat.text || '';
          const safeColor = stat.color || 'Neutral';
          const StatColor = attributeColors[safeColor] || 'white';
          return `<div style="color: ${StatColor}">${safeText}</div>`;
        }
      }).join('');
    } else {
      statsEl.innerHTML = `<div>No stats available</div>`;
    }
  }

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    renderInventory();
  }
});

nextBtn.addEventListener('click', () => {
  const maxPage = Math.floor(playerInv.length / ITEMS_PER_PAGE);
  if (currentPage < maxPage) {
    currentPage++;
    renderInventory();
  }
});

equip.addEventListener('click', () => {
  if (equip.disabled == false) {
    equip.disabled = true;
    const click = new Audio(`sound/buttonclick.wav`);
    click.play();
    SendToTF2();
    renderInventory();
  }
});
 
function SendToTF2() {
  fetch(`http://10.0.0.79:8081/?action=equip&steam=${steamID}&uid=${selectedItem.uid}`)
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function getSteamInfo() {
  const params = new URLSearchParams(window.location.search);
  return {
    steamID: params.get('steam'),
    steamName: decodeURIComponent(params.get('name'))
  };
}

renderInventory();