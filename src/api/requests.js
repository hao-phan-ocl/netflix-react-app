const apiKey = '041f1966539ec8a6fa27643ecf32791b'

const requests = {
    billboardImage: `https://image.tmdb.org/t/p/original/`,
    slideImage: `https://image.tmdb.org/t/p/w500/`,

    trending: `/trending/all/week?api_key=${apiKey}&include_adult=false`,
    movieTrending: `/trending/movie/week?api_key=${apiKey}&include_adult=false`,
    tvTrending: `/trending/tv/week?api_key=${apiKey}&include_adult=false`,

    movie_genres: `/genre/movie/list?api_key=${apiKey}&language=en-US`,
    tv_genres: `/genre/tv/list?api_key=${apiKey}&language=en-US`,
    search: `/search/multi?api_key=${apiKey}&include_adult=false&language=en-US&query=`
}

export default requests;