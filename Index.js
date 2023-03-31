const container = document.querySelector(".data-container");
let MyArray = [];
let delayPromise = 700;
let PointerSpeed = 0;

function SpeedIncrement() {
	delayPromise = delayPromise - 100;
}
function SpeedDecrement() {
	delayPromise = delayPromise + 100;
}
function pause() {

	if (PointerSpeed == 0) {
		PointerSpeed = delayPromise;
		delayPromise = 5000;
		document.getElementById('pause').innerHTML = "<b> Resume </b>";
	}
	else {
		delayPromise = PointerSpeed;
		document.getElementById('pause').innerHTML = "<b> Pause </b>";
		PointerSpeed = 0;
	}
}


function randomNumber() {
	MyArray = [];
	let n = 10;
	for (let i = 0; i < n; ++i) {
		let val = Math.floor(Math.random() * 100);
		MyArray.push(val);
		// GenerateBar(val);
		// document.getElementById('inputBox').value = document.getElementById('inputBox').value + val;
		// document.getElementById('inputBox').value = document.getElementById('inputBox').value + ',';
	}
	document.getElementById('inputBox').value = `${MyArray}`;

}

async function handleAdd() {
	MyArray = [];
	let value = document.getElementById('inputBox').value;
	let len = value.length;
	for (let i = 0; i < len; ++i) {
		let j = i;
		let val = 0;
		let flag = false;
		while (j < len && value.charAt(j) != ',') {
			let ch = value.charAt(j) - '0';
			if (ch >= '0' && ch <= '9') {
				val = (val * 10) + (ch - '0');
			}
			else flag = true;
			j++;
		}
		i = j;
		if (flag == true) val = -1 * val;
		GenerateBar(val);
		MyArray.push(val);
	}
	document.getElementById('inputBox').value = `${MyArray}`;
	// removeBarData()
}

async function removeBarData() {

	// const list = document.getElementById("barLabel");
	// list.removeChild(list.firstElementChild);
	// const list = document.getElementById("bar");
	// list.removeChild(list.bar);


	const container = document.querySelector(".bar");
	let bars = document.querySelectorAll(".bar");
	console.log(bars)
	for (var i = 0; i < bars.length; i += 1) {
		// Remove all child elements of the container
		// while (container.firstChild) {
		console.log(bars[i].parentElement.removeChild());
		bars.remove(bars[i]);
	}
}

function GenerateBar(val) {
	const value = val;
	const bar = document.createElement("div");
	bar.classList.add("bar");
	bar.style.margin = `20px`;
	bar.style.color = `black`;
	const barLabel = document.createElement("label");
	barLabel.classList.add("bar_id");
	barLabel.innerHTML = value;
	bar.appendChild(barLabel);
	container.appendChild(bar);
}

async function SelectionSort() {
	let No_Of_Swap = 0, No_Of_Comparisons = 0;
	document.getElementById("TotalComparisons").innerHTML = No_Of_Comparisons;
	document.getElementById("TotalSwap").innerHTML = No_Of_Swap;
	let bars = document.querySelectorAll(".bar");
	let n = bars.length;
	document.getElementById("nVal").innerHTML = n;
	document.getElementById("forLoop").style.backgroundColor = "lightGreen";
	for (var i = 0; i < n; ++i) {
		let min_idx = i;
		bars[i].style.backgroundColor = "#FF4949";
		document.getElementById("xIdx").innerHTML = i;
		document.getElementById("iVal").innerHTML = i;
		for (var j = i + 1; j < n; ++j) {
			bars[j].style.backgroundColor = "yellow";
			document.getElementById("ifCondition").style.backgroundColor = "rgb(255, 235, 211, 0)";
			document.getElementById("NoSwap").style.backgroundColor = "rgb(255, 235, 211, 0)";
			document.getElementById("yIdx").innerHTML = j;
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delayPromise)
			);
			var val1 = parseInt(bars[j].childNodes[0].innerHTML);
			var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
			document.getElementById("forLoop").style.backgroundColor = "rgb(255, 235, 211, 0)";
			No_Of_Comparisons++;
			document.getElementById("TotalComparisons").innerHTML = No_Of_Comparisons;
			if (val1 < val2) {
				if (min_idx !== i) {
					bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
				}
				document.getElementById("xVal").innerHTML = val1;
				document.getElementById("yVal").innerHTML = val2;
				// document.getElementById("xVal").innerHTML.style = 'bold';
				document.getElementById("ifCondition").style.backgroundColor = "lightGreen";
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, delayPromise)
				);
				min_idx = j;
			} else {
				bars[j].style.backgroundColor = " rgb(24, 190, 255)";
				document.getElementById("NoSwap").style.backgroundColor = "lightGreen";
			}
			// document.getElementById("ifCondition").style.backgroundColor = "rgb(255, 235, 211, 0)";
		}
		No_Of_Swap++;
		document.getElementById("TotalSwap").innerHTML = No_Of_Swap;
		var temp1 = bars[min_idx].style.height;
		var temp2 = bars[min_idx].childNodes[0].innerText;
		bars[min_idx].style.height = bars[i].style.height;
		bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
		bars[i].childNodes[0].innerText = temp2;
		bars[i].style.height = temp1;

		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delayPromise)
		);
		document.getElementById("forLoop").style.backgroundColor = "lightGreen";
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
		bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	}
}

async function InsertionSort() {
	let No_Of_Comparisons = 0, No_Of_Swap = 0;
	document.getElementById("TotalSwap").innerHTML = No_Of_Swap;
	document.getElementById("TotalComparisons").innerHTML = No_Of_Comparisons;
	let bars = document.querySelectorAll(".bar");
	let n = bars.length;
	document.getElementById("nVal").innerHTML = n;
	document.getElementById("forLoop").style.backgroundColor = "lightGreen";
	for (var i = 1; i < n; ++i) {
		let val1 = parseInt(bars[i].childNodes[0].innerText);
		document.getElementById("xIdx").innerHTML = i;
		document.getElementById("iVal").innerHTML = i;
		bars[i].style.backgroundColor = "#FF4949";
		let j = parseInt(i - 1);
		var height = bars[i].style.height;
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delayPromise)
		);
		document.getElementById("ifCondition").style.backgroundColor = "rgb(255, 235, 211, 0)";
		document.getElementById("NoSwap").style.backgroundColor = "rgb(255, 235, 211, 0)";
		document.getElementById("yIdx").innerHTML = j;
		No_Of_Comparisons++;
		document.getElementById("TotalSwap").innerHTML = No_Of_Swap;
		while (j >= 0 && val1 < parseInt(bars[j].childNodes[0].innerText)) {
			bars[j].style.backgroundColor = "yellow";
			document.getElementById("forLoop").style.backgroundColor = "rgb(255, 235, 211, 0)";
			bars[j + 1].childNodes[0].innerText = parseInt(bars[j].childNodes[0].innerText);
			bars[j + 1].style.height = bars[j].style.height;
			No_Of_Swap++;
			document.getElementById("TotalSwap").innerHTML = No_Of_Swap;
			No_Of_Comparisons++;
			document.getElementById("TotalComparisons").innerHTML = No_Of_Comparisons;
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delayPromise)
			);
			document.getElementById("xVal").innerHTML = val1;
			document.getElementById("yVal").innerHTML = bars[j].childNodes[0].innerText;
			document.getElementById("ifCondition").style.backgroundColor = "lightGreen";
			bars[j].style.backgroundColor = "lightGreen";
			j--;
		}
		for (let k = 0; k <= i; ++k) {
			bars[k].style.backgroundColor = "lightGreen";
		}
		No_Of_Swap++;
		document.getElementById("TotalSwap").innerHTML = No_Of_Swap;
		bars[j + 1].childNodes[0].innerText = val1;
		bars[j + 1].style.height = height;
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delayPromise)
		);
		document.getElementById("forLoop").style.backgroundColor = "lightGreen";
	}
}


async function BubbleSort() {
	let No_Of_Swap = 0, No_Of_Comparisons = 0;
	document.getElementById("TotalComparisons").innerHTML = No_Of_Comparisons;
	document.getElementById("TotalSwap").innerHTML = No_Of_Swap;
	let bars = document.querySelectorAll(".bar");
	let n = bars.length;
	document.getElementById("nVal").innerHTML = n;
	document.getElementById("forLoop").style.backgroundColor = "lightGreen";
	for (var i = 0; i < n; ++i) {
		let val1 = parseInt(bars[i].childNodes[0].innerText);
		document.getElementById("xIdx").innerHTML = i;
		document.getElementById("iVal").innerHTML = i;
		bars[n - i - 1].style.backgroundColor = "Red";
		for (var j = 0; j < n - i - 1; ++j) {
			document.getElementById("xIdx").innerHTML = j;
			document.getElementById("yIdx").innerHTML = j + 1;
			bars[j].style.backgroundColor = "yellow";
			bars[j + 1].style.backgroundColor = "yellow";
			document.getElementById("ifCondition").style.backgroundColor = "rgb(255, 235, 211, 0)";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delayPromise)
			);
			document.getElementById("forLoop").style.backgroundColor = "rgb(255, 235, 211, 0)";
			No_Of_Comparisons += 1;
			document.getElementById("TotalComparisons").innerHTML = No_Of_Comparisons;

			let val1 = parseInt(bars[j].childNodes[0].innerText);
			let val2 = parseInt(bars[j + 1].childNodes[0].innerText);
			if (val1 > val2) {
				document.getElementById("yVal").innerHTML = val1;
				document.getElementById("xVal").innerHTML = val2;
				document.getElementById("ifCondition").style.backgroundColor = "lightGreen";
				var x = bars[j].childNodes[0].innerHTML;
				var y = bars[j].style.backgroundColor;
				bars[j].childNodes[0].innerHTML = bars[j + 1].childNodes[0].innerHTML;
				bars[j].style.backgroundColor = bars[j + 1].style.backgroundColor;
				bars[j + 1].style.backgroundColor = y;
				bars[j + 1].childNodes[0].innerHTML = x;
				No_Of_Swap++;
				document.getElementById("TotalSwap").innerHTML = No_Of_Swap;
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, delayPromise)
				);
			} else {
				bars[j].style.backgroundColor = " rgb(24, 190, 255)";
				document.getElementById("NoSwap").style.backgroundColor = "lightGreen";
			}
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delayPromise)
			);
			document.getElementById("NoSwap").style.backgroundColor = "rgb(255, 235, 211, 0)";
			bars[j].style.backgroundColor = "rgb(0, 183, 255)";
			bars[j + 1].style.backgroundColor = "rgb(0, 183, 255)";
		}
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delayPromise)
		);
		document.getElementById("forLoop").style.backgroundColor = "lightGreen";
		bars[i].style.backgroundColor = " rgb(49, 226, 13)";
		bars[n - i - 1].style.backgroundColor = "lightGreen";
	}
}

function AnimationValue(i, j, x, y) {
	document.getElementById("xVal").innerHTML = x;
	document.getElementById("yVal").innerHTML = y;
	document.getElementById("xIdx").innerHTML = i;
	document.getElementById("yIdx").innerHTML = j;
}

function AnimationRemoveColor() {

}

function AnimationAddColor() {

}