

$(document).ready(function(){
/* global $  */
var score = 0; 
//Event Listeners
//"Submit Quiz" button 
  $("button").on("click", gradeQuiz);
function isFormValid()
{
    let isValid = true;
    if ($("#q1").val() == "") 
    {
        isValid = false;
        $("#validationFdbk").html("Question 1 was not answered");
    }
    return isValid;
}
function rightAnswer(index)//template for correct answers 
{
    $(`#q${index}Feedback`).html("Correct!");
    $(`#q${index}Feedback`).attr("class", "bg-success text-white");
    $(`#q${index}Feedback`).html("<img src='img/checkmark.png'>");
    score += 20;
}
function wrongAnswer(index)//template for wrong answers 
{
    $(`#q${index}Feedback`).html("Incorrect!");
    $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
    $(`#q${index}Feedback`).html("<img src='img/xmark.png'>");
}


function gradeQuiz()
{

	$("#validationFdbk").html(""); //resets validation feedback and removed red line 

	 if (!isFormValid()) 
	 {   
	    return;
	  }

    //variables
    score = 0;
    let q1Response = $("#q1").val().toLowerCase();//user response stored here in lowercase
    let q2Response = $("#q2").val();
    let q4Response = $("input[name=q4]:checked").val();
    let q5Response = $("#q5").val().toLowerCase();//user response stored here in lowercase
    let q6Response = $("#q6").val().toLowerCase();//user response stored here in lowercase
    let q7Response = $("#q7").val().toLowerCase();//user response stored here in lowercase

    //Question ---------------------
    if(q1Response == "Milky Way") 
    {rightAnswer(1);}
    else 
    {wrongAnswer(1);}
    //console.log(q2Response);
    //question 2--------------------
    if(q2Response == "mo")
    { rightAnswer(2);}
    else 
    {wrongAnswer(2);}//end question 2
    //Question 3--------------------
    if($("#spiral").is(":checked") && !($("#irregular").is(":checked") && $("#Elliptical").is(":checked") && $("#spiral barred").is(":checked")))
    {rightAnswer(3);}
    else
    {wrongAnswer(3);}//end question3 
    //Question 4
    if(q4Response == "Mercury")
    {rightAnswer(4);}
    else
    {wrongAnswer(4);}
    //Question 5
    if(q5Response == "Mercury")
    {rightAnswer(4);}
    else
    {wrongAnswer(4);}
    
    

	$("#totalScore").html(`Total Score: ${score}`);    //string literal displays score w/ backticks or plus symbol         

} //gradeQuiz


//<input type="checkbox" id="Washington"><label for="Washington">Washington</label>
})//ready