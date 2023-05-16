export default function init() {
  const content = document.querySelector('#content');

  const title = document.createElement('h2');
  title.textContent = 'Bubs Biscuits N Gravy';

  const copy = document.createElement('div');
  copy.textContent = 'Welcome to Bubs Biscuits N Gravy where we bake the purrrfect biscuits for you to enjoy with your favorite gravy and toppings. You need it, we knead it!';

  const copyright = document.createElement('footer');
  copyright.textContent = `Copyright ${new Date().getFullYear()} \u00A9`;

  content.appendChild(title);
  content.appendChild(copy);
  content.append(copyright);
}
