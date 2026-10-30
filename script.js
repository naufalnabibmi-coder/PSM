const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('memberSearch').addEventListener('input', event => {
  const query = event.target.value.toLowerCase();
  document.querySelectorAll('#memberRows tr').forEach(row => {
    row.hidden = !row.textContent.toLowerCase().includes(query);
  });
});
