const myCompany = new Company('My Company', '9:00 - 18:00')
const officeNumberOne = new Department(1, 'Ukraine, Kharkiv, Tankopiya st.', true)
const officeNumberTwo = new Department(2, 'Ukraine, Kiyv, Hreshatik st.', false)
const alex = new Employee('Alex', '0661234567', 1)
const vasya = new Employee('Vasya', '0671234567', 1)
const petya = new Employee('Petya', '0681234567', 2)
const danil = new Employee('Danil', '0931234567', 2)
const david = new HeadOfDepartment('David', '0501234567', 1, 'manager')
const firstClient = new Client('Jack', alex)

myCompany.addDepartment(officeNumberOne)
myCompany.addDepartment(officeNumberTwo)
myCompany.addEmployee(alex)
myCompany.addEmployee(vasya)
myCompany.addEmployee(petya)
myCompany.addEmployee(danil)

console.log(myCompany.getEmployees())
console.log(myCompany.getDepartments())

alex.setDepartmentId(2)
petya.setDepartmentId(1)
david.setDepartmentId(2)
console.log(david.getDepartmentId())
myCompany.removeEmployeeByName('Danil')
firstClient.setEmployee(vasya)
console.log(firstClient.getEmployee());
console.log(myCompany.getEmployeesByDepartment(1));
console.log(myCompany.getEmployeesByDepartment(2));

console.log(officeNumberOne.getAddress());
officeNumberOne.setAddressAsync('Lviv, Freedom square')
  .then(response => console.log(`New address: ${response}`))
  .catch(error => console.log(error))
