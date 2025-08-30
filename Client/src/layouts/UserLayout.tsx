
import UserNavbar from "../components/user/UserNavbar/UserNavbar"
import { Outlet } from "react-router-dom"


const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <UserNavbar/>
      <div className="flex-1 px-8 py-6 bg-gray-50">
         <Outlet/>
      </div>
    </div>
  )
}

export default UserLayout
