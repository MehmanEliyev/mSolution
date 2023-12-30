// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Settings from "./pages/Settings";
// import TaxiPark from "./pages/TaxiPark";
// import SignIn from "./pages/SignIn";
// import NewTaxiPark from "./pages/NewTaxiPark";
// import TestAbout from "./pages/TestAbout";
// import MyHesab from "./pages/MyHesab";
// import Testinvoice from "./pages/Testİnvoice";
// import AddInvoice from "./pages/AddInvoice";
// import Navbar from "./components/NavBar";
// import SideNav from "./components/SideNav";
// import EinvoiceByTaxiPark from './pages/EinvoiceByTaxiPark'
// import UpdateInvoice from "./pages/UpdateInvoice";
import {AuthWrapper} from './Auth/AuthWrapper';

function App() {
  return (
    <>
      <AuthWrapper/>
        {/* <Navbar/>
        <SideNav/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<TestAbout />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/taxiPark" element={<TaxiPark />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/invoice" element={<Testinvoice />} />
            <Route path="/hesab" element={<MyHesab />} />
            <Route path="/newTaxiPark" element={<NewTaxiPark />} />
            <Route path="/e-invoice" element={<EinvoiceByTaxiPark/>}/>
            <Route path="/e-invoice/create" element={<AddInvoice/>}/>
            <Route path="/e-invoice/update/:id" element={<UpdateInvoice/>}/>
          </Routes> */}
    </>
  );
}

export default App;
