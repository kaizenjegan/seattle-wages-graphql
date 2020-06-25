A GraphQL layer for querying seattle wage data

![alt text](screenshot.png)



# Test
- click on web link in description
- add query below


      query getWages    {
            jobs {  

                  sid  
                  id   
                  position
                  createdAt
                  createdMeta
                  updatedAt
                  updatedMeta
                  meta
                  jobTitle
                  femaleAvgHrlyRate
                  noFemaleEmpl
                  averageOfFemaleMonthsLongevityInCurrentClassification
                  maleAvgHrlyRate
                  noMaleEmployeesoyees
                  averageOfMaleMonthsLongevityInCurrentClassification
                  totalAvgHrlyRate
                  totalNoEmpl
                  totalAverageOfMonthsLongevityInCurrentClassification
                  ratioOfWomenHourlyRateToMenHourlyRatePercentage
                  notes    
            }  
      }
