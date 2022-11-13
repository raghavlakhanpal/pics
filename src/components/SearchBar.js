import React from "react";

class SearchBar extends React.Component {
  state = { searchValue: "" };

  //Handler functions example
  // onInputChange(event){
  //     console.log(event.target.value);
  // }
  onFormSubmit = (event) => {
    event.preventDefault();

    // Here, the prop onSubmit is a Callback which will carry the argument passed to parent component and execute it there
    this.props.onSubmit(this.state.searchValue);
  };

  render() {
    return (
      <div className="ui segment container" style={{ marginTop: "10px" }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>

            {/* Using state instead of Handler function */}
            <input
              type="text"
              value={this.state.searchValue}
              onChange={(e) => {
                this.setState({ searchValue: e.target.value });
              }}
            />

            {/* 👇🏻Handler function used - Uncontrolled Method */}
            {/* <input type="text" onChange={this.onInputChange}/> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
