import {moviesList} from '../../mockData';
import {toggleFavorite} from '../actions/actionTypes';

const initialState = {
    movies: moviesList,
    favoriteMovies: [],
};

const moviesReducer = (state = initialState, action) => {

    switch (action.type) {

        case toggleFavorite:
            console.warn(action);

            const existingIndex = state.favoriteMovies.findIndex(movie => movie.imdbID === action.imdbID);

            if (existingIndex >= 0) { // Is inside of Favorites
                console.warn('HERE1')
                // Remove movie from favorites
                const updatedFavoritesMovies = [...state.favoriteMovies];
                updatedFavoritesMovies.splice(existingIndex, 1);

                return {...state, favoriteMovies: updatedFavoritesMovies};

            } else { // Is not inside Favorites
                console.warn('HERE2')
                // Add Movie TO Fav

                const movie = state.movies.find(movie => movie.imdbID === action.imdbID);

                return {...state, favoriteMovies: state.favoriteMovies.concat(movie)};

            }

        default:
            return state;
        
    }

};

export default moviesReducer;