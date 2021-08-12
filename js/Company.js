class Company {
  constructor(name, openingHours) {
    this._name = name
    this._openingHours = openingHours
    this._departments = []
    this._employees = []
  }

  getName() {
    return this._name
  }

  setOpeningHours(openingHours) {
    if (typeof openingHours === 'string') {
      this._openingHours = openingHours
    } else {
      console.warn('invalid data type')
    }
  }

  getDepartments() {
    if (this._departments.length !== 0) {
      return this._departments
    } else {
      console.warn('no departments')
    }
  }

  getEmployees() {
    if (this._employees.length !== 0) {
      return this._employees
    } else {
      console.warn('no employees')
    }
  }

  addDepartment(department) {
    if (department instanceof Department) {
      this._departments.push(department)
    } else {
      console.warn('invalid data type')
    }
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this._employees.push(employee)
    } else {
      console.warn('invalid data type')
    }
  }

  removeDepartmentById(id) {
    if (typeof id === 'number') {
      this._departments = this._departments.filter(elem => elem._id !== id)
    } else {
      console.warn('invalid data type')
    }
  }

  removeEmployeeByName(name) {
    if (typeof name === 'string') {
      this._employees = this._employees.filter(elem => elem._name !== name)
    } else {
      console.warn('invalid data type')
    }
  }

  getEmployeesByDepartment(departmentId) {
    if (typeof departmentId === 'number') {
      return this._employees.filter(elem => elem.getDepartmentId() === departmentId)
    } else {
      console.warn('invalid data type')
    }
  }
}
