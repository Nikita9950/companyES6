class Department {
  constructor(id, address, officeRent) {
    this._id = id
    this._address = address
    this._officeRent = officeRent
  }

  getAddress() {
    return this._address
  }

}