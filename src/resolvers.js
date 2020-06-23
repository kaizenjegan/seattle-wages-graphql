module.exports = {
    WageType:{
        notes:(_, args, { dataSources }) =>{
            //dataSource.wageAPI.findById
            return "note shun"
        }
    },
    Query: {
        wages: (_, args, { dataSources }) =>{
            console.log(args);
            return dataSources.wageAPI.getAllWages()
        },
        wage: (_,{ title } , { dataSources}) =>
            dataSources.wageAPI.wagesByJobTitle({title})
    },
    Mutation: {
        setWages: (_, args, { dataSources }) =>{
            console.log(args);
            // return dataSources.wageAPI.getAllWages()
            return dataSources.wageAPI.getAllWages()
        }
    }

};
