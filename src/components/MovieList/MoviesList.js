import { Link, useLocation } from 'react-router-dom';
import { List, Item } from './MoviesList.styled';
import PropTypes from 'prop-types';


export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <List>
      {movies.map((movie, index) => (
        <Item key={ index }> {movie.text}
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </Item>
      ))}
    </List>
  );
}


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};