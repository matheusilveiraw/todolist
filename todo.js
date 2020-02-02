//o programa deve mostrar a tarefa na tabela (descrita pelo usuário) e junto vir uma mensagem de excluir, que vai excluir a mensagem respectiva

var tarefa = document.getElementsByClassName('tarefa')[0]
var toDos = []
var lista = document.getElementById('lista')

function add() { 
        toDos.push(tarefa.value)
        console.log(toDos)

        mostraTodos()

        tarefa.value = ' '
    }    


function mostraTodos() { 
    lista.innerHTML = ' '

    for (var i = 0; i < toDos.length; i++) { 
        cont = i + 1
        lista.innerHTML += '<br>'+ cont +'. ' + toDos[i] + "  "
        criaExcluirBtn(i)
    }
}

function criaExcluirBtn(i) {

    var excluirBtn = document.createElement('button')
    excluirBtn.setAttribute('class', 'button')
    excluirBtn.innerHTML = 'Excluir!'
    lista.appendChild(excluirBtn)
    excluirBtn.setAttribute('onclick', 'deleteTodo(' + i + ')')
}

function deleteTodo(i) { 
    toDos.splice(i, 1) //metodo que remove uma quantidade de itens do array (posição, qnt)
    mostraTodos();
}


function ficaVermelho() { 
    document.body.style.backgroundColor = '#ff6666';
    document.body.querySelector('section').style.backgroundColor = '#e60000';
    document.body.getElementsByClassName('button')[0].style.backgroundColor = '#cc0000';
}

function ficaAzul() { 
    document.body.style.backgroundColor = '#cce6ff';
    document.body.querySelector('section').style.backgroundColor = '#3399ff';
    document.body.getElementsByClassName('button')[0].style.backgroundColor = '#008CBA';
}

function ficaAmarelo() { 
    document.body.style.backgroundColor = '#ffd633';
    document.body.querySelector('section').style.backgroundColor = '#e68a00';
    document.body.getElementsByClassName('button')[0].style.backgroundColor = '#995c00';
}

function ficaVerde() { 
    document.body.style.backgroundColor = '#00b33c';
    document.body.querySelector('section').style.backgroundColor = '#558000';
    document.body.getElementsByClassName('button')[0].style.backgroundColor = '#004d00';
}
