function showProjectDetails(projectId) {
    var modal = document.getElementById("projectDetailsModal");
    var title = document.getElementById("projectTitle");
    var description = document.getElementById("projectDescription");

    if (projectId === "project1") {
        title.innerText = "app1";
        description.innerText = "apps i used more.";
    } else if (projectId === "project2") {
        title.innerText = "app2";
        description.innerText = "apps i used less.";
    } else if (projectId === "project3") {
        title.innerText = "app3";
        description.innerText = "apps i never used.";
    }
    
    modal.style.display = "block";
}

function closeProjectDetails() {
    var modal = document.getElementById("projectDetailsModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("projectDetailsModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}