// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];
/***
 *  // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
 */

      // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];
// return result;

function getLearnerData(course, ag, submissions) {

  const result = [];
  if(course.id == ag.course_id){ // makes sure they are the same course
    let assignments = ag.assignments
    let resultObj = {}
    for(let i = 0; i < assignments.length;i++){ // go through each asmt group
        let asmt = assignments[i]
        let asmtID = asmt.id
        let asmtPoints = asmt.points_possible
        let dueDate = asmt.due_at
        let submissions = getAllSubmissionsForAsmt(asmtID,asmtPoints,dueDate,submissions) // returns an array of obj? including the learner asmt info?
    //    console.log(`Logging Each Asmt: ${asmtID} ${asmtPoints} ${dueDate}`)
    }
    // result.push(resultObj)
  }
  // create temp object once filled push to result
  return result;
}

const getAllSubmissionsForAsmt = function (id,totalPoints, dueDate,submissions){
// access each learner and when the asmt id is the same, record the info and returnlearner id and score, also check date
let assignments = []
for(let i = 0; i <submissions.length;i++){
    let submission = submissions[i]
    let submissionScore = submission.submission.score
    let submissionDate = submission.submission.submitted_at
    if(submissionDate >= dueDate  && id == submission.assignment_id){
        assignments.push(submissions[i])
    }
}
console.log(assignments)
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//console.log(result);
