import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ClientsView from './component/client/ClientsView';
import Settings from './component/client/Settings';
import AddClient from "./component/client/AddClient";
import EditClient from "./component/client/EditClient";
import ClientProfile from "./component/client/ClientProfile";
import ViewCategories from './component/catogeries/ViewCategories';
import AddCategory from './component/catogeries/AddCategory';
import EditCategory from './component/catogeries/EditCategory';
import CategoryProfile from './component/catogeries/CategoryProfile';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/view-clients" element={<ClientsViewWithNavBar />} />
        <Route path="/add-clients" element={<AddClientWithNavBar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/edit-client/:id" element={<EditClientWithNavBar />} />
        <Route path="/client-profile/:id" element={<ClientProfileWithNavBar />} />
        <Route path="/view-categories" element={<ViewCategoriesWithNavBar />} />
        <Route path="/add-categories" element={<AddCategoryWithNavBar/>} />
        <Route path="/edit-categories/:id" element={<EditCategoryWithNavBar />} />
        <Route path="/category-profile/:id" element={<CategoryProfileWithNavBar />} />
        
      </Routes>
    </Router>
  );
}

const withNavBar = (Component) => {
  return () => (
    <>
      {/*<NavBar />*/}
      <Component />
    </>
  );
};

const ClientsViewWithNavBar = withNavBar(ClientsView);
const AddClientWithNavBar = withNavBar(AddClient);
const EditClientWithNavBar = withNavBar(EditClient);
const ClientProfileWithNavBar = withNavBar(ClientProfile);
const ViewCategoriesWithNavBar=withNavBar(ViewCategories);
const AddCategoryWithNavBar=withNavBar(AddCategory)
const EditCategoryWithNavBar=withNavBar(EditCategory)
const CategoryProfileWithNavBar=withNavBar(CategoryProfile)


export default App;
