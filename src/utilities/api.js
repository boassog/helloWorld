var api = {

  getMatchs(){
    var apiKey = 'b19bbfe6-1e10-41c4-bfcd-5bc6c681636b';
    var url = 'https://las.api.pvp.net/api/lol/las/v2.2/matchlist/by-summoner/180721?seasons=SEASON2016&api_key=' + apiKey;
    return fetch(url).then((res) => res.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  },

  getChampionById(id){
    var apiKey = 'b19bbfe6-1e10-41c4-bfcd-5bc6c681636b';
    var url = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + id + '?champData=image&api_key=' + apiKey;
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
