document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('product-name').value;
    const value = parseFloat(document.getElementById('product-value').value);

    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({ name, value });
  
    products.sort((a, b) => a.value - b.value);
  
    localStorage.setItem('products', JSON.stringify(products));
  
    displayProducts(products);
    document.getElementById('product-list-section').style.display = 'block';
  });
  
  document.getElementById('new-product-btn').addEventListener('click', function () {
    document.getElementById('product-form').reset();
    document.getElementById('product-list-section').style.display = 'none';
  });
  
  function displayProducts(products) {
    const tbody = document.querySelector('#product-list tbody');
    tbody.innerHTML = '';
  
    products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${product.name}</td><td>${product.value.toFixed(2)}</td>`;
      tbody.appendChild(row);
    });
  }
  