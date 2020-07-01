A GraphQL layer for querying seattle wage data

![alt text](screenshot.png)



- click on web link in description
- try queries below

# Jobs where Men earn more
      query getJobsWhereMenEarnMore{
        jobs(where: {men_earn_more: true}){
            sid  
            id   
            position
            createdAt
            meta
            updatedAt
            meta
            title
            femaleAvgHrlyRate
            numberOfFemaleEmployees
            averageOfFemaleLongevityInMonths
            maleAvgHrlyRate
            numberOfMaleEmployees
            averageOfMaleLongevityInMonths
            totalAvgHourlyRate
            totalNoEmployee
            totalAverageOfMonthsLongevityInCurrentClassification
            ratioOfWomenHourlyRateToMenHourlyRatePercentage
            notes    
        }
      }

# Jobs where Women earn more
      query getJobsWhereMenEarnMore{
        jobs(where: {men_earn_more: false}){
            sid  
            id   
            position
            createdAt
            meta
            updatedAt
            meta
            title
            femaleAvgHrlyRate
            numberOfFemaleEmployees
            averageOfFemaleLongevityInMonths
            maleAvgHrlyRate
            numberOfMaleEmployees
            averageOfMaleLongevityInMonths
            totalAvgHourlyRate
            totalNoEmployee
            totalAverageOfMonthsLongevityInCurrentClassification
            ratioOfWomenHourlyRateToMenHourlyRatePercentage
            notes    
        }
      }
