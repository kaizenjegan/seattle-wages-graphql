const { RESTDataSource } = require('apollo-datasource-rest');
const mongoose = require('mongoose');
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


class SeattleAPI extends RESTDataSource {
  constructor() {
    super();
    // https://data.seattle.gov/api/views/cf52-s8er/rows.json
    this.baseURL = 'https://data.seattle.gov/api/views/cf52-s8er/';
  }

  async getJobs() {
    return new Promise((resolve, reject)=>{
      jobsModel.find({}, (err, jobs)=>{
        if(!err){
          resolve(jobs)
        }else{
          reject(err)
        }
      })
    })
  }

  //not optimal
  async getJobsWith({ title }){ 
    console.log('get wages by job title');
    //sanitization + logging
    const promise = new Promise(async(resolve, reject)=>{
      jobsModel.find({title: title}, (err, job)=>{
        if(!err){
          console.log(job)
          resolve(job[0])
        }else{
          reject(err)
        }
      })
    })

    return promise;
  }

}

module.exports = SeattleAPI;