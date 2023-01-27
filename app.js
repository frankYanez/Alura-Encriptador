let input = document.getElementById("input");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");
const texto = document.getElementById('message')
const boy = document.getElementById('boy-image')



//g ai t imes t ober

const encriptar = (string) => {

  const toChange = [["a", "ai"], ["e","enter"],["i","imes"],["o", "ober"],["u", "ufat"]]

  string = string.toLowerCase()
 
  for (let i = 0; i < toChange.length; i++) {
    if(string.includes(toChange[i][0])){
      
      string = string.replaceAll(toChange[i][0] , toChange[i][1])
      
    }
    
  }
  return string
}



btnEncriptar.addEventListener('click', ()=>{
  let message = input.value
  texto.innerText = encriptar(message)
  boy.classList.add('none')
 input.value = ''

})

const desencriptar = (string) => {

  const toChange = [["e","enter"], ["i","imes"],["a", "ai"], ["o", "ober"],["u", "ufat"]]

  string = string.toLowerCase()
 
  for (let i = 0; i < toChange.length; i++) {
    if(string.includes(toChange[i][1])){
      
      string = string.replaceAll(toChange[i][1] , toChange[i][0])
      
    }
    
  }
  return string
}

btnDesencriptar.addEventListener('click', ()=>{
  let message = input.value
  texto.innerText = desencriptar(message)
  boy.classList.add('none')
 input.value = ''

})