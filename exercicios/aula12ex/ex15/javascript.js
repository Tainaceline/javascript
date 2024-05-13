function clicar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('textano')
    var res= document.getElementById('res')
    if(fano.value.lenght==0 || Number(fano.value) > ano ){
        alert('[erro] verifique novamente')
    }
}