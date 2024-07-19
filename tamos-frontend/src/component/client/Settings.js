import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Settings = () => {
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
          <li><Link to="/view-clients"><i className='bx bxs-group icon'></i> All Clients</Link></li>
          <li><Link to="/add-clients"><i className='bx bxs-user-plus icon'></i> Add clients</Link></li>
          <li><Link to="/settings" className="active"><i className='bx bxs-cog icon'></i> Settings</Link></li>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <li><Link to="/"><i className='bx bxs-log-out-circle icon'></i> Log Out</Link></li>
        </ul>
      </section>

      <section id="content">
        <nav>
          <i className='bx bx-menu toggle-sidebar'></i>
          <span className="divider"></span>
          <div className="profile">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            <ul className="profile-link">
              <li><a href="#"><i className='bx bxs-user-circle icon'></i> Profile</a></li>
              <li><a href="#"><i className='bx bxs-cog'></i> Settings</a></li>
              <li><a href="#"><i className='bx bxs-log-out-circle'></i> Logout</a></li>
            </ul>
          </div>
        </nav>

        <main>
          <h1 className="title">Settings</h1>
          <ul className="breadcrumbs">
            <li><a href="#">Home</a></li>
            <li className="divider">/</li>
            <li><a href="#" className="active">Settings</a></li>
          </ul>

          <div className="data">
            <div className="content-data">
              <div className="head">
                <h3>General Settings</h3>
              </div>
              
                </div>
              </div>
           
          
        </main>
      </section>
    </div>
  );
};

export default Settings;