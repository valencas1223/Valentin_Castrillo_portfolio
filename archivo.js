function cambiarIdioma(idioma) {

    const textos = {

        es: {
            titulo: "Sobre mí",
            tituloContacto: "Contacto",
            tituloAcerca: "Acerca de mí",

            navInicio: "Inicio",
            navAcerca: "Acerca de",
            navContacto: "Contacto",

            bioTitulo: "Biografía",
            bio1: "Hola, mi nombre es Valentín Castrillo. Soy de Argentina, más específicamente de Viedma, Río Negro. Desde chico siempre tuve curiosidad por la tecnología y por entender cómo funcionan las cosas.",
            bio2: "Con el tiempo esa curiosidad se convirtió en una pasión. Me gusta aprender constantemente sobre computación, software y nuevas herramientas tecnológicas.",
            bio3: "Actualmente sigo desarrollando mis habilidades en el mundo de la tecnología, combinando conocimientos de hardware, software y programación, con el objetivo de seguir creciendo profesionalmente.",
            bio4: "Actualmente estoy iniciando mi camino en el mundo freelance.",

            intereses: "Intereses",
            i1: "Tecnología y computación",
            i2: "Videojuegos",
            i3: "Andar en bicicleta",
            i4: "Jugar al fútbol con amigos",
            i5: "Tocar la guitarra y el piano",

            contactoTitulo: "Contactame",
            contactoTexto: "Podés comunicarte conmigo a través de mis redes sociales:",

            habilidades: "Habilidades",
            h1: "Reparación de celulares",
            h2: "Distros Linux",
            h3: "Software libre",

            tec: "Tecnologías que uso"
        },

        en: {
            titulo: "About Me",
            tituloContacto: "Contact",
            tituloAcerca: "About Me",

            navInicio: "Home",
            navAcerca: "About",
            navContacto: "Contact",

            bioTitulo: "Biography",
            bio1: "Hello! My name is Valentin Castrillo. I am from Argentina, specifically Viedma, Río Negro. Since I was young, I have always been curious about technology and understanding how things work.",
            bio2: "Over time, this curiosity turned into a passion. I enjoy constantly learning about computing, software, and new technological tools.",
            bio3: "Currently, I continue developing my skills in technology, combining knowledge of hardware, software, and programming to grow professionally.",
            bio4: "I am starting my journey in the freelance world.",

            intereses: "Interests",
            i1: "Technology and computing",
            i2: "Videogames",
            i3: "Riding a bicycle",
            i4: "Playing soccer with friends",
            i5: "Playing guitar and piano",

            contactoTitulo: "Contact Me",
            contactoTexto: "You can contact me through my social networks:",

            habilidades: "Skills",
            h1: "Phone repair",
            h2: "Linux distros",
            h3: "Free software",

            tec: "Technologies I use"
        },

        pt: {
            titulo: "Sobre Mim",
            tituloContacto: "Contato",
            tituloAcerca: "Sobre Mim",

            navInicio: "Início",
            navAcerca: "Sobre",
            navContacto: "Contato",

            bioTitulo: "Biografia",
            bio1: "Olá! Meu nome é Valentin Castrillo. Sou da Argentina, mais especificamente de Viedma, Río Negro. Desde pequeno sempre tive curiosidade pela tecnologia e como as coisas funcionam.",
            bio2: "Com o tempo, essa curiosidade se tornou uma paixão. Gosto de aprender constantemente sobre computação, software e novas ferramentas tecnológicas.",
            bio3: "Atualmente continuo desenvolvendo minhas habilidades no mundo da tecnologia, combinando conhecimento de hardware, software e programação para crescer profissionalmente.",
            bio4: "Estou começando minha jornada no mundo freelance.",

            interesses: "Interesses",
            i1: "Tecnologia e computação",
            i2: "Videogames",
            i3: "Andar de bicicleta",
            i4: "Jogar futebol com amigos",
            i5: "Tocar guitarra e piano",

            contactoTitulo: "Fale comigo",
            contactoTexto: "Você pode entrar em contato comigo através das minhas redes sociais:",

            habilidades: "Habilidades",
            h1: "Reparo de celulares",
            h2: "Distros Linux",
            h3: "Software livre",

            tec: "Tecnologias que uso"
        },

        jp: {
            titulo: "私について",
            tituloContacto: "連絡先",
            tituloAcerca: "自己紹介",

            navInicio: "ホーム",
            navAcerca: "概要",
            navContacto: "連絡先",

            bioTitulo: "経歴",
            bio1: "こんにちは。私の名前はバレンティン・カストリジョです。私はアルゼンチンのビエドマ出身です。子供の頃から技術に興味を持っていました。",
            bio2: "その好奇心はやがて情熱となりました。常にコンピュータやソフトウェア、新しい技術ツールを学ぶのが好きです。",
            bio3: "現在、ハードウェア、ソフトウェア、プログラミングの知識を組み合わせてスキルを伸ばしています。",
            bio4: "現在フリーランスの世界に挑戦しています。",

            intereses: "興味",
            i1: "テクノロジーとコンピューター",
            i2: "ビデオゲーム",
            i3: "自転車に乗ること",
            i4: "友達とサッカー",
            i5: "ギターとピアノ",

            contactoTitulo: "お問い合わせ",
            contactoTexto: "私のSNSを通じて連絡できます:",

            habilidades: "スキル",
            h1: "携帯電話修理",
            h2: "Linux ディストリビューション",
            h3: "フリーソフトウェア",

            tec: "使用している技術"
        }

    };

    const t = textos[idioma];

    function cambiar(id, texto) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerText = texto;
        }
    }

    // Cambiar todos los textos de la página
    cambiar("titulo", t.titulo);
    cambiar("tituloContacto", t.tituloContacto);
    cambiar("tituloAcerca", t.tituloAcerca);

    cambiar("navInicio", t.navInicio);
    cambiar("navAcerca", t.navAcerca);
    cambiar("navContacto", t.navContacto);

    cambiar("bioTitulo", t.bioTitulo);
    cambiar("bio1", t.bio1);
    cambiar("bio2", t.bio2);
    cambiar("bio3", t.bio3);
    cambiar("bio4", t.bio4);

    cambiar("interesesTitulo", t.intereses);

    cambiar("i1", t.i1);
    cambiar("i2", t.i2);
    cambiar("i3", t.i3);
    cambiar("i4", t.i4);
    cambiar("i5", t.i5);

    cambiar("contactoTitulo", t.contactoTitulo);
    cambiar("contactoTexto", t.contactoTexto);

    cambiar("habilidadesTitulo", t.habilidades);
    cambiar("h1", t.h1);
    cambiar("h2", t.h2);
    cambiar("h3", t.h3);

    cambiar("tecTitulo", t.tec);
}