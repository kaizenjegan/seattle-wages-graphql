const { RESTDataSource } = require('apollo-datasource-rest');
const mongoose = require('mongoose');
const JobsModel = require('./jobsModel.js');

const config = require('../../envconfig');

mongoose.connect(config.connectionString, {useUnifiedTopology: true});


const jobsModel = JobsModel;

class SeattleAPI extends RESTDataSource {
  constructor() {
    super();
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