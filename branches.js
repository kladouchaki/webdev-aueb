$(document).ready(function() {
    fetchBranchesFromXML()
})

function  fetchBranchesFromXML () {
    let ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', 'branches.xml');
    ajaxRequest.send();

    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == 4) {
            if (ajaxRequest.status ==200) {
                handleResults(ajaxRequest.responseXML);
            } else {
                alert('Error');
            }
        }
    }
}

function handleResults(response) {
    let branchesList = response.getElementsByTagName("branches");
    let output = "<tr><th>Title</th><th>branchnumber</th><th>employeesnumber</th><th>balances</th></tr>"

    for (let branches of branchesList) {
        output +="<tr><td>"
        + branches.getElementsByTagName('title')[0].childNodes[0].nodeValue
        + "</td><td>"
        + branches.getElementsByTagName('branchnumber')[0].childNodes[0].nodeValue
        + "</td><td>"
        + branches.getElementsByTagName('employeesnumber')[0].childNodes[0].nodeValue
        + "</td><td>"
        + branches.getElementsByTagName('balances')[0].childNodes[0].nodeValue
        + "</td></tr>"
    }

    $('.branches-list').html(output);
}



