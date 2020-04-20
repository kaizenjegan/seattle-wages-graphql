module.exports = {
    Query: {
        allSeattleWages: (_, __, { dataSources }) =>
            dataSources.wageAPI.getAllWages(),
        wagesByJobTitle: (_,{ title } , { dataSources}) =>
            dataSources.wageAPI.wagesByJobTitle({title})
    }

};
