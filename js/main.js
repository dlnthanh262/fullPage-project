new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
	navigation: true,
	anchors: ['home', 'aboutme', 'skills', 'target', 'contact'],
	navigationTooltips: ['Home', 'About Me', 'Skills', 'Target', 'Contact'],
	navigationPosition: "right",
	menu: "#menu"
});
$('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    controlArrows: false
    // more options here
});
/*some var*/
var click = 0;
/*menu*/
	$(".menu-icon").click(function() {
		$(".hide").show();
		if(click % 2 === 0) {
			$(".menu-icon").css({
			"transform": "rotate(180deg)",
			"color": "#edff01"
			});
		}
		else {
			$(".menu-icon").css({
			"transform": "rotate(0deg)",
			"color": "#fff"
			});
		}
		click++;
	});

