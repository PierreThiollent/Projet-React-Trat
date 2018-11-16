import {Image} from "react-native";
import React from "react";

export const jsonCGData = {
    title: "Quiz Culture générale #1",
    questions: [
        {
        	images: <Image source={require('./assetsData/CultureG/cut/QCG1.png')}/>,
            title: "Quel philosophe conclut “Je pense, donc je suis.” ?",
            answer: [
                {nom: "Descartes", res: true},
                {nom: "Heidegger", res: false},
                {nom: "Hegel", res: false},
                {nom: "Socrate", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/cut/QCG2.png')}/>,
            title: "On dit qu’un cheval…",
            answer: [
                {nom: "Hurle", res: false},
                {nom: "Blatère", res: false},
                {nom: "Hennit", res: true},
                {nom: "Rugit", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/cut/QCG3.png')}/>,
            title: "Où se situe l’Oural ?",
            answer: [
                {nom: "En Turquie", res: false},
                {nom: "En Russie", res: true},
                {nom: "Au Kazakhstan", res: false},
                {nom: "En Ukraine", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/cut/QCG4.png')}/>,
            title: "Parmi les hommes politiques suivants, lequel a pris le pouvoir à partir de 1959 à Cuba ?",
            answer: [
                {nom: "Fulgencio Batista", res: false},
                {nom: "Hugo Chavez", res: false},
                {nom: "Fidel Castro", res: true},
                {nom: "Che Guevara", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/cut/QCG5.png')}/>,
            title: "Quel pays le mouvement des Talibans a-t-il gouverné de 1996 à 2001 ?",
            answer: [
                {nom: "Le Kirghizistan", res: false},
                {nom: "L'Arabie saoudite", res: false},
                {nom: "L'Irak", res: false},
                {nom: "L'Afghanistan", res: true}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/cut/QCG6.png')}/>,
            title: "De quel écrivain la \"Comédie humaine\" est-elle la grande œuvre ?",
            answer: [
                {nom: "Alfred de Vigny", res: false},
                {nom: "Émile Zola", res: false},
                {nom: "Honoré de Balzac", res: true},
                {nom: "Victor Hugo", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/cut/QCG7.png')}/>,
            title: "Qui a dit “Ich bin ein Berliner” ?",
            answer: [
                {nom: "Bismarck", res: false},
                {nom: "Kennedy", res: true},
                {nom: "De Gaulle", res: false},
                {nom: "Reagan", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/cut/QCG8.png')}/>,
            title: "Dans \"La grande vadrouille\", qui accompagne Louis de Funès dans ses pérégrinations ?",
            answer: [
                {nom: "Bourvil", res: true},
                {nom: "Fernandel", res: false},
                {nom: "Jean Yanne", res: false},
                {nom: "Pierre Richard", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/cut/QCG9.png')}/>,
            title: "De quel pays Recep Tayyip Erdogan est-il le dirigeant depuis 2003 ?",
            answer: [
                {nom: "L'Iran", res: false},
                {nom: "La Turquie", res: true},
                {nom: "Le Pakistan", res: false},
                {nom: "L'Égypte", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/cut/QCG10.png')}/>,
            title: "Complétez la liste : Athos, Porthos et …",
            answer: [
                {nom: "Largardère", res: false},
                {nom: "D'Artagnan", res: false},
                {nom: "Bayard", res: false},
                {nom: "Aramis", res: true}
            ]
        },

        {
        	images: <Image source={require('./assetsData/CultureG/cut/QCG11.png')}/>,
            title: "Quelle est la forme des excrement des Wombats ?",
            answer: [
                {nom: "Sphérique", res: false},
                {nom: "Cylindrique", res: false},
                {nom: "Triangulaire", res: false},
                {nom: "Cubique", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG12.png')}/>,
            title: "Dans quelle chanson un célèbre chanteur français parle-t-il des souvenirs et des bonbons de son enfance?",
            answer: [
                {nom: "Le Loir-et-Cher", res: false},
                {nom: "Mistral gagnant", res: true},
                {nom: "Là-bas", res: false},
                {nom: "La montagne", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG13.png')}/>,
            title: "Qui est le premier homme à avoir marché sur la lune ?",
            answer: [
                {nom: "Daniel Burbank", res: false},
                {nom: "Buzz Aldrin", res: false},
                {nom: "Neil Armstrong", res: true},
                {nom: "Curtis Roy", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG14.png')}/>,
            title: "En combien de temps la Terre tourne-t-elle autour du Soleil ?",
            answer: [
                {nom: "459 jours et demi", res: false},
                {nom: "24h", res: false},
                {nom: "365 jours et un quart", res: true},
                {nom: "364 jours", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG15.png')}/>,
            title: "Quel est le plus petit État du monde ?",
            answer: [
                {nom: "Andorre", res: false},
                {nom: "Saint-marin", res: false},
                {nom: "Monaco", res: false},
                {nom: "Le Vatican", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG16.png')}/>,
            title: "Quel groupe de musique est composé de deux DJ portant des casques de robot ?",
            answer: [
                {nom: "Daft Punk", res: true},
                {nom: "The Chemical Brothers", res: false},
                {nom: "Skrillex", res: false},
                {nom: "Cassius", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG17.png')}/>,
            title: "Paul Verlaine est avant tout …",
            answer: [
                {nom: "un poète", res: true},
                {nom: "un romancier", res: false},
                {nom: "un essayiste", res: false},
                {nom: "un dramaturge", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG18.png')}/>,
            title: "Comment se nomme l’écuyer de Godefroy de Montmirail dans “Les Visiteurs” ?",
            answer: [
                {nom: "Pecouille le chenapan", res: false},
                {nom: "Niacouille le filou", res: false},
                {nom: "Jean Lassalle", res: false},
                {nom: "Jacquouille la fripouille", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG19.png')}/>,
            title: "Quel est l’athlète le plus titré de l’histoire des Jeux Olympiques ?",
            answer: [
                {nom: "Michael Phelps", res: true},
                {nom: "Carl Lewis", res: false},
                {nom: "Usain Bolt", res: false},
                {nom: "Michael Johnson", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG20.png')}/>,
            title: "Quelle est la femelle du cochon ?",
            answer: [
                {nom: "La trouille", res: false},
                {nom: "La truie", res: true},
                {nom: "La gorette", res: false},
                {nom: "La trouie", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG21.png')}/>,
            title: "Quelle ville est le fournisseur officiel du Nutella dans le monde entier ?",
            answer: [
                {nom: "Chine", res: false},
                {nom: "Toronto", res: false},
                {nom: "Rouen", res: true},
                {nom: "Luneray", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG22.png')}/>,
            title: "Quel est l'animal qui à voyager en premier dans l'espace ?",
            answer: [
                {nom: "Un chimpanzé", res: false},
                {nom: "Un chat", res: false},
                {nom: "Un chien", res: true},
                {nom: "Un lapin", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG23.png')}/>,
            title: "Quel est l’organe respiratoire des poissons ?",
            answer: [
                {nom: "Les branchies", res: true},
                {nom: "Le tuba", res: false},
                {nom: "Les poumons, quelle question !", res: false},
                {nom: "L'estomac", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG24.png')}/>,
            title: "“Imagine there's no heaven, It's easy if you try…” sont des paroles de…",
            answer: [
                {nom: "Paul Maccartney", res: false},
                {nom: "John Lennon", res: true},
                {nom: "Jimi Hendrix", res: false},
                {nom: "Michael Jackson", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG25.png')}/>,
            title: "D'où vient le mot \"Poubelle\"",
            answer: [
                {nom: "Contraction de la phrase \"Pour être belle\"", res: false},
                {nom: "Le nom de la première marque de réceptacle  à ordure", res: false},
                {nom: "Nom de famille : Eugène Poubelle", res: true},
                {nom: "Nom donné pas IKEA en 1948", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG26.png')}/>,
            title: " Quel animal qui enflamé, était utilisé sur le champ de bataille dans l'antiquité ?",
            answer: [
                {nom: "Le mouton", res: false},
                {nom: "Le chien", res: false},
                {nom: "La chèvre naine", res: false},
                {nom: "Le cochon", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG27.png')}/>,
            title: "Qui est le compositeur du Boléro ?",
            answer: [
                {nom: "Ravel", res: true},
                {nom: "Berlioz", res: false},
                {nom: "Debussy", res: false},
                {nom: "Fauré", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG28.png')}/>,
            title: "Qui a déssiné de drapeau de l'Alaska",
            answer: [
                {nom: "un poète", res: false},
                {nom: "Oscar Pernefield", res: false},
                {nom: "un enfant de 13 ans", res: true},
                {nom: "Lottie Burnley", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG29.png')}/>,
            title: "Qu'etait en realité la Statut de la Liberté ?",
            answer: [
                {nom: "Une flamme olympique", res: false},
                {nom: "UN hommage à la femme du président Americain", res: false},
                {nom: "Une statue censée faire peur aux attaquants d'Amérique du Nord", res: false},
                {nom: "Un phare", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG30.png')}/>,
            title: "Quel est l'animal national officiel de l'Ecosse ?",
            answer: [
                {nom: "le Mouton", res: false},
                {nom: "La Licorne", res: true},
                {nom: "Le chardon vivant", res: false},
                {nom: "Le monstre du Loch ness", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG31.png')}/>,
            title: "Quel dirigeant russe promet de “butter les terroristes, jusque dans les chiottes” ?",
            answer: [
                {nom: "Ivan le Terrible", res: false},
                {nom: "Borris Droski", res: false},
                {nom: "Vladimir Poutine", res: true},
                {nom: "Maslov Shiroff", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG32.png')}/>,
            title: "Dans GaME OF Thrones, quel personnage très bavard apparait dans tous les épisodes ?",
            answer: [
                {nom: "Daenerys", res: false},
                {nom: "John Snow", res: false},
                {nom: "Arya", res: false},
                {nom: "Tyrion", res: true}
            ]
        },

        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG33.png')}/>,
            title: "Quel est le muscle le plus fort du corps humain ?",
            answer: [
                {nom: "La Langue", res: false},
                {nom: "Le fessier", res: true},
                {nom: "Les pectoraux", res: false},
                {nom: "Les biceps", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG34.png')}/>,
            title: "Où est née Mozart ?",
            answer: [
                {nom: "Salzbourg", res: true},
                {nom: "Venise", res: false},
                {nom: "Vienne", res: false},
                {nom: "Turin", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG35.png')}/>,
            title: "En quelle année Charlemagne se fait-il sacrer empereur ?",
            answer: [
                {nom: "756 ap.J.-C", res: false},
                {nom: "787 ap.J.-C", res: false},
                {nom: "800 ap.J.-C", res: true},
                {nom: "843 ap.J.-C", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG36.png')}/>,
            title: "Avec la laine de quel animal fait-on du cachemire ?",
            answer: [
                {nom: "Du mouton", res: false},
                {nom: "Du vison", res: false},
                {nom: "Du lapin", res: false},
                {nom: "De la chèvre", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG37.png')}/>,
            title: "Parmi les villes suivantes, laquelle est à la fois en Asie et en Europe ?",
            answer: [
                {nom: "Alexandrie", res: false},
                {nom: "Rhodes", res: false},
                {nom: "Istanbul", res: true},
                {nom: "Moscou", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG38.png')}/>,
            title: "Quel pays a pour devise “Je maintiendrai” ?",
            answer: [
                {nom: "La Suisse", res: false},
                {nom: "La Belgique", res: false},
                {nom: "L'Angleterre", res: false},
                {nom: "Les Pays-Bas", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG39.png')}/>,
            title: "Quel est l’album le plus vendu des Pink Floyd ?",
            answer: [
                {nom: "The Dark Side of the Moon", res: true},
                {nom: "The wall", res: false},
                {nom: "The Final Cut", res: false},
                {nom: "Wish you were here", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG40.png')}/>,
            title: "Quelle est la première ville du monde à s'être dotée d’un métro ?",
            answer: [
                {nom: "Berlin", res: false},
                {nom: "Londres", res: true},
                {nom: "New York", res: false},
                {nom: "Paris", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG41.png')}/>,
            title: "Quelle est la capitale de la Côte d’Ivoire ?",
            answer: [
                {nom: "Yamoussoukro", res: true},
                {nom: "Daloa", res: false},
                {nom: "Abidjan", res: false},
                {nom: "Bouaké", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG42.png')}/>,
            title: "Dans quel état des États-Unis le Grand Canyon se trouve-t-il ?",
            answer: [
                {nom: "Minnesota", res: false},
                {nom: "Colorado", res: false},
                {nom: "Arizona", res: true},
                {nom: "Wyoming", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG43.png')}/>,
            title: "Comment se nomme un bateau à trois coques ?",
            answer: [
                {nom: "Un skipper", res: false},
                {nom: "Un trimaran", res: true},
                {nom: "Un catamaran", res: false},
                {nom: "Un trois mâts", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG44.png')}/>,
            title: "Comment la femelle crocodile peit elle choisir le sexe de ses enfants",
            answer: [
                {nom: "elle tue les filles", res: false},
                {nom: "elle tourne les oeufs d'un quart tout les jours", res: false},
                {nom: "elle couve les oeufs dont elle veut les mals", res: false},
                {nom: "elle enterre plus ou moins les oeufs", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG45.png')}/>,
            title: " D’où vient Vasco de Gama ? ",
            answer: [
                {nom: "De Gênes", res: false},
                {nom: "Du Portugal", res: true},
                {nom: "De Venise", res: false},
                {nom: "De l'Espagne", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG46.png')}/>,
            title: "De quel animal le Sphinx de Gizeh a-t-il le corps ?",
            answer: [
                {nom: "D'un bufle", res: false},
                {nom: "D'un rhinocéros", res: false},
                {nom: "D'un lion", res: true},
                {nom: "D'un hippopotame", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG47.png')}/>,
            title: "Quelle est la capitale de l’Australie ?",
            answer: [
                {nom: "Sydney", res: false},
                {nom: "Perth", res: false},
                {nom: "Canberra", res: true},
                {nom: "Melbourne", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG48.png')}/>,
            title: "Quelle est la hauteur du Mont Blanc ?",
            answer: [
                {nom: "5108m", res: false},
                {nom: "3808m", res: false},
                {nom: "4208m", res: false},
                {nom: "4808m", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG49.png')}/>,
            title: "Quel animal nous a sauvé de la peste ?",
            answer: [
                {nom: "Le rat", res: false},
                {nom: "Le chat", res: true},
                {nom: "Le chien", res: false},
                {nom: "Le renard", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG50.png')}/>,
            title: "Par qui ont été crée les chiffres arabes",
            answer: [
                {nom: "Des mathématiciens Arabes", res: false},
                {nom: "Des mathématiciens Indiens", res: true},
                {nom: "Des mathématiciens Russes", res: false},
                {nom: "Des mathématiciens Français", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG51.png')}/>,
            title: "Le croissant est d'origine...",
            answer: [
                {nom: "Française évidement", res: false},
                {nom: "Polonaise", res: false},
                {nom: "Autrichienne", res: true},
                {nom: "Allemande", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG52.png')}/>,
            title: "La Sierra Leone est le pays avec l'espérance de vie la plus faible, on vie la bas en moyenne :",
            answer: [
                {nom: "38 ans", res: false},
                {nom: "50 ans", res: true},
                {nom: "55 ans", res: false},
                {nom: "57 ans", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG53.png')}/>,
            title: "De quel film de Luc Besson le personnage de Tokyo de La casa de papel est il inspiré ?,",
            answer: [
                {nom: "Lucy", res: false},
                {nom: "Léon", res: true},
                {nom: "Taken", res: false},
                {nom: "Valérian", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG54.png')}/>,
            title: "A l'origine quelle devait être la couleur de la peau des simpson ?",
            answer: [
                {nom: "bleu", res: false},
                {nom: "blanc", res: false},
                {nom: "vert", res: true},
                {nom: "jaune", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG55.png')}/>,
            title: "Quel animal n'a pas d'estomac ?",
            answer: [
                {nom: "L'ornithorynque", res: true},
                {nom: "l'escargot", res: false},
                {nom: "l'échidné", res: true},
                {nom: "Le seprent", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG56.png')}/>,
            title: "Quelle est la vitesse de la lumière ?",
            answer: [
                {nom: "300 000 km/h", res: false},
                {nom: "300 000 000 m/s", res: true},
                {nom: "320 m/s", res: false},
                {nom: "320 km/h", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG57.png')}/>,
            title: "“De quelle couleur était HULK à l'origine ?",
            answer: [
                {nom: "Vert", res: false},
                {nom: "Gris", res: true},
                {nom: "Jaune", res: false},
                {nom: "Bleu", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG58.png')}/>,
            title: "Qui est l’auteur de l’opéra-comique « Carmen » ?",
            answer: [
                {nom: "Tchaïkovski", res: false},
                {nom: "Offenbach", res: false},
                {nom: "Bizet", res: true},
                {nom: "Rossini", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG59.png')}/>,
            title: " Quelle est la capitale de la Finlande ?",
            answer: [
                {nom: "Copenhague", res: false},
                {nom: "Riga", res: false},
                {nom: "Stockholm", res: false},
                {nom: "Helsinki", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG60.png')}/>,
            title: "Quel tennisman détient le record du nombre de victoires en Grand Chelem après 1968 ?",
            answer: [
                {nom: "Roger Ferderer", res: true},
                {nom: "Bjorn Borg", res: false},
                {nom: "Raphaël Nadal", res: false},
                {nom: "Andre Agassi", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG61.png')}/>,
            title: "À qui attribue-t-on généralement l'invention du cinéma ?",
            answer: [
                {nom: "Michel Cinéma", res: false},
                {nom: "Alexander Graham Bell", res: false},
                {nom: "Nicéphore Niepce", res: false},
                {nom: "Aux frères Lumière", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG62.png')}/>,
            title: "Que contient la bosse d'un chameau ou d'un dromadaire ?",
            answer: [
                {nom: "Des muscles", res: false},
                {nom: "De l'eau", res: false},
                {nom: "De la graisse", res: true},
                {nom: "De la nourriture", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG63.png')}/>,
            title: "Quel pays nomme-t-on « le pays du Matin calme » ?",
            answer: [
                {nom: "Le Japon", res: false},
                {nom: "La Corée", res: true},
                {nom: "La Chine", res: false},
                {nom: "La Thaïlande", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG64.png')}/>,
            title: "Combien de tentacules la pieuvre a-t-elle ?",
            answer: [
                {nom: "4", res: false},
                {nom: "6", res: false},
                {nom: "8", res: true},
                {nom: "10", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG65.png')}/>,
            title: "Quelle est la tenniswoman le plus titrée de Roland Garros ?",
            answer: [
                {nom: "Steffi Graf", res: false},
                {nom: "Serena Williams", res: false},
                {nom: "Monica Seles", res: false},
                {nom: "Chris Evert", res: true}
            ]
        },

        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG66.png')}/>,
            title: "Dans quelle ville le palais de Charlemagne se situait-il ?",
            answer: [
                {nom: "Rome", res: false},
                {nom: "Aix-la-Chapelle", res: true},
                {nom: "Bruges", res: false},
                {nom: "Milan", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG67.png')}/>,
            title: "Combien de paire de lunettes Daniel Radcliffe à t-il utilisé tout au long de la saga ?",
            answer: [
                {nom: "60", res: true},
                {nom: "100", res: false},
                {nom: "160", res: false},
                {nom: "200", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG68.png')}/>,
            title: "Lequel de ces crustacé possède des dents ?",
            answer: [
                {nom: "la crevette", res: false},
                {nom: "La langouste", res: false},
                {nom: "Le homard", res: true},
                {nom: "Le crabe", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG69.png')}/>,
            title: "Quel est le résultat de l'addition : 1+2+3+4+5+6+......+"+"\infty"+" ? ",
            answer: [
                {nom: "+"+"\infty"+"  ", res: false},
                {nom: "6/15", res: false},
                {nom: "-"+"\infty"+"  ", res: false},
                {nom: "-1/12", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG70.png')}/>,
            title: "Quel est l'angle de rotation de l atête d'une chouette ?",
            answer: [
                {nom: "160°", res: false},
                {nom: "180°", res: false},
                {nom: "220°", res: false},
                {nom: "270°", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG71.png')}/>,
            title: "Combien de fois la fourmie peut elle soulever son propre poid ?",
            answer: [
                {nom: "10 fois", res: false},
                {nom: "30 fois", res: false},
                {nom: "50 fois", res: true},
                {nom: "70 fois", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG72.png')}/>,
            title: "Que signifie le mot 'exsangue' ?",
            answer: [
                {nom: "Qui est dépourvu de vigueur", res: true},
                {nom: "Qui n'a que l'apparence de ce qu'il prétend être", res: false},
                {nom: "Qui fait preuve de beacoup de dynamisme", res: false},
                {nom: "Qui manque de clarté", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG73.png')}/>,
            title: "Quelle est la cause de la perte de capacité vocale du chanteur de Dream Theater ?",
            answer: [
                {nom: "La cigarette", res: false},
                {nom: "Des crevettes", res: true},
                {nom: "Une maladie rare", res: false},
                {nom: "une maladie moin rare", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG74.png')}/>,
            title: "Quel animal est la drosophile utilisée dans des expérimentations génétiques ?",
            answer: [
                {nom: "Une mouche", res: true},
                {nom: "Un rat", res: false},
                {nom: "Un cochon d'inde", res: false},
                {nom: "Une chèvre", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG75.png')}/>,
            title: "Quel genre d’animaux un entomologiste étudie-t-il ?",
            answer: [
                {nom: "Les oiseaux", res: false},
                {nom: "Les poissons", res: false},
                {nom: "Les insectes", res: true},
                {nom: "Les serpents", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG76.png')}/>,
            title: "Quel est le seul félin qui ne peut rentrer ses griffes ?",
            answer: [
                {nom: "Le puma", res: false},
                {nom: "Le guépard", res: true},
                {nom: "La panthère", res: false},
                {nom: "Le léopard", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG77.png')}/>,
            title: "Dans quelle mer se jette le fleuve Méandre ?",
            answer: [
                {nom: "La mer Noire", res: false},
                {nom: "La mer Caspienne", res: false},
                {nom: "La mer Adriatique", res: false},
                {nom: "La mer Égéexpmod", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG78.png')}/>,
            title: " Qui a écrit "+"L'écume des jours"+ "?",
            answer: [
                {nom: "Jean-Paul Sartre", res: false},
                {nom: "Boris Vian", res: true},
                {nom: "Saint-Exupéry", res: false},
                {nom: "Emile Zola", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG79.png')}/>,
            title: "La ceinture de sécurité est obigatoire à l'avant depuis...",
            answer: [
                {nom: "1968", res: false},
                {nom: "1970", res: false},
                {nom: "1973", res: true},
                {nom: "1979", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG80.png')}/>,
            title: ""+"ETC"+"vient du latin"+"Et caetera"+" et veut dire..." ,
            answer: [
                {nom: "Et tous les autres", res: true},
                {nom: "Et la liste n'est pas close", res: false},
                {nom: "Et tout ce qui s'ensuit", res: false},
                {nom: "Et tout le reste", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG81.png')}/>,
            title: "Quelle est la particularité du fleuve africain Okavango ?",
            answer: [
                {nom: "Ses eaux ne rejoignent jamais l'océan", res: true},
                {nom: "Les crocodiles et caïmans ont disparu", res: false},
                {nom: "il disparait dans une faille géologique et réapparait dans la forêt équatoriale ", res: false},
                {nom: "Sa profondeur ne dépasse jamais les 1 mètre", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG82.png')}/>,
            title: "Que sont les rillons, spécialité de Tours ?",
            answer: [
                {nom: "Des morceaux de poitrine de porc cuits dans de la graisse", res: true},
                {nom: "C'est la variante locale des rillettes", res: false},
                {nom: "Des pilons de canard confits dans du saindoux", res: false},
                {nom: "Un petit gâteau sec aux amandes ", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG83.png')}/>,
            title: "Comment s'appelle la couche atmosphérique la plus éloignée de la Terre",
            answer: [
                {nom: "La thermosphère", res: false},
                {nom: "L'exosphère", res: true},
                {nom: "La stratosphère", res: false},
                {nom: "La mésosphère", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG84.png')}/>,
            title: "La Traviata est un opéra de...",
            answer: [
                {nom: "Mozart", res: false},
                {nom: "Puccini", res: false},
                {nom: "Verdi", res: true},
                {nom: "Offenbach", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG85.png')}/>,
            title: "Que mesure l'échelle de Scoville",
            answer: [
                {nom: "L'influence sur les réseaux sociaux", res: false},
                {nom: "La force des piments", res: true},
                {nom: "La puissance des vagues", res: false},
                {nom: "la douleur des piqûre d'insectes", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG86.png')}/>,
            title: "En france quel est le groupe de K-pop le plus connue ?" ,
            answer: [
                {nom: "Got7", res: false},
                {nom: "Big Bang", res: false},
                {nom: "Exo", res: false},
                {nom: "BTS", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG87.png')}/>,
            title: "Qu'est-ce qu'une exoplanète?",
            answer: [
                {nom: "Une planète extérieur à notre système solaire", res: true},
                {nom: "Le satellite d'une planète", res: false},
                {nom: "Une planète dont l'atmomosphère est semblable à celle de la terre", res: false},
                {nom: "Une planète tellurique que la voie lactée.", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG88.png')}/>,
            title: "Pourquoi parle-t-on d' \"expansion de l'univers\" ?",
            answer: [
                {nom: "Le nombre de planètes est hypothétiquement en croissance", res: true},
                {nom: "De nouvelles galaxies se créent en permanence", res: false},
                {nom: "Les objets de l'univers s'éloigenent les uns des autres", res: true},
                {nom: "Car la découverte d'autres galaxies est récente", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG89.png')}/>,
            title: "Comment nomme-t-on souvent ces anneaux concentriques formés au coeur du tronc d'un arbre ?",
            answer: [
                {nom: "Les cernes", res: true},
                {nom: "Les boucles", res: false},
                {nom: "Les manilles", res: false},
                {nom: "Les chaînons", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG90.png')}/>,
            title: "Qu'est ce que la peste blanche ?",
            answer: [
                {nom: "La tuberculose", res: false},
                {nom: "La rage", res: true},
                {nom: "La peste noire en Orient", res: false},
                {nom: "Une variante de la peste noire découverte en 2005 par des scientifique Australien", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG91.png')}/>,
            title: "Déesse égyptienne de la joie du foyer, de la chaleur du soleil et de la maternité à tête de chat, je suis…",
            answer: [
                {nom: "Isis", res: false},
                {nom: "Shou", res: false},
                {nom: "Bastet", res: true},
                {nom: "Tefnout", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG92.png')}/>,
            title: " L'Empire russe, puis l'URSS, étaient des États multinationaux. De quelle origine était Staline ?",
            answer: [
                {nom: "Arménienne", res: false},
                {nom: "Tatare", res: false},
                {nom: "Turque", res: false},
                {nom: "Géorgienne", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG93.png')}/>,
            title: "En moyenne de combien  de petites graines les fraises sont elles recouverte?",
            answer: [
                {nom: "50", res: false},
                {nom: "100", res: false},
                {nom: "200", res: true},
                {nom: "300", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG94.png')}/>,
            title: "Combien de temps se conserve le miel ?",
            answer: [
                {nom: "5 ans", res: false},
                {nom: "20 ans", res: false},
                {nom: "100 ans", res: false},
                {nom: "1000 ans", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG95.png')}/>,
            title: "La pastèque ets originaire ...",
            answer: [
                {nom: "D'Australie", res: false},
                {nom: "Du Brésil", res: false},
                {nom: "D'Afrique de l'ouest", res: true},
                {nom: "Du Japon", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG96.png')}/>,
            title: "La première recette du coca-cola a été créée par...",
            answer: [
                {nom: "Un ingénieur", res: false},
                {nom: "UN pharmacien", res: true},
                {nom: "Coca-cola", res: false},
                {nom: "Un chimiste", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG97.png')}/>,
            title: "Quel peintre a été surnomé "+"Le peintre de la lumière"+"?",
            answer: [
                {nom: "Léonard de Vinci", res: false},
                {nom: "Auguste Renoir", res: false},
                {nom: "William Turner", res: true},
                {nom: "Claude Monet", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG98.png')}/>,
            title: "Combien y'avait-il de pays participants au golf lors des jeux olympique de 1904 ?",
            answer: [
                {nom: "25", res: false},
                {nom: "30", res: false},
                {nom: "35", res: false},
                {nom: "2", res: true}
            ]
        },

        {
            images: <Image source={require('./assetsData/CultureG/cut/QCG99.png')}/>,
            title: "Quel animal possède les plus gros yeux de tout les vivants de cette planète ?",
            answer: [
                {nom: "Le calamare géant", res: true},
                {nom: "La baleine", res: false},
                {nom: "L'éléphant", res: false},
                {nom: "L'homme", res: false}
            ]
        },
    ]
};
