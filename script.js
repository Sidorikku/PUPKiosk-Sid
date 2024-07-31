

function showSceneryBox(event, imgSource, heading, description) {
    let d = document.getElementById("display");
    document.body.appendChild(d); 
    document.addEventListener('mousemove', displayFollowCamera);
    d.style.display = 'block';
    d.style.left = event.clientX + 20 + "px";
    d.style.top = event.clientY + 10 + "px";
    if (!description) description = "No description available";
    if (!heading) heading = "No title";
    d.innerHTML = "<div id='wrapper'><img src='" + imgSource + "' alt='" + heading + "' style='width: 100%;'><h3>" + heading + "</h3><p>" + description + "</p></div>";
}

function displayFollowCamera(event) {
    let d = document.getElementById('display');
    d.style.left = event.clientX + 20 + "px";
    d.style.top = event.clientY + 5 + "px";
}

function removeSceneryBox() {
    let d = document.getElementById("display");
    document.body.removeAttribute('style');
    document.removeEventListener('mousemove', displayFollowCamera);
    d.innerHTML = '';
    d.style.display = 'none';
}

