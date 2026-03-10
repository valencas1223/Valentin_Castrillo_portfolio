function cambiarIdioma(idioma){

const textos = {

es:{
titulo:"Sobre mí",
tituloContacto:"Contacto",
tituloAcerca:"Acerca de mí",

navInicio:"Inicio",
navAcerca:"Acerca de",
navContacto:"Contacto",

bioTitulo:"Biografía",

bio1:"Hola, ¿qué tal? Mi nombre es Valentin Castrillo. Soy el menor de tres hermanos y soy de Argentina, más específicamente de Viedma, Río Negro.",
bio2:"Vengo de una familia que desde chico me enseñó el valor de la dedicación y el esfuerzo.",
bio3:"Aún recuerdo cuando terminé el secundario. En ese momento había muchas opciones y caminos posibles.",
bio4:"Actualmente estoy iniciando mi camino en el mundo freelance.",

intereses:"🎯 Intereses",

i1:"💻 Tecnología y computación",
i2:"🎮 Videojuegos",
i3:"🚴 Andar en bicicleta",
i4:"⚽ Jugar al fútbol con amigos",
i5:"🎸 Tocar la guitarra y el piano",

contactoTitulo:"📬 Contactame",
contactoTexto:"Podés comunicarte conmigo a través de mis redes sociales:",

habilidades:"💻 Habilidades",
h1:"📱 Reparación de celulares",
h2:"🐧 Distros Linux",
h3:"⚙️ Software libre",

tec:"🧑‍💻 Tecnologías que uso"
},

en:{
titulo:"About Me",
tituloContacto:"Contact",
tituloAcerca:"About Me",

navInicio:"Home",
navAcerca:"About",
navContacto:"Contact",

bioTitulo:"Biography",

bio1:"Hello! My name is Valentin Castrillo. I am the youngest of three siblings and I am from Argentina.",
bio2:"I come from a family that taught me dedication and hard work.",
bio3:"I still remember when I finished high school and many paths were ahead.",
bio4:"I am starting my journey in the freelance world.",

intereses:"🎯 Interests",

i1:"💻 Technology and computing",
i2:"🎮 Videogames",
i3:"🚴 Riding a bicycle",
i4:"⚽ Playing soccer with friends",
i5:"🎸 Playing guitar and piano",

contactoTitulo:"📬 Contact Me",
contactoTexto:"You can contact me through my social networks:",

habilidades:"💻 Skills",
h1:"📱 Phone repair",
h2:"🐧 Linux distros",
h3:"⚙️ Free software",

tec:"🧑‍💻 Technologies I use"
},

pt:{
titulo:"Sobre Mim",
tituloContacto:"Contato",
tituloAcerca:"Sobre Mim",

navInicio:"Início",
navAcerca:"Sobre",
navContacto:"Contato",

bioTitulo:"Biografia",

bio1:"Olá! Meu nome é Valentin Castrillo.",
bio2:"Venho de uma família que me ensinou dedicação e esforço.",
bio3:"Ainda lembro quando terminei o ensino médio.",
bio4:"Estou começando minha jornada no mundo freelance.",

intereses:"🎯 Interesses",

i1:"💻 Tecnologia e computação",
i2:"🎮 Videogames",
i3:"🚴 Andar de bicicleta",
i4:"⚽ Jogar futebol com amigos",
i5:"🎸 Tocar guitarra e piano",

contactoTitulo:"📬 Fale comigo",
contactoTexto:"Você pode entrar em contato comigo através das minhas redes sociais:",

habilidades:"💻 Habilidades",
h1:"📱 Reparo de celulares",
h2:"🐧 Distros Linux",
h3:"⚙️ Software livre",

tec:"🧑‍💻 Tecnologias que uso"
},

jp:{
titulo:"私について",
tituloContacto:"連絡先",
tituloAcerca:"自己紹介",

navInicio:"ホーム",
navAcerca:"概要",
navContacto:"連絡先",

bioTitulo:"経歴",

bio1:"こんにちは。私の名前はバレンティン・カストリジョです。",
bio2:"私は子供の頃から努力の大切さを教えられました。",
bio3:"高校を卒業した時、多くの可能性がありました。",
bio4:"現在フリーランスの世界に挑戦しています。",

intereses:"🎯 興味",

i1:"💻 テクノロジーとコンピューター",
i2:"🎮 ビデオゲーム",
i3:"🚴 自転車に乗ること",
i4:"⚽ 友達とサッカー",
i5:"🎸 ギターとピアノ",

contactoTitulo:"📬 お問い合わせ",
contactoTexto:"私のSNSを通じて連絡できます:",

habilidades:"💻 スキル",
h1:"📱 携帯電話修理",
h2:"🐧 Linux ディストリビューション",
h3:"⚙️ フリーソフトウェア",

tec:"🧑‍💻 使用している技術"
}

};

const t = textos[idioma];

function cambiar(id, texto){
const elemento = document.getElementById(id);
if(elemento){
elemento.innerText = texto;
}
}

cambiar("titulo",t.titulo);
cambiar("tituloContacto",t.tituloContacto);
cambiar("tituloAcerca",t.tituloAcerca);

cambiar("navInicio",t.navInicio);
cambiar("navAcerca",t.navAcerca);
cambiar("navContacto",t.navContacto);

cambiar("bioTitulo",t.bioTitulo);
cambiar("bio1",t.bio1);
cambiar("bio2",t.bio2);
cambiar("bio3",t.bio3);
cambiar("bio4",t.bio4);

cambiar("interesesTitulo",t.intereses);

cambiar("i1",t.i1);
cambiar("i2",t.i2);
cambiar("i3",t.i3);
cambiar("i4",t.i4);
cambiar("i5",t.i5);

cambiar("contactoTitulo",t.contactoTitulo);
cambiar("contactoTexto",t.contactoTexto);

cambiar("habilidadesTitulo",t.habilidades);
cambiar("h1",t.h1);
cambiar("h2",t.h2);
cambiar("h3",t.h3);

cambiar("tecTitulo",t.tec);

}