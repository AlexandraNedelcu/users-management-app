import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUser } from "./UserReducer"

const Home = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteUser({id}))
  }

  return (
    <div className="container p-3">
      <h2 className="text-center my-3">Users Management App</h2>
      <Link to="/create" className="btn btn-success my-3 py-2 px-5 cursor-pointer">Create New User +</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary w-25">Edit</Link>
                <button className="btn btn-sm btn-danger ms-2 w-25" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home