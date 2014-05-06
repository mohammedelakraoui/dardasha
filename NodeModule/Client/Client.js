/**
 * Created by server-pc on 05/05/14.
 */

(function($){
var socket=io.connect("http://localhost:1313");

    // recupere le formulaire

    $('#loginform').submit(function(event){

        event.preventDefault();
        socket.emit('login',{
            username: $('#username').val(),
            password: $('#password').val()

        })

        });

})(jQuery);
