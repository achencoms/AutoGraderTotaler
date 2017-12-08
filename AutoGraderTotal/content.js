// content.js
// every grade is the 3rd column / 3rd child of its parent row

var competency = 0;
var proficiency = 0;
var competencyPossible = 0;
var proficiencyPossible = 0;

$("td:nth-child(3)").each(function(){
	var title = $(this).closest("tbody").find(".cat_name").text();
	var grade = $(this).text().split("/");
	var total = parseFloat(grade[0]);
	var totalPossible = parseFloat(grade[1]);
	if(!title.includes("No Points")){
		if(totalPossible > 10){
			if(totalPossible == 152){
				if(total > 150){
					proficiency += total % 150;
					competency += 150;
				}
				else competency += total;
				proficiencyPossible += 2;
				competencyPossible += 150;
			}
			if(totalPossible == 252){
				if(total > 250){
					proficiency += total % 250;
					competency += 250;
				}
				else competency += total;
				proficiencyPossible += 2;
				competencyPossible += 250;
			}
			else {
				competency += total;
				competencyPossible += totalPossible;
			}
		}
		else{
			if($(this).prev().prev().find("a").text() == "Word Play - Part 3 - Extra Credit") 2+3;
			else{
				if($(this).prev().prev().find("a").text() == "Word Play - Part 2") proficiencyPossible += 4; //Word Play Part 2 total is messed up
				proficiency += total;
				proficiencyPossible += totalPossible;
			}
		}
	}
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "calculate" ) {
      alert("Competency Points: " + competency  + "/" + competencyPossible + "\n Proficiency Points: " + proficiency + "/" + proficiencyPossible);
    }
  }
);