var video = document.querySelector("#player1")

// Load the window
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

// Play the video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow down the video
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.95;
	console.log("Speed is", video.playbackRate);
});

// Speed up the video
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate /= 0.95;
	console.log("Speed is", video.playbackRate);
});

// Skip the video ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead 15 seconds");
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0; }
	console.log("Current Video Time is", video.currentTime);
});

// Mute and unmute the video
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute the Video");
	if (video.muted == false) {
		this.innerHTML = "Mute";
		video.muted = true;
		console.log("Muted the Video"); }
	else {
		this.innerHTML = "Unmute";
		video.muted = false;
		console.log("Unmuted the Video"); };
})

// Set up the volume slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing the Volume");
	video.volume = this.value /100;
	document.querySelector("#volume").innerHTML=video.volume *100 +"%";
	console.log("Current Volume is", video.volume);
})

// Use oldSchool class elements
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Add oldSchool Style");
	video.classList.add("oldSchool");
})

// Remove oldSchool class
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove oldSchool Style");
	video.classList.remove("oldSchool");
})