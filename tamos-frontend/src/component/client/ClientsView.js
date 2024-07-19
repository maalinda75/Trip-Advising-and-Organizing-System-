import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Helmet } from 'react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import Search from '../common/Search';
import '../../css.css';

const ClientsView = () => {
    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState("");
    const navigator = useNavigate();
    const [membershipCounts, setMembershipCounts] = useState({
        total: 0,
        premium: 0,
        gold: 0,
        silver: 0
    });

    useEffect(() => {
        loadClients();
    }, []);

    const loadClients = async () => {
        const result = await axios.get("http://localhost:8080/clients", {
            validateStatus: () => true
        });
        if (result.status === 302) {
            setClients(result.data);
            calculateMembershipCounts(result.data);
        }
    };

    const calculateMembershipCounts = (data) => {
        const totalCount = data.length;
        const premiumCount = data.filter(client => client.membershipStatus === 'Premium').length;
        const goldCount = data.filter(client => client.membershipStatus === 'Gold').length;
        const silverCount = data.filter(client => client.membershipStatus === 'Silver').length;

        setMembershipCounts({
            total: totalCount,
            premium: premiumCount,
            gold: goldCount,
            silver: silverCount
        });
    };

    function updateClient(id) {
        navigator(`/edit-client/${id}`);
    }

    function viewClient(id) {
        navigator(`/client-profile/${id}`);
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/clients/delete/${id}`);
        loadClients();
    };

    

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

                    <li>
                        <a href="/add-clients"><i className='bx bxs-user-plus icon' ></i> Add clients</a>

                    </li>
                    <li><a href="/view-categories"><i className='bx bxs-category'></i> View Categories</a></li>
                    <li><Link to="/add-categories"><i className='bx bxs-plus-circle'></i> Add Categories</Link></li>
                    <li><Link to="/settings"><i className='bx bxs-cog icon' ></i> Settings</Link></li>
                    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                    <li><a href="/" className="active"><i className='bx bxs-log-out-circle icon' ></i> Log Out</a></li>
                </ul>

            </section>

            <section id="content">

                <nav>
                    <i className='bx bx-menu toggle-sidebar' ></i>
                    <Search
                        search={search}
                        setSearch={setSearch}
                    />

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
                    <h1 className="title">All Clients</h1>
                    <ul className="breadcrumbs">
                        <li><a href="#">Home</a></li>
                        <li className="divider">/</li>
                        {/* keep them too */}
                    </ul>

                    <div className="info-data">
                        <div className="card">
                            <div className="head">
                                <div className="box">
                                    <h2>{membershipCounts.total}</h2>
                                    <p>Total Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="head">
                                <div className="box">
                                    <h2>{membershipCounts.premium}</h2>
                                    <p>Premium Clients</p>
                                </div>
                                <div className="box">
                                    <span>{`${(membershipCounts.premium / membershipCounts.total * 100).toFixed(2)}%`}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="head">
                                <div className="box">
                                    <h2>{membershipCounts.gold}</h2>
                                    <p>Gold Clients</p>
                                </div>
                                <div className="box">
                                    <span>{`${(membershipCounts.gold / membershipCounts.total * 100).toFixed(2)}%`}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="head">
                                <div className="box">
                                    <h2>{membershipCounts.silver}</h2>
                                    <p>Silver Clients</p>
                                </div>
                                <div className="box">
                                    <span>{`${(membershipCounts.silver / membershipCounts.total * 100).toFixed(2)}%`}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="data">
                        <div className="content-data">
                            <div className="head">
                                <h3>Clients Table</h3>
                            </div>
                            <div className="bottom-data">
                                <section className="table__body">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Mobile Number</th>
                                                <th>Age</th>
                                                <th>Membership Status</th>
                                                <th colSpan="3">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {clients
                                                .filter((st) =>
                                                    st.firstName
                                                        .toLowerCase()
                                                        .includes(search)
                                                )
                                                .map((client, index) => (
                                                    <tr key={client.id}>
                                                        <th scope="row" key={index}>
                                                            {index + 1}
                                                        </th>
                                                        <td>{client.firstName} </td>
                                                        <td>{client.lastName} </td>
                                                        <td>{client.email} </td>
                                                        <td>{client.mobile} </td>
                                                        <td>{client.age} </td>
                                                        <td> <span className={`badge ${client.membershipStatus === 'Premium' ? 'bg-primary' : client.membershipStatus === 'Gold' ? 'bg-warning text-dark' : 'bg-secondary'}`}>
                                                            {client.membershipStatus}
                                                        </span></td>
                                                        <td>
                                                            <button className='btn btn-primary' onClick={() => viewClient(client.id)}><i className="fa fa-eye" aria-hidden="true"></i></button>
                                                            <button className='btn btn-success' onClick={() => updateClient(client.id)} style={{ marginLeft: '10px' }}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                                            <button className='btn btn-danger' onClick={() => handleDelete(client.id)} style={{ marginLeft: '10px' }}><i className="fa fa-trash" aria-hidden="true"></i></button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </section>
                            </div>
                        </div>
                    </div>
                </main>

            </section>
        </div>
    );
};

export default ClientsView;




{/*
    <section>
        <Search
				search={search}
				setSearch={setSearch}
			/>
        <table classNameName="table table-borderd table-hover shadow">
            <thead>
            <tr classNameName="text-center">
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Age</th>
                <th>Membership Status</th>
                <th colSpan="3">Actions</th>
            </tr>
            </thead>
            <tbody classNameName="text-center">
					{clients
						.filter((st) =>
							st.firstName
								.toLowerCase()
								.includes(search)
						)
                .map((client,index)=>(
    
            <tr key={client.id}>
                <th scope="row" key={index}>
                    {index+1}
                </th>
            <td>{client.firstName} </td>
            <td>{client.lastName} </td>
            <td>{client.email} </td>
            <td>{client.mobile} </td>
            <td>{client.age} </td>
            <td>{client.membershipStatus} </td>
           
            <td classNameName='mx-2'>
                <Link to={`/client-profile/${client.id}`}
                classNameName='btn btn-infoo'>
                <FaEye/>
                </Link>

                </td>
            
            <td classNameName='mx-2'>
                <Link to={`/edit-client/${client.id}`}
                classNameName='btn btn-warning'>
                <FaEdit/>
                </Link>

                </td>
            <td classNameName="mx-2">
                <button classNameName='btn btn-danger'
                onClick={()=>handleDelete(client.id)}
                >
                <FaTrashAlt/>
                </button>
                </td>
            
            

            </tr>
            
            ))}
            
            </tbody>
        </table>
                </section>*/} 