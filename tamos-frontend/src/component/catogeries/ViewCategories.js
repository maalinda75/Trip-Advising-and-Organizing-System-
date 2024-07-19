import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Helmet } from 'react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import Search from '../common/Search';
import '../../css.css';

const ViewCategories = () => {
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');
    const navigator = useNavigate();
    const [statusCounts, setStatusCounts] = useState({
        total: 0,
        active: 0,
        inactive: 0,
        archived: 0
    });

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
            const result = await axios.get('http://localhost:8080/categories');
            setCategories(result.data);
            calculateStatusCounts(result.data);
        } catch (error) {
            console.error('Error loading categories:', error);
        }
    };

    const calculateStatusCounts = (data) => {
        const totalCount = data.length;
        const activeCount = data.filter(category => category.status === 'Active').length;
        const inactiveCount = data.filter(category => category.status === 'Inactive').length;
        const archivedCount = data.filter(category => category.status === 'Archived').length;

        setStatusCounts({
            total: totalCount,
            active: activeCount,
            inactive: inactiveCount,
            archived: archivedCount
        });
    };

    function viewCategory(id) {
        navigator(`/category-details/${id}`);
    }

    return (
       
        <div>
              <Helmet>
                <script src="../../script.js" type="text/jsx" />
            </Helmet>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            <link rel="stylesheet" href="../src/style.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            <section id="sidebar">
    <a href="#" className="brand"><i className='bx bx-map-pin'></i> ExploreXpert</a>
    <ul className="side-menu">
        <li><a href="/view-clients" className="active"><i className='bx bxs-group icon' ></i> All Clients</a></li>
        <li><a href="/add-clients"><i className='bx bxs-user-plus icon' ></i> Add clients</a></li>
        <li><a href="/view-categories"><i className='bx bxs-category'></i> View Categories</a></li> {/* Added view-categories link */}
        <li><Link to="/settings"><i className='bx bxs-cog icon' ></i> Settings</Link></li>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
                    <h1 className="title">All Categories</h1>
                    <Search search={search} setSearch={setSearch} />
                    <div className="info-data">
                        <div className="card">
                            <div className="head">
                                <div className="box">
                                    <h2>{statusCounts.total}</h2>
                                    <p>Total Categories</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="head">
                                <div className="box">
                                    <h2>{statusCounts.active}</h2>
                                    <p>Active Categories</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="head">
                                <div className="box">
                                    <h2>{statusCounts.inactive}</h2>
                                    <p>Inactive Categories</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="head">
                                <div className="box">
                                    <h2>{statusCounts.archived}</h2>
                                    <p>Archived Categories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                    {categories
                .filter(category => category.categoryName && category.categoryName.toLowerCase().includes(search))
                .map((category, index) => (
                    <tr key={category.categoryId}>
                        <th scope="row">{index + 1}</th>
                        <td>{category.categoryName}</td>
                        <td>{category.description}</td>
                        <td>{category.status}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => viewCategory(category.categoryId)}>View</button>
                        </td>
                    </tr>
                ))}

                        </tbody>
                    </table>
                </main>
            </section>
        </div>
    );
};

export default ViewCategories;
