class Department {
  constructor(id, address, officeRent) {
    this._id = id
    this._address = address
    this._officeRent = officeRent
  }

  getAddress() {
    return this._address
  }

  // setAddressPromise(address) {
  //   if (typeof address === 'string') {
  //     const promise = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         if (this._officeRent) {
  //           this._address = address
  //           resolve(this._address)
  //         } else {
  //           reject(console.warn('You cannot change the address.'))
  //         }
  //       }, 2000)
  //     })
  //     promise
  //       .then(response => console.log(`You have successfully changed address to: ${response}`))
  //       .catch(response => response)
  //   } else {
  //     return new Error('invalid data type')
  //   }
  // }
}