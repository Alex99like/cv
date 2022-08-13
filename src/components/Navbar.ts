import Button from "./Element/Button";
import './style/navbar.css';

class Navbar {

  private container: HTMLDivElement;
  private home: Button;
  private about: Button;
  private education: Button;
  private skills: Button;
  private works: Button;
  private contact: Button;
  arrButtons: Button[];
  profile: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div')
    this.profile = document.createElement('div')
    this.arrButtons = []
    this.home = new Button('<i class="fa-solid fa-house-user"></i>', 'HOME', 'navbar-btn active', 1)
    this.about = new Button('<i class="fa-solid fa-user"></i>', 'ABOUT', 'navbar-btn', 2)
    this.education = new Button('<i class="fa-solid fa-graduation-cap"></i>','Education & Experience', 'navbar-btn', 3)
    this.skills = new Button('<i class="fa-solid fa-bars-progress"></i>', 'SKILLS', 'navbar-btn', 4)
    this.works = new Button('<i class="fa-solid fa-network-wired"></i>', 'WORKS', 'navbar-btn', 5)
    this.contact = new Button('<i class="fa-solid fa-address-card"></i>', 'CONTACT', 'navbar-btn', 6)
    this.createProfile()
    this.pushAllButton()
    this.addClass()
    this.activeBtn()
  }

  createProfile() {
    const photo = document.createElement('img')
    const name = document.createElement('h3')
    name.textContent = 'Aleksander Aleksievich'
    photo.className = 'photo'
    this.profile.className = 'profile'
    this.profile.append(photo, name)
    this.container.append(this.profile)
  }

  

  addClass() {
    this.container.className = 'navbar'
  }

  activeBtn() {
    this.arrButtons.forEach(item => {
      item.button.addEventListener('click', () => {
        this.arrButtons.forEach(item => item.button.classList.remove('active'))
        item.button.classList.add('active')
      })
    })
  }

  pushAllButton() {
    for (let item in this) {
      if (this[item] instanceof Button) {
        const btn = this[item] as unknown as Button;
        this.arrButtons.push(btn)
        this.container.append(btn.render())
      }
    }
  } 

  get arrEl() {
    return this.arrButtons
  }

  render() {
    return this.container
  }
}

export default Navbar;