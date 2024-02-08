import { ChangeEvent, Component } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

interface SearchBarState {
  searchTerm: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  state: SearchBarState = {
    searchTerm: '',
  };

  componentDidMount() {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      this.setState({ searchTerm: savedSearchTerm });
    }
  }

  handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value.trim() });
  };

  handleSearchClick = () => {
    const { searchTerm } = this.state;
    localStorage.setItem('searchTerm', searchTerm);
    this.props.onSearch(searchTerm);
  };

  render() {
    return (
      <div className="flex">
        <input
          type="text"
          placeholder="Search user ..."
          value={this.state.searchTerm}
          onChange={this.handleSearchChange}
          className=""
        />
        <button onClick={this.handleSearchClick}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
