

window.onload = function() {
    document.getElementById('reloj').onclick = function () {
        let hora = new Date();
        document.body.innerHTML = "Son las " + hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds()
    }
} 