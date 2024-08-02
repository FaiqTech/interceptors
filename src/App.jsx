import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/index.jsx";
import NotFound from "./pages/404";
import Layout from "./components/layout/index.jsx";
import Login from "./pages/login/index.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Roles from "./pages/roles/index.jsx";
import Categories from "./pages/categories/index.jsx";

const App = () => {
    const routes = [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/roles',
            element: <Roles/>
        },
        {
            path: '/categories',
            element: <Categories/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '*',
            element: <NotFound/>
        }
    ]

    return <BrowserRouter>
        <ToastContainer/>
        <Routes>
            {routes.map(({path, element}) => (
                <Route key={path} path={path}
                       element={path.includes('login') ? element : <Layout path={path}>{element}</Layout>}/>
            ))}
        </Routes>
    </BrowserRouter>
}

export default App
