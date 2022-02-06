$(document).ready(function () {
    function empapp() {

        var add_form = $("#add-form");
        var employee_id = $("#emp-id");
        var employee_name = $("#emp-name");
        var employee_phone = $("#emp-phone");
        var employee_email = $("#emp-email");
        var search_employee = $("#get-search");
        var empdata = "";

        var name_validation = /[a-zA-Z]/;
        var mail_validation = /^([a-z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*)@((?:[a-z0-9]+(?:[a-z-0-9-]*)\.)+[a-z]{2,})$/gi;
        
        $("#add-form #submitbtn").click(function (ev) {
            ev.preventDefault();
            
            // form validation
            if ($("#add-form input").val() == "") {
                $(".error").text("Please fill all form fields before submitting");
                $("#add-form .success").text("");
            }
        
            else if (!name_validation.test(employee_name.val())) {
                $("#add-form .error").text("Please enter a valid name");
                $("#add-form .success").text("");
            }
        
            else if (!mail_validation.test(employee_email.val())) {
                $("#add-form .error").text("Please enter a valid email address");
                $("#add-form .success").text("");
            }
            
            else if (localStorage.getItem(employee_id.val()) != null) {
                $("#add-form .success").text("");
                $("#add-form .error").text("Employee with ID "+employee_id.val()+" already exists, please enter a different ID");
            }
            
            else {
                $("#add-form .error").text("");
                $("#add-form .success").text("Employee data for "+employee_name.val()+" created with ID "+employee_id.val());
                empdata = {
                    "Full name":employee_name.val() , 
                    "Mobile no":employee_phone.val() ,
                    "Email ID":employee_email.val()
                };
                localStorage.setItem(employee_id.val(),JSON.stringify(empdata,null,"\t"));   
            }
        });

        $("#get-form button").click(function (ev) {
            ev.preventDefault();

            var search_result = localStorage.getItem(search_employee.val());

            if (search_employee.val() == "") {
                $("#add-form .success").text("");
                $(".error").text("Please enter employee ID");
            }
            
            else {
                if (search_result == null) {
                    $("#add-form .success").text("");
                    $(".error").text("Employee data for ID "+search_employee.val()+" doesn't exist");
                }
                else {
                    $("#add-form .error").text("");
                    $("#add-form .success").text("Data found");
                    console.log(search_result);
                    $(".data").text(search_result);
                }
            }
        })
    }

    empapp();
});

