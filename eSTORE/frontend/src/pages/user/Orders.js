import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const Orders = () => {
  return (
    <div>
        <div>
          <Layout title={"My Orders"}>
      <div className="container-fluid m-3">
        <div className="row">
          <div className="col-md-2">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>This is My Orders</h1>
          </div>
        </div>
      </div>
    </Layout>
    </div>
    </div>
  )
}

export default Orders
