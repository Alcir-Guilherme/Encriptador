const texto_entrada = document.getElementById("texto_entrada");
const botaoEncriptar=document.getElementById("botaoEncriptar");
const botaoDesencriptar=document.getElementById("botaoDesencriptar");
const botaoCopiar=document.getElementById("botaoCopiar");
const mensagem_final=document.getElementById("mensagem_final");
const boneco=document.getElementById("boneco");
const info_direita=document.getElementById("info_direita");
const direita=document.getElementById("direita");


let matrizCodigo = [["e","enter"] , ["i","imes"], ["a","ai"] , ["o","ober"] ,["u","ufat"] ];

const troca= (novoValor) =>{
    mensagem_final.innerHTML=novoValor;
    boneco.style.display="none";

    texto_entrada.value="";
    botaoCopiar.style.display="block";
    info_direita.style.display="none";
    direita.classList.add("ajustar");
    mensagem_final.classList.add("ajustar");

}
botaoEncriptar.addEventListener("click",()=>{
    const novoTexto= texto_entrada.value.toLowerCase();
    function encriptar(novoTexto){
        for (let i=0;i<matrizCodigo.length;i++){
            if(novoTexto.includes(matrizCodigo[i][0])){
                novoTexto=novoTexto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
        }
        return novoTexto;
    }
    /*const textoEncriptado= encriptar(novoTexto);*/
    troca(encriptar(novoTexto));
    
    

    
})
botaoDesencriptar.addEventListener("click",()=>{
    const novoTexto= texto_entrada.value.toLowerCase();
    function desencriptar(novoTexto){
        for (let i=0;i<matrizCodigo.length;i++){
            if(novoTexto.includes(matrizCodigo[i][1])){
                novoTexto=novoTexto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
            }
        }
        return novoTexto;
    }
    troca(desencriptar(novoTexto));
})
botaoCopiar.addEventListener("click",()=>{
    let texto=mensagem_final;
    texto.select();
    document.execCommand("copy");
    mensagem_final.innerHTML="";
    boneco.style.display="block";
    info_direita.style.display="block";
    direita.classList.remove("ajustar");
    mensagem_final.classList.remove("ajustar");
    texto_entrada.focus();
})