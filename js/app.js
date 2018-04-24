
// function to determine user horoscope, function fires on user clicking button line 24 index.html
function getHoro(userInput) {
	// store the tag with id="sign" in var userdata
	var userInput = document.getElementById('userInput').value;
	var userHoro = horos[userInput.toLowerCase()] || horos['default'];
	console.log(userHoro);
//elements to grab info based on user input
document.getElementById('fortune').innerHTML = userHoro.fortune;
document.getElementById('img').innerHTML = userHoro.img;
document.getElementById('img').src = userHoro.img;
document.getElementById('img').classname = 'mx-auto';
}
//objects
var horos = {
	aquarius: {
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.jpg"
		//https://www.astrograph.com/images/signs/11Aquarius-InfoGraphic.jpg
	},
	aries: {
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: 'img/aries.jpeg'
	},
	cancer: {
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: 'img/cancer.jpg'
	},
	capricorn: {
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: 'img/capricorn.jpg'
	},
	gemini: {
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: 'img/gemini.jpg'
	},
	leo: {
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: 'img/leo.jpg'
	},
	libra: {
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: 'img/libra.jpg'
	},
	pisces: {
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: 'img/pisces.jpg'
	},
	sagittarius: {
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: 'img/sagittarius.jpg'
	},
	scorpio: {
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: 'img/scorpio.jpg'
	},
	taurus: {
		fortune: "Security, Subtle strength, Appreciation, Instruction, Patience",
		image: 'img/taurus.jpg'
	},
	virgo: {
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: 'img/virgo.jpg'
	}
};

// This is code so the enter key also fires (runs/invokes/instantiates) the function
var btn = document.getElementById('userInput');
btn.addEventListener('keypress', function enterKey(e) {
	if (e.keyCode == 13) {
		getHoro('');
	};
}, false);
