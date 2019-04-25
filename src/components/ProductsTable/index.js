import React, { Component } from 'react'

import {
    Table,
    Button
} from 'reactstrap'



class ProductsTable extends Component {

    render(){
        return (
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Product image</th>
                <th scope="col">Name</th>
                <th scope="col">Code</th>
                <th scope="col">Manufacturer</th>
                <th scope="col">Categories</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {this.props.products.map(product => (
                <tr key={product.id}>
                  <td>
                    <img
                      style={{ width: 80, height: 80 }}
                      alt="..."
                      src={product.image}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.code}</td>
                  <td>{product.manufacturer.name}</td>
                  <td>{product.categories.map(item => (<span className="d-block">{`${item.name}`}</span>))}</td>
                  <td className="text-right">
                    <Button
                      onClick={() => {
                        this.props.onView(product);
                      }}
                      color="primary"
                    >
                      {" "}
                      View{" "}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        );
    }
}
export default ProductsTable