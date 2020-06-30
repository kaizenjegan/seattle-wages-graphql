const mongoose = require('mongoose');
const axios = require('axios');
const JobsModel = require('./src/datasources/jobsModel.js');
const config = require('./envconfig');

mongoose.connect(config.connectionString, {useUnifiedTopology: true});

const jobsModel = JobsModel;




const wageReducer = (wage)=>{
    // console.log(wage);
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
        averageOfFemaleLongevityInMonths: wage[11], //Average of Female MONTHS LONGEVITY IN CURRENT CLASSIFICATION
        maleAvgHrlyRate: wage[12], //Male Avg Hrly Rate
        numberOfMaleEmployees: wage[13], //No. Male Empl"
        averageOfMaleLongevityInMonths: wage[14], //Average of Male MONTHS LONGEVITY IN CURRENT CLASSIFICATION
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
    const wage = response.data;
    const jobs = Array.isArray(wage.data) ? wage.data.map(job => wageReducer(job)): [];

    jobsModel.collection.drop();

    jobsModel.insertMany(jobs)
    .then(function(mongooseDocuments) {
         /* ... */
         console.log("success");
    })
    .catch(function(err) {
        /* Error handling */
        console.log(err);
    });

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });



