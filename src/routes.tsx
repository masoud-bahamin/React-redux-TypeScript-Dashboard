import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Users from "./pages/Users";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/users", element: <Users /> },
    { path: "/courses", element: <Courses /> },
]

export default routes