import { render } from '@czechitas/render';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import '../global.css';
import './index.css';

const response = await fetch('http://localhost:4000/api/drinks');
const json = await response.json();
const drinks = json.data;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

document.querySelector('.nav-btn').addEventListener('click', () => {
  document.querySelector('.rollout-nav').classList.toggle('nav-closed');
});

const navElm = document.querySelector('.rollout-nav');
navElm.addEventListener('click', () => {
  navElm.classList.add('nav-closed');
});

const formElm = document.querySelectorAll('form');
formElm.forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(form.dataset.id);

    console.log(drinks);

    const foundDrink = drinks.find((drink) => drink.id === Number(form.dataset.id));
    const ordered = foundDrink.ordered;
    console.log(foundDrink);

    await fetch(`http://localhost:4000/api/drinks/${form.dataset.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        { op: 'replace', path: '/ordered', value: !ordered },
      ]),
    });

    window.location.reload();
  });
});
