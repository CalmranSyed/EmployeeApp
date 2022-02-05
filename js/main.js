$(document).ready(function () {
    function empapp() {

        
        $("#add-form #submitbtn").click(function (ev) {
            ev.preventDefault();
            
            var add_form = $("#add-form");
            var employee_id = $("#emp-id").val();
            var employee_name = $("#emp-name").val();
            var employee_phone = $("#emp-phone").val();
            var employee_email = $("#emp-email").val();
    
            var nameCheck = /[a-zA-Z]/;
            var mailCheck = /^([a-z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*)@((?:[a-z0-9]+(?:[a-z-0-9-]*)\.)+[a-z]{2,})$/gi;

            if ($("#add-form input").val() == "") {
                $(".error").text("Please fill all form fields before submitting");
                console.log($(".error").text());
            }
        
            else if (!nameCheck.test(employee_name)) {
                $("#add-form .error").text("Please enter a valid name");
            }
        
            else if (!mailCheck.test(employee_email)) {
                $("#add-form .error").text("Please enter a valid email address");
            }
            
            else {
                $("#add-form .error").text("");
                $("#add-form .success").text("Employee data for "+employee_name+" created with ID "+employee_id);
        
                localStorage.setItem(employee_id,JSON.stringify({"name":employee_name , "phone-no.":employee_phone , "email-id":employee_email}));
                
            }
        });
    }

    empapp();
});

