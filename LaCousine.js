const dishes = [
  { name: 'Mole Negro', region: 'Oaxaca, Mexico', category: 'Latin America', letter: 'M', image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=85', story: 'A dark, layered sauce where chile, cacao, spice and patience become something much larger than their ingredients.', maker: 'The women of Oaxaca', facts: ['Ancient roots', '7 chiles', 'Slow cooked'] },
  { name: 'Ramen', region: 'Tokyo, Japan', category: 'Asian', letter: 'R', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85', story: 'A bowl built on contrast: springy noodles, a deep broth, and the small rituals that turn lunch into a daily devotion.', maker: 'The ramen-ya', facts: ['Noodle craft', 'Umami', 'Everyday icon'] },
  { name: 'Cacio e Pepe', region: 'Rome, Italy', category: 'European', letter: 'C', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=85', story: 'Three humble things and one Roman technique. The magic is in the emulsion, not the ingredient list.', maker: 'Roman trattorias', facts: ['3 ingredients', 'Roman classic', '15 minutes'] },
  { name: 'Jollof Rice', region: 'Lagos, Nigeria', category: 'African', letter: 'J', image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=900&q=85', story: 'The great West African table debate, carried by tomato, pepper and the smoky bottom of the pot.', maker: 'West African kitchens', facts: ['One-pot dish', 'Big flavor', 'Table debate'] },
  { name: 'Peking Duck', region: 'Beijing, China', category: 'Michelin dishes', letter: 'P', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=85', story: 'Crisp skin, delicate pancakes and a ceremony of slicing. A dish that made presentation part of the flavor.', maker: 'The imperial kitchens', facts: ['600 years', 'Crisp skin', 'Ceremonial'] },
  { name: 'Feijoada', region: 'Rio de Janeiro, Brazil', category: 'Latin America', letter: 'F', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85', story: 'A slow Sunday stew that asks everyone to stay a little longer. Black beans, pork and a whole social rhythm.', maker: 'Brazilian home cooks', facts: ['Sunday ritual', 'Slow food', 'Communal'] },
  { name: 'Mansaf', region: 'Amman, Jordan', category: 'Middle East', letter: 'M', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85', story: 'Lamb, jameed and rice served on one generous platter: hospitality made edible.', maker: 'Jordanian families', facts: ['Bedouin roots', 'Shared plate', 'Jameed'] },
  { name: 'Apple Pie', region: 'New England, USA', category: 'American', letter: 'A', image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=900&q=85', story: 'A familiar slice with a long journey behind it, made American by memory, spice and a warm kitchen.', maker: 'The American table', facts: ['Comfort food', 'Autumn spice', 'Classic'] }
];

const regionDishes = {
  Mexico: dishes[0], Italy: dishes[2], Japan: dishes[1], Ethiopia: { name: 'Doro Wat', region: 'Addis Ababa, Ethiopia', category: 'African', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85', story: 'A berbere-laced chicken stew that gathers people around injera and makes time feel generous.', maker: 'Ethiopian households', facts: ['Berbere spice', 'Celebration dish', 'Shared by hand'] }, Peru: { name: 'Ceviche', region: 'Lima, Peru', category: 'Latin America', image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=900&q=85', story: 'Bright, briny and immediate: the coast captured in citrus, chile and the freshest catch.', maker: 'The Peruvian coast', facts: ['Fresh catch', 'Citrus cured', 'Coastal'] }
};

const grid = document.querySelector('#dish-grid');
const search = document.querySelector('#dish-search');
const letters = document.querySelector('#letter-filter');
const dialog = document.querySelector('#dish-dialog');
let activeLetter = 'all';

function renderLetters() {
  const available = [...new Set(dishes.map(dish => dish.letter))].sort();
  letters.innerHTML = `<button class="active" data-letter="all" type="button">All</button>${available.map(letter => `<button data-letter="${letter}" type="button">${letter}</button>`).join('')}`;
  letters.addEventListener('click', event => {
    const control = event.target.closest('[data-letter]');
    if (!control) return;
    activeLetter = control.dataset.letter;
    letters.querySelectorAll('button').forEach(button => button.classList.toggle('active', button === control));
    renderDishes();
  });
}

function renderDishes() {
  const query = search.value.toLowerCase().trim();
  const visible = dishes.filter(dish => (activeLetter === 'all' || dish.letter === activeLetter) && [dish.name, dish.region, dish.category].join(' ').toLowerCase().includes(query));
  grid.innerHTML = visible.length ? visible.map((dish, index) => `<article class="dish-card" data-dish="${dishes.indexOf(dish)}" style="animation-delay:${index * 55}ms"><img src="${dish.image}" alt="${dish.name}"><div class="dish-info"><p class="kicker">${dish.category} / ${dish.region}</p><h3>${dish.name}</h3><p>${dish.maker}</p></div></article>`).join('') : '<p class="empty-state">No dish found yet. Try another letter or place.</p>';
}

function openDish(dish) {
  document.querySelector('#dialog-image').src = dish.image;
  document.querySelector('#dialog-image').alt = dish.name;
  document.querySelector('#dialog-meta').textContent = `${dish.category} / ${dish.region}`;
  document.querySelector('#dialog-title').textContent = dish.name;
  document.querySelector('#dialog-text').textContent = dish.story;
  document.querySelector('#dialog-facts').innerHTML = dish.facts.map(fact => `<span>${fact}</span>`).join('');
  dialog.showModal();
}

grid.addEventListener('click', event => { const card = event.target.closest('[data-dish]'); if (card) openDish(dishes[Number(card.dataset.dish)]); });
search.addEventListener('input', renderDishes);
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

document.querySelector('#random-button').addEventListener('click', () => openDish(dishes[Math.floor(Math.random() * dishes.length)]));

const globe = document.querySelector('#globe-panel');
function setRegion(region) {
  const dish = regionDishes[region];
  document.querySelector('#atlas-region').textContent = region;
  document.querySelector('#atlas-image').src = dish.image;
  document.querySelector('#atlas-image').alt = dish.name;
  document.querySelector('#atlas-country').textContent = dish.region;
  document.querySelector('#atlas-dish').textContent = dish.name;
  document.querySelector('#atlas-description').textContent = dish.story;
  document.querySelectorAll('.map-pin').forEach(pin => pin.classList.toggle('active', pin.dataset.region === region));
  document.querySelector('#atlas-open').onclick = () => openDish(dish);
}

document.querySelectorAll('.map-pin').forEach(pin => pin.addEventListener('click', () => setRegion(pin.dataset.region)));
let dragging = false; let startX = 0; let rotation = 0;
globe.addEventListener('pointerdown', event => { dragging = true; startX = event.clientX; globe.setPointerCapture(event.pointerId); });
globe.addEventListener('pointermove', event => { if (!dragging) return; rotation += (event.clientX - startX) * .18; startX = event.clientX; globe.style.transform = `rotateY(${rotation}deg) rotateX(${Math.sin(rotation / 80) * 3}deg)`; });
globe.addEventListener('pointerup', () => { dragging = false; });

renderLetters(); renderDishes(); setRegion('Mexico');
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.style.animationPlayState = 'running'; }), { threshold: .15 });
document.querySelectorAll('.reveal').forEach(element => { element.style.animationPlayState = 'paused'; observer.observe(element); });
