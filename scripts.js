let btnSwitch = document.querySelector('.switch');
let color = document.querySelector(":root");
let body = document.querySelector(".body");

if(localStorage.getItem('active') === 'true'){
	color.classList.add("html");
	btnSwitch.classList.add('active');
}

btnSwitch.addEventListener('click', () => {
	if(btnSwitch.classList.contains('active')) {
		color.classList.remove("html");
        btnSwitch.classList.remove('active');
	}else{
	    color.classList.add("html");
        btnSwitch.classList.add('active');
	}

	if(btnSwitch.classList.contains('active')){
		localStorage.setItem('active', 'true');
	} else {
		localStorage.setItem('active', 'false');
	}
})







