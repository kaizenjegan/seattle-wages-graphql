const { RESTDataSource } = require('apollo-datasource-rest');
const mongoose = require('mongoose');
const connectionString = "mongodb+srv://graphqluser:change@cluster0-bxbjj.azure.mongodb.net/seattlegov?retryWrites=true&w=majority";
const JobsModel = require('./jobsModel.js');

mongoose.connect(connectionString, {useNewUrlParser: true});


const jobsModel = JobsModel;

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