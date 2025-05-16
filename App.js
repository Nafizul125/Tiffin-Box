import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import OrdersPage from './pages/OrdersPage'; // Create this file
import PreferencesPage from './pages/PreferencesPage'; // Create this file
import FoodOrderPage from './pages/FoodOrderPage';
import Review from './pages/Review'; 
import Sort from './pages/Sort';
import Discount from './pages/Discount';
import CustomerSupport from "./pages/CustomerSupport"
import Cart from "./pages/Cart"
import Payment from './pages/Payment'
import Chat from './pages/Chat';
import Subscription from './pages/Subscription';
import Register from './pages/Register';
import OrderHistory from './pages/OrderHistory';
import DeliveryManLogin from './pages/DeliveryManlogin';
import DeliveryManHomePage from "./pages/DeliveryManHomePage";
import DeliveryManTime from "./pages/DeliveryManTime";
import Schedule from './pages/Schedule';
import DeliveryStatus from './pages/DeliveryStatus';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/UserPage" element={<UserPage/>} />
        <Route path="/" element={<ProfilePage/>} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/preferences" element={<PreferencesPage />} />
        <Route path="/FoodOrderPage" element={<FoodOrderPage />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Sort" element={<Sort />} />
        <Route path="/Discount" element={<Discount />} />
        <Route path="/Customersupport" element={<CustomerSupport />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/DeliveryManlogin" element={<DeliveryManLogin />} />
        <Route path="/DeliveryManHomePage" element={<DeliveryManHomePage />} />
        <Route path="/DeliveryManTime" element={<DeliveryManTime />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="DeliveryStatus" element={<DeliveryStatus />} />
        

        
        

        

        

      


        
        
        

      </Routes>
    </Router>
  );
}

export default App;
