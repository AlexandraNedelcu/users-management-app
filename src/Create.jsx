import { useState } from "react"
import { addUser } from "./UserReducer"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Create = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))
    navigate('/')
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-dark text-white p-5">
        <h3 className="text-center my-2">Add New User</h3>
        <form onSubmit={handleSubmit} className="p-2 d-flex flex-column">
          <div className="my-2">
            <label htmlFor="name" className="mb-1">Name</label>
            <input 
            type="text" 
            name="name" 
            className="form-control" 
            placeholder="Enter name..." 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label htmlFor="email" className="mb-1">Email</label>
            <input 
            type="email" 
            name="email" 
            className="form-control" 
            placeholder="Enter email..." 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-success w-50 mx-auto py-2">Add User</button>
        </form>
      </div>
    </div>
  )
}

export default Create