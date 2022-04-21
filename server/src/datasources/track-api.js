const {RESTDataSource} = require('apollo-datasource-rest');

// RESTDataSource ここには既にキャッシュの機構が備わっているので、２回目以降のリクエストは早くなる。
class TrackAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }

    getTracksForHome() {
        return this.get('tracks');
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`);
    }

}
module.exports = TrackAPI;
