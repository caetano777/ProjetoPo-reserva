// class cadastroAluno{
//     constructor(nome, cpf, datanascimento,email, senha){
//         this.nome=nome;
//         this.cpf=cpf;
//         this.datanascimento=datanascimento;
//         this.senha=senha;
//         this.email=email;
//     }
//     //get
//     getNome(){
//         return this.nome;
//     }
//     getCpf(){
//         return this.cpf;
//     }
//     getdataNascimento(){
//         return this.datanascimento;
//     }
//     getSenha(){
//         return this.senha;
//     }
//     getEmail(){
//         return this.email;
//     }
//     //set
//     setNome(){
//         this.nome=novoNome;
//     }
//     setCPF(){
//         this.cpf=novoCpf;
//     }
//     setdataNascimento(){
//         this.datanascimento=novadataNascimento;
//     }
//     setSenha(){
//         this.senha=novaSenha;
//     }
//     setEmail(){
//         this.email=novoEmail;
//     }
// }
function validarEmails(){
    const emailValido=isEmailValido();
    const email= document.getElementById('recover-password-button').disabled=!emailValido;

    const senhaValida=isPassword();
    document.getElementById("loginbutton").disabled =!emailValido||!senhaValida;
   
}
function isPassword() {
    const senha= document.getElementById("password").value;
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

