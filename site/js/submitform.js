function _(id){ return document.getElementById(id); }
function submitForm(){
  _("sendbtn").disabled = true;
  _("status").innerHTML = 'please wait ...';
  var formdata = new FormData();
  formdata.append( "name", _("name").value );
  formdata.append( "email", _("email").value );
  formdata.append( "message", _("message").value );
  var ajax = new XMLHttpRequest();
  ajax.open( "POST", "mail.php" );
  ajax.onreadystatechange = function() {
    if(ajax.readyState == 4 && ajax.status == 200) {
      if(ajax.responseText == "success"){
        _("my_form").innerHTML = '<h2>Thanks '+_("name").value+', your message has been sent.</h2>';
      } else {
        _("sendbtn").disabled = false;
        _("status").innerHTML = ajax.responseText;
      }
    }
  }
  ajax.send( formdata );
}