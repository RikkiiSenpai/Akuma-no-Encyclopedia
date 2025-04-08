var contador = 0;
var largura;




function next() {
    if (contador <75 ) {
        contador++;
      
        checkCounterAndUpdateCSS();
    }


   




}

function previous() {
    if (contador > 0) {
        contador--;
        
        checkCounterAndUpdateCSS();
    }
}







function checkCounterAndUpdateCSS() {
  var imagem = document.getElementById("livro");
    var elementStyle = document.getElementById("flipbook").style;
    if (contador >0 && contador < 75 ) {
        // Sobrescreva a propriedade 'right' do seu CSS aqui
        elementStyle.right = "auto";
        elementStyle.left = "auto";
        imagem.style.display = "block";
        
    }
      else if (contador==75 && largura==800) {
        elementStyle.left = "15%";
        imagem.style.display = "none";
      
    } 
   
    else if (largura==800) {
        
        elementStyle.right = "15%";
        imagem.style.display = "none";
       
    }
    else{
      elementStyle.right = "25%";
      imagem.style.display = "none";
    }
}

//pesquisa
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().includes(filter)) { // Alterado para 'includes' em vez de 'indexOf'
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }








  //window.addEventListener('resize', function() {
    //var largura = window.innerWidth;
    //if (largura < 1300) {
        //alert('O site só funciona a partir de uma resolução de 1300. Ative o modo para computadores se necessário.');
    //}
//});



function ajustarLargura() {
 
  if (window.innerWidth <= 950) {
    largura = 400;
  
  } else {
    largura = 800;
   
    
  }
  // Use a variável 'largura' aqui
}

// Chame a função quando a página for carregada
window.onload = ajustarLargura;

// Chame a função quando a janela for redimensionada
window.onresize = ajustarLargura;






  



























