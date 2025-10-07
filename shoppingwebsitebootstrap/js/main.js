import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';
import { productData } from './products.js';

function init() {
  const category = document.body.dataset.category || 'men';

  document.getElementById('navbar').innerHTML = createNavbar(category);
  document.getElementById('footer').innerHTML = createFooter();

  const grid = document.getElementById('product-grid');
  let products = productData[category] || [];

  const filterState = {
    sizes: [],
    colors: [],
    maxPrice: parseInt(document.getElementById('priceRange').value)
  };

  const priceValue = document.getElementById('priceValue');

  function renderProducts() {
    const filtered = products.filter(p => {
      if(filterState.sizes.length>0 && !p.size.some(s=>filterState.sizes.includes(s))) return false;
      if(filterState.colors.length>0 && !p.colors.some(c=>filterState.colors.includes(c))) return false;
      if(filterState.maxPrice && p.price > filterState.maxPrice) return false;
      return true;
    });

    if(filtered.length===0){
      grid.innerHTML='<p class="text-muted">No products found.</p>';
      return;
    }

    grid.innerHTML = filtered.map(p => `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.img}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h6 class="card-title">${p.name}</h6>
            <p>Price: ₹${p.price}</p>
            <p>Sizes: ${p.size.join(", ")}</p>
            <div>Colors: ${p.colors.map(c=>`<span class="color-swatch" style="background-color:${c}"></span>`).join('')}</div>
            <button class="btn btn-primary w-100 mt-2">Add to Cart</button>
            <button class="btn btn-success w-100 mt-2">Buy Now</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderProducts();

  document.querySelectorAll('.form-check-input').forEach(cb=>{
    cb.addEventListener('change', ()=>{
      filterState.sizes = Array.from(document.querySelectorAll('.form-check-input:checked')).map(i=>i.nextElementSibling.innerText);
      renderProducts();
    });
  });

  const priceRange = document.getElementById('priceRange');
  priceRange.addEventListener('input', ()=>{
    filterState.maxPrice=parseInt(priceRange.value);
    priceValue.innerText=priceRange.value;
    renderProducts();
  });

  document.querySelectorAll('.sidebar .color-swatch').forEach(c=>{
    c.addEventListener('click', ()=>{
      const color=c.style.backgroundColor;
      if(filterState.colors.includes(color)){
        filterState.colors=filterState.colors.filter(cl=>cl!==color);
        c.classList.remove('selected');
      } else {
        filterState.colors.push(color);
        c.classList.add('selected');
      }
      renderProducts();
    });
  });

  document.getElementById('resetFilters').addEventListener('click', ()=>{
    document.querySelectorAll('.form-check-input').forEach(cb=>cb.checked=false);
    filterState.sizes=[];
    filterState.colors=[];
    filterState.maxPrice=parseInt(priceRange.max);
    priceRange.value=priceRange.max;
    priceValue.innerText=priceRange.max;
    document.querySelectorAll('.sidebar .color-swatch').forEach(c=>c.classList.remove('selected'));
    renderProducts();
  });
}

window.addEventListener('DOMContentLoaded', init);
