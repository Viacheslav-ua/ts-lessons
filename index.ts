class User {
  // private name: string
  // public readonly surname: string

  get gsName(): string {
    return this.name
  }
  set gsName(name: string) {
    this.name = name
  }
  
  constructor(
    private name: string, 
    public readonly surname: string, 
    protected _isAdmin: boolean = false,
    ) {
    // this.surname = surname
  }

  fullName(): string {
    return this.name
  }

  isAdmin(): boolean {
    return this._isAdmin
  }
}

class Admin extends User {
  protected _isAdmin: boolean = true
}

const rita = new User('Rita', 'Hurly')

console.log(rita)
 
console.log(rita.fullName() + ' ' + rita.surname)
console.log(rita.gsName + ' ' + rita.surname)

 
rita.gsName = 'Max'
console.log(rita.gsName + ' ' + rita.surname)

if(rita.isAdmin()) {
  console.log('Hello admin ' + rita.gsName);
} else {
  console.log('Hello ' + rita.gsName);
}

const admin = new Admin('Djinn', 'Dixie')
if(admin.isAdmin()) {
  console.log('Hello admin ' + admin.gsName);
} else {
  console.log('Hello ' + admin.gsName);
}