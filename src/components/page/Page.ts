import Button from '../Element/Button';
import '../style/pages.css'
import About from './About';
import Contact from './Contact';
import Education from './Education';
import Home from './Home';
import Skills from './Skills';
import Works from './Works';

class Page {

  container: HTMLDivElement;
  arrBtn: Button[];
  titleContainer: HTMLHeadingElement;
  contentContainer: HTMLDivElement;
  home: Home;
  about: About;
  education: Education;
  skills: Skills;
  works: Works;
  contact: Contact;
  
  constructor(arr: Button[]) {
    this.arrBtn = arr
    this.container = document.createElement('div')
    this.titleContainer = document.createElement('div')
    this.contentContainer = document.createElement('div')
    this.home = new Home()
    this.about = new About()
    this.education = new Education()
    this.skills = new Skills()
    this.works = new Works()
    this.contact = new Contact()
    this.addClass()
  }

  addClass() {
    this.container.className = 'page'
    this.titleContainer.className = 'title-container'
    this.contentContainer.className = 'content-container'
  }

  createTitle() {
    this.titleContainer.append(
      this.home.renderTitle(), 
      this.about.renderTitle(), 
      this.education.renderTitle(),
      this.skills.renderTitle(),
      this.works.renderTitle(),
      this.contact.renderTitle()
    )
    this.listenTitle()
  }

  listenTitle() {
    this.arrBtn.forEach(item => {
      item.button.addEventListener('click', () => {
        console.log(item)
        this.titleContainer.style.left = `-${(item.id - 1) * 100}%`
        this.contentContainer.style.top = `-${(item.id - 1) * 90}%`
      })
    })
  }

  createContent() {
    this.contentContainer.append(
      this.home.render(), 
      this.about.render(),
      this.education.render(),
      this.skills.render(),
      this.works.render(),
      this.contact.render()
    )
  }


  render() {
    this.createTitle()
    this.createContent()
    this.container.append(this.titleContainer, this.contentContainer)
    return this.container
  }

}

export default Page;