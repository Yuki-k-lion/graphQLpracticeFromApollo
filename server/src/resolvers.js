
const resolvers = {

    Query: {
        // home に表示するための情報を取得するクエリ。
        // tracksForHome: (parent, args, context, info) => {},
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        },
    },
    Track: {
        // author: (parent, args, context, info) => {}
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }
};

module.exports = resolvers;
