import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Search from '../common/Search';

const AddClient = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [client, setClient] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        age: "",
        membershipStatus: ""
    });

    const {
        firstName,
        lastName,
        email,
        mobile,
        age,
        membershipStatus
    } = client;

    const handleInputChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value,
        });
    };

    const handleMembershipChange = (e) => {
        setClient({
            ...client,
            membershipStatus: e.target.value
        });
    };

    const saveClient = async (e) => {
        e.preventDefault();
        await axios.post(
            "http://localhost:8080/clients",
            client
        );
        navigate("/view-clients");
    };

    return (

            
<div>
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <link rel="stylesheet" href="../src/style.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
    
    

	<section id="sidebar">
		<a href="#" class="brand"><i class='bx bx-map-pin'></i> ExploreXpert</a>
		<ul class="side-menu">
			<li><a href="/view-clients" ><i class='bx bxs-group icon' ></i> All Clients</a></li>
			
			<li>
				<a href="/add-clients" class="active"><i class='bx bxs-user-plus icon' ></i> Add clients</a>
				
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
					<li><a href="#"><i class='bx bxs-cog' ></i> Settings</a></li>
					<li><a href="#"><i class='bx bxs-log-out-circle' ></i> Logout</a></li>
				</ul>
			</div>
		</nav>
		
		<main>
			<h1 class="title">Add Clients</h1>
			<ul class="breadcrumbs">
				<li><a href="#">Home</a></li>
				<li class="divider">/</li>
				<li><a href="#" class="active">Add Clients</a></li>
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
                <div className="col-sm-8 py-2 px-5 offset-2">
            <h2 className="mt-5"> </h2>
            <form onSubmit={(e) => saveClient(e)}>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="firstName">First Name</label>
                    <input className="form-control col-sm-6" type="text" name="firstName" id="firstName" required value={firstName} onChange={(e) => handleInputChange(e)} />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="lastName">Last Name</label>
                    <input className="form-control col-sm-6" type="text" name="lastName" id="lastName" required value={lastName} onChange={(e) => handleInputChange(e)} />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="email">Your Email</label>
                    <input className="form-control col-sm-6" type="email" name="email" id="email" required value={email} onChange={(e) => handleInputChange(e)} />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="mobile">Mobile</label>
                    <input className="form-control col-sm-6" type="text" name="mobile" id="mobile" required value={mobile} onChange={(e) => handleInputChange(e)} />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="age">Age</label>
                    <input className="form-control col-sm-6" type="text" name="age" id="age" required value={age} onChange={(e) => handleInputChange(e)} />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="membershipStatus">Membership Status</label>
                    <select className="form-select col-sm-6" id="membershipStatus" name="membershipStatus" value={membershipStatus} onChange={handleMembershipChange}>
                        <option value="">Select Membership</option>
                        <option value="Premium">Premium</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                    </select>
                </div>

                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-outline-success btn-lg">Save</button>
                    </div>
                    <div className="col-sm-2">
                        <Link to={"/view-clients"} type="submit" className="btn btn-outline-warning btn-lg">Cancel</Link>
                    </div>
                </div>
            </form>
    </div></div>
					
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

export default AddClient;



        {/*<div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5"> Add Client</h2>
            <form onSubmit={(e) => saveClient(e)}>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="firstName">First Name</label>
                    <input className="form-control col-sm-6" type="text" name="firstName" id="firstName" required value={firstName} onChange={(e) => handleInputChange(e)} />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="lastName">Last Name</label>
                    <input className="form-control col-sm-6" type="text" name="lastName" id="lastName" required value={lastName} onChange={(e) => handleInputChange(e)} />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="email">Your Email</label>
                    <input className="form-control col-sm-6" type="email" name="email" id="email" required value={email} onChange={(e) => handleInputChange(e)} />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="mobile">Mobile</label>
                    <input className="form-control col-sm-6" type="text" name="mobile" id="mobile" required value={mobile} onChange={(e) => handleInputChange(e)} />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="age">Age</label>
                    <input className="form-control col-sm-6" type="text" name="age" id="age" required value={age} onChange={(e) => handleInputChange(e)} />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="membershipStatus">Membership Status</label>
                    <select className="form-select col-sm-6" id="membershipStatus" name="membershipStatus" value={membershipStatus} onChange={handleMembershipChange}>
                        <option value="">Select Membership</option>
                        <option value="Premium">Premium</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                    </select>
                </div>

                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-outline-success btn-lg">Save</button>
                    </div>
                    <div className="col-sm-2">
                        <Link to={"/view-clients"} type="submit" className="btn btn-outline-warning btn-lg">Cancel</Link>
                    </div>
                </div>
            </form>
    </div>*/}
  
