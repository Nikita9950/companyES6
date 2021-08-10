class Client {
  constructor(name, employee) {
    this._name = name
    this._employee = employee
  }

  getName() {
    return this._name
  }

  getEmployee() {
    return this._employee
  }

  setEmployee(employee) {
    if (employee instanceof Employee) {
      this._employee = employee
    } else {
      console.warn('Invalid data type')
    }
  }
}