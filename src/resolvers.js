module.exports = {
    Query: {
    allSeattleWages: (_, __, { dataSources }) =>
        dataSources.wageAPI.getAllWages()
    }
  };