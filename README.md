# Skill-Based Assessment for Module 308 #

## Purpose ##

SBA-308 demonstrates my understanding of JavaScript fundamentals. 

## Installation/Access ##

1. Download the SBA-308 project files
2. Open index.html in your web browser
3. Right click on the page and select 'Inspect' then 'Console' to open the JS console.

## Usage & Resource Links ##

- Starter Code from CodeSandbox.io

## Functions: Definitions & Usage ##

### getLearnerData(course, assignmentGroup, submissions)###
Returns an array of objects containing each learners id, average, and assignment scores. 

Calls getAssignments and returns the needed assignments from the assignment group and the maximum amount of points from those assignments.

Goes thorugh each submission and compares it against the assignments from getAssignments(). Adds the following relevant information to a temporary object which is then pushed to the result array:
- learner id
- grades for all of the learner's submissions
- the average score in the class out of all the assignments and learner's submissions

Returns an array with all the learners and their relevant information.

### getAssignments(courseID, assignmentGroup) ###

Given the course id and the assignment group, this function returns the relevant courses from the group and the maxiumum amount of points of all the assignments. 

Relevant courses are courses that are not due yet (compared to currDate, which is a string set to 2025-09-05).

### gradeAsmt(learnerSubmissionEntry, assignments) ###

Compares the learner's submsission against the assignments that need to be collected. Returns an array with three elements: the assignment id, the learner's score for the submission (out of the total amount of points to earn on the assignment), and the unaltered score of the submission.
