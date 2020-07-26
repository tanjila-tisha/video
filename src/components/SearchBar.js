import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchKey: "" };
  }

  onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onVideoSearchSubmit(this.state.searchKey);
  }

  onInputChange= (event) =>{
    this.setState({ searchKey: event.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Serach</label>
            <input
              placeholder="Type video name for search"
              type="text"
              value={this.state.searchKey}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
