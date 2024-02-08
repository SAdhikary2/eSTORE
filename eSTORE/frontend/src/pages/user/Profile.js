import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const Profile = () => {
  return (
    <div>
          <Layout title={"Profile"}>
      <div className="container-fluid m-3">
        <div className="row">
          <div className="col-md-2">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>User Profile</h1>
          </div>
        </div>
      </div>
    </Layout>
    </div>
  )
}

export default Profile
