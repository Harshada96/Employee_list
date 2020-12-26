export class UserList {
  constructor(
    public id: number = null,
    public name: string = null,
    public username: string = null,
    public email: string = null,
    public address: addressDetails = new addressDetails(),
    public phone: string = null,
    public website: string = null,
    public company: CompanyDetails = new CompanyDetails()
  ) {}
}

export class addressDetails {
  constructor(
    public street: string = null,
    public suite: string = null,
    public city: string = null,
    public zipcode: string = null,
    public name: string = null
  ) {}
}

export class CompanyDetails {
  constructor(
    public name: string = null,
    public catchPhrase: string = null,
    public bs: string = null
  ) {}
}

