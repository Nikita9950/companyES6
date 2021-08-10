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
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this._officeRent) {
            this._address = address
            resolve(this._address)
          } else {
            reject(console.warn('You cannot change the address.'))
          }
        }, 2000)
      })
      promise
        .then(response => console.log(`New address: ${response}`))
        .catch(response => response)
    } else {
      console.warn('invalid data type')
    }
  }
}