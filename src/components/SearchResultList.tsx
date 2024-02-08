import { Component } from 'react';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import '../styles/SearchResultList.css';

interface Person {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  gender: string;
}

interface SearchResultListProps {
  results: Person[];
  onPageChange: (newPage: number) => void;
  currentPage: number;
}

class SearchResultList extends Component<SearchResultListProps> {
  render() {
    const { results, onPageChange, currentPage } = this.props;

    return (
      <div className="content">
        <h2>Search Results</h2>
        <div className="user-container">
          {results.map((person) => (
            <div key={person.name} className="user">
              <h3>{person.name}</h3>
              <p>Height: {person.height}sm</p>
              <p>Weight: {person.mass}kg</p>
              <p>Birth Year: {person.birth_year}</p>
              <p>Gender: {person.gender}</p>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <GrLinkPrevious />
          </button>
          <span className="page">Page {currentPage}</span>
          <button onClick={() => onPageChange(currentPage + 1)}>
            <GrLinkNext />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchResultList;
