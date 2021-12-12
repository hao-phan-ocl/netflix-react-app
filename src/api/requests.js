const apiKey = '041f1966539ec8a6fa27643ecf32791b'

export const requests = {
    billboardImage: 'https://image.tmdb.org/t/p/original/',
    slideImage: 'https://image.tmdb.org/t/p/w500/',
    movie_genres: `/genre/movie/list?api_key=${apiKey}&language=en-US`,
    tv_genres: `/genre/tv/list?api_key=${apiKey}&language=en-US`,
    search: `/search/multi?api_key=${apiKey}&include_adult=false&language=en-US&query=`
}

export const homeRequests = {
    trending: `/trending/all/week?api_key=${apiKey}&include_adult=false`,
    scienceFiction: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=878`,
    thriller: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=53`,
    drama: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=18`,
    animation: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=16`,
    family: `/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10751`,
    kid: `/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10762`,
    mystery: `/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=9648`,
}

export const tvRequests = {
    tvTrending: `/trending/tv/week?api_key=${apiKey}&include_adult=false`,
    tvTopRated: `/tv/top_rated?api_key=${apiKey}&language=en-US`,
    tvNetflix: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    tvDocumentary: `/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=99`,
    tvAnimation: `/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=16`,
    tvAdventure: `/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10759`,
    tvComedy: `/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=35`,
    tvDrama: `/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=18`,
}

export const movieRequests = {
    movieTrending: `/trending/movie/week?api_key=${apiKey}&include_adult=false`,
    movieTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    movieNetflix: `/discover/movie?api_key=${apiKey}&with_networks=213`,
    movieDocumentary: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=99`,
    movieRomance: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10749`,
    movieCrime: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=80`,
    movieWestern: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=37`,
    movieHorror: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=27`,
}