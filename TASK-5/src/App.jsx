import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import EmployeeCard from './components/EmployeeCard'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Shiva Busarapu",
      department: "Engineering",
      role: "Frontend Developer",
      email: "shiva@gmail.com",
      isActive: true
    },
    {
      id: 2,
      name: "Manish Patel",
      department: "Engineering",
      role: "Backend Developer",
      email: "manish@gmail.com",
      isActive: true
    },
    {
      id: 3,
      name: "Prakash Nayak",
      department: "HR",
      role: "HR Manager",
      email: "prakash@gmail.com",
      isActive: false
    },
    {
      id: 4,
      name: "Abhi.A",
      department: "Sales",
      role: "Sales Executive",
      email: "abhee.a@gmail.com",
      isActive: true
    },
    {
      id: 5,
      name: "Rahul",
      department: "Engineering",
      role: "UI/UX Designer",
      email: "Rahul@gmail.com",
      isActive: true
    },
    {
      id: 6,
      name: "Kiran Verma",
      department: "HR",
      role: "Recruitment Specialist",
      email: "kiran@gmail.com",
      isActive: true
    },
    {
      id: 7,
      name: "Anjali Rao",
      department: "Sales",
      role: "Sales Manager",
      email: "anjali@gmail.com",
      isActive: false
    },
    {
      id: 8,
      name: "Vikram Singh",
      department: "Engineering",
      role: "Full Stack Developer",
      email: "vikram@gmail.com",
      isActive: true
    }
  ])

  const filteredEmployees = employees.filter((employee) => (
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  return (
    <>
      <input type="text" className='mx-5 my-2 w-25' placeholder='Search employees' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">All</a></li>
          <li><a className="dropdown-item" href="#">HR</a></li>
          <li><a className="dropdown-item" href="#">Engineering</a></li>
          <li><a className="dropdown-item" href="#">Sales</a></li>
        </ul>
      </div>
      {filteredEmployees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </>
  )
}

export default App
