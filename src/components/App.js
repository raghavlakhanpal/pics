import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(searchValue) {
    console.log(searchValue);
  }

  render() {
    return (
      <div>
        {/* Here, the onSubmit is a user defined prop and passes the callback method to child compnent  */}
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
