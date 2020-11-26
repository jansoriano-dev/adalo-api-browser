import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import API from './shared/custOrderInfo';
import { Table } from 'reactstrap';


class App extends Component {
    state = {
        customerOrders: []
    }
    constructor(props) {
        super(props);
        API.get('/').then(res => {
            console.log(res.data);
            this.setState({ customerOrders: res.data })
        });

    }
    render() {
        return (
            <div>

                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Customer OID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Order Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customerOrders.map(custOrder =>
                            <tr key={custOrder.id}>
                                <th scope="row"> {custOrder.custOrderInfoId}</th>
                                <td>{custOrder.custFirstName}</td>
                                <td>{custOrder.custLastName}</td>
                                <td>{custOrder.custEmail}</td>
                                <td>{custOrder.custMobileNumber}</td>
                                <td>{custOrder.custOrderNumber}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>

        );
    }
}

export default App;
