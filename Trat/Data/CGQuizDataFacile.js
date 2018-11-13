import {Image} from "react-native";
import React from "react";

export const jsonCGData = {
    title: "Quiz Culture générale #1",
    questions: [
        {
        	images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG1.png')}/>,
            title: "Quel philosophe conclut “Je pense, donc je suis.” ?",
            answer: [
                {nom: "Descartes", res: true},
                {nom: "Heidegger", res: false},
                {nom: "Hegel", res: false},
                {nom: "Socrate", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG2.png')}/>,
            title: "On dit qu’un cheval…",
            answer: [
                {nom: "Hurle", res: false},
                {nom: "Blatère", res: false},
                {nom: "Hennit", res: true},
                {nom: "Rugit", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG3.png')}/>,
            title: "Où se situe l’Oural ?",
            answer: [
                {nom: "En Turquie", res: false},
                {nom: "En Russie", res: true},
                {nom: "Au Kazakhstan", res: false},
                {nom: "En Ukraine", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG4.png')}/>,
            title: "Parmi les hommes politiques suivants, lequel a pris le pouvoir à partir de 1959 à Cuba ?",
            answer: [
                {nom: "Fulgencio Batista", res: false},
                {nom: "Hugo Chavez", res: false},
                {nom: "Fidel Castro", res: true},
                {nom: "Che Guevara", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG5.png')}/>,
            title: "Quel pays le mouvement des Talibans a-t-il gouverné de 1996 à 2001 ?",
            answer: [
                {nom: "Le Kirghizistan", res: false},
                {nom: "L'Arabie saoudite", res: false},
                {nom: "L'Irak", res: false},
                {nom: "L'Afghanistan", res: true}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG6.png')}/>,
            title: "De quel écrivain la \"Comédie humaine\" est-elle la grande œuvre ?",
            answer: [
                {nom: "Alfred de Vigny", res: false},
                {nom: "Émile Zola", res: false},
                {nom: "Honoré de Balzac", res: true},
                {nom: "Victor Hugo", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG7.png')}/>,
            title: "Qui a dit “Ich bin ein Berliner” ?",
            answer: [
                {nom: "Bismarck", res: false},
                {nom: "Kennedy", res: true},
                {nom: "De Gaulle", res: false},
                {nom: "Reagan", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG8.png')}/>,
            title: "Dans \"La grande vadrouille\", qui accompagne Louis de Funès dans ses pérégrinations ?",
            answer: [
                {nom: "Bourvil", res: true},
                {nom: "Fernandel", res: false},
                {nom: "Jean Yanne", res: false},
                {nom: "Pierre Richard", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG9.png')}/>,
            title: "De quel pays Recep Tayyip Erdogan est-il le dirigeant depuis 2003 ?",
            answer: [
                {nom: "L'Iran", res: false},
                {nom: "La Turquie", res: true},
                {nom: "Le Pakistan", res: false},
                {nom: "L'Égypte", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG10.png')}/>,
            title: "Complétez la liste : Athos, Porthos et …",
            answer: [
                {nom: "Largardère", res: false},
                {nom: "D'Artagnan", res: false},
                {nom: "Bayard", res: false},
                {nom: "Aramis", res: true}
            ]
        },

        {
        	images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG11.png')}/>,
            title: "Quelle est la forme des excrement des Wombats ?",
            answer: [
                {nom: "Sphérique", res: false},
                {nom: "Cylindrique", res: false},
                {nom: "Triangulaire", res: false},
                {nom: "Cubique", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG12.png')}/>,
            title: "Dans quelle chanson un célèbre chanteur français parle-t-il des souvenirs et des bonbons de son enfance?",
            answer: [
                {nom: "Le Loir-et-Cher", res: false},
                {nom: "Mistral gagnant", res: true},
                {nom: "Là-bas", res: false},
                {nom: "La montagne", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG13.png')}/>,
            title: "Qui est le premier homme à avoir marché sur la lune ?",
            answer: [
                {nom: "Daniel Burbank", res: false},
                {nom: "Buzz Aldrin", res: false},
                {nom: "Neil Armstrong", res: true},
                {nom: "Curtis Roy", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG14.png')}/>,
            title: "En combien de temps la Terre tourne-t-elle autour du Soleil ?",
            answer: [
                {nom: "459 jours et demi", res: false},
                {nom: "24h", res: false},
                {nom: "365 jours et un quart", res: true},
                {nom: "364 jours", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG15.png')}/>,
            title: "Quel est le plus petit État du monde ?",
            answer: [
                {nom: "Andorre", res: false},
                {nom: "Saint-marin", res: false},
                {nom: "Monaco", res: false},
                {nom: "Le Vatican", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG16.png')}/>,
            title: "Quel pays le mouvement des Talibans a-t-il gouverné de 1996 à 2001 ?Quel groupe de musique est composé de deux DJ portant des casques de robot ?",
            answer: [
                {nom: "Daft Punk", res: true},
                {nom: "The Chemical Brothers", res: false},
                {nom: "Skrillex", res: false},
                {nom: "Cassius", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG17.png')}/>,
            title: "Paul Verlaine est avant tout …",
            answer: [
                {nom: "un poète", res: true},
                {nom: "un romancier", res: false},
                {nom: "un essayiste", res: false},
                {nom: "un dramaturge", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG18.png')}/>,
            title: "Comment se nomme l’écuyer de Godefroy de Montmirail dans “Les Visiteurs” ?",
            answer: [
                {nom: "Pecouille le chenapan", res: false},
                {nom: "Niacouille le filou", res: false},
                {nom: "Jean Lassalle", res: false},
                {nom: "Jacquouille la fripouille", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG19.png')}/>,
            title: "Quel est l’athlète le plus titré de l’histoire des Jeux Olympiques ?",
            answer: [
                {nom: "Michael Phelps", res: true},
                {nom: "Carl Lewis", res: false},
                {nom: "Usain Bolt", res: false},
                {nom: "Michael Johnson", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG20.png')}/>,
            title: "Quelle est la femelle du cochon ?",
            answer: [
                {nom: "La trouille", res: false},
                {nom: "La truie", res: true},
                {nom: "La gorette", res: false},
                {nom: "La trouie", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG21.png')}/>,
            title: "Quelle ville est le fournisseur officiel du Nutella dans le monde entier ?",
            answer: [
                {nom: "Chine", res: false},
                {nom: "Toronto", res: false},
                {nom: "Rouen", res: true},
                {nom: "Luneray", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG22.png')}/>,
            title: "Quel est l'animal qui à voyager en premier dans l'espace ?",
            answer: [
                {nom: "Un chimpanzé", res: false},
                {nom: "Un chat", res: false},
                {nom: "Un chien", res: true},
                {nom: "Un lapin", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG23.png')}/>,
            title: "Quel est l’organe respiratoire des poissons ?",
            answer: [
                {nom: "Les branchies", res: true},
                {nom: "Le tuba", res: false},
                {nom: "Les poumons, quelle question !", res: false},
                {nom: "L'estomac", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG24.png')}/>,
            title: "“Imagine there's no heaven, It's easy if you try…” sont des paroles de…",
            answer: [
                {nom: "Paul Maccartney", res: false},
                {nom: "John Lennon", res: true},
                {nom: "Jimi Hendrix", res: false},
                {nom: "Michael Jackson", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG25.png')}/>,
            title: "D'où vient le mot \"Poubelle\"",
            answer: [
                {nom: "Contraction de la phrase \"Pour être belle\"", res: false},
                {nom: "Le nom de la première marque de réceptacle  à ordure", res: false},
                {nom: "Nom de famille : Eugène Poubelle", res: true},
                {nom: "Nom donné pas IKEA en 1948", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG26.png')}/>,
            title: " Quel animal qui enflamé, était utilisé sur le champ de bataille dans l'antiquité ?",
            answer: [
                {nom: "Le mouton", res: false},
                {nom: "Le chien", res: false},
                {nom: "La chèvre naine", res: false},
                {nom: "Le cochon", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG27.png')}/>,
            title: "Qui est le compositeur du Boléro ?",
            answer: [
                {nom: "Ravel", res: true},
                {nom: "Berlioz", res: false},
                {nom: "Debussy", res: false},
                {nom: "Fauré", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG28.png')}/>,
            title: "Qui a déssiné de drapeau de l'Alaska",
            answer: [
                {nom: "un poète", res: false},
                {nom: "Oscar Pernefield", res: false},
                {nom: "un enfant de 13 ans", res: true},
                {nom: "Lottie Burnley", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG29.png')}/>,
            title: "Qu'etait en realité la Statut de la Liberté ?",
            answer: [
                {nom: "Une flamme olympique", res: false},
                {nom: "UN hommage à la femme du président Americain", res: false},
                {nom: "Une statut censer faire peur aux eventuelles attaquants de l'Amérique du Nord", res: false},
                {nom: "Un phare", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG30.png')}/>,
            title: "Quel est l'animal national officiel de l'Ecosse ?",
            answer: [
                {nom: "le Mouton", res: false},
                {nom: "La Licorne", res: true},
                {nom: "Le chardon vivant", res: false},
                {nom: "Le monstre du Loch ness", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG31.png')}/>,
            title: "Quel dirigeant russe promet de “butter les terroristes, jusque dans les chiottes” ?",
            answer: [
                {nom: "Ivan le Terrible", res: false},
                {nom: "Borris Droski", res: false},
                {nom: "Vladimir Poutine", res: true},
                {nom: "Maslov Shiroff", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG32.png')}/>,
            title: "Dans GaME OF Thrones, quel personnage très bavard apparait dans tous les épisodes ?",
            answer: [
                {nom: "Daenerys", res: false},
                {nom: "John Snow", res: false},
                {nom: "Arya", res: false},
                {nom: "Tyrion", res: true}
            ]
        },

        {
            images: <Image source={require('./assetsData/CultureG/Facile/cut/QCG33.png')}/>,
            title: "Quel est le muscle le plus fort du corps humain ?",
            answer: [
                {nom: "La Langue", res: false},
                {nom: "Le fessier", res: true},
                {nom: "Les pectoraux", res: false},
                {nom: "Les biceps", res: false}
            ]
        },
    ]
};
