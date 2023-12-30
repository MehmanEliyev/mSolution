// import {Navbar} from '../components/NavBar';
// import {SideNav} from '../components/SideNav';
import {SignIn} from '../pages/SignIn';
import {Home} from '../pages/Home';
import {AddInvoice} from '../pages/AddInvoice';

export const nav = [
    {path : "/login" , name: "Sign In", element: <SignIn /> , isMenu: true, isPrivate: true },
    {path : "/home" , name: "Home", element: <Home/> , isMenu: true, isPrivate: true },
    {path : "/e-invoice/create" , name: "E-Invoice", element: <AddInvoice/> , isMenu: true, isPrivate: true }
]

