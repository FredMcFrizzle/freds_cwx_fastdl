const ITEMS_PER_PAGE = 16;
let currentPage = 0;

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

  const start = currentPage * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const visibleItems = userInventory.slice(start, end);

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
  const totalPages = Math.ceil(userInventory.length / ITEMS_PER_PAGE);
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage >= totalPages - 1;
}

function updatePageDisplay() {
  const pageDisplay = document.getElementById('pageDisplay');
  const totalPages = Math.max(1, Math.ceil(userInventory.length / ITEMS_PER_PAGE));
  pageDisplay.textContent = `${currentPage + 1} / ${totalPages}`;
}

function preview(item) {
    const qualities = ['Normal', 'Unique', 'Vintage', 'Genuine', 'Strange', 'Unusual', 'Haunted', 'Collectors', 'Community', 'Valve'];
    itemPreview.innerHTML = `<img src="${item.id}" alt="${item.name}">;`;
    qualities.forEach(q => itemPreview.classList.remove(q));
    itemPreview.classList.add(`${item.quality}`);

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
  if (currentPage > 0) {
    currentPage--;
    renderInventory();
  }
});

nextBtn.addEventListener('click', () => {
  const maxPage = Math.floor(userInventory.length / ITEMS_PER_PAGE);
  if (currentPage < maxPage) {
    currentPage++;
    renderInventory();
  }
});

renderInventory();