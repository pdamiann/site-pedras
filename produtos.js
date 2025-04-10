const botoesFiltro = document.querySelectorAll('.btn');
const cardsProduto = document.querySelectorAll('.produto-card');

botoesFiltro.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove 'active' de todos e adiciona no atual
    botoesFiltro.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filtro = btn.dataset.filtro;

    cardsProduto.forEach(card => {
      if (filtro === 'todos' || card.classList.contains(filtro)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

