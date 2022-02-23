$(document).ready(function () {

    $("#submitbtn").click(addEmployeeSubmitListener)

});

var addEmployeeSubmitListener = (event) => {
    event.preventDefault();

    //  Mem vars
    var employeeName = $("#emp-name").val();
    var employeePhone = $("#emp-phone").val();
    var employeeEmail = $("#emp-email").val();

    isValid = validateFields(employeeName, employeePhone, employeeEmail)

    if (isValid) {
        $("#add-form .error").text("");

        //  Gen id
        empId = UUIDjs.create().hex

        //  Persist data
        persistData(empId, employeeName, employeePhone, employeeEmail)

        //  Show success message
        $("#add-form .success").text("Employee data for " + employeeName + " created with ID " + empId);
    }
}

// form validation
var validateFields = (employeeName, employeePhone, employeeEmail) => {

    //  RegEx
    var id_validation = /^[1-9]\d*$/gm;
    var name_validation = /[a-zA-Z]/;
    var mail_validation = /^([a-z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*)@((?:[a-z0-9]+(?:[a-z-0-9-]*)\.)+[a-z]{2,})$/gi;

    if ($("#add-form input").val() == "") {
        $(".error").text("Please fill all form fields before submitting");
        $("#add-form .success").text("");
        return false;
    }

    if (employeePhone.length > 10) {
        $("#add-form .error").text("Please enter a valid Mobile number (maximum 10 digits)");
        $("#add-form .success").text("");
        return false;
    }

    if (!name_validation.test(employeeName)) {
        $("#add-form .error").text("Please enter a valid name");
        $("#add-form .success").text("");
        return false;
    }

    if (!mail_validation.test(employeeEmail)) {
        $("#add-form .error").text("Please enter a valid email address");
        $("#add-form .success").text("");
        return false;
    }

    return true;
}

//  Persists data to local storage
var persistData = (empId, empName, empPhone, empEmail) => {
    empdata = {
        "Name": empName,
        "Mobile": empPhone,
        "Email": empEmail
    };

    localStorage.setItem(empId, JSON.stringify(empdata, null, "\t"));
}