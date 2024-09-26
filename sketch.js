let suaidade;
let aventura;
let acao;
let rpg;
let titulo;
let corpo;
let jogos={
  menor10 : {
  acao:"BRAW STARS", 
 aventura: "SUPER MARIO",
 RPG: "DAR GEON"
    
  },
  entre10e14:{
  acao :" GTA S.A ",
  aventura :"MINECRAFT",
  RPG:"BATURE GATE"
  
},
    
  entre14e16:{
acao : "FORNITE",
aventura : "RED DEAD REDEPION 2",
RPG : "DARK SOULS 1"

},
  
  entra16e18:{
acao : "COD",
aventura : "MAFIA DEFINITIVE EDITION ",
RPG : "THE WITCHER"
  
},
  
  
 maior18:{
acao : "INJUSTICE 2",
aventura : "SHADOW OF WAR ",
RPG : "DARK SOULS 3 ⚔"
}
};

let button;

function setup() {
  
  createCanvas(850, 400).position(100,100);
  createSpan("qual sua idade?").position(625,500).addClass("hidden");
  suaidade = createInput("").position(590,585).addClass("hidden");
  acao = createCheckbox("Gosta de jogos de acao ?😎").position(100,600).addClass("hidden");
  aventura = createCheckbox("Gosta de jogos de aventura ?🏹").position(100,650).addClass("hidden");
  rpg = createCheckbox("Gosta de jogos de rpg ?🧙‍♂️").position(100,700).addClass("hidden");
  titulo = "Dancing Script"
  corpo = "Pixelify Sans"
  button = createButton("START🔘").position(width/2,500).id("botao");
  button.mousePressed(bota);
  button.addClass("botao");
}
function bota(){
  selectAll(".hidden").forEach((el)=>
 el.removeClass("hidden"));
  button.hide();
  
  
}
function draw() {
  background("black"); 
  let idade= parseInt(suaidade.value());
  let checkacao= acao.checked();
  let checkaventura= aventura.checked();
  let checkRPG= rpg.checked();
  let jogo = "insira suas preferencias ";
  if(suaidade.value()!=""){
  jogo = mostrajogo(idade,checkacao, checkaventura, checkRPG);
  }
  fill("orange");
  textAlign(CENTER,CENTER);
  textSize(40);
  text(jogo, width/2,height/2);
  fill("yellow");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("MERLHOR INDICADOR DE JOGOS 😆", width/2,30)
  textFont(titulo);
    
  }
  function mostrajogo(idade,checkacao, checkaventura, checkRPG){
 if(isNaN(idade)){
return "Idade invalida"
}else
   if(idade< 5){
  return "Sai daqui seu pirralho catarrento, seu anão de jardim da creche"
  
   }else
     if(idade>120){
       return "O SEU PE NA COVA SAI DAQUI "
     }
    if(idade >= 5 && idade <10){
       if (checkacao){
         return jogos["menor10"]["acao"];
       }
        if (checkaventura){
         return jogos["menor10"]["aventura"];
        }
           if(checkRPG){
         return jogos["menor10"]["RPG"];
     }
     
     }
  
       
  else  if(idade >10 && idade <14){
       if (checkacao){
         return jogos["entre10e14"]["acao"];
       }
        if (checkaventura){
         return jogos["entre10e14"]["aventura"];
        }
           if (checkRPG){
         return jogos["entre10e14"]["RPG"];
     }
     
     }

else if(idade >= 14 && idade <16){
       if (checkacao){
         return jogos["entre14e16"]["acao"];
       }
        if (checkaventura){
         return jogos["entre14e16"]["aventura"];
        }
           if (checkRPG){
         return jogos["entre14e16"]["RPG"];
     
 }

}
else if(idade >= 16 && idade <18){
       if (checkacao){
         return jogos["entre16e18"]["acao"];
       }
        if (checkaventura){
         return jogos["entre16e18"]["aventura"];
        }
           if (checkRPG){
         return jogos["entre16e18"]["RPG"];
     
           }

}
 else   if(idade >18){
       if (checkacao){
         return jogos["maior18"]["acao"];
       }
        if (checkaventura){
         return jogos["maior18"]["aventura"];
        }
           if (checkRPG){
         return jogos["maior18"]["RPG"];
     
           }
 }




             
     
     
  
  
  

  
  
  
  
  
}