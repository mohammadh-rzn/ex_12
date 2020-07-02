function data(){
    const human = "hossein";
    $(document).ready(function(){
        $.ajax({
            type: "POST",
            url: "/checkme",
            data: {
               pass: $('#password').val(),
               user: $('#email').val()
            },
            success: function(response){
                if(response === 'true'){
                    alert("Succesfully signed in");
                }
                else alert("Username or password are not correct");
            },
            error: function(response){
                console.log(response);
            }
        })
    })
}