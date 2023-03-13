import React from 'react';
import './styles/ui-styles.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SimpleFormSubmition from './components/simple-form';
import HomePage from './pages/home';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import MailPage from './pages/mail';
import RegisterPage from './pages/register';
import UserPage from './pages/users';

import InboxPage from './pages/inbox';
import SentPage from './pages/sent';
import TrashPage from './pages/trash';
import AccountCreatePage from './pages/account-create';
import UpdateUser from './pages/update-users';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<HomePage/>}></Route>
      <Route path='contact' element={<ContactPage/>}></Route>
      <Route path='about-us' element={<AboutPage/>}></Route>
      <Route path='mail' element={<MailPage/>}>
        <Route path='inbox' element={<InboxPage />}></Route>
        <Route path='sent' element={<SentPage/>}></Route>
        <Route path='trash' element={<TrashPage />}></Route>
        <Route path='account' element={<AccountCreatePage />}></Route>
        <Route path='update' element={<UpdateUser />}></Route>
      </Route>
      <Route path='register' element={<RegisterPage />}></Route>
      <Route path='user' element={<UserPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
