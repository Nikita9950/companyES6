class Employee {
  constructor(name, phone, departmentId) {
    this._name = name
    this._phone = phone
    this._department = departmentId
  }

  getName() {
    return this._name
  }

  setPhone(phone) {
    if (typeof phone === 'string') {
      this._phone === phone
    } else {
      console.warn('invalid data type')
    }
  }

  getDepartmentId() {
    return this._department
  }

  setDepartmentId(departmentId) {
    if (typeof departmentId === 'number') {
      this._department = departmentId
    } else {
      console.warn('invalid data type')
    }
  }
}