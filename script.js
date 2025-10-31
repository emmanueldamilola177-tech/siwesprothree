const searchBar = document.getElementById('searchBar');
    const products = document.querySelectorAll('.card');

    searchBar.addEventListener('keyup', () => {
      let filter = searchBar.value.toLowerCase();
      products.forEach(product => {
        let name = product.getAttribute('data-name').toLowerCase();
        if (name.includes(filter)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });

    document.querySelectorAll('.buy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        alert('Thanks for your interest! Our marketer will contact you soon.');
      });
    });
