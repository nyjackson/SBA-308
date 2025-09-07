// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
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
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
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

let currDate = "2025-09-05";
function getLearnerData(course, ag, submissions) {
  const result = [];
  let assignmentsAndMax = getAssignments(course.id, ag);
  let assignments = assignmentsAndMax[0];
  console.log(assignments)
  let maxPoints = assignmentsAndMax[1];
  let learnerObj = {}; //submissionObj instead?
  for (let i = 0; i < submissions.length; i++) {
    let submission = submissions[i];
    if (!("id" in learnerObj)) {
      learnerObj.id = submission.learner_id;
    }
    //!('avg' in learnerObj) ? learnerObj.avg = submission.submission.score: learnerObj.avg+=submission.submission.score;
    // if(submission.assignment_id == ){ }
    let grade = gradeAsmt(submission, assignments); // based on this submission, compare to the assignments and grade it accordingly
    if (submission.assignment_id == grade[0]) {
      learnerObj[grade[0]] = grade[1];
      result.push(learnerObj);
    }

    //if (submission.learner_id == grade.id){}
    //console.log(JSON.stringify(submission) + " " + JSON.stringify(learnerObj))
  }
  console.log(result);
  return result;
}

function getAssignments(courseID, ag) {
  //returns the assignments that was due before the currDate
  let relevantAsmts = [];
  let maxPoints = 0;
  if (ag.course_id == courseID) {
    for (let j = 0; j < ag.assignments.length; j++) {
      if (currDate > ag.assignments[j].due_at) {
        relevantAsmts.push(ag.assignments[j]);
        maxPoints += ag.assignments[j].points_possible;
      }
    }
    return [relevantAsmts, maxPoints];
  }
}

function gradeAsmt(learnerEntry, asmts) {
  //  console.log("Learner Entry:" + JSON.stringify(learnerEntry));
  //let learnerGrade = {};
  let learnerGrade = [];
  let learnerSubmission = learnerEntry.submission;
  for (let i = 0; i < asmts.length; i++) {
    let asmt = asmts[i];
    if (asmt.id == learnerEntry.assignment_id) {
      if (learnerSubmission.submitted_at > asmt.due_at) {
        let latePenaltyToScore = learnerSubmission.score - 15;
        learnerSubmission.score = latePenaltyToScore;
      }
      // if (!(asmt.id in learnerGrade)) {
      //   learnerGrade[asmt.id] = learnerSubmission.score / asmt.points_possible;
      // }
      // if (!("id" in learnerGrade)) {
      //   learnerGrade["id"] = learnerEntry.learner_id;
      // }\
      learnerGrade.push(asmt.id)
      learnerGrade.push((learnerSubmission.score / asmt.points_possible).toFixed(2));
    }
  }
  return learnerGrade;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//console.log(result);

/****
 * Code before 3:37p
 * function getLearnerData(course, ag, submissions) {
  const result = [];
  if (course.id == ag.course_id) {
    // makes sure they are the same course
    let assignments = ag.assignments;
    for (let i = 0; i < assignments.length; i++) { // get all assignments from that group, for each asmt
      let asmt = assignments[i];
      let asmtID = asmt.id;
      let asmtPoints = asmt.points_possible;
      let dueDate = asmt.due_at;
      let allSubmissions = getAllSubmissionsForAsmt(asmtID, asmtPoints,dueDate,submissions) // returns an array of obj? including the learner asmt info? grouped by asmt id

     //console.log(allSubmissions)
     //result.push(resultObj)
    }
  }
  return result;
}
 * function getAllSubmissionsForAsmt(id, totalPoints, dueDate, submissions) {
  // access each learner and when the asmt id is the same, record the info and returnlearner id and score, also check date
  let asmts = [];
  for (let i = 0; i < submissions.length; i++) {
    let submission = submissions[i];
    let submissionScore = submission.submission.score;
    let submissionDate = submission.submission.submitted_at;
    if (currDate > dueDate && id == submission.assignment_id) {
      if (submissionDate > dueDate) {
        let newScore = submissionScore - 15;
        submission.submission.score = newScore;
        submissionScore = submission.submission.score;
      }
      asmts.push(submission)
    }
  }
//  console.log(asmts)
  return asmts;
} 
 * 
 */
