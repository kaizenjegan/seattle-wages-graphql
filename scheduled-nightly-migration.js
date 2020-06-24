const mongoose = require('mongoose');
const axios = require('axios');

// process.env.mongooseURL
//mongodb+srv://graphqluser:change@cluster0-bxbjj.azure.mongodb.net/<dbname>?retryWrites=true&w=majority
const connectionString = "mongodb://localhost:27017/seattlejobs";

mongoose.connect(connectionString, {useNewUrlParser: true});



const jobsModel = mongoose.model('Job', new mongoose.Schema({ 
    name: String,
    sid: String,
    id: String,
    position: String,
    createdAt: String,
    createdMeta: String,
    updatedAt: String,
    updatedMeta: String,
    meta: String,
    title: String,
    numberOfFemaleEmployees: String,
    noFemaleEmployee: String,
    averageOfFemaleMonthsLongevityInCurrentClassification: String, //Average of Female MONTHS LONGEVITY IN CURRENT CLASSIFICATION 
    maleAvgHrlyRate: String, //Male Avg Hrly Rate 
    noMaleEmployees: String, //No. Male Empl"
    averageOfMaleMonthsLongevityInCurrentClassification: String, //Average of Male MONTHS LONGEVITY IN CURRENT CLASSIFICATION
    totalAvgHourlyRate: String, //Total Avg Hrly Rate
    totalNoEmployee: String,
    totalAverageOfMonthsLongevityInCurrentClassification: String,
    ratioOfWomenHourlyRateToMenHourlyRatePercentage: String,
    notes: String   
}));

jobsModel.collection.drop();


const wageReducer = (wage)=>{
    console.log(wage);
    return {
        sid: wage[0],
        id: wage[1],
        position: wage[2],
        createdAt: wage[3],
        createdMeta: wage[4],
        updatedAt: wage[5],
        updatedMeta: wage[6],
        meta: wage[7],
        title: wage[8],
        numberOfFemaleEmployees: wage[9],
        noFemaleEmployee: wage[10],
        averageOfFemaleMonthsLongevityInCurrentClassification: wage[11], //Average of Female MONTHS LONGEVITY IN CURRENT CLASSIFICATION 
        maleAvgHrlyRate: wage[12], //Male Avg Hrly Rate 
        noMaleEmployees: wage[13], //No. Male Empl"
        averageOfMaleMonthsLongevityInCurrentClassification: wage[14], //Average of Male MONTHS LONGEVITY IN CURRENT CLASSIFICATION
        totalAvgHourlyRate: wage[15], //Total Avg Hrly Rate
        totalNoEmployee: wage[16],
        totalAverageOfMonthsLongevityInCurrentClassification: wage[17],
        ratioOfWomenHourlyRateToMenHourlyRatePercentage: wage[18],
        notes: wage[19]       
    }
  }

// Make a request for a user with a given ID
axios.get('https://data.seattle.gov/api/views/cf52-s8er/rows.json')
  .then(function (response) {
    // handle success
    // console.log(response["data"]);

    const wage = response.data;
    const jobs = Array.isArray(wage.data) ? wage.data.map(job => wageReducer(job)): [];
    

    // console.log(Array.isArray (data['data']) );
    console.log(jobs);
    jobsModel.insertMany(jobs)
    .then(function(mongooseDocuments) {
         /* ... */
         console.log("success");
    })
    .catch(function(err) {
        /* Error handling */
    });

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });



