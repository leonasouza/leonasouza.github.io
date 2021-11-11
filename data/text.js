const defaultLanguage = 'pt'
const urlGithub = 'https://github.com/leona-souza'
const urlLinkedin = 'https://www.linkedin.com/in/leonasouza/'
const urlTwitch = 'https://twitch.tv/leonadev'
const cardImage = [
  './assets/images/print_programaria.png',
  './assets/images/print_ranchodev.jpg',
  './assets/images/print_feministech.jpg',
  './assets/images/print_twitch.png'
]
const pt = {
  Static: {
    header: 'Leona Souza',
    description: `Olá! Sou uma engenheira de software que reside em São Paulo. Já programei em PHP, MySQL, Java e JavaScript. Atualmente trabalho como desenvolvedora frontend usando React na Gamers Club e faço lives na Twitch compartilhando estudos, conhecimentos e aprendendo com a comunidade.`,
    details: `Durante o final de minha adolescência comecei a programar em PHP e MySQL por uma pequena necessidade, mas acabei gostando tanto do desafio lógico que fui me aprofundando por prazer. Consequentemente os clientes foram aparecendo e trabalhei por aproximadamente 4 a 5 anos desenvolvendo sites do zero.
    Eventualmente troquei de ramo e comecei a trabalhar com caligrafia fazendo sobrescrição de convites de casamento e aniversário. Não durou muito tempo até que eu trocasse novamente de carreira, desta vez escolhendo fotografia. Minha principal atividade foi tratamento de imagens.
    Alguns anos depois a paixão pela programação voltou a me provocar e decidi voltar para o ramo com tudo, desta vez para ficar!`
  },
  Cards: [
    {
      id: 1,
      title: 'PrograMaria',
      content: `Em 2021 tive a incrível oportunidade de participar do PrograMaria como mestre de cerimônias da sala de Produto.`,
      image: cardImage[0]
    },
    {
      id: 2,
      title: 'RanchoDev',
      content: `Em setembro de 2021 palestrei no RanchoDev (evento online devido à pandemia) com tópicos voltados para iniciantes.`,
      image: cardImage[1]
    },
    {
      id: 3,
      title: 'Feministech',
      content: `Feministech é uma equipe que me acolheu com muito carinho, onde conheci muitas pessoas incríveis. Esta imagem registra uma palestra que dei em uma maratona de palestras organizada pela Feministech.`,
      image: cardImage[2]
    },
    {
      id: 4,
      title: 'Twitch',
      content: 'Faço lives na Twitch, onde compartilho, aprendo e desenvolvo projetos ao vivo. A agenda acaba variando muito por motivos de trabalho e estudos.',
      image: cardImage[3]
    },
    {
      id: 5,
      title: 'Mentoria',
      content: 'A Feministech passou a organizar grupos gratuitos de mentoria para pessoas que se identificam no feminino e eu faço parte desse projeto como mentora. O objetivo desse grupo é ajudar as pessoas a iniciar ou evoluir na carreira. No momento o projeto está em sua fase inicial e é apenas para mentoria frontend.'
    }
  ]
}
const en = {
  Static: {
    header: 'Leona Souza',
    description: `Hello! I am a software engineer that lives in São Paulo. I have programmed in PHP, MySQL, Java and JavaScript. Now I work as a frontend React developer at Gamers Club and I stream at Twitch sharing my studies, knowledge and learning with the community.`,
    details: `In my late teens I started to code in PHP and MySQL for a personal porpuse, but I enjoyed the logical challenge so much that I started to study as a hobby. As a result the clients began to show up and I worked for about 4 or 5 years developing websites from scratch.
    Eventually I decided to work with calligraphy writing weddings and birthdays invitations. It didn't take long until I changed my career again, this time choosing photography. My main activity was image editing.
    Some years later my passion for coding started tickling me and I decided to fully dedicate to this area, this time to stay!`
  },
  Cards: [
    {
      id: 1,
      title: 'PrograMaria',
      content: `In 2021 I had the amazing oportunity to be part of PrograMaria as co-host of the Products room.`,
      image: cardImage[0]
    },
    {
      id: 2,
      title: 'RanchoDev',
      content: `Algum texto sobre o evento`,
      image: cardImage[1]
    },
    {
      id: 3,
      title: 'Feministech',
      content: `Algum texto sobre o evento`,
      image: cardImage[2]
    },
    {
      id: 4,
      title: 'Twitch',
      content: 'asd',
      image: cardImage[3]
    },
    {
      id: 5,
      title: 'Mentoria',
      content: 'asd'
    }
  ]
}

const loadStaticFromObject = function(language, path = 'Static') {
  for (let key in language[path]) {
    document.getElementById(`${path}.${key}`).innerText = language[path][key]
  }
}

const loadCards = function(language, path = 'Cards') {
  document.getElementById(path).innerHTML = ''

  for (let key in language[path]) {
    const {
      content,
      image,
      title
    } = language.Cards[key]

    const imageTag = image ? `<img src='${image}' class='ConteudoDinamico__Image' />` : ''

    document.getElementById(path).innerHTML += `
    <card class="ConteudoDinamico__Card">
      <h1 class="horizontalLine">${title}</h1>
      ${imageTag}
      <p>${content}</p>
    </card>
    `
  }
}

const loadLinks = function() {
  document.getElementById('Footer.links').innerHTML = ""
  document.getElementById('Footer.links').innerHTML += `
    <span class="clickCursor" onclick="link(urlGithub)">Github</span>
    <span class="clickCursor" onclick="link(urlLinkedin)">Linkedin</span>
    <span class="clickCursor" onclick="link(urlTwitch)">Twitch</span>
  `
}

const languageSwitch = function(language) {
  populatePage(eval(language))
}

const link = function(destination) {
  return window.open(destination, '_blank')
}

const populatePage = function(language) {
  loadStaticFromObject(language)
  loadLinks()
  loadCards(language)
}

populatePage(eval(defaultLanguage))








/*                             let LeonaSouza = {
                              position: 'Software Engineer',
                              company: 'Gamers Club',
                              mainSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
                              otherSkills: ['SQL', 'MongoDB', 'Node.js', 'Java', 'Spring'],
                              softSkills: ['Ethics', 'Teamwork', 'Empathy', 'Problem Solver'],
                              social: {
                                twitter: 'LeonaDev', twitch: 'LeonaDev', github: 'leona-souza' 
                              }
                            }




                                      let LeonaSouza = {
                                        position: 'Software Engineer',
                                        mainSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
                                        otherSkills: ['SQL', 'MongoDB', 'Node.js', 'Java', 'Spring'],
                                        softSkills: ['Ethics', 'Teamwork', 'Empathy', 'Problem Solver'],
                                        social: { 
                                          twitter: 'LeonaDev', twitch: 'LeonaDev', github: 'leona-souza'
                                        }
                                      }



                                      let LeonaSouza = {
                                        position: 'Software Engineer',
                                        company: 'Gamers Club',
                                        social: {
                                          twitter: 'LeonaDev', twitch: 'LeonaDev', github: 'leona-souza' 
                                        }
                                      } */