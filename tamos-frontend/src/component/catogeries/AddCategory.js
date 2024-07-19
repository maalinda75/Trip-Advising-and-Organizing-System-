import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const navigator = useNavigate();
    const [category, setCategory] = useState({
        name: '',
        description: '',
        status: ''
    });

    const { name, description, status } = category;

    const handleChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/categories", category);
        navigator("/view-categories");
    };

    return (
        <div>
            <section id="sidebar">
                <a href="#" className="brand"><i className='bx bx-map-pin'></i> ExploreXpert</a>
                <ul className="side-menu">
                    <li><a href="/view-categories"><i className='bx bxs-group icon' ></i> All Categories</a></li>
                    <li><a href="/add-category" className="active"><i className='bx bxs-user-plus icon' ></i> Add Category</a></li>
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
                    <h1 className="title">Add Category</h1>
                    <ul className="breadcrumbs">
                        <li><a href="#">Home</a></li>
                        <li className="divider">/</li>
                        <li><a href="#" className="active">Add Category</a></li>
                    </ul>

                    <div className="data">
                        <div className="content-data">
                            <div className="head">
                                <div className="menu">
                                    <i className='bx bx-dots-horizontal-rounded icon'></i>
                                </div>
                            </div>
                            <div className="bottom-data">
                                <div className="orders"></div>
                                <div className="col-sm-8 py-2 px-5 offset-2">
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-group mb-5">
                                            <label className="input-group-text" htmlFor="name">Name</label>
                                            <input className="form-control col-sm-6" type="text" name="name" id="name" required value={name} onChange={handleChange} />
                                        </div>
                                        <div className="input-group mb-5">
                                            <label className="input-group-text" htmlFor="description">Description</label>
                                            <textarea className="form-control col-sm-6" name="description" id="description" value={description} onChange={handleChange}></textarea>
                                        </div>
                                        <div className="input-group mb-5">
                                            <label className="input-group-text" htmlFor="status">Status</label>
                                            <select className="form-select col-sm-6" name="status" id="status" value={status} onChange={handleChange}>
                                                <option value="">Select Status</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                                <option value="Archived">Archived</option>
                                            </select>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-sm-2">
                                                <button type="submit" className="btn btn-outline-success btn-lg">Save</button>
                                            </div>
                                            <div className="col-sm-2">
                                                <Link to={"/view-categories"} className="btn btn-outline-warning btn-lg">Cancel</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default AddCategory;
