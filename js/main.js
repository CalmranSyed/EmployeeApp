$(document).ready(function () {
    function empapp() {

        var add_form = $("#add-form").value;
        var employee_id = $("#emp-id").value;
        var employee_name = $("#emp-name").value;
        var employee_phone = $("#emp-phone").value;
        var employee_email = $("#emp-email").value;

        var nameCheck = /[a-zA-Z]/;
        var mailCheck = /^([a-z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*)@((?:[a-z0-9]+(?:[a-z-0-9-]*)\.)+[a-z]{2,})$/gi;

        $("#add-form .submitbtn").click(function (ev) {
            ev.preventDefault();

            if ($("#add-form input").value == "") {
                $("#add-form .error").text = "Please fill the form fields and accept the terms and conditions";
            }
        
            else if (!nameCheck.test(employee_name)) {
                $("#add-form .error").text = "Please enter a valid name";
            }
        
            else if (!mailCheck.test(employee_email)) {
                $("#add-form .error").text = "Please enter a valid email address";
            }
            
            else {
                $("#add-form .error").text = "";
                $("#add-form .success").text = "Employee data for "+employee_name+" created with ID "+employee_id;
        
                localStorage.setItem(employee_id,{employee_name , employee_phone , employee_email});
                
            }
        });
    }

    empapp();
});

