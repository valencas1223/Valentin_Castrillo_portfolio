function cambiarIdioma(idioma){

const textos = {

es:{
titulo:"Sobre mí",
navInicio:"Inicio",
navAcerca:"Acerca de",
navContacto:"Contacto",

bioTitulo:"Biografía",

bio1:"Hola, ¿qué tal? Mi nombre es Valentin Castrillo. Soy el menor de tres hermanos y soy de Argentina, más específicamente de Viedma, Río Negro.",

bio2:"Vengo de una familia que desde chico me enseñó el valor de la dedicación y el esfuerzo.",

bio3:"Aún recuerdo cuando terminé el secundario. En ese momento había muchas opciones y caminos posibles.",

intereses:"🎯 Intereses",

i1:"💻 Tecnología y computación",
i2:"🎮 Videojuegos",
i3:"🚴 Andar en bicicleta",
i4:"⚽ Jugar al fútbol con amigos",
i5:"🎸 Tocar la guitarra y el piano"
},

en:{
titulo:"About Me",
navInicio:"Home",
navAcerca:"About",
navContacto:"Contact",

bioTitulo:"Biography",

bio1:"Hello! My name is Valentin Castrillo. I am the youngest of three siblings and I am from Argentina, specifically from Viedma, Río Negro.",

bio2:"I come from a family that taught me the value of dedication and hard work.",

bio3:"I still remember when I finished high school and many paths were ahead.",

intereses:"🎯 Interests",

i1:"💻 Technology and computing",
i2:"🎮 Videogames",
i3:"🚴 Riding a bicycle",
i4:"⚽ Playing soccer with friends",
i5:"🎸 Playing guitar and piano"
},

pt:{
titulo:"Sobre Mim",
navInicio:"Início",
navAcerca:"Sobre",
navContacto:"Contato",

bioTitulo:"Biografia",

bio1:"Olá! Meu nome é Valentin Castrillo. Sou o mais novo de três irmãos e sou da Argentina.",

bio2:"Venho de uma família que me ensinou dedicação e esforço.",

bio3:"Ainda lembro quando terminei o ensino médio.",

intereses:"🎯 Interesses",

i1:"💻 Tecnologia e computação",
i2:"🎮 Videogames",
i3:"🚴 Andar de bicicleta",
i4:"⚽ Jogar futebol com amigos",
i5:"🎸 Tocar guitarra e piano"
},

jp:{
titulo:"私について",
navInicio:"ホーム",
navAcerca:"概要",
navContacto:"連絡先",

bioTitulo:"経歴",

bio1:"こんにちは。私の名前はバレンティン・カストリジョです。アルゼンチン出身です。",

bio2:"私は子供の頃から努力の大切さを教えられました。",

bio3:"高校を卒業した時、多くの可能性がありました。",

intereses:"🎯 興味",

i1:"💻 テクノロジーとコンピューター",
i2:"🎮 ビデオゲーム",
i3:"🚴 自転車に乗ること",
i4:"⚽ 友達とサッカー",
i5:"🎸 ギターとピアノ"
}

};

document.getElementById("titulo").innerText = textos[idioma].titulo;
document.getElementById("navInicio").innerText = textos[idioma].navInicio;
document.getElementById("navAcerca").innerText = textos[idioma].navAcerca;
document.getElementById("navContacto").innerText = textos[idioma].navContacto;

document.getElementById("bioTitulo").innerText = textos[idioma].bioTitulo;
document.getElementById("bio1").innerText = textos[idioma].bio1;
document.getElementById("bio2").innerText = textos[idioma].bio2;
document.getElementById("bio3").innerText = textos[idioma].bio3;

document.getElementById("interesesTitulo").innerText = textos[idioma].intereses;

document.getElementById("i1").innerText = textos[idioma].i1;
document.getElementById("i2").innerText = textos[idioma].i2;
document.getElementById("i3").innerText = textos[idioma].i3;
document.getElementById("i4").innerText = textos[idioma].i4;
document.getElementById("i5").innerText = textos[idioma].i5;

}

