# 🚀 Start HTML

Este é um pequeno projeto que permite ao usuário inserir código HTML em uma `textarea` e executá-lo em uma nova aba do navegador.

## 📂 Estrutura do Projeto
```
/startHTML
│── index.html   # Estrutura da página
│── style.css    # Estilos da página
└── script.js    # Lógica para abrir o HTML inserido em uma nova aba
```

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla JS)

## 📌 Funcionalidades
- ✅ Permite inserir código HTML em uma área de texto.
- ✅ Executa o código HTML em uma nova aba ao clicar em um botão.
- ✅ Interface responsiva e estilizada.

## 📥 Como Usar
1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Digite ou cole o código HTML na `textarea`.
4. Clique no botão **"Executar em Nova Aba"** para visualizar o código inserido.

## 👨🏻‍💻 Exemplo HTML, CSS e JS
- Utilize esse exemplo para visualizar a execução
  ```html
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Gabriel é Lindo <3</title>
      <style>
          body {
              margin: 0;
              overflow: hidden;
              background-color: #111;
          }
          .name {
              position: absolute;
              font-size: 48px;
              font-weight: bold;
              color: #00ffcc;
              font-family: Arial, sans-serif;
              pointer-events: none;
              text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffaa;
              transition: transform 0.1s linear;
          }
      </style>
  </head>
  <body>
      <div class="name" id="name">Gabriel é Lindo <3</div>
      <script>
          document.addEventListener("mousemove", (event) => {
              const nameElement = document.getElementById("name");
              nameElement.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
          });
      </script>
  </body>
  </html>
  ```

## 🎯 Melhorias Futuras
- Adicionar suporte a CSS e JavaScript dentro do código inserido.
- Criar uma opção para salvar e carregar códigos previamente usados.

## 📄 Licença
Este projeto está sob a licença MIT.
