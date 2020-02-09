export const GET_MOVIES = 'GET_MOVIES'

export function getMovies() {
  return async function(dispatch) {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=57240bdabb8dfb0b7208b0e2c4076d5d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    const movies = await res.json()
    return dispatch({
      type: 'GET_MOVIES',
      data: movies.results,
    })
  }
}