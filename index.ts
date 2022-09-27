// const UserAgeRestriction = 18
class User {
  // private name: string
  // public readonly surname: string

  static ageRestriction = 18

  get gsName(): string {
    return this.name
  }
  set gsName(name: string) {
    this.name = name
  }
  
  constructor(
    private name: string, 
    public readonly surname: string,
    private age: number, 
    protected _isAdmin: boolean = false,
    ) {
    // this.surname = surname
    if (this.age <= User.ageRestriction) {
      throw new Error('Age mast be more then 18 years')
      
      
    }
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

try {
  const rita = new User('Rita', 'Hurly', 14)

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
} catch (e: any) {
  console.log(e.message);
  
}



try {
  const admin = new Admin('Djinn', 'Dixie', 53)
  console.log(admin);
  
  if(admin.isAdmin()) {
   console.log('Hello admin ' + admin.gsName);
  } else {
    console.log('Hello ' + admin.gsName);
  }
} catch (e: any) {
  console.log(e.message);
  
}
