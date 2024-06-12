class cadastProfessor{
    constructor(nome, cpf, datanascimento, turma, telefone, email, senha){
        this.nome=nome;
        this.cpf=cpf;
        this.datanascimento=datanascimento;
        this.turma=turma;
        this.telefone=telefone;
        this.senha=senha;
        this.email=email;
    }
    //get
    getNome(){
        return this.nome;
    }
    getCpf(){
        return this.cpf;
    }
    getdataNascimento(){
        return this.datanascimento;
    }
    getTurma(){
        return this.turma;
    }
    getTelefone(){
        return this.telefone;
    }
    getSenha(){
        return this.senha;
    }
    getEmail(){
        return this.email;
    }
    //set
    setNome(){
        this.nome=novoNome;
    }
    setCPF(){
        this.cpf=novoCpf;
    }
    setdataNascimento(){
        this.datanascimento=novadataNascimento;
    }
    setTurma(){
        this.datanascimento;
    }
    setTelefone(){
        this.datanascimento;
    }
    setSenha(){
        this.senha=novaSenha;
    }
    setEmail(){
        this.email=novoEmail;
    }
    mostrarDetalhes(){
        return `Email: ${this.email}`;
    }
}

receberDados=document.getElementById('nome').value;
receberDados=document.getElementById('cpf').value;
receberDados=document.getElementById('data-nascimento').value;
receberDados=document.getElementById('turma').value;
receberDados=document.getElementById('telefone').value;
receberDados=document.getElementById('email').value;
receberDados=document.getElementById('senha').value;

const principal= document.getElementById('principal');
principal.onsubmit= function cadastrarAluno(event){
    event.preventDefault();

    const nome= document.getElementById('nome').value;
    const cpf= document.getElementById('cpf').value;
    const datanascimento= document.getElementById('data-nascimento').value;
    const turma= document.getElementById('turma').value;
    const telefone= document.getElementById('telefone').valeu;
    const email= document.getElementById('email').valeu;
    const senha= document.getElementById('senha').value;

    const cadastro= new cadastro(nome, cpf, datanascimento, turma, telefone, email, senha);
    adicionarDados(cadastro);

    getElementById('nome').value=' ';
    getElementById('cpf').value=' ';
    getElementById('data-nascimento').value=' ';
    getElementById('turma').value=' ';
    getElementById('telefone').value=' ';
    getElementById('email').value=' ';
    getElementById('senha').value=' ';

    return false;
}
function adicionarDados(receberDados) {
    let receberDados;
    const getreceberDadosBD=()=> JSON.parse(localStorage.getItem('dbfunc'))??[];
    const setreceberDadosBD=()=> localStorage.setItem('dbfunc', JSON.stringify(itens));
}

// function getDados() {
//     let produtos = localStorage.getItem("produtos")
//     if (!produtos) return []
//     else return JSON.parse(produtos)
// }


//login
function validarEmails(){
    const emailValido=isEmailValido();
    const email= document.getElementById('recover-password-button').disabled=!emailValido;

    const senhaValida=isPassword();
    document.getElementById("loginbutton").disabled =!emailValido||!senhaValida;
    email.textContent=emailValido.mostrarDetalhes();
    email.innerHTML=emailValido.mostrarDetalhes();
    email.appendChild(email);
}
function isPassword() {
    const senha= document.getElementById("senha").value;
    if (!senha) {
        return false;
    }
    return true;
}

function isEmailValido(){
    const email= document.getElementById("email").value;
    if (!email){
        return false;
    }
    return validandoEmail(email);
}
function validandoEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}
