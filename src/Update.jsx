import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { editUser } from "./UserReducer"

const Update = () => {
  const {id} = useParams()
  const users = useSelector((state) => state.users)
  const existingUser = users.filter(elem => elem.id == id)
  const {name,email} = existingUser[0]

  const [newName, setNewName] = useState(name)
  const [newEmail, setNewEmail] = useState(email)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(editUser({id: id, name: newName, email: newEmail}))
    navigate('/')
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-dark text-white p-5">
        <h3 className="text-center my-2">Edit User</h3>
        <form onSubmit={handleSubmit} className="p-2 d-flex flex-column">
          <div className="my-2">
            <label htmlFor="name" className="mb-1">Name</label>
            <input 
            type="text" 
            name="name" 
            className="form-control" 
            placeholder="Enter name..." 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label htmlFor="email" className="mb-1">Email</label>
            <input 
            type="email" 
            name="email" 
            className="form-control" 
            placeholder="Enter email..." 
            value={newEmail} 
            onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info w-50 mx-auto py-2">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update