	document.querySelector(".setting-icon-click").addEventListener("click",function(){
		document.querySelector(".setting-menu").classList.toggle("setting-menu-height")
	});

	document.getElementById("dark-btn").addEventListener("click",function(){
		console.log("here")
		document.getElementById("dark-btn").classList.toggle("dark-btn-on")
		document.body.classList.toggle("dark-theme")

		if (localStorage.getItem("theme") === 'light'){
			localStorage.setItem('theme','dark')
		}
		else{
			localStorage.setItem('theme','light')
		}

	});

if (localStorage.getItem("theme") === 'light'){
			document.getElementById("dark-btn").classList.remove("dark-btn-on")
			document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme") === "dark"){
	document.getElementById("dark-btn").classList.add("dark-btn-on")
	document.body.classList.add("dark-theme")
}else{
	localStorage.setItem('theme','light')
}
