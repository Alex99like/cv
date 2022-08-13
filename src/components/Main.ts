import Navbar from "./Navbar";
import Page from "./page/Page";
import './style/global.css'

class Main {

  container: HTMLElement;
  navbar: Navbar;
  page: Page;

  constructor() {
    this.container = document.createElement('main')
    this.navbar = new Navbar()
    this.page = new Page(this.navbar.arrButtons)
  }

  render() {
    this.container.append(this.navbar.render(), this.page.render())
    return this.container
  }
}

export default Main;