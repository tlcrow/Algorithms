//For an additional challenge, add '-' signs to scores in the bottom two percent of A, B, C, and D scores, and '+' signs to the top two percent of B, C, and D scores. Given 88, console.log "Score: 88. Grade: B+".

function LetterGrade(grade){
    var letter;
    if(grade > 89){
        if(grade < 92){
            letter = "'A-'"
        }
        else{
            letter = "'A'"
        }
        console.log("Score: " + grade + ". Grade: " + letter + ".");
    }
    if(grade < 90 && grade > 79){
        if(grade > 87){
            letter = "'B+'";
        }
        else if(grade < 82){
            letter = "'B-'";
        }
        else{
            letter = "'B'"
        }
        console.log("Score: " + grade + ". Grade: " + letter + ".");
    }
    if(grade < 80 && grade > 69){
        if(grade > 77){
            letter = "'C+'";
        }
        else if(grade < 72){
            letter = "'C-'";
        }
        else{
            letter = "'C'"
        }
        console.log("Score: " + grade + ". Grade: " + letter + ".");
    }
    if(grade < 70 && grade > 59){
        if(grade > 67){
            letter = "'D+'";
        }
        else if(grade < 62){
            letter = "'D-'";
        }
        else{
            letter = "'D'"
        }
        console.log("Score: " + grade + ". Grade: " + letter + ".");
    }
    if(grade < 60){
        console.log("Score: " + grade + ". Grade: 'F'.");
    }
}
LetterGrade(90);
LetterGrade(84);
LetterGrade(75);
LetterGrade(69);
LetterGrade(59);