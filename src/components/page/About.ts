class About {

  container: HTMLDivElement;
  title: string;
  
  constructor() {
    this.title = 'ABOUT'
    this.container = document.createElement('div')
    this.container.className = 'item-container'
  }

  createItem() {
    this.container.innerHTML = `
      <h1>About</h1>
    `
  }

  renderTitle() {
    const title = document.createElement('h2')
    title.textContent = this.title
    title.className = 'title-page'
    return title
  }

  render() {
    this.createItem()
    return this.container
  }
}

export default About;