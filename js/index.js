const myCompany = new Company('My Company', '9:00 - 18:00')

const officeNumberOne = new Department(1, 'Ukraine, Kharkiv, Tankopiya st.', true)
myCompany.addDepartment(officeNumberOne)

const officeNumberTwo = new Department(2, 'Ukraine, Kiyv, Hreshatik st.', false)
myCompany.addDepartment(officeNumberTwo)

const alex = new Employee('Alex', '0661234567', 1)
myCompany.addEmployee(alex)

const vasya = new Employee('Vasya', '0671234567', 1)
myCompany.addEmployee(vasya)

const petya = new Employee('Petya', '0681234567', 2)
myCompany.addEmployee(petya)

const danil = new Employee('Danil', '0931234567', 2)
myCompany.addEmployee(danil)

const david = new HeadOfDepartment('David', '0501234567', 1, 'manager')

const firstClient = new Client('Jack', alex)