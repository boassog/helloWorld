var api = {
  getMovies(){
    var apiKey = 'b19bbfe6-1e10-41c4-bfcd-5bc6c681636b';
    // var url = 'https://las.api.pvp.net/api/lol/las/v1.3/stats/by-summoner/180721/ranked?season=SEASON2016&api_key=' + apiKey;

    //champions
    var url = 'https://las.api.pvp.net/api/lol/las/v1.2/champion?freeToPlay=true&api_key=' + apiKey;
    // var url = 'https://facebook.github.io/react-native/movies.json'
    return fetch(url).then((res) => res.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

module.exports = api;
