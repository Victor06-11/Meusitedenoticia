document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile nav
    const btn = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  
    document.addEventListener('DOMContentLoaded', () => {
      const btn = document.querySelector('.nav-toggle');
      const nav = document.querySelector('.main-nav');
      btn?.addEventListener('click', () => nav.classList.toggle('open'));
    });

    // Placeholder: carregar notícias via API ou JSON
    // Exemplo de injeção de notícia estática:
    const featured = document.getElementById('featured-news');
    if (featured) {
      featured.innerHTML = `
        <article class="news-card">
          <h2>Título da Notícia</h2>
          <p>Resumo rápido da notícia...</p>
          <a href="#">Leia mais</a>
        </article>
      `;
    }
  });
  