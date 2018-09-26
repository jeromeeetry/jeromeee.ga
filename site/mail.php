
<div style="font-size: 30px; color: #212121;  font-family: 'Roboto', sans-serif; font-weight: bold; padding-top: 5%; padding-left: 5%;">Message Sent! <br>Thanks for getting in touch.
</div>
<html>
<body>

<p style="font-size: 14px; color: #212121;  font-family: 'Roboto', sans-serif; padding-left: 5%;">You should be automatically redirected back <span id="seconds">5</span> seconds.
</p>
<script>
     var seconds = 5; // seconds for HTML
var foo; // variable for clearInterval() function

function redirect() {
    document.location.replace('http://jeromeee.ga')
}

function updateSecs() {
    document.getElementById("seconds").innerHTML = seconds;
    seconds--;
    if (seconds == -1) {
        clearInterval(foo);
        redirect();
    }
}

function countdownTimer() {
    foo = setInterval(function () {
        updateSecs()
    }, 1000);
}

countdownTimer();
    </script>
</body>
</html>