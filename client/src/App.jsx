// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Header from './components/Header'; 
import AdminSignIn from './pages/AdminSignIn';
import AddIngredientRecipe from './components/AddIngredientRecipe';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/home' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/Adminsign-in' element={<AdminSignIn />} />
        <Route path='/add-ingredient-recipe' element={<AddIngredientRecipe />} />
      </Routes>
    </BrowserRouter>
  );

}

