import {Image} from "react-native";
import React from "react";

export const jsonScienceData = {
    title: "Quiz Science ",
    questions: [
        {
        	images: <Image source={require('./assetsData/Science/Facile/cut/QSC1.png')}/>,
            title: "Quel acide n'est pas rejeté par un volcan ?",
            answer: [
                {nom: "Acide chlorydrique", res: true},
                {nom: "Acide sulfurique", res: false},
                {nom: "Acide fluorhydrique", res: false},
                {nom: "Acide Carboxylique", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/Facile/cut/QSC2.png')}/>,
            title: "Combien de degrés peut atteindre une nuée ardente ?",
            answer: [
                {nom: "500°", res: false},
                {nom: "600°", res: false},
                {nom: "700°", res: true},
                {nom: "800°", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/Facile/cut/QSC3.png')}/>,
            title: "Quelle est cette pierre ?",
            answer: [
                {nom: " De l'aragonite", res: false},
                {nom: "De l'ambre", res: true},
                {nom: "de l'agathe", res: false},
                {nom: "Du quartz", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/Facile/cut/QSC4.png')}/>,
            title: "Les dinosaures ont disparu il y a ...",
            answer: [
                {nom: "1 million d'années", res: false},
                {nom: "23 millions d'années", res: false},
                {nom: "65 millions d'années", res: true},
                {nom: "47 millions d'années", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/Facile/cut/QSC5.png')}/>,
            title: "Quel est l'âge de la Terre ?",
            answer: [
                {nom: "On ne sait pas", res: false},
                {nom: "1.5 milliards d'années", res: false},
                {nom: "13.5 milliards d'années", res: false},
                {nom: "4.5 milliards d'années", res: true}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/Facile/cut/QSC6.png')}/>,
            title: "De quelle région viennent  la plupart des diamants ?",
            answer: [
                {nom: "D'Afrique Equatoriale", res: false},
                {nom: "D'Australie", res: false},
                {nom: "D'Afrique du sud", res: true},
                {nom: "D'Amérique du sud", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/Facile/cut/QSC7.png')}/>,
            title: "Quel est le troisième état de la matière (les deux premiers étant : solide, liquide) ?",
            answer: [
                {nom: "Air", res: false},
                {nom: "Gaz", res: true},
                {nom: "Émulsion", res: false},
                {nom: "Vapeur", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/Facile/cut/QSC8.png')}/>,
            title: "Comment s'appelle l'unité d'énergie ?",
            answer: [
                {nom: "joule", res: true},
                {nom: "calorie", res: false},
                {nom: "dalton", res: false},
                {nom: "watt", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/Facile/cut/QSC9.png')}/>,
            title: "Chassez l'intrus...",
            answer: [
                {nom: "27", res: false},
                {nom: "45", res: false},
                {nom: "82", res: true},
                {nom: "108", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/Facile/cut/QSC10.png')}/>,
            title: "Récemment une planète a été découverte dans notre galaxie , on a découvert qu'elle était constituer entièrement...",
            answer: [
                {nom: "D'or", res: false},
                {nom: "De rubis", res: false},
                {nom: "De saphir ", res: false},
                {nom: "De diamant", res: true}
            ]
        },

        {
        	images: <Image source={require('./assetsData/Science/Facile/cut/QSC11.png')}/>,
            title: "Quel muscle de la cuisse porte le même nom qu'un métier ?",
            answer: [
                {nom: "Coutelier", res: false},
                {nom: "Dentelier", res: false},
                {nom: "Coiffeur", res: false},
                {nom: "Couturier", res: true}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC12.png')}/>,
            title: "Que vaut il mieux manger le soir si je vais courir un marathon le lendemain ?",
            answer: [
                {nom: "Une boisson énergisante (Lewis Amilton le vrai bro)", res: false},
                {nom: "Des pâtes et du riz", res: true},
                {nom: "De la viande", res: false},
                {nom: "Une barre chocolaté", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC13.png')}/>,
            title: "Qui est le premier homme à avoir marché sur la lune ?",
            answer: [
                {nom: "Daniel Burbank", res: false},
                {nom: "Buzz Aldrin", res: false},
                {nom: "Neil Armstrong", res: true},
                {nom: "Curtis Roy", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC14.png')}/>,
            title: "En combien de temps la Terre tourne-t-elle autour du Soleil ?",
            answer: [
                {nom: "459 jours et demi", res: false},
                {nom: "24h", res: false},
                {nom: "365 jours et un quart", res: true},
                {nom: "364 jours", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC15.png')}/>,
            title: "Il a déterminé la vitesse de la lumière et mis au point le gyroscope mais il doit sa célébrité à sa démonstration de la rotation de la Terre grâce à un énorme pendule.",
            answer: [
                {nom: "Michael Faraday (1791-1867)", res: false},
                {nom: " Louis Gay-Lussac (1778-1850)", res: false},
                {nom: "Isaac Newton (1643-1727)", res: false},
                {nom: "Léon Foucault (1819-1868)", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC16.png')}/>,
            title: "Parmi ces trois artères, laquelle vient directement irriguer le cerveau ?",
            answer: [
                {nom: "L'artère carotidienne", res: true},
                {nom: "L'artère aorte", res: false},
                {nom: "L'artère iliaque", res: false},
                {nom: "L'artère coronaire", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC17.png')}/>,
            title: "Comment nomme-t-on en Russie quelqu'un qui voyage dans l'espace ?",
            answer: [
                {nom: " Un cosmonaute", res: true},
                {nom: "Un astonaute", res: false},
                {nom: "Un taïkonaute", res: false},
                {nom: "Un spationaute", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC18.png')}/>,
            title: "Maladie neurologique qui provoque des tremblements...",
            answer: [
                {nom: "''Ellington''", res: false},
                {nom: " ''Garrison''", res: false},
                {nom: " ''Henderson''", res: false},
                {nom: " ''Parkinson''", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC19.png')}/>,
            title: "La matière se transforme. Elle peut passer directement de l'état solide à l'état gazeux en subissant une très haute température. Quel nom lui donne-t-on ?",
            answer: [
                {nom: "La sublimation", res: true},
                {nom: "La vaporisation ", res: false},
                {nom: "La condensation", res: false},
                {nom: "La liquéfaction", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC20.png')}/>,
            title: "Qui constitue la classe des vertébrés ?",
            answer: [
                {nom: "échinodermes, oiseaux, poissons.", res: false},
                {nom: "Mammifères, oiseaux, reptiles, poissons.", res: true},
                {nom: " Crustacés, insectes, mollusques, échinodermes.", res: false},
                {nom: "Crustacés, insectes,oiseaux, poissons.", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC21.png')}/>,
            title: "Combien de branches a toujours un cristal de neige ?",
            answer: [
                {nom: "8", res: false},
                {nom: "5", res: false},
                {nom: "6", res: true},
                {nom: "10", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC22.png')}/>,
            title: "Qu'est ce que le grésil?",
            answer: [
                {nom: "Un instrument de mesure", res: false},
                {nom: "Un vent", res: false},
                {nom: "Une précipitation", res: true},
                {nom: "C'est quand la télé marche pas bordel de merde !", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC23.png')}/>,
            title: "Quel est l’organe respiratoire des poissons ?",
            answer: [
                {nom: "Les branchies", res: true},
                {nom: "Le tuba", res: false},
                {nom: "Les poumons, quelle question !", res: false},
                {nom: "L'estomac", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC24.png')}/>,
            title: "De quel animal Léonard de Vinci s'inspira t'il pour dessiner ses machines volantes",
            answer: [
                {nom: "Des insectes", res: false},
                {nom: "Des oiseaux", res: true},
                {nom: "Des avions", res: false},
                {nom: "Des chauve-souris", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC25.png')}/>,
            title: "Quel est la caractéristique d'une averse",
            answer: [
                {nom: "Ses faibles précipitations", res: false},
                {nom: "Ses pluies acides", res: false},
                {nom: "Son passage de courte durée", res: true},
                {nom: "Sa vaste étendue", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC26.png')}/>,
            title: "Avec quelle unité mesure-t-on la pression atmosphérique",
            answer: [
                {nom: "Le Newton", res: false},
                {nom: "Le Radiant", res: false},
                {nom: "Le Joule", res: false},
                {nom: "Le Pascal", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC27.png')}/>,
            title: "Le bec du martin-pêcheur a révolutionné...",
            answer: [
                {nom: "L'industrie du TGV Japonais", res: true},
                {nom: "L'industrie de l'aéronautique russe", res: false},
                {nom: "L'industrie de la médecine hongroise", res: false},
                {nom: "L'industrie du textile Allemand", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC28.png')}/>,
            title: "Pour commencer, pouvez-vous me donner le symbole du zinc ?",
            answer: [
                {nom: "Z", res: false},
                {nom: "ZC", res: false},
                {nom: "ZN", res: true},
                {nom: "ZI", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC29.png')}/>,
            title: "À quoi est dû l'albinisme ?",
            answer: [
                {nom: "à un manque de Melatonine", res: false},
                {nom: "à un manque se sérotonine", res: false},
                {nom: "à un manque de mélanine", res: false},
                {nom: "à un manque de Vitamine B12", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC30.png')}/>,
            title: "Quel organe peut être assimilé à une lentille vivante ?",
            answer: [
                {nom: "La rétine", res: false},
                {nom: "La cornée", res: true},
                {nom: "Les cônes", res: false},
                {nom: "Le cristallin", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC31.png')}/>,
            title: "Quel est le plus gros de ces trois organes du corps humain ?",
            answer: [
                {nom: "Le coeur", res: false},
                {nom: "La rate", res: false},
                {nom: "Le foie", res: true},
                {nom: "Le reins", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC32.png')}/>,
            title: "Une molécule est :",
            answer: [
                {nom: "Un atome", res: false},
                {nom: "Un assemblage de plusieurs atomes", res: false},
                {nom: "Un ion", res: false},
                {nom: "Un assemblage de plusieurs ions", res: true}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/Facile/cut/QSC33.png')}/>,
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
