class Contact {

  private container: HTMLDivElement;
  title: string;

  constructor() {
    this.title = 'CONTACT'
    this.container = document.createElement('div')
    this.container.className = 'item-container'
  }

  createItem() {
    this.container.innerHTML = `
      <h1>Contact</h1>
    `
  }

  renderTitle() {
    const title = document.createElement('h2')
    title.className = 'title-page'
    title.textContent = this.title
    return title
  }

  render() {
    this.createItem()
    return this.container
  }
}

export default Contact;
