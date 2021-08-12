class Department {
  constructor(id, address, officeRent) {
    this._id = id
    this._address = address
    this._officeRent = officeRent
  }

  getAddress() {
    return this._address
  }

  setAddressAsync(address) {
    if (typeof address === 'string') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this._officeRent) {
            this._address = address
            resolve(this._address)
          } else {
            reject(new Error('You cannot change the address.'))
          }
        }, 2000)
      })
    } else {
      console.warn('invalid data type')
    }
  }
}
