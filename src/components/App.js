// importing libraries
import React from "react";

//importing API
import unsplash from "../api/unsplash";

// importing Components
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  //initializing state
  state = { images: [] };

  //method to get the value entered by user from child component using callback
  // AND using axios library to fetch array from API and assign the array to state
  onSearchSubmit = async (searchValue) => {
    //API integration using unsplash api that uses axios liabrary
    const response = await unsplash.get("search/photos", {
      params: { query: searchValue },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        {/* Here, the onSubmit is a user defined prop and passes the callback method to child compnent  */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
