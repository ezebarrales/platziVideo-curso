const BASE_API = 'https://yts.lt/api/v2'

const LIST_MOVIES = `${BASE_API}/list_movies.json`
const MOVIE_SUGGESTIONS = `${BASE_API}/movie_suggestions.json`

class Api {

    getSuggestion = async (id) => {
        const query = await fetch(`${MOVIE_SUGGESTIONS}?movie_id=${id}`)
        const { data: suggestions } = await query.json()

        return suggestions
    }

    getMovies = async () => {
        const query = await fetch(LIST_MOVIES)
        const { data: movies } = await query.json()

        return movies
    }

    searchMovie = async (term = '', limit = 1) => {
        const query = await fetch(`${LIST_MOVIES}?query_term=${term}&limit=${limit}`)
        const { data: movies } = await query.json()

        return movies
    }

}

export default new Api()