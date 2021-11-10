const apiKey = '041f1966539ec8a6fa27643ecf32791b'

const requests = {
    billboardImage: `https://image.tmdb.org/t/p/original/`,
    slideImage: `https://image.tmdb.org/t/p/w500/`,

    trending: `/trending/all/day?api_key=${apiKey}`,
    movieTrending: `/trending/movie/day?api_key=${apiKey}`,
    tvTrending: `/trending/tv/day?api_key=${apiKey}`,

    movie_genres: `/genre/movie/list?api_key=${apiKey}&language=en-US`,
    tv_genres: `/genre/tv/list?api_key=${apiKey}&language=en-US`,
    search: `/search/multi?api_key=${apiKey}&language=en-US&query=`
}

export default requests;