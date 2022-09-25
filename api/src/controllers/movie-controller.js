const axios = require("axios");
const { Movie } = require("../db");

const getAllData = async (req, res) => {
  try {
    const first = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=81e429054da1f5bd9718927b7367dc2e&page=1"
    );
    const sec = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=81e429054da1f5bd9718927b7367dc2e&page=2"
    );
    const thir = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=81e429054da1f5bd9718927b7367dc2e&page=3"
    );
    const four = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=81e429054da1f5bd9718927b7367dc2e&page=4"
    );
    const five = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=81e429054da1f5bd9718927b7367dc2e&page=5"
    );
    const six = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=81e429054da1f5bd9718927b7367dc2e&page=6"
    );
    const seven = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=81e429054da1f5bd9718927b7367dc2e&page=7"
    );
    const eight = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=81e429054da1f5bd9718927b7367dc2e&page=8"
    );
    const nine = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=81e429054da1f5bd9718927b7367dc2e&page=9"
    );
    const ten = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=81e429054da1f5bd9718927b7367dc2e&page=10"
    );

    Promise.all([
      first,
      sec,
      thir,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      ten,
    ]).then((resp) => {
      const [a, n, d, e, r, s, o, nn] = resp;
      // console.log(a.data.results);
      // console.log(n.data.results);
      // console.log(d.data.results);
      // console.log(e.data.results);
      // console.log(r.data.results);
      // console.log(s.data.results);
      // console.log(o.data.results);
      // console.log(nn.data.results);
      resp.map((e) => {
        console.log(e.data.results);
        e.data.results.map((movie) => {
          Movie.findOrCreate({
            where: {
              movie_title: movie.title,
              original_language: movie.original_language,
              overview: movie.overview,
              vote_average: movie.vote_average,
              img: movie.poster_path,
              popularity: movie.popularity,
              release_date: movie.release_date,
              adult: movie.adult,
            },
          });
        });
      });
    });

    // let page = 102;
    // const { data } = await axios.get(
    //   `https://api.themoviedb.org/3/discover/movie?api_key=81e429054da1f5bd9718927b7367dc2e&page=${page}`
    // );

    // data.results.map((movie) => {
    //   Movie.findOrCreate({
    //     where: {
    //       movie_title: movie.title,
    //       original_language: movie.original_language,
    //       overview: movie.overview,
    //       vote_average: movie.vote_average,
    //       img: movie.poster_path,
    //       popularity: movie.popularity,
    //       release_date: movie.release_date,
    //       adult: movie.adult,
    //     },
    //   });
    // });

    // const allMovies = data.results.map((movie) => {
    //   return {
    //     movie_title: movie.title,
    //     original_language: movie.original_language,
    //     overview: movie.overview,
    //     vote_average: movie.vote_average,
    //     img: movie.poster_path,
    //     popularity: movie.popularity,
    //     release_date: movie.release_date,
    //     adult: movie.adult,
    //   };
    // });

    // allMovies.map((e) => {
    //   Movie.findOrCreate({
    //     where: {
    //       movie_title: e.movie_title,
    //       original_language: e.original_language,
    //       overview: e.overview,
    //       vote_average: e.vote_average,
    //       img: e.img,
    //       popularity: e.popularity,
    //       release_date: e.release_date,
    //       adult: e.adult,
    //     },
    //   });
    // });

    // data.results.map((movie) => {
    //   console.log({
    //     movie_title: movie.title,
    //     original_language: movie.original_language,
    //     overview: movie.overview,
    //     vote_average: movie.vote_average,
    //     img: movie.poster_path,
    //     popularity: movie.popularity,
    //     release_date: movie.release_date,
    //     adult: movie.adult,
    //   });
    // });

    res.json("done movie saved");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getAllData };
