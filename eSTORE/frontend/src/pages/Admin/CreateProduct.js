import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const CreateProduct = () => {
  return (
    <Layout title={"Create Product"}>
    <div className="container-fluid m-3">
      <div className="row">
        <div className="col-md-2">
          <AdminMenu/>
        </div>
        <div className="col-md-9">
          <h1>Create Product</h1>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default CreateProduct
