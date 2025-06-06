const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Verifica o tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  // Salva a preferência do usuário
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.setItem('theme', '');
  }
});

function castSpell(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("span");
      particle.classList.add("magic-particle");

      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 60 + 30;
      particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;

      card.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
  }

  //luzes
  const lights = document.querySelectorAll('.candle-light');

setInterval(() => {
  lights.forEach(light => {
    const scale = 1 + Math.random() * 0.3;
    const opacity = 0.5 + Math.random() * 0.5;
    light.style.transform = `scale(${scale})`;
    light.style.opacity = opacity;
  });
}, 300);

document.getElementById('register-btn').addEventListener('click', () => {
  alert("Prepare-se para entrar no mundo mágico! 🧙‍♀️✨");
});
//login
document.getElementById("meuFormulario").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const mensagemErro = document.getElementById("mensagemErro");

  let erros = [];

  if (nome === "") {
    erros.push("O nome é obrigatório.");
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    erros.push("Email inválido.");
  }

  if (senha.length < 6) {
    erros.push("A senha deve ter pelo menos 6 caracteres.");
  }

  if (erros.length > 0) {
    mensagemErro.textContent = erros.join(" ");
    mensagemErro.style.animation = "shake 0.3s";
  } else {
    mensagemErro.textContent = "";
    alert("Formulário enviado com sucesso!");
    // 
  }
});
//

document.querySelectorAll('.house-card').forEach(card => {
  card.addEventListener('click', () => {
    card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
    card.style.transform = 'scale(1.1)';
    card.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.8)';

    setTimeout(() => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '';
    }, 500);
  });
});
/*muda o idioma*/ 
document.addEventListener("DOMContentLoaded", () => {
  let currentLanguage = 'pt';
const translations = {
  pt: {
    'title-grifinoria': 'Grifinória',
    'desc-grifinoria': 'A Grifinória é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts, fundada por Godric Gryffindor. É conhecida  por valorizar características como coragem,   bravura, nobreza, lealdade e cavalheirismo. Os Grifinórios são frequentemente retratados Hermione Granger e Neville Longbottom.',
    'title-lufalufa': 'Lufa-Lufa',
    'desc-lufalufa': 'A Lufa-Lufa é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts, fundada por Helga Hufflepuff. É conhecida por valorizar lealdade, paciência, justiça e trabalho árduo.',
    'title-corvinal': 'Corvinal',
    'desc-corvinal': 'A Corvinal é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts, fundada por Rowena Ravenclaw. É conhecida por valorizar inteligência, sabedoria, criatividade e aprendizado.',
    'title-sonserina': 'Sonserina',
    'desc-sonserina': 'A Sonserina é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts, fundada por Salazar Slytherin. É conhecida por valorizar ambição, astúcia, liderança e determinação.'
  },
  en: {
    'title-grifinoria': 'Gryffindor',
    'desc-grifinoria': 'Gryffindor is one of the four houses of Hogwarts School of Witchcraft and Wizardry, founded by Godric Gryffindor. It is known for valuing characteristics such as courage, bravery, nobility, loyalty, and chivalry. Gryffindors are often portrayed as Hermione Granger and Neville Longbottom.',
    'title-lufalufa': 'Hufflepuff',
    'desc-lufalufa': 'Hufflepuff is one of the four houses at Hogwarts School of Witchcraft and Wizardry, founded by Helga Hufflepuff. It is known for valuing loyalty, patience, fairness, and hard work.',
    'title-corvinal': 'Ravenclaw',
    'desc-corvinal': 'Ravenclaw is one of the four houses at Hogwarts School of Witchcraft and Wizardry, founded by Rowena Ravenclaw. It is known for valuing intelligence, wisdom, creativity, and learning.',
    'title-sonserina': 'Slytherin',
    'desc-sonserina': 'Slytherin is one of the four houses at Hogwarts School of Witchcraft and Wizardry, founded by Salazar Slytherin. It is known for valuing ambition, cunning, leadership, and determination.'
  }
};

const toggleButton = document.getElementById('toggle-language');

  toggleButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    const elementsToTranslate = Object.keys(translations[currentLanguage]);

    elementsToTranslate.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = translations[currentLanguage][id];
      }
    });

    // Atualiza o texto do botão
    toggleButton.textContent = currentLanguage === 'pt' ? 'Switch to English' : 'Mudar para Português';
  });
});

//cookie
document.cookie = `nome=${nome}; path=/; max-age=86400`; // dura 1 dia
if (erros.length > 0) {
  mensagemErro.textContent = erros.join(" ");
  mensagemErro.style.animation = "shake 0.3s";
} else {
  mensagemErro.textContent = "";
  alert("Formulário enviado com sucesso!");
  document.cookie = `nome=${nome}; path=/; max-age=86400`; // cookie criado!
}

function pegarCookie(nome) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [chave, valor] = c.split('=');
    if (chave === nome) return valor;
  }
  return null;
}

const nomeUsuario = pegarCookie('nome');
if (nomeUsuario) {
  console.log("Bem-vindo, " + nomeUsuario); // pode usar onde quiser
}



