// content.js
// every grade is the 3rd column / 3rd child of its parent row

var competency = 0;
var proficiency = 0;

$("td:nth-child(3)").each(function(){
	var grade = $(this).text().split("/");
	var total = parseFloat(grade[0]);
	var totalPossible = parseFloat(grade[1]);
	if(totalPossible > 10){
		if(totalPossible == 152){
			if(total > 150){
				proficiency += total % 150;
				competency += 150;
			}
			else competency += total;
		}
		else if(total >totalPossible){
			proficiency += total % totalPossible;
			competency += totalPossible;
		}else competency += total;
	}
	else proficiency += total;
});

alert("Competency Points: " + competency + "\n Proficiency Points: " + proficiency);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "calculate" ) {
      alert("Competency Points: " + competency + "\n Proficiency Points: " + proficiency);
    }
  }
);