class Education {
  
  title: string;
  container: HTMLDivElement;
  
  constructor() {
    this.title = 'Education & Experience'
    this.container = document.createElement('div')
    this.container.className = 'item-container'
  }

  createItem() {
    this.container.innerHTML = `
      <h1>Education</h1>
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

export default Education;