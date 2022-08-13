class Button {

  button: HTMLButtonElement;
  id: number;

  constructor(icon: string, title: string, className: string, id: number) {
    this.id = id
    this.button = document.createElement('button')
    this.createButton(icon, title)
    this.addClass(className)
  }

  private createButton(icon: string, title: string) {
    this.button.innerHTML = `${icon}${title}`
  }

  private addClass(className: string) {
    this.button.className = className
  }
 
  public render() {
    return this.button
  }
}

export default Button;