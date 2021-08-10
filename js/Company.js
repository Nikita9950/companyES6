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
    if (department instanceof Object) {
      this._departments.push(department)
    } else {
      console.warn('invalid data type')
    }
  }

  addEmployee(empoloyee) {
    if (empoloyee instanceof Object) {
      this._employees.push(empoloyee)
    } else {
      console.warn('invalid data type')
    }
  }

  removeDepartmentById(id) {
    if (typeof id === 'number') {
      const index = this._departments.findIndex(elem => elem._id === id)
      this._departments.splice(index, 1)
    } else {
      console.warn('invalid data type')
    }
  }

  removeEmployeeByName(name) {
    if (typeof name === 'string') {
      const index = this._employees.findIndex(elem => elem._name === name)
      this._employees.splice(index, 1)
    } else {
      console.warn('invalid data type')
    }
  }

  getEmployeesByDepartment(departmentId) {
    if (typeof departmentId === 'number') {
      return this.getEmployees().filter(function (elem) {
        return elem.getDepartmentId() === departmentId
      })
    } else {
      console.warn('invalid data type')
    }
  }
}