let animalPics = ["https://i.ibb.co/HpgLGZc/Screen-Shot-2022-12-13-at-12-15-59-PM.png","https://i.ibb.co/sJX9QVw/Screen-Shot-2022-12-13-at-12-19-06-PM.png","https://i.ibb.co/4WLJnLb/Screen-Shot-2022-12-13-at-12-25-19-PM.png"];
let userAnimalPics = [];
let userInput;

	for (let picture of animalPics) {
		$(".gallery").append("<img src='" + picture + "'} >");
	}
                   
$(".add").click(function() {
    userInput=$(".picture-url").val();
    userAnimalPics.push(userInput);
    $(".picture-url").val("");

    if (userInput==="") {
        alert("Please enter a link!");
    } else {
        for (let userpicture of userAnimalPics) {
			$(".gallery").append("<img src='" + userpicture + "'}>");
		}
    }
    console.log(animalPics, userAnimalPics);        
});



//For the looks
$(".gallery img").hover(function() {
	$(".gallery img").css("border","5px double #00008B");
});
$(".gallery img").mouseleave(function() {
   $(".gallery img").css("border","5px outset #6495ED");
});