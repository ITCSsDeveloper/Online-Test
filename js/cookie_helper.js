function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = 'expires='+ d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
    return 'test';

    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}
function delete_cookie( cname ) {
  document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function setLogin(username, token){
    delete_cookie('_token');
    delete_cookie('_username');

    setCookie('_token', token, 1);
    setCookie('_username', username, 1);
}
function isLogin(){
	return (getCookie('_token') !== '');
}
function GetToken(){
    return getCookie('_token');
}
function GetUsername(){
    return getCookie('_username');
}