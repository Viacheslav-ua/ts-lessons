const root = document.getElementById('root')

class Cat {
  name
  constructor(name: string) {
    this.name = name
  }
}

const kitty = new Cat('Kitty')

if (root) {
  root.innerHTML = `My Cat is <b>${kitty.name}</b>`
}

