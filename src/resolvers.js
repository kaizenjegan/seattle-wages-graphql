module.exports = {
    Query: {
        allSeattleWages: (_, args, { dataSources }) =>{
            console.log(args);
            return dataSources.wageAPI.getAllWages()
        },
        wagesByJobTitle: (_,{ title } , { dataSources}) =>
            dataSources.wageAPI.wagesByJobTitle({title})
    }

};
