"use strict";

    //get the marks from the form using OnClick Function
function getMarks () {
    let mathMark = document.getElementById('mathsMark').value;
    let englishMark = document.getElementById('englishMark').value;
    let scienceMark = document.getElementById('scienceMark').value;
    let historyMark = document.getElementById('historyMark').value;
        //passing all the marks to analyseGrade function
    analyseGrades(mathMark, englishMark, scienceMark, historyMark);
}

// global variable to store the converted grades
var grades =[]; 

// function wrapper to check the logic and determine the Grdae
function analyseGrades(mathMark, englishMark, scienceMark, historyMark){

        // general function to check the grade logic using if Condition
    function convertToGrade (mark){
        if (mark >= 90 ){
            const grade = 'A+'; 
            passGrade(grade)
        }
        else if  (mark >= 80 && mark <90 ){
            const grade = 'A'; 
            passGrade(grade)
        }
        else if  (mark >= 70 && mark <80 ){
            const grade = 'B+'; 
            passGrade(grade)
        }
        else if  (mark >= 60 && mark <70 ){
            const grade = 'B'; 
            passGrade(grade)
        }
        else if  (mark >= 50 && mark <60 ){
            const grade = 'C+'; 
            passGrade(grade)
        }
        else if  (mark >= 40 && mark <50 ){
            const grade = 'C'; 
            passGrade(grade)
        }
        else{
            const grade = 'D+'; 
            passGrade(grade)
        }
    }
    // calling the convert to grade function for each subjects
    convertToGrade(mathMark);
    convertToGrade(englishMark);
    convertToGrade(scienceMark);
    convertToGrade(historyMark);
   
    //pushing the grades to global variable 'grades'
    function passGrade (grade){
        grades.push(grade);
    }
    // calling display function to manipulate the html element to display the grade
    displayGrades();
}

// finally displaying the grades in the html element using id
function displayGrades(){
        document.getElementById('mathGrade').innerHTML = `your maths grade is ${grades[0]}`;
        document.getElementById('englishGrade').innerHTML = `your english grade is ${grades[1]}`;
        document.getElementById('scienceGrade').innerHTML = `your science grade is ${grades[2]}`;
        document.getElementById('historyGrade').innerHTML = `your history grade is ${grades[3]}`;
        document.getElementById('disclaimer').innerHTML = `refresh the page to check for another set of marks`;

        //Calling function to change the font-color based on the grade
        manipulateElementColor(grades[0], 'mathGrade');
        manipulateElementColor(grades[1], 'englishGrade');
        manipulateElementColor(grades[2], 'scienceGrade');
        manipulateElementColor(grades[3], 'historyGrade');
        
    }

// function to change the font color based on grade
function manipulateElementColor (grade, elementID) {
        if( grade === 'A+')
        {
            document.getElementById(elementID).classList.add('gradeA1');
        }
        else if( grade === 'A')
        {
            document.getElementById(elementID).classList.add('gradeA');
        }
        else if( grade === 'B+')
        {
            document.getElementById(elementID).classList.add('gradeB1')
        }
        else if( grade === 'B')
        {
            document.getElementById(elementID).classList.add('gradeB')
        }
        else if( grade === 'C+')
        {
            document.getElementById(elementID).classList.add('gradeC1')
        }
    }
