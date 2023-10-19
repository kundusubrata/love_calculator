let button = document.querySelector(".btn");
button.addEventListener("click", function () {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    if (name1 == "") {
        alert('Please enter your name');
    } else if (name1.length <= 2) {
        alert('Min lenght is 3')
    } else if (!isNaN(name1)) {
        alert('Numbers are not allowed');
    }
    else if (name2 == "") {
        alert('Please enter your name');
    } else if (name2.length <= 2) {
        alert('Min lenght is 3')
    } else if (!isNaN(name2)) {
        alert('Numbers are not allowed');
    }

    else{
        let parentContainer = document.querySelector(".form-container");
        let newDiv = document.createElement("div");
        newDiv.style.width = "80px";
        newDiv.style.height = "50px";
        newDiv.style.backgroundColor = "blue";
        let textElement = document.createElement("p");
        let random = (Math.floor(Math.random()*100))+1;
        textElement.textContent=random+"%";
        textElement.style.textAlign="center";
        textElement.style.lineHeight = "50px";
        textElement.style.fontSize = "40px";

        newDiv.style.position="absolute";
        newDiv.style.top="60%";
        newDiv.style.left="45%";
        // newDiv.style.transform="translate(-50% , -50%";
        newDiv.appendChild(textElement);
        parentContainer.appendChild(newDiv);
    }
});


