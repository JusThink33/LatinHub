const recipe = (ingredients, steps) => ({ ingredients, steps });
const dishes = [
  { name: 'Mole Negro', region: 'Oaxaca, Mexico', category: 'Latin America', letter: 'M', image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=85', story: 'A dark, layered sauce where chile, cacao, spice and patience become something much larger than their ingredients.', maker: 'The women of Oaxaca', facts: ['Ancient roots', '7 chiles', 'Slow cooked'], recipe: recipe(['Dried ancho and pasilla chiles', 'Tomatillos and tomatoes', 'Cacao, sesame and spices', 'Chicken stock'], ['Toast the chiles, seeds and spices until fragrant.', 'Blend with roasted tomatoes, tomatillos and stock.', 'Simmer the sauce slowly until glossy and dark.', 'Finish with cacao, taste for salt, and serve warm.']) },
  { name: 'Ramen', region: 'Tokyo, Japan', category: 'Asian', letter: 'R', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85', story: 'A bowl built on contrast: springy noodles, a deep broth, and the small rituals that turn lunch into a daily devotion.', maker: 'The ramen-ya', facts: ['Noodle craft', 'Umami', 'Everyday icon'], recipe: recipe(['Ramen noodles', 'Chicken or vegetable stock', 'Soy, mirin and sesame oil', 'Egg, scallions and mushrooms'], ['Warm the stock with soy, mirin and sesame oil.', 'Cook the noodles separately until springy.', 'Layer noodles, broth and toppings in a hot bowl.', 'Serve immediately while the texture is alive.']) },
  { name: 'Cacio e Pepe', region: 'Rome, Italy', category: 'European', letter: 'C', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=85', story: 'Three humble things and one Roman technique. The magic is in the emulsion, not the ingredient list.', maker: 'Roman trattorias', facts: ['3 ingredients', 'Roman classic', '15 minutes'], recipe: recipe(['Spaghetti or tonnarelli', 'Pecorino Romano', 'Fresh cracked pepper', 'Salted pasta water'], ['Toast cracked pepper in a dry pan.', 'Boil pasta until just shy of al dente.', 'Whisk cheese with a little warm pasta water.', 'Toss pasta off heat until creamy, then serve.']) },
  { name: 'Jollof Rice', region: 'Lagos, Nigeria', category: 'African', letter: 'J', image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=900&q=85', story: 'The great West African table debate, carried by tomato, pepper and the smoky bottom of the pot.', maker: 'West African kitchens', facts: ['One-pot dish', 'Big flavor', 'Table debate'], recipe: recipe(['Long-grain rice', 'Tomatoes and red peppers', 'Onion, ginger and garlic', 'Stock and thyme'], ['Blend tomatoes, peppers, onion, ginger and garlic.', 'Cook the blended base until reduced and richly colored.', 'Stir in washed rice and stock.', 'Cover and steam gently until the bottom turns smoky.']) },
  { name: 'Peking Duck', region: 'Beijing, China', category: 'Michelin dishes', letter: 'P', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=85', story: 'Crisp skin, delicate pancakes and a ceremony of slicing. A dish that made presentation part of the flavor.', maker: 'The imperial kitchens', facts: ['600 years', 'Crisp skin', 'Ceremonial'], recipe: recipe(['Whole duck', 'Maltose or honey glaze', 'Thin pancakes', 'Cucumber, scallion and hoisin'], ['Dry the duck uncovered overnight for crisp skin.', 'Brush with glaze and roast until deeply bronzed.', 'Rest, then slice the skin and meat thinly.', 'Wrap with pancakes, herbs and hoisin.']) },
  { name: 'Feijoada', region: 'Rio de Janeiro, Brazil', category: 'Latin America', letter: 'F', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85', story: 'A slow Sunday stew that asks everyone to stay a little longer. Black beans, pork and a whole social rhythm.', maker: 'Brazilian home cooks', facts: ['Sunday ritual', 'Slow food', 'Communal'], recipe: recipe(['Black beans', 'Smoked sausage and pork', 'Onion, garlic and bay leaf', 'Rice, greens and orange'], ['Soak the beans, then drain and rinse.', 'Brown the pork and sausage with aromatics.', 'Add beans and water, then simmer until tender.', 'Serve with rice, greens and orange slices.']) },
  { name: 'Mansaf', region: 'Amman, Jordan', category: 'Middle East', letter: 'M', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85', story: 'Lamb, jameed and rice served on one generous platter: hospitality made edible.', maker: 'Jordanian families', facts: ['Bedouin roots', 'Shared plate', 'Jameed'], recipe: recipe(['Lamb shoulder', 'Jameed or tangy yogurt', 'Rice and flatbread', 'Almonds and parsley'], ['Simmer lamb with cardamom until tender.', 'Whisk the jameed sauce until smooth and warm.', 'Layer flatbread and rice on a large platter.', 'Place lamb over the rice and pour sauce generously.']) },
  { name: 'Apple Pie', region: 'New England, USA', category: 'American', letter: 'A', image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=900&q=85', story: 'A familiar slice with a long journey behind it, made American by memory, spice and a warm kitchen.', maker: 'The American table', facts: ['Comfort food', 'Autumn spice', 'Classic'], recipe: recipe(['Apples', 'Flour and butter pastry', 'Brown sugar and cinnamon', 'Lemon juice'], ['Roll the pastry and line a pie dish.', 'Toss sliced apples with sugar, spice and lemon.', 'Fill, cover with pastry, and vent the top.', 'Bake until the crust is deeply golden.']) }
];

const regionDishes = {
  Mexico: [dishes[0]], Italy: [dishes[2]], Japan: [dishes[1]],
  Ethiopia: [{ name: 'Doro Wat', region: 'Addis Ababa, Ethiopia', category: 'African', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85', story: 'A berbere-laced chicken stew that gathers people around injera and makes time feel generous.', maker: 'Ethiopian households', facts: ['Berbere spice', 'Celebration dish', 'Shared by hand'], recipe: recipe(['Chicken thighs', 'Berbere spice', 'Onions, garlic and ginger', 'Eggs and clarified butter'], ['Cook onions slowly until sweet and golden.', 'Add berbere, aromatics and butter to bloom the spice.', 'Simmer chicken in the sauce until tender.', 'Finish with boiled eggs and serve with injera.']) }],
  Peru: [{ name: 'Ceviche', region: 'Lima, Peru', category: 'Latin America', image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=900&q=85', story: 'Bright, briny and immediate: the coast captured in citrus, chile and the freshest catch.', maker: 'The Peruvian coast', facts: ['Fresh catch', 'Citrus cured', 'Coastal'], recipe: recipe(['Very fresh white fish', 'Lime juice', 'Red onion and ají', 'Cilantro and sweet potato'], ['Cut the fish into bite-sized pieces.', 'Season with salt, lime, onion and ají.', 'Let the citrus brighten the fish for a few minutes.', 'Serve immediately with sweet potato and corn.']) }],
  India: [{ name: 'Masala Dosa', region: 'Mysuru, India', category: 'Asian', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=85', story: 'A crisp fermented crepe wrapped around spiced potato, built for breaking and sharing.', maker: 'South Indian kitchens', facts: ['Fermented batter', 'Crisp and soft', 'Street classic'], recipe: recipe(['Rice and urad dal', 'Potatoes', 'Mustard seed and curry leaf', 'Coconut chutney'], ['Soak and blend rice and dal, then ferment overnight.', 'Cook potatoes with mustard seed and curry leaf.', 'Spread batter thinly on a hot pan.', 'Fill with potatoes and fold with chutney.']) }],
  France: [{ name: 'Ratatouille', region: 'Nice, France', category: 'European', image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&w=900&q=85', story: 'Summer vegetables arranged with care, proving that humble ingredients can still feel grand.', maker: 'Provençal cooks', facts: ['Summer harvest', 'Slow roasted', 'Mediterranean'], recipe: recipe(['Eggplant and zucchini', 'Tomato and bell pepper', 'Garlic and thyme', 'Olive oil'], ['Slice the vegetables into even rounds.', 'Layer them over a tomato and garlic base.', 'Drizzle with olive oil and thyme.', 'Bake slowly until tender and caramelized.']) }],
  'South Korea': [{ name: 'Bibimbap', region: 'Jeonju, South Korea', category: 'Asian', image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=900&q=85', story: 'A warm bowl of rice, colorful vegetables and gochujang stirred into one bright, balanced bite.', maker: 'Jeonju home cooks', facts: ['Colorful bowl', 'Gochujang', 'Balanced meal'], recipe: recipe(['Steamed rice', 'Seasonal vegetables', 'Egg', 'Gochujang and sesame oil'], ['Season and sauté each vegetable separately.', 'Arrange vegetables over hot rice.', 'Top with a fried egg and gochujang.', 'Stir everything together just before eating.']) }],
  Thailand: [{ name: 'Khao Soi', region: 'Chiang Mai, Thailand', category: 'Asian', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=85', story: 'Northern Thailand in one bowl: curry, noodles, lime and crisp texture in constant conversation.', maker: 'Northern Thai cooks', facts: ['Coconut curry', 'Northern Thai', 'Two textures'], recipe: recipe(['Egg noodles', 'Coconut milk', 'Red curry paste', 'Chicken, lime and pickles'], ['Fry the curry paste until fragrant.', 'Add coconut milk and chicken, then simmer.', 'Boil noodles and place them in bowls.', 'Pour over curry and top with crisp noodles and lime.']) }],
  Turkey: [{ name: 'Menemen', region: 'Izmir, Turkey', category: 'Middle East', image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=900&q=85', story: 'Soft eggs folded through tomato and pepper, made for a slow breakfast with torn bread.', maker: 'Aegean breakfast tables', facts: ['Breakfast classic', 'One pan', 'Shareable'], recipe: recipe(['Eggs', 'Tomatoes and green peppers', 'Olive oil', 'Crusty bread'], ['Soften peppers in olive oil.', 'Add tomatoes and cook until jammy.', 'Crack in eggs and fold gently.', 'Serve straight from the pan with bread.']) }],
  Australia: [{ name: 'Pavlova', region: 'Sydney, Australia', category: 'American', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85', story: 'A cloud of meringue with a crisp edge, soft center and fruit piled high.', maker: 'Australian bakers', facts: ['Crisp outside', 'Soft center', 'Celebration sweet'], recipe: recipe(['Egg whites', 'Caster sugar', 'Cornstarch and vinegar', 'Cream and fresh fruit'], ['Whip egg whites, adding sugar until glossy.', 'Fold in cornstarch and vinegar.', 'Bake low and slow until crisp outside.', 'Cool completely, then crown with cream and fruit.']) }]
};

const chefs = [
  { name: 'Gordon Ramsay', wiki: 'Gordon_Ramsay', role: 'The firebrand', place: 'London / United Kingdom', image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=85', dishes: [{ name: 'Beef Wellington', url: 'https://www.gordonramsay.com/gr/recipes/beef-wellington/' }, { name: 'Lobster ravioli', url: 'https://www.gordonramsay.com/gr/recipes/' }, { name: 'Sticky toffee pudding', url: 'https://www.gordonramsay.com/gr/recipes/' }] },
  { name: 'José Andrés', wiki: 'Jos%C3%A9_Andr%C3%A9s', role: 'The connector', place: 'Asturias / Spain', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=85', dishes: [{ name: 'Pan con tomate', url: 'https://www.foodandwine.com/recipes/pan-con-tomate' }, { name: 'Paella', url: 'https://www.foodandwine.com/recipes/paella' }, { name: 'Gazpacho', url: 'https://www.foodandwine.com/recipes/gazpacho' }] },
  { name: 'Dominique Crenn', wiki: 'Dominique_Crenn', role: 'The poet', place: 'San Francisco / USA', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=85', dishes: [{ name: 'Atelier Crenn tasting menu', url: 'https://www.ateliercrenn.com/' }, { name: 'Caviar and sea urchin', url: 'https://www.ateliercrenn.com/' }, { name: 'Vegetable garden', url: 'https://www.ateliercrenn.com/' }] },
  { name: 'Massimo Bottura', wiki: 'Massimo_Bottura', role: 'The provocateur', place: 'Modena / Italy', image: 'https://images.unsplash.com/photo-1574969903809-3f7a166f4f5b?auto=format&fit=crop&w=700&q=85', dishes: [{ name: 'Oops! I Dropped the Lemon Tart', url: 'https://osteriaalberghetto.com/' }, { name: 'Five Ages of Parmigiano Reggiano', url: 'https://www.osteriafrancescana.it/' }, { name: 'Tortellini', url: 'https://www.osteriafrancescana.it/' }] },
  { name: 'Hélène Darroze', wiki: 'H%C3%A9l%C3%A8ne_Darroze', role: 'The precise', place: 'Paris / France', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=85', dishes: [{ name: 'Poularde with truffle', url: 'https://www.helene-darroze.com/' }, { name: 'Foie gras', url: 'https://www.helene-darroze.com/' }, { name: 'Basque cheesecake', url: 'https://www.helene-darroze.com/' }] }
];

const grid = document.querySelector('#dish-grid');
const search = document.querySelector('#dish-search');
const letters = document.querySelector('#letter-filter');
const dialog = document.querySelector('#dish-dialog');
const chefSearch = document.querySelector('#chef-search');
const peopleGrid = document.querySelector('#people-grid');
const accessDialog = document.querySelector('#access-dialog');
const accessForm = document.querySelector('#access-form');
const accessPhrase = 'solo culpen a diego';
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
  document.querySelector('#dialog-ingredients').innerHTML = dish.recipe.ingredients.map(item => `<li>${item}</li>`).join('');
  document.querySelector('#dialog-steps').innerHTML = dish.recipe.steps.map(step => `<li>${step}</li>`).join('');
  document.querySelector('#recipe-guide').hidden = false;
  dialog.showModal();
}

grid.addEventListener('click', event => { const card = event.target.closest('[data-dish]'); if (card) openDish(dishes[Number(card.dataset.dish)]); });
search.addEventListener('input', renderDishes);
search.addEventListener('keydown', event => {
  if (event.key !== 'Enter') return;
  if (search.value.trim().toLowerCase() !== accessPhrase) return;
  event.preventDefault();
  accessForm.reset();
  document.querySelector('#access-status').textContent = '';
  accessDialog.showModal();
});
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.querySelector('#access-close').addEventListener('click', () => accessDialog.close());
accessDialog.addEventListener('click', event => { if (event.target === accessDialog) accessDialog.close(); });
accessForm.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#access-status').textContent = 'Server destination not configured yet.';
});

document.querySelector('#random-button').addEventListener('click', () => openDish(dishes[Math.floor(Math.random() * dishes.length)]));

function renderChefs() {
  const query = chefSearch.value.toLowerCase().trim();
  const visible = chefs.filter(chef => [chef.name, chef.role, chef.place, ...chef.dishes.map(dish => dish.name)].join(' ').toLowerCase().includes(query));
  peopleGrid.innerHTML = visible.length ? visible.map((chef, index) => `<article class="person-card reveal ${index === 0 ? 'person-large' : ''}" data-chef="${chefs.indexOf(chef)}" tabindex="0" role="button" aria-label="Open profile for ${chef.name}"><img src="${chef.image}" alt="Portrait of ${chef.name}"><div><p class="kicker">${chef.role}</p><h3>${chef.name.replace(' ', '<br>')}</h3><span>${chef.place}</span></div></article>`).join('') : '<p class="empty-state">No chef found. Try a name or famous dish.</p>';
}

function openChef(chef) {
  document.querySelector('#dialog-image').src = chef.image;
  document.querySelector('#dialog-image').alt = chef.name;
  document.querySelector('#dialog-meta').textContent = `${chef.role} / ${chef.place}`;
  document.querySelector('#dialog-title').textContent = chef.name;
  document.querySelector('#dialog-text').textContent = `${chef.name} is known for turning technique, instinct and a point of view into memorable plates.`;
  document.querySelector('#dialog-facts').innerHTML = chef.dishes.map(dish => `<a class="chef-dish-link" href="${dish.url}" target="_blank" rel="noreferrer">${dish.name} &#8599;</a>`).join('');
  document.querySelector('#recipe-guide').hidden = true;
  dialog.showModal();
}

peopleGrid.addEventListener('click', event => { const card = event.target.closest('[data-chef]'); if (card) openChef(chefs[Number(card.dataset.chef)]); });
peopleGrid.addEventListener('keydown', event => { const card = event.target.closest('[data-chef]'); if (card && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); openChef(chefs[Number(card.dataset.chef)]); } });
chefSearch.addEventListener('input', renderChefs);

async function fetchCountryDish(country) {
  const areaAliases = { 'United States of America': 'American', 'United Kingdom': 'British', 'South Korea': 'Korean', 'Czechia': 'Czech', 'United Arab Emirates': 'Egyptian' };
  const area = areaAliases[country] || country;
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${encodeURIComponent(area)}`);
    const result = await response.json();
    const meals = result.meals || [];
    if (meals.length) {
      const pick = meals[Math.floor(Math.random() * meals.length)];
      const detailResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${pick.idMeal}`);
      const detailResult = await detailResponse.json();
      const detail = detailResult.meals && detailResult.meals[0];
      if (detail) {
        const ingredients = Object.keys(detail).filter(key => key.startsWith('strIngredient') && detail[key]).map(key => `${detail[key]} ${detail[key.replace('strIngredient', 'strMeasure')] || ''}`.trim()).slice(0, 8);
        return { name: detail.strMeal, region: country, category: detail.strCategory || 'Local dish', image: detail.strMealThumb, story: detail.strInstructions || `A dish from ${country}, selected from the world's recipe table.`, maker: `A kitchen in ${country}`, facts: [detail.strArea || country, detail.strCategory || 'Traditional', 'Randomly selected'], recipe: recipe(ingredients, (detail.strInstructions || '').split('. ').filter(Boolean).slice(0, 5)) };
      }
    }
  } catch (error) {
    console.warn('Country dish lookup unavailable', error);
  }
  const fallback = dishes[Math.floor(Math.random() * dishes.length)];
  return { ...fallback, region: country, story: `A taste of ${country}, represented by ${fallback.name} while the recipe atlas finds its next local story.` };
}

async function setRegion(region) {
  const options = regionDishes[region];
  const status = document.querySelector('#atlas-status');
  status.textContent = `Finding a dish from ${region}...`;
  const dish = options ? options[Math.floor(Math.random() * options.length)] : await fetchCountryDish(region);
  document.querySelector('#atlas-region').textContent = region;
  document.querySelector('#atlas-image').src = dish.image;
  document.querySelector('#atlas-image').alt = dish.name;
  document.querySelector('#atlas-country').textContent = dish.region;
  document.querySelector('#atlas-dish').textContent = dish.name;
  document.querySelector('#atlas-description').textContent = dish.story;
  status.textContent = `A random taste from ${region}`;
  document.querySelector('#atlas-open').onclick = () => openDish(dish);
}

function initializeMap() {
  const map = L.map('globe-panel', { minZoom: 1, maxZoom: 6, zoomControl: true, preferCanvas: true, worldCopyJump: false, maxBounds: [[-75, -180], [85, 180]], maxBoundsViscosity: .7 }).setView([20, 10], 2);
  fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
    .then(response => response.json())
    .then(data => {
      L.geoJSON(data, {
        smoothFactor: .8,
        style: () => ({ color: '#d7f36b', weight: 1, fillColor: '#314b4c', fillOpacity: .82 }),
        onEachFeature: (feature, layer) => {
          const country = feature.properties.ADMIN || feature.properties.name || feature.properties.NAME || 'Unknown country';
          layer.bindTooltip(country, { sticky: true, direction: 'top' });
          layer.on({ mouseover: event => event.target.setStyle({ fillColor: '#f36f4c', fillOpacity: .98, weight: 2 }), mouseout: event => event.target.setStyle({ fillColor: '#314b4c', fillOpacity: .82, weight: 1 }), click: event => { L.DomEvent.stopPropagation(event); setRegion(country); } });
        }
      }).addTo(map);
      map.fitBounds([[-55, -180], [75, 180]], { padding: [4, 4] });
    })
    .catch(() => { document.querySelector('#globe-panel').innerHTML = '<p class="map-error">The world map could not load. Check your connection and refresh.</p>'; });
}

document.querySelector('#dialog-close').addEventListener('click', () => { document.querySelector('#recipe-guide').hidden = false; dialog.close(); });
dialog.addEventListener('close', () => { document.querySelector('#recipe-guide').hidden = false; });
async function loadChefPhotos() {
  await Promise.all(chefs.filter(chef => chef.wiki).map(async chef => {
    try {
      const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${chef.wiki}`);
      const result = await response.json();
      if (result.thumbnail && result.thumbnail.source) chef.image = result.thumbnail.source;
    } catch (error) { console.warn('Chef portrait unavailable', chef.name); }
  }));
  renderChefs();
}

renderLetters(); renderDishes(); renderChefs(); setRegion('Mexico'); initializeMap(); loadChefPhotos();
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.style.animationPlayState = 'running'; }), { threshold: .15 });
document.querySelectorAll('.reveal').forEach(element => { element.style.animationPlayState = 'paused'; observer.observe(element); });
