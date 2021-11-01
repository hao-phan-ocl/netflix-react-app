const apiKey = '041f1966539ec8a6fa27643ecf32791b'

const requests = {
    trending: `/trending/all/day?api_key=${apiKey}`,
    movie_genres: `/genre/movie/list?api_key=${apiKey}&language=en-US`,
    tv_genres: `/genre/tv/list?api_key=${apiKey}&language=en-US`
    // movieList: `/discover/movie?api_key=${apiKey}&language=en-US&include_video=true&with_genres=&${genre_id}`,
    // tvList: `/discover/tv?api_key=${apiKey}&language=en-US&include_video=true&with_genres=&${genre_id}`
}

export default requests;