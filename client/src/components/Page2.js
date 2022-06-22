import React, { Component } from 'react';

import {Link} from "react-router-dom";
const users = require('../components/graphs/users.json');


export class Tableau extends Component {
  render() {
      return (
        <>
            <div>
              <table border="1">
                <tbody>
                  <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>          
                  </tr>
                  {users.users.map((item, i) => (
                      <tr key={i}>
                          <td>{item.name}</td>
                          <td>{item.phone}</td>
                          <td><a href={"mailto:"+item.email}>{item.email}</a></td>
                      </tr>
                  ))}
                </tbody>
              </table>
              <p><Link to="/">Home - page 1</Link></p>
            <p><Link to="/page2">Page 2</Link></p>
            <p><Link to="/page3">Page 3</Link></p>
            </div>
        </>
    )
  }
}

export default Tableau