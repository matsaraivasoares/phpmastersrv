/* 
 * Aluno:      matheus saraiva soares   
 * Matricula:  201464412
 */
function converterData(dataTelegram) {
    var data = new Date(dataTelegram * 1000);
    var dia;
    if (data.getDate() < 10) {
        dia = "0" + data.getDate();
    } else {
        dia = data.getDate();
    }
    var mes;
    if ((data.getMonth() + 1) < 10) {
        mes = "0" + (data.getMonth() + 1);
    } else {
        mes = (data.getMonth() + 1);
    }
    var ano = data.getFullYear();
    var hora;
    if (data.getHours() < 10) {
        hora = "0" + data.getHours();
    } else {
        hora = data.getHours();
    }
    var minutos;
    if (data.getMinutes() < 10) {
        minutos = "0" + data.getMinutes();
    } else {
        minutos = data.getMinutes();
    }
    var dataFormatada = dia + "/" + mes + "/" + ano + " - " + hora + ":" + minutos;
    return dataFormatada;
}

var titulo = document.title;

function requisicaoTelegram() {
    var requisicao = new XMLHttpRequest();
    var urlBot = document.getElementById("urlBot").value;
    var mensagensRecebidas = document.getElementById("painelMensagens");
    requisicao.open('GET', urlBot, true);
    requisicao.onload = function (e) {
        if (this.status === 200) {
            var result = JSON.parse(this.responseText).result;

            if (result.length > 0) {
                document.title = "(" + result.length + ") " + titulo;
                var msg = "";
                for (var i = result.length - 1; i >= 0; i--) {
                    var dataMsg = result[i].message.date;
                    var nome = result[i].message.from.first_name;
                    var text = result[i].message.text;
                    msg = "<p>" + msg + "<span class=\"infoUser\">" + (converterData(dataMsg) + " - " + nome + ":</span> " + "<span class=\"infoMsg\">" + text + "</span>" + "</p><br>");
                    mensagensRecebidas.innerHTML = msg;
                }
            }
        }
    };

    requisicao.send();
    reloadAuto();

}

function reloadAuto() {
    setInterval(requisicaoTelegram, 30000);
}