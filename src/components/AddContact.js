import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Values Are Required");
      return false;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.add}>
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-2 text-center"
              id="exampleInputName"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="email"
              className="form-control mt-2 text-center"
              id="exampleInputEmail"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="form-group mt-4 text-center">
            <button type="submit" className="btn btn-primary mt-3">
              Add Contact
            </button>
          </div>
        </form>
        <hr></hr>
      </div>
    );
  }
}

export default AddContact;
