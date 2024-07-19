import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Search from '../common/Search';

const ClientProfile = () => {
    const { id } = useParams();
	const [search, setSearch] = useState("");
    const [client, setClient] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        age: "",
        membershipStatus: ""
    });

    useEffect(() => {
        loadClient();
    }, []);

    const loadClient = async () => {
        const result = await axios.get(`http://localhost:8080/clients/client/${id}`);
        setClient(result.data);
    };

    return (


            
            
<div>
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <link rel="stylesheet" href="../src/style.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
    
    

	<section id="sidebar">
		<a href="#" class="brand"><i class='bx bx-map-pin'></i> ExploreXpert</a>
		<ul class="side-menu">
			<li><a href="/view-clients" class="active"><i class='bx bxs-group icon' ></i> All Clients</a></li>
			
			<li>
				<a href="/add-clients" ><i class='bx bxs-user-plus icon' ></i> Add clients</a>
				
			</li>
			
            <li><Link to="/settings"><i class='bx bxs-cog icon' ></i> Settings</Link></li>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
			<li><a href="/" class="active"><i class='bx bxs-log-out-circle icon' ></i> Log Out</a></li>
			{/*<li><a href="#"><i class='bx bx-table icon' ></i> Tables</a></li>
			<li>
				<a href="#"><i class='bx bxs-notepad icon' ></i> Forms <i class='bx bx-chevron-right icon-right' ></i></a>
				<ul class="side-dropdown">
					<li><a href="#">Basic</a></li>
					<li><a href="#">Select</a></li>
					<li><a href="#">Checkbox</a></li>
					<li><a href="#">Radio</a></li>
				</ul>
  </li>*/}
		</ul>
		
	</section>
	
	<section id="content">
		
		<nav>
			<i class='bx bx-menu toggle-sidebar' ></i>
			<Search
				search={search}
				setSearch={setSearch}
			/>
			
			<span class="divider"></span>
			<div class="profile">
				<img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
				<ul class="profile-link">
					<li><a href="#"><i class='bx bxs-user-circle icon' ></i> Profile</a></li>
					<li><Link to="/settings"><i class='bx bxs-cog' ></i> Settings</Link></li>
					<li><a href="#"><i class='bx bxs-log-out-circle' ></i> Logout</a></li>
				</ul>
			</div>
		</nav>
		
		<main>
			<h1 class="title">Client Profile</h1>
			<ul class="breadcrumbs">
				<li><a href="/view-clients">All Clients</a></li>
				<li class="divider">/</li>
				<li><a href="#" class="active">Client Profile</a></li>
			</ul>
			
			<div class="data">
				<div class="content-data">
					<div class="head">
					
						<div class="menu">
							<i class='bx bx-dots-horizontal-rounded icon'></i>
							<ul class="menu-link">
								{/*}<li><a href="#">Edit</a></li>
								<li><a href="#">Save</a></li>
  <li><a href="#">Remove</a></li>*/}
							</ul>
                            </div>
					</div>
                    <div className="bottom-data">
                <div className="orders"></div>
                <section >
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: 150 }}
                                />
                                <h5 className="my-3">
                                    {`${client.firstName} ${client.lastName}`}
                                </h5>
                                <div className="d-flex justify-content-center mb-2">
                                    <button type="button" className="btn btn-outline-primary">
                                        Call
                                    </button>
                                    <button type="button" className="btn btn-outline-warning ms-1">
                                        Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="card mb-4">
                            <div className="card-body">
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">First Name</h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{client.firstName}</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Last Name</h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{client.lastName}</p>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Email</h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{client.email}</p>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Mobile</h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{client.mobile}</p>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Age</h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{client.age}</p>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Membership</h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            <span className={`badge ${client.membershipStatus === 'Premium' ? 'bg-primary' : client.membershipStatus === 'Gold' ? 'bg-warning text-dark' : 'bg-secondary'}`}>
                                                {client.membershipStatus}
                                            </span>
                                        </p>
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
					
					{/*<div class="chart">
						<div id="chart"></div>
					</div>*/}
				</div>
				
			</div>
		</main>
	
	</section>
	

	<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
	
</div>



        );
    };
    
    export default ClientProfile;
        {/*
        <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: 150 }}
                                />
                                <h5 className="my-3">
                                    {`${client.firstName} ${client.lastName}`}
                                </h5>
                                <div className="d-flex justify-content-center mb-2">
                                    <button type="button" className="btn btn-outline-primary">
                                        Call
                                    </button>
                                    <button type="button" className="btn btn-outline-warning ms-1">
                                        Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="card mb-4">
                            <div className="card-body">
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">First Name</h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{client.firstName}</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Last Name</h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{client.lastName}</p>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Email</h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{client.email}</p>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Mobile</h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{client.mobile}</p>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Age</h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{client.age}</p>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Membership</h5>
                                    </div>

                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            <span className={`badge ${client.membershipStatus === 'Premium' ? 'bg-primary' : client.membershipStatus === 'Gold' ? 'bg-warning text-dark' : 'bg-secondary'}`}>
                                                {client.membershipStatus}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>*/}
 
