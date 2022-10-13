import React, { Component } from "react";
import "./Users.css";

class Users extends Component {
  render() {
    return (
      <div className="users-name">
        <h1>User's List</h1>
        <form>
          <input type="text" placeholder="Enter name"></input>
          <button type="submit">Add user</button>
        </form>
        <ul>
          <li>Karol</li>
          <li>Julia</li>
        </ul>
      </div>
    );
  }
}

export default Users;
