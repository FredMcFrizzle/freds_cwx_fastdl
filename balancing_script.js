const ITEMS_PER_PAGE = 16;
let currentClass = getClassFromURL();
let currentPage = 0;

function getCurrentInventory() {
  switch (currentClass) {
    case 1: return scout;
    case 2: return soldier;
    case 3: return pyro;
    case 4: return demoman;
    case 5: return heavy;
    case 6: return engineer;
    case 7: return medic;
    case 8: return sniper;
    case 9: return spy;
    default: return [];
  }
}

const classNames = {
  1: "Scout", 2: "Soldier", 3: "Pyro", 4: "Demoman",
  5: "Heavy", 6: "Engineer", 7: "Medic", 8: "Sniper", 9: "Spy"
};

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

function renderInventory() {
inventoryEl.innerHTML = '';
updateURL();

  const currentInventory = getCurrentInventory();
  const start = currentPage * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const visibleItems = currentInventory.slice(start, end);

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
}

function updateButtons() {
  const totalPages = Object.keys(classNames).length;
  prevBtn.disabled = currentClass <= 0;
  nextBtn.disabled = currentClass >= totalPages;
}

function updatePageDisplay() {
  pageDisplay.textContent = `${classNames[currentClass]}`;
}

function preview(item) {
    const qualities = Object.keys(qualityTextColors);
    itemPreview.innerHTML = `<img src="${item.id}" alt="${item.name}">;`;
    qualities.forEach(q => itemPreview.classList.remove(q));
    itemPreview.classList.add(`${item.quality}`);

    itemName.textContent = `${item.name}`;
    itemName.style.color = qualityTextColors[item.quality];
    itemName.style.fontFamily = "tf2build"
    itemName.style.marginTop = "2%"

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
  if (currentClass > 1) {
    currentClass--;
    renderInventory();
  }
});

nextBtn.addEventListener('click', () => {
  const maxPage = Object.keys(classNames).length;
  if (currentClass < maxPage) {
    currentClass++;
    renderInventory();
  }
});

function getClassFromURL() {
  const params = new URLSearchParams(window.location.search);
  const classParam = parseInt(params.get('class'));
  if (!isNaN(classParam) && classParam >= 1 && classParam <= 9) {
    return classParam;
  }
  return 1; // default to Scout if invalid or missing
}

function updateURL() {
  const newUrl = `${window.location.pathname}?class=${currentClass}`;
  window.history.replaceState(null, '', newUrl);
}

renderInventory();