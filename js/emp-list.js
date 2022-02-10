$(document).ready(function () {

    keys = Object.keys(localStorage);
    values = Object.values(localStorage);
    for (i = 0 ; i < keys.length ; i++) {
        var data = JSON.parse(values[i])
        toRender = `
            <div>
                <div>Name : ${data.Name}</div>
                <div>Mobile : ${data.Mobile}</div>
                <div>Email : ${data.Email}</div>
            </div>
        `
        $("#emp-list").append(toRender)
    }

});