function getImageFromGallery()
{
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var pixelRatio = window.devicePixelRatio || 1;
	
	windowWidth = windowWidth * pixelRatio;
	windowHeight = windowHeight * pixelRatio;
	
	var cameraOptions = { quality : 100,
			  destinationType : Camera.DestinationType.DATA_URL,
			  sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM, 
			  mediaType: Camera.MediaType.PICTURE,
			  encodingType: Camera.EncodingType.JPEG,
			  targetWidth: windowWidth,
			  targetHeight: windowHeight,
			  saveToPhotoAlbum: false,
			  correctOrientation: true
			};
	
	navigator.camera.getPicture(onSuccessFromCamera, onFail, cameraOptions);
}


function getImageFromCamera()
{
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var pixelRatio = window.devicePixelRatio || 1;
	
	windowWidth = windowWidth * pixelRatio;
	windowHeight = windowHeight * pixelRatio;
	
	var cameraOptions = { quality : 100,
			  destinationType : Camera.DestinationType.DATA_URL,
			  sourceType : Camera.PictureSourceType.CAMERA,
			  encodingType: Camera.EncodingType.JPEG,
			  targetWidth: windowWidth,
			  targetHeight: windowHeight,
			  saveToPhotoAlbum: false,
			  correctOrientation: true
			};
	
	navigator.camera.getPicture(onSuccessFromCamera, onFail, cameraOptions);
}

function onSuccessFromCamera(imageData) 
{
    displayCreatePostView(imageData);
}

function onFail(message) {
    alert("failed because " + message);
}