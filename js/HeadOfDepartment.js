class HeadOfDepartment extends Employee {

  constructor(name, phone, department, position) {
    super(name, phone, department)
    this._position = position
  }

  getPosition() {
    return this._position
  }

  setPosition(position) {
    if (typeof position === 'string') {
      this._position = position
    } else {
      console.warn('invalid data type')
    }
  }
}