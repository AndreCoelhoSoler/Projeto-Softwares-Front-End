let data = new Date()
let dia = ('0' +data.getDate()).slice(-2)
let mes =data.getMonth
let meses
=[ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let ano =data.getFullYear()
document.write(dia + 'de' +meses[mes] + 'de' + ano);