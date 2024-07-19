import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CategoryProfile = () => {
    const { id } = useParams();
    const [category, setCategory] = useState({
        name: "",
        description: "",
        status: ""
    });

    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = async () => {
        const result = await axios.get(`http://localhost:8080/categories/${id}`);
        setCategory(result.data);
    };

    return (
        <div>
            <section id="sidebar">
                <a href="#" className="brand"><i className='bx bx-map-pin'></i> ExploreXpert</a>
                <ul className="side-menu">
                    <li><a href="/view-categories" className="active"><i className='bx bxs-group icon' ></i> All Categories</a></li>
                    <li><a href="/add-category"><i className='bx bxs-user-plus icon' ></i> Add Category</a></li>
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
                            <li><Link to="/settings"><i className='bx bxs-cog' ></i> Settings</Link></li>
                            <li><a href="#"><i className='bx bxs-log-out-circle' ></i> Logout</a></li>
                        </ul>
                    </div>
                </nav>

                <main>
                    <h1 className="title">Category Profile</h1>
                    <ul className="breadcrumbs">
                        <li><Link to="/view-categories">All Categories</Link></li>
                        <li className="divider">/</li>
                        <li><a href="#" className="active">Category Profile</a></li>
                    </ul>
                    <div className="data">
                        <div className="content-data">
                            <div className="head">
                                <div className="menu">
                                    <i className='bx bx-dots-horizontal-rounded icon'></i>
                                    <ul className="menu-link">
                                        {/*}<li><a href="#">Edit</a></li>
                                        <li><a href="#">Save</a></li>
                                        <li><a href="#">Remove</a></li>*/}
                                    </ul>
                                </div>
                            </div>
                            <div className="bottom-data">
                                <section>
                                    <div className="container py-5">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card mb-4">
                                                    <div className="card-body">
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <h5 className="mb-0">Name</h5>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{category.name}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <h5 className="mb-0">Description</h5>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{category.description}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <h5 className="mb-0">Status</h5>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{category.status}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default CategoryProfile;

