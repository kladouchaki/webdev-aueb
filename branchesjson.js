$(document).ready(function() {
    fetchBranchesFromJson();
})

function fetchBranchesFromJson() {
    let ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', 'branches.txt', true);
    ajaxRequest.send();

    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == 4) {
            if (ajaxRequest.status == 200) {
                handleResults(JSON.parse(ajaxRequest.responseText));
            } else {
                alert('ERROR');
            }
        }
    }
}

function handleResults(response) {
    let branchesList = response.bank.branches;
    let output = "<tr><th>Title></th><th>branchnumber</th><th>employeesnumber</th><th>balances</th></tr>";

    for (let branchesItem of branchesList) {
        output += "<tr><td>"
        + branchesItem.title
        + "</td><td>"
        + branchesItem.branchnumber
        + "</td><td>"
        + branchesItem.employeesnumber
        + "</td><td>"
        + branchesItem.balances
        + "</td></tr>";
    }

    $(".branches-list").html(output);
}