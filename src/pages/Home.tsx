import { Component } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import SearchResultList from '../components/SearchResultList';
import ErrorBoundary from '../components/ErrorBoundary';

interface Person {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  gender: string;
}

interface AppState {
  searchResults: Person[];
  currentPage: number;
}

class Home extends Component<Record<string, never>, AppState> {
  state: AppState = {
    searchResults: [],
    currentPage: 1,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = (searchTerm = '') => {
    let apiUrl = `https://swapi.dev/api/people/?page=${this.state.currentPage}`;
    if (searchTerm) {
      apiUrl += `&search=${searchTerm}`;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({ searchResults: response.data.results });
      })
      .catch((error) => {
        throw new Error(`Failed to fetch data: ${error.message}`);
      });
  };

  handleSearch = (searchTerm: string) => {
    this.setState({ currentPage: 1 }, () => {
      this.fetchData(searchTerm);
    });
  };

  handlePageChange = (newPage: number) => {
    this.setState({ currentPage: newPage }, () => {
      this.fetchData();
    });
  };

  render() {
    return (
      <div className="homepage">
        <ErrorBoundary>
          <SearchBar onSearch={this.handleSearch} />
          <SearchResultList
            results={this.state.searchResults}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default Home;
