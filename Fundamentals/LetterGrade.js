//Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100.  Those getting 90+ get an 'A', 80-89 earn a 'B', 70-79 is a 'C', 60-69 should get a 'D', and lower than 60 receive a 'F'. For example, given 88, you should log "Score: 88. Grade: 'B'. 

function LetterGrade(grade){
    if(grade > 89){
        console.log("Score: " + grade + ". Grade: 'A'.");
    }
    if(grade < 90 && grade > 79){
        console.log("Score: " + grade + ". Grade: 'B'.");
    }
    if(grade < 80 && grade > 69){
        console.log("Score: " + grade + ". Grade: 'C'.");
    }
    if(grade < 70 && grade > 59){
        console.log("Score: " + grade + ". Grade: 'D'.");
    }
    if(grade < 60){
        console.log("Score: " + grade + ". Grade: 'F'.");
    }
}
LetterGrade(90);
LetterGrade(80);
LetterGrade(70);
LetterGrade(60);
LetterGrade(59);