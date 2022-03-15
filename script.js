


function buscar() {
    var valor = document.querySelector('input')
    var cep = valor.value
    var url = `https://viacep.com.br/ws/${cep}/json/`
    
    fetch(url)
    .then(response => response.json()) // retorna uma promise
    .then(result => {
        obj = new Object(result)
        document.getElementById('uf').textContent = 'Estado: ' + obj.uf
        document.getElementById('localidade').textContent = 'Cidade: ' + obj.localidade
        document.getElementById('bairro').textContent = 'Bairro: ' + obj.bairro
        document.getElementById('logradouro').textContent = 'Rua: ' + obj.logradouro
    })
    .catch(err => {
    // trata se alguma das promises falhar
    console.error('Failed retrieving information', err);


    })
}