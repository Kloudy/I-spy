/*Globals*/
var canvas;
var ctx;
var hammertime;
var canvasContents;
var scale = 1;
var applicationState;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() 
{
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var pixelRatio = window.devicePixelRatio || 1;
	
	windowWidth = windowWidth * pixelRatio;
	windowHeight = windowHeight * pixelRatio;
	
	applicationState = {currentPage: "homeFeed"};
	
	//var options = null;
	//hammertime = new Hammer($("canvas")[0], options);
	//hammertime.get('pinch').set({ enable: true });
	//hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
	
	$(document).ready(function() {
		displayHomeFeedView();
		
	    $("#menu").mmenu({
	    	classes: "mm-slide"
	    });
	      
	    //$('#image').imgAreaSelect({ maxWidth: 450, maxHeight: 450, handles: true });
	});
	
	
	
	/*hammertime.on("pinchin", function(e){
		e.preventDefault(true);		
		
		
	});

	
	hammertime.on("pinchout",function(e){
		e.preventDefault(true);	
		
		
	});*/
}

/*View Generating Functions*/

/*Home Feed View*/
function displayHomeFeedView()
{
	$("#createPost").fadeOut(200, function(){
		$(".headerButtonRight").attr("src", "img/refresh.png");
		$(".headerButtonRight").attr("id", "refresh");
		$("#homeFeed, .footer").fadeIn(200);
	});
}

/*CreatePostView*/
function displayCreatePostView(imageData)
{
	$("#image").attr("src", "data:image/jpeg;base64," + imageData);
	
	$("#homeFeed, .footer").fadeOut(200, function(){
		$(".headerButtonRight").attr("src", "img/home.png");
		$(".headerButtonRight").attr("id", "home");
		
		var headerHeight = $(".header").height();
		
		$("#createPost").css({"margin-top": headerHeight + "px"});
		$("#createPost").fadeIn(200);
		
		$("#home").click(function(){
			displayHomeFeedView();
		});
	});	
}


