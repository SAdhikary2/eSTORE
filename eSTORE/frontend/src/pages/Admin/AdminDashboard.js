import React from 'react'
import Layout from './../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import { useAuth } from '../../context/auth';

const AdminDashboard = () => {
  const [auth]=useAuth();

  return (
    <Layout title={"Admin -Home"}>
      <div className='container-fluid m-3'>

    <div className='row'>
      <div className='col-md-2'>
        <AdminMenu/>
      </div>
      <div className='col-md-9'>
        
    <div className='card w-75 p-3'>

    <h3>Admin Name : {auth?.user?.name}</h3>
    <h3>Email: {auth?.user?.email}</h3>
    <h3>Contact : {auth?.user?.phone}</h3>

    </div>


      </div>
    </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard
