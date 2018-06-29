//Function to create account information tab content
window.addEventListener("load", function() { 




document.getElementById("defaultClicked").click();




});

function openDiv(evt, name) {
	
               var k, tabcontent, tabPress;
				
               tabcontent = document.getElementsByClassName("tabContent_account");
			   
               for (k = 0; k < tabcontent.length; k++) {
                tabcontent[k].style.display = "none";
                }
				
               tabPress = document.getElementsByClassName("tabPress");
			   
              for (k = 0; k < tabPress.length; k++) {
              tabPress[k].className = tabPress[k].className.replace(" active", "");
              }
               
			   document.getElementById(name).style.display = "block";
                  
			  evt.currentTarget.className += " active";

	}
             
			