(function () {
	// Getting all the elements with `btn-loader` class
	var getButton = document.getElementsByClassName("btn-loader") || [];
	var elementArray = [].slice.call(getButton);
	elementArray.forEach(function (element) {
		element.addEventListener('click', handleClick);
	});

	function handleClick(event) {
		// Getting the attributes
		var timer = this.getAttribute("timer") || 60;
		var size = this.getAttribute("size");
		var thickness = this.getAttribute("thickness");
		var headOfLoader = this.getAttribute("color-head");
		var bckOfLoader = this.getAttribute("bck-color");
		var bottomOfLoader = this.getAttribute("color-bottom");
		var rightOfLoader = this.getAttribute("color-right");
		var leftOfLoader = this.getAttribute("color-left");
		var textAfter = this.getAttribute("text-after");
		var hideAfter = this.getAttribute("hide-after") ? true : false;

		// Hiding the current button
		this.style.display = "None";

		// create another div for the loader
		var tempDiv = document.createElement("div");
		tempDiv.classList.add("loader");

		// Handling the size of the loader
		if (size === "sm") {
			tempDiv.classList.add("sm-loader");
		}
		else if (size === "md") {
			tempDiv.classList.add("md-loader");
		}
		else if (size === "lg") {
			tempDiv.classList.add("lg-loader");
		}
		else if (size === "xl") {
			tempDiv.classList.add("xl-loader");
		}

		// Handling the thickness
		if (thickness) {
			tempDiv.style.borderWidth = thickness.toString() + "px";
			tempDiv.style.borderTopWidth = thickness.toString() + "px";
		}

		//Handling the background color and loader color

		if (bckOfLoader) {
			tempDiv.style.borderColor = bckOfLoader.toString();
		}

		if (headOfLoader) {
			tempDiv.style.borderTopColor = headOfLoader.toString();
		}

		if (bottomOfLoader) {
			tempDiv.style.borderBottomColor = bottomOfLoader.toString();
		}

		if (rightOfLoader) {
			tempDiv.style.borderRightColor = rightOfLoader.toString();
		}

		if (leftOfLoader) {
			tempDiv.style.borderLeftColor = leftOfLoader.toString();
		}

		this.insertAdjacentElement("beforebegin", tempDiv);

		var that = this;
		setTimeout(function () {
			if (textAfter) {
				that.style.display = "inline";
				that.innerHTML = textAfter.toString();
			}
			if (hideAfter) {
				that.style.display = "None";
			}
			else {
				that.style.display = "inline";
			}
			tempDiv.style.display = "None";
		}, timer * 1000);
	}

})()
