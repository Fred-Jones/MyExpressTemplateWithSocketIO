// USE NORMAL HTML FORMS OVER SSL FOR PRODUCTION
//ajax handles for loggin in and signing up
$(document).ready(lgsu)

function lgsu() {
  $('#lgbtn').click(lgcred)
  $('#subtn').click(sucred)
}

function lgcred() { //send cred to /login
  $ajax.post({
    data: {
      email: ,
      password:
      success: function() {
        console.log()
      },
      error: function(jqx, stretype, excptn) {
        console.log(jqx, stretype, excptn)
        throw new Error(stretype)
      },
      complete: function() {
        return
      }
    }
  })
}
function sucred() { //send creds to /signup

}
