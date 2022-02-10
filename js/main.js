$(document).ready(function () {
    function empapp() {
        
        var add_form = $("#add-form");
        var employee_id = $("#emp-id");
        // var id_length = employee_id.val().toString().length; 
        var employee_name = $("#emp-name");
        var employee_phone = $("#emp-phone");
        var employee_email = $("#emp-email");
       
        var empdata = "";


        var num_validation = /^[1-9]\d*$/gm;
        var name_validation = /[a-zA-Z]/;
        var mail_validation = /^([a-z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*)@((?:[a-z0-9]+(?:[a-z-0-9-]*)\.)+[a-z]{2,})$/gi;
        
        // Add form
        $("#add-form #submitbtn").click(function (ev) {
            ev.preventDefault();
            
            // form validation
            if ($("#add-form input").val() == "") {
                $(".error").text("Please fill all form fields before submitting");
                $("#add-form .success").text("");
            }
        
            else if (!num_validation.test(employee_id.val())) {
                console.log(error);
                $("#add-form .error").text("Please enter a valid ID (maximum 4 digits)");
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
                empdata = {
                    "Name":employee_name.val() , 
                    "Mobile":employee_phone.val() ,
                    "Email":employee_email.val()
                };
                localStorage.setItem(employee_id.val(),JSON.stringify(empdata,null,"\t"));   
                $("#add-form .success").text("Employee data for "+employee_name.val()+" created with ID "+employee_id.val());
            }
        });


        $("#get-form button").click(function (ev) {
            ev.preventDefault();
            var search_employee = $("#search");
            var search_result = JSON.parse(localStorage.getItem(search_employee.val()));
            // form validation
            if (search_employee.val() == "") {
                $("#add-form .success").text("");
                $(".error").text("Please enter employee ID");
            }
            
            else {

                if (search_result == null) {
                    $("#add-form .success").text("");
                    $(".error").text("Employee data for ID "+search_employee.val()+" doesn't exist");
                    $(".data").text("");
                }
                
                else {
                    $(".data").text("");
                    $(".data").append("<p><strong>Name</strong> : "+search_result.Name+"</p>","<p><strong>Mobile no.</strong> : "+search_result.Mobile+"</p>","<p><strong>Email ID :</strong> "+search_result.Email+"</p>");
                    $(".error").text("");
                }
            }
        });


        $("#update-search button").click(function (ev) {
            ev.preventDefault();
            var search_employee = $("#search");
            var search_result = JSON.parse(localStorage.getItem(search_employee.val()));
            if (search_employee.val() == "") {
                $("#add-form .success").text("");
                $(".error").text("Please enter employee ID");
            }

            else {

                if (search_result == null) {
                    $(".success").text("");
                    $(".error").text("Employee data for ID "+search_employee.val()+" doesn't exist");
                    $(".data").text("");
                    $("#update-form").removeClass("d-block").addClass("d-none");
                }
                
                else {
                    $(".error").text("");
                    $("#update-form h3").text("Update "+search_result.Name+"'s data");
                    $("#update-form").removeClass("d-none").addClass("d-block");

                    $("#update-form button").click(function (ev) {
                        ev.preventDefault();

                        // form validation
                        if ($("#update-form input").val() == "") {
                            $(".error").text("Please fill all form fields before submitting");
                            $(".success").text("");
                        }
                    
                        else if (!name_validation.test($("#updated-name").val())) {
                            $(".error").text("Please enter a valid name");
                            $(".success").text("");
                        }
                    
                        else if (!mail_validation.test($("#updated-email").val())) {
                            $(".error").text("Please enter a valid email address");
                            $(".success").text("");
                        }

                        else {
                            $("#add-form .error").text("");
                            empdata = {
                                "Name":$("#updated-name").val() , 
                                "Mobile":$("#updated-phone").val() ,
                                "Email":$("#updated-email").val()
                            };
                            localStorage.setItem(search_employee.val(),JSON.stringify(empdata,null,"\t"));
                            $(".success").text($("#updated-name").val()+"'s data updated ");
                        }
                    })
                }
            }
        });

        $("#remove-form button").click(function (ev) {
            ev.preventDefault();
            var search_employee = $("#search");
            var search_result = JSON.parse(localStorage.getItem(search_employee.val()));
            // form validation
            if (search_employee.val() == "") {
                $(".success").text("");
                $(".error").text("Please enter employee ID");
            }
            
            else {

                if (search_result == null) {
                    $(".success").text("");
                    $(".error").text("Employee data for ID "+search_employee.val()+" doesn't exist");
                }
                
                else {
                    $(".error").text("");
                    localStorage.removeItem(search_employee.val());
                    $(".success").text("Employee data for "+search_result.Name+" was deleted");
                }
            }
        });

        $("#list-emp").click(function (ev) {
            
            

        });
    }

    empapp();
});

