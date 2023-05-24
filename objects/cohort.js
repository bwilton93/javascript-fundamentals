// Declare an object cohort that has the following properties:

// a string name (e.g 'May2022')
// a number id (e.g 1234)
// an array of student names
// Declare a function that accepts that object as argument and print a message with the following structure:

// <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort

const cohort = {
  cohortName: 'May2022',
  cohortId: '1',
  students: ['Student 1', 'Student 2', 'Student 3']
}

const printCohortInformation = (cohort) => {
  console.log(`${cohort.cohortId} - ${cohort.cohortName} - ${cohort.students.length} students in this cohort`); 
};

printCohortInformation(cohort);