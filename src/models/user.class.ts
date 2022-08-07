export class User {
  firstName: any;
  lastName: any;
  birthDate: any;
  street: any;
  postalCode: any;
  city: any;
  email: any;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.street = obj ? obj.street : '';
    this.postalCode = obj ? obj.postalCode : '';
    this.city = obj ? obj.city : '';
    this.email = obj? obj.email : '';
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      street: this.street,
      postalCode: this.postalCode,
      city: this.city,
      email: this.email,
    };
  }
}
