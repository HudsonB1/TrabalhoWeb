class Cliente {
    constructor(){
        this.clientes = localStorage.getItem('tbClientes') === null
                        ? []
                        : JSON.parse(localStorage.getItem('tbClientes'))
    }

    salva(cliente){
        if (document.getElementById('nomemae').getAttribute('disabled')==='disabled'){
            this.apaga(cliente.nomemae)
        }


        this.clientes.push(cliente) //adiciona um novo item no array
        alert('Cadastro salvo com sucesso!')
        localStorage.setItem('tbClientes', JSON.stringify(this.clientes))    
    }
    edita(cliente){
        document.getElementById('nomemae').value = cliente.nomemae
        document.getElementById('nomemae').setAttribute('disabled','disabled')
        document.getElementById('nomepai').value = cliente.nomepai
        document.getElementById('nome').value = cliente.nome
        document.getElementById('data').value = cliente.data
        document.getElementById('hora').value = cliente.hora 
        document.getElementById('uf').value = cliente.uf 
        document.getElementById('endereco').value = cliente.endereco
        document.getElementById('numero').value = cliente.numero
        document.getElementById('bairro').value = cliente.bairro
        document.getElementById('cidade').value = cliente.cidade
        
    }

    apaga(codigo){
        let index = this.clientes.findIndex(cliente => cliente.nomemae == nomemae)
        this.clientes.splice(index, 1)
        localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
        cliente.atualiza()
    }
    lista(){
        const listagem = this.clientes.map((cliente) => (
            `<tr>
             <td>${cliente.nomemae}</td>  
             <td>${cliente.nomepai}</td>
             <td>${cliente.nome}</td>  
             <td>${cliente.data}</td> 
             <td>${cliente.hora}</td>
             <td>${cliente.uf}</td>
             <td>${cliente.cidade}</td>
             <td>${cliente.endereco}</td>
             <td>${cliente.numero}</td>  
             <td>${cliente.bairro}</td>
             <td>
             <button id='apagar' onclick='cliente.apaga(${cliente.codigo})'>APAGAR</button>
             <button id='editar' onclick='cliente.edita(${JSON.stringify(cliente)})'>EDITAR</button>
            </td>               
            </tr>
            `
        ))
        return(`<table border='1' class='paleBlueRows'>
        <caption></caption>
        <thead>
            <th>Nome da Mãe</th>
            <th>Nome do Pai</th>
            <th>Nome da Criança</th>
            <th>Data de nascimento</th>
            <th>Hora do nascimento</th>
            <th>UF</th>
            <th>Cidade</th>
            <th>Endereço</th>
            <th>Número</th>
            <th>Bairro</th>
            <th>Opções</th>
        </thead>
        <tbody>${listagem}</tbody>
        </table>
        `)
    }
    atualiza(){
        document.getElementById('listagem').innerHTML = cliente.lista()
    }
}
const cliente = new Cliente()
document.getElementById('salvar').onclick = function(){
    const registro = {
        nomemae: document.getElementById('nomemae').value,
        nomepai: document.getElementById('nomepai').value,
        nome: document.getElementById('nome').value,
        hora: document.getElementById('hora').value,
        data: document.getElementById('data').value,
        uf: document.getElementById('uf').value,
        cidade: document.getElementById('cidade').value,
        endereco: document.getElementById('endereco').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        
    }
    cliente.salva(registro)
}
window.onload = function(){
    cliente.atualiza()
}