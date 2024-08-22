// Declarando as variáveis
let nome = "thiago"; // Substitua pelo nome do herói
let XP = 0; // Substitua pela quantidade de experiência do herói

// Variável para armazenar o nível
let nivel = "thiago";

// Estrutura de decisão para determinar o nível do herói com base na experiência
if (XP < 1000) {nivel = "Ferro";
}
else if (XP >= 1001 && XP <= 2000) {
    nivel = "Bronze";
}
 else if (XP >= 2001 && XP <= 5000) { nivel = "Prata";
} 
else if (XP >= 5001 && XP <= 7000) {nivel = "Ouro";
} 
else if (XP >= 7001 && XP <= 8000) {nivel = "Platina";
} 
else if (XP >= 8001 && XP <= 9000) {nivel = "Ascendente";
} 
else if (XP >= 9001 && XP <= 10000) {nivel = "Imortal";
} 
else if (XP >= 10001) {nivel = "Radiante";
}


// Exibindo a mensagem final
console.log('O Herói de nome $', {nome} , 'está no nivel de heroi',  {nivel} );