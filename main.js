function myfun(){

	var UserInput = document.querySelector(".inputbox").value;
	var userOption = document.querySelector(".searchBtn");
	var showITNow = userOption.options[userOption.selectedIndex].text;

	var userOption2 = document.querySelector(".searchBtn2");
	var showITNow2 = userOption2.options[userOption2.selectedIndex].text;

	var userneed = document.querySelector(".searchBtn3");
	




	location.replace("https://www.google.com/search?q=" +"User Input: "+ UserInput +"  "+ "Brands :" +" "+ showITNow + " Location :" +" " + showITNow2);
}
