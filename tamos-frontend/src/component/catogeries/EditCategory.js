import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Search from '../common/Search';

const EditCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [category, setCategory] = useState({
    categoryName: "",
    description: "",
    status: ""
  });

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/categories/${id}`);
      setCategory(response.data);
    } catch (error) {
      console.error('Error loading category:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory(prevCategory => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const updateCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/categories/${id}`, category);
      navigate("/view-categories");
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const { categoryName, description, status } = category;

  return (
    <div>
      <section id="sidebar">
        <a href="#" className="brand"><i className='bx bx-map-pin'></i> ExploreXpert</a>
        <ul className="side-menu">
          <li><Link to="/view-categories"><i className='bx bxs-group icon' ></i> All Categories</Link></li>
          <li><Link to="/add-category" className="active"><i className='bx bxs-user-plus icon' ></i> Add Category</Link></li>
          <li><Link to="/settings"><i className='bx bxs-cog icon' ></i> Settings</Link></li>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <li><a href="/" className="active"><i className='bx bxs-log-out-circle icon' ></i> Log Out</a></li>
        </ul>
      </section>

      <section id="content">
        <nav>
          <i className='bx bx-menu toggle-sidebar' ></i>
          <span className="divider"></span>
          <div className="profile">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            <ul className="profile-link">
              <li><a href="#"><i className='bx bxs-user-circle icon' ></i> Profile</a></li>
              <li><a href="#"><i className='bx bxs-cog' ></i> Settings</a></li>
              <li><a href="#"><i className='bx bxs-log-out-circle' ></i> Logout</a></li>
            </ul>
          </div>
        </nav>

        <main>
          <h1 className="title">Edit Category</h1>
          <form onSubmit={(e) => updateCategory(e)}>
            <div>
              <label>Category Name:</label>
              <input type="text" name="categoryName" value={categoryName} onChange={handleInputChange} />
            </div>
            <div>
              <label>Description:</label>
              <textarea name="description" value={description} onChange={handleInputChange}></textarea>
            </div>
            <div>
              <label>Status:</label>
              <select name="status" value={status} onChange={handleInputChange}>
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
            <button type="submit">Update Category</button>
          </form>
        </main>
      </section>
    </div>
  );
};

export default EditCategory;

