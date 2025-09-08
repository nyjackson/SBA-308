# Skill-Based Assessment for Module 308 #

## Purpose ##

SBA-308 demonstrates my understanding of JavaScript fundamentals by showcasing the following:

- Employ basic JavaScript syntax accurately.
- Implement control flow structures such as conditionals and loops effectively.
- Use arrays and objects to organize and manage data.
- Develop functions to create reusable code.
- Utilize loops and iteration to navigate through data collections.
- Implement error handling to manage potential code failures gracefully.

## Installation/Access ##

1. Download the SBA-308 project files

2. Open index.html in your web browser

3. Right-click on the page and select 'Inspect', then 'Console' to open the JS console and view results.


## Resource Links ##

- Starter Code from [CodeSandbox.io](https://codesandbox.io/p/sandbox/sba-308-example-26sg4j)

## Functions: Definitions & Usage ##

All functions are in script.js


### getLearnerData(course, assignmentGroup, submissions) ###

Returns an array of objects containing each learner's ID, average, and assignment scores. 


Calls getAssignments and returns the necessary assignments from the assignment group, along with the maximum amount of points from those assignments.


Goes through each submission and compares it against the assignments from getAssignments(). Adds the following relevant information to a temporary object, which is then pushed to the result array:

- learner id

- grades for all of the learner's submissions

- the average score in the class out of all the assignments and learners' submissions

Returns an array with all the learners and their relevant information.


### getAssignments(courseID, assignmentGroup) ###

Given the course ID and the assignment group, this function returns the relevant assignments from the group and the maximum amount of points for all the assignments. 


Relevant assignments are ones that are not due yet (compared to currDate, which is a string set to 2025-09-05) or have 0 points possible.


### gradeAsmt(learnerSubmissionEntry, assignments) ###

Compares the learner's submission against the assignments that need to be collected. Returns an array with three elements: the assignment ID, the learner's score for the submission (out of the total amount of points to earn on the assignment), and the unaltered score of the submission.

