const API_KEY = process.env.API_KEY

export default {
    fetchTrending : {
        title : 'CI',
        url :`/trending/all/week?api_key=${API_KEY}&language=en-us`
    },
    fetchTopRated : {
        title : 'Quality',
        url :`/movie/top_rated?api_key=${API_KEY}&language=en-us`
    },
    fetchActionMovies: {
        title : 'Slaughtering',
        url :`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title : 'Furthering',
        url :`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchMorrorMovies: {
        title : 'Maintenance',
        url :`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchMorrorMovies: {
        title : 'Cleaning-Sanitation',
        url :`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },

}