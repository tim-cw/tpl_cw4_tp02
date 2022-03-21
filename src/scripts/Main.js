import Icons from './utils/Icons';
import Carousel from './components/Carousel';

class Main {
  constructor() {
    this.init();
  }

  init() {
    // On ajoute une classe sur le html
    // pour qu'on puisse savoir si le JavaScript est
    // supporté dans notre css
    document.documentElement.classList.add('has-js');

    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (componentName == 'Carousel') {
        new Carousel(element);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }

    Icons.load();
  }
}
new Main();
