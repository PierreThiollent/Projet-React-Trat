import {Image} from "react-native";
import React from "react";

export const jsonScienceData = {
    title: "Quiz Science ",
    questions: [
        {
        	images: <Image source={require('./assetsData/Science/cut/QSC1.png')}/>,
            title: "Quel acide n'est pas rejeté par un volcan ?",
            answer: [
                {nom: "Acide chlorydrique", res: true},
                {nom: "Acide sulfurique", res: false},
                {nom: "Acide fluorhydrique", res: false},
                {nom: "Acide Carboxylique", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/cut/QSC2.png')}/>,
            title: "Combien de degrés peut atteindre une nuée ardente ?",
            answer: [
                {nom: "500°", res: false},
                {nom: "600°", res: false},
                {nom: "700°", res: true},
                {nom: "800°", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/cut/QSC3.png')}/>,
            title: "Quelle est cette pierre ?",
            answer: [
                {nom: " De l'aragonite", res: false},
                {nom: "De l'ambre", res: true},
                {nom: "De l'agathe", res: false},
                {nom: "Du quartz", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/cut/QSC4.png')}/>,
            title: "Les dinosaures ont disparu il y a ...",
            answer: [
                {nom: "1 million d'années", res: false},
                {nom: "23 millions d'années", res: false},
                {nom: "65 millions d'années", res: true},
                {nom: "47 millions d'années", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/cut/QSC5.png')}/>,
            title: "Quel est l'âge de la Terre ?",
            answer: [
                {nom: "On ne sait pas", res: false},
                {nom: "1.5 milliards d'années", res: false},
                {nom: "13.5 milliards d'années", res: false},
                {nom: "4.5 milliards d'années", res: true}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/cut/QSC6.png')}/>,
            title: "De quelle région viennent  la plupart des diamants ?",
            answer: [
                {nom: "D'Afrique Equatoriale", res: false},
                {nom: "D'Australie", res: false},
                {nom: "D'Afrique du sud", res: true},
                {nom: "D'Amérique du sud", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/cut/QSC7.png')}/>,
            title: "Quel est le troisième état de la matière (les deux premiers étant : solide, liquide) ?",
            answer: [
                {nom: "Air", res: false},
                {nom: "Gaz", res: true},
                {nom: "Émulsion", res: false},
                {nom: "Vapeur", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/cut/QSC8.png')}/>,
            title: "Comment s'appelle l'unité d'énergie ?",
            answer: [
                {nom: "Joule", res: true},
                {nom: "Calorie", res: false},
                {nom: "Dalton", res: false},
                {nom: "Watt", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/cut/QSC9.png')}/>,
            title: "Chassez l'intrus...",
            answer: [
                {nom: "27", res: false},
                {nom: "45", res: false},
                {nom: "82", res: true},
                {nom: "108", res: false}
            ]
        },
        {
        	images: <Image source={require('./assetsData/Science/cut/QSC10.png')}/>,
            title: "Récemment une planète a été découverte dans notre galaxie , on a découvert qu'elle était constituer entièrement...",
            answer: [
                {nom: "D'or", res: false},
                {nom: "De rubis", res: false},
                {nom: "De saphir ", res: false},
                {nom: "De diamant", res: true}
            ]
        },

        {
        	images: <Image source={require('./assetsData/Science/cut/QSC11.png')}/>,
            title: "Quel muscle de la cuisse porte le même nom qu'un métier ?",
            answer: [
                {nom: "Coutelier", res: false},
                {nom: "Dentelier", res: false},
                {nom: "Coiffeur", res: false},
                {nom: "Couturier", res: true}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC12.png')}/>,
            title: "Que vaut il mieux manger le soir si je vais courir un marathon le lendemain ?",
            answer: [
                {nom: "Une boisson énergisante (Lewis Amilton le vrai bro)", res: false},
                {nom: "Des pâtes et du riz", res: true},
                {nom: "De la viande", res: false},
                {nom: "Une barre chocolaté", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC13.png')}/>,
            title: "Qui est le premier homme à avoir marché sur la lune ?",
            answer: [
                {nom: "Daniel Burbank", res: false},
                {nom: "Buzz Aldrin", res: false},
                {nom: "Neil Armstrong", res: true},
                {nom: "Curtis Roy", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC14.png')}/>,
            title: "En combien de temps la Terre tourne-t-elle autour du Soleil ?",
            answer: [
                {nom: "459 jours et demi", res: false},
                {nom: "24h", res: false},
                {nom: "365 jours et un quart", res: true},
                {nom: "364 jours", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC15.png')}/>,
            title: "Il a déterminé la vitesse de la lumière et mis au point le gyroscope mais il doit sa célébrité à sa démonstration de la rotation de la Terre grâce à un énorme pendule.",
            answer: [
                {nom: "Michael Faraday (1791-1867)", res: false},
                {nom: " Louis Gay-Lussac (1778-1850)", res: false},
                {nom: "Isaac Newton (1643-1727)", res: false},
                {nom: "Léon Foucault (1819-1868)", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC16.png')}/>,
            title: "Parmi ces trois artères, laquelle vient directement irriguer le cerveau ?",
            answer: [
                {nom: "L'artère carotidienne", res: true},
                {nom: "L'artère aorte", res: false},
                {nom: "L'artère iliaque", res: false},
                {nom: "L'artère coronaire", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC17.png')}/>,
            title: "Comment nomme-t-on en Russie quelqu'un qui voyage dans l'espace ?",
            answer: [
                {nom: " Un cosmonaute", res: true},
                {nom: "Un astonaute", res: false},
                {nom: "Un taïkonaute", res: false},
                {nom: "Un spationaute", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC18.png')}/>,
            title: "Maladie neurologique qui provoque des tremblements...",
            answer: [
                {nom: "Ellington", res: false},
                {nom: "Garrison", res: false},
                {nom: "Henderson", res: false},
                {nom: "Parkinson", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC19.png')}/>,
            title: "La matière se transforme. Elle peut passer directement de l'état solide à l'état gazeux en subissant une très haute température. Quel nom lui donne-t-on ?",
            answer: [
                {nom: "La sublimation", res: true},
                {nom: "La vaporisation ", res: false},
                {nom: "La condensation", res: false},
                {nom: "La liquéfaction", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC20.png')}/>,
            title: "Qui constitue la classe des vertébrés ?",
            answer: [
                {nom: "Échinodermes, oiseaux, poissons.", res: false},
                {nom: "Mammifères, oiseaux, reptiles, poissons.", res: true},
                {nom: "Crustacés, insectes, mollusques, échinodermes.", res: false},
                {nom: "Crustacés, insectes,oiseaux, poissons.", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC21.png')}/>,
            title: "Combien de branches a toujours un cristal de neige ?",
            answer: [
                {nom: "8", res: false},
                {nom: "5", res: false},
                {nom: "6", res: true},
                {nom: "10", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC22.png')}/>,
            title: "Qu'est ce que le grésil?",
            answer: [
                {nom: "Un instrument de mesure", res: false},
                {nom: "Un vent", res: false},
                {nom: "Une précipitation", res: true},
                {nom: "C'est quand la télé marche pas bordel de merde !", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC23.png')}/>,
            title: "Quel est l’organe respiratoire des poissons ?",
            answer: [
                {nom: "Les branchies", res: true},
                {nom: "Le tuba", res: false},
                {nom: "Les poumons, quelle question !", res: false},
                {nom: "L'estomac", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC24.png')}/>,
            title: "De quel animal Léonard de Vinci s'inspira t'il pour dessiner ses machines volantes",
            answer: [
                {nom: "Des insectes", res: false},
                {nom: "Des oiseaux", res: true},
                {nom: "Des avions", res: false},
                {nom: "Des chauve-souris", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC25.png')}/>,
            title: "Quel est la caractéristique d'une averse",
            answer: [
                {nom: "Ses faibles précipitations", res: false},
                {nom: "Ses pluies acides", res: false},
                {nom: "Son passage de courte durée", res: true},
                {nom: "Sa vaste étendue", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC26.png')}/>,
            title: "Avec quelle unité mesure-t-on la pression atmosphérique",
            answer: [
                {nom: "Le Newton", res: false},
                {nom: "Le Radiant", res: false},
                {nom: "Le Joule", res: false},
                {nom: "Le Pascal", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC27.png')}/>,
            title: "Le bec du martin-pêcheur a révolutionné...",
            answer: [
                {nom: "L'industrie du TGV Japonais", res: true},
                {nom: "L'industrie de l'aéronautique russe", res: false},
                {nom: "L'industrie de la médecine hongroise", res: false},
                {nom: "L'industrie du textile Allemand", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC28.png')}/>,
            title: "Pour commencer, pouvez-vous me donner le symbole du zinc ?",
            answer: [
                {nom: "Z", res: false},
                {nom: "ZC", res: false},
                {nom: "ZN", res: true},
                {nom: "ZI", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC29.png')}/>,
            title: "À quoi est dû l'albinisme ?",
            answer: [
                {nom: "À un manque de Melatonine", res: false},
                {nom: "À un manque se sérotonine", res: false},
                {nom: "À un manque de mélanine", res: false},
                {nom: "À un manque de Vitamine B12", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC30.png')}/>,
            title: "Quel organe peut être assimilé à une lentille vivante ?",
            answer: [
                {nom: "La rétine", res: false},
                {nom: "La cornée", res: true},
                {nom: "Les cônes", res: false},
                {nom: "Le cristallin", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC31.png')}/>,
            title: "Quel est le plus gros de ces trois organes du corps humain ?",
            answer: [
                {nom: "Le coeur", res: false},
                {nom: "La rate", res: false},
                {nom: "Le foie", res: true},
                {nom: "Le reins", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC32.png')}/>,
            title: "Une molécule est :",
            answer: [
                {nom: "Un atome", res: false},
                {nom: "Un assemblage de plusieurs atomes", res: false},
                {nom: "Un ion", res: false},
                {nom: "Un assemblage de plusieurs ions", res: true}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC33.png')}/>,
            title: "Quel est le muscle le plus fort du corps humain ?",
            answer: [
                {nom: "La Langue", res: false},
                {nom: "Le fessier", res: true},
                {nom: "Les pectoraux", res: false},
                {nom: "Les biceps", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC34.png')}/>,
            title: "Que signifie le symbole S en chimie ?",
            answer: [
                {nom: "Souffre", res: true},
                {nom: "Sable", res: false},
                {nom: "Sulfate", res: false},
                {nom: "Samère", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC35.png')}/>,
            title: "Quel volcan possède le record de l'éruption la plus bruyante ?",
            answer: [
                {nom: "Le Stromboli", res: false},
                {nom: "L'Etna", res: false},
                {nom: "Le Krakatoa", res: true},
                {nom: "Le Piton de la fournaise", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC36.png')}/>,
            title: "Qu'est ce qu'un Fjord ?",
            answer: [
                {nom: "Un Yaourt", res: false},
                {nom: "Une vallée creusée par un fleuve remplie par la mer", res: false},
                {nom: "Une vallée creusée par un volcan remplie par la mer", res: false},
                {nom: "Une vallée creusée par un glacier remplie par la mer", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC37.png')}/>,
            title: "A quoi doit-on le phénomène de marée ?",
            answer: [
                {nom: "À l'attraction conjointe de la Lune et du Soleil", res: true},
                {nom: "À la rotation de la Terre sur elle-même", res: false},
                {nom: "À l'attraction de la Lune", res: false},
                {nom: "À la volontée de Pontos le dieu de l'eau", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC38.png')}/>,
            title: "Quel terme désigne, parmi les trois suivants, le noyau des fruits ?",
            answer: [
                {nom: "Le péricarpe", res: false},
                {nom: "Le mésocarpe", res: false},
                {nom: "Le carpediem", res: false},
                {nom: "L'endocarpe", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC39.png')}/>,
            title: "Comment s'appelle un million de millions?",
            answer: [
                {nom: "Un millier", res: false},
                {nom: "Un milliard", res: false},
                {nom: "Un billion", res: true},
                {nom: "Un trillion", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC40.png')}/>,
            title: "Quel est le record du plus long séjour dans l'espace ?",
            answer: [
                {nom: "231 jours et 18 heures", res: false},
                {nom: "329 jours et 18 heures", res: false},
                {nom: "437 jours et 18 heures", res: true},
                {nom: "574 jours et 18 heures", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC41.png')}/>,
            title: "Scott Kelly,  quel est l'odeur de l'espace ?",
            answer: [
                {nom: "Une odeur de métal brulé", res: true},
                {nom: "Une odeur de lavande", res: false},
                {nom: "Une odeur de souffre", res: false},
                {nom: "Une odeur de barbapapa", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC42.png')}/>,
            title: "Quel objet a sauver la mission Appollo 11 ",
            answer: [
                {nom: "Un trombone", res: false},
                {nom: "Une photo", res: false},
                {nom: "Un stylo", res: true},
                {nom: "Un titre de transport du réseaux astuce", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC43.png')}/>,
            title: "Que veut l'astronaute Américain Scott Kelly en rentrant de sa mission d' 1 ans dans l'espace ?",
            answer: [
                {nom: "De l'argent", res: false},
                {nom: "Un cocombre", res: true},
                {nom: "Un burger", res: false},
                {nom: "Retrouver sa famille", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC44.png')}/>,
            title: "Les astronautes peuvent gagner jusqu'a ... de leur taille dans l'espace ",
            answer: [
                {nom: "2%", res: false},
                {nom: "2.5%", res: false},
                {nom: "3%", res: true},
                {nom: "3.5%", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC45.png')}/>,
            title: " Quelle forme a un grain de sel de table ? ",
            answer: [
                {nom: "Ovale", res: false},
                {nom: "Quasi cubique", res: true},
                {nom: "Parfaitement ronde", res: false},
                {nom: "Aléatoire", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC46.png')}/>,
            title: "Pourquoi le sel fait-il fondre la glace ?",
            answer: [
                {nom: "Il attire l'eau par capilarité", res: false},
                {nom: "Il modifie la structure de l'eau", res: false},
                {nom: "Il abaisse le point de congélation", res: true},
                {nom: "Le sel ets plus chaud que la glace", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC47.png')}/>,
            title: "De quelle couleur devient le sulfate de cuivre anhydre au contact de l'eau ?",
            answer: [
                {nom: "Vert", res: false},
                {nom: "Rose pâle", res: false},
                {nom: "Bleu", res: true},
                {nom: "Jaune", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC48.png')}/>,
            title: "Avec quoi ne peut-on sous aucun prétexte mesurer le pH d'un quelconque élément ?",
            answer: [
                {nom: "Avec du papier-pH.", res: false},
                {nom: "Avec un pH-mètre.", res: false},
                {nom: "Avec une règle-pH", res: true},
                {nom: "La réponse D.", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC49.png')}/>,
            title: "Complétez : Si la valeur du pH est inférieure à 7, alors...",
            answer: [
                {nom: "L'élément est basique.", res: false},
                {nom: "L'élément est neutre.", res: false},
                {nom: "L'élément est Simple.", res: false},
                {nom: "L'élément est acide.", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC50.png')}/>,
            title: "Par qui ont été crée les chiffres arabes",
            answer: [
                {nom: "Des mathématiciens Arabes", res: false},
                {nom: "Des mathématiciens Indiens", res: true},
                {nom: "Des mathématiciens Russes", res: false},
                {nom: "Des mathématiciens Français", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC51.png')}/>,
            title: "Comment appelle t-on l'enssemble des nutriments ?",
            answer: [
                {nom: "Cela n'a aucun nom particulier", res: false},
                {nom: "La nurevulg ", res: false},
                {nom: "La Chyme", res: true},
                {nom: "L'ocastariose", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC52.png')}/>,
            title: "L'haptique est une science qui étudie l'un de nos 5 sens, lequel ?",
            answer: [
                {nom: "La vue", res: false},
                {nom: "Le toucher", res: true},
                {nom: "L'odorat", res: false},
                {nom: "L'ouïe", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC53.png')}/>,
            title: "Lors d'une éclipse de soleil, les 3 astres sont alignés dans l'ordre...",
            answer: [
                {nom: " Soleil - Terre - Lune", res: false},
                {nom: "Terre - Soleil - Lune", res: false},
                {nom: " Soleil - Lune - Terre", res: true},
                {nom: " Lune - Terre - Soleil", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC54.png')}/>,
            title: "Le nombre de neurones que possède un être humain est évalué à environ :",
            answer: [
                {nom: "20 milliards", res: false},
                {nom: "50 milliards", res: false},
                {nom: "100 milliards", res: true},
                {nom: "1000 milliards", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC55.png')}/>,
            title: "Quel animal n'a pas d'estomac ?",
            answer: [
                {nom: "L'ornithorynque", res: true},
                {nom: "L'escargot", res: false},
                {nom: "L'échidné", res: true},
                {nom: "Le seprent", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC56.png')}/>,
            title: "Quelle est la vitesse de la lumière ?",
            answer: [
                {nom: "300 000 km/h", res: false},
                {nom: "300 000 000 m/s", res: true},
                {nom: "320 m/s", res: false},
                {nom: "320 km/h", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC57.png')}/>,
            title: "L'amygdale cérébrale est une zone du cerveau impliquée dans :",
            answer: [
                {nom: "La vision", res: false},
                {nom: "Le reconnaissance de la peur", res: true},
                {nom: "L'orientation", res: false},
                {nom: "Le langage", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC58.png')}/>,
            title: "Comment puis-je savoir si j'observe une étoile ou une planète à l'oeil nu ?",
            answer: [
                {nom: "Les étoiles sont plus brillantes", res: false},
                {nom: "Les planètes semblent nettement plus grosses", res: false},
                {nom: "Les planètes ne scintillent pas, contrairement aux étoiles.\n", res: true},
                {nom: "On ne peut pas voir de planètes depuis la terre", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC59.png')}/>,
            title: " Pourquoi les nuages sont-ils blancs ?",
            answer: [
                {nom: "Parce que c'est de la vapeur", res: false},
                {nom: "Parce qu'ils contiennent de la glace et de la neige", res: false},
                {nom: "A cause de l'atmosphère", res: false},
                {nom: "Parce qu'ils reflètent intégralement la lumière du Soleil", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC60.png')}/>,
            title: "Pourquoi le ciel est-il bleu ?",
            answer: [
                {nom: "Parce que la couleur bleue du Soleil rebondit dans l'atmosphère", res: true},
                {nom: "À cause de la couleur de la mer qui se reflète dans le ciel", res: false},
                {nom: "Parce que c'est la couleur de l'oxygène\n", res: false},
                {nom: "C'est la couleur de l'espace qui est atténuer", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC61.png')}/>,
            title: "Comment appelle t-on l'endroit où a lieu la rupture brutale des roches (qui provoque le tremblement du sol) ?",
            answer: [
                {nom: "Le départ du séisme", res: false},
                {nom: "La maison su séisme", res: false},
                {nom: "L'appart du séisme", res: false},
                {nom: "Le foyer du séisme", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC62.png')}/>,
            title: "Comment s'appelle l'appareil qui permet d'enregistrer les ondes provoquer par un séisme ?",
            answer: [
                {nom: "Un sismiques", res: false},
                {nom: "Un sismissite", res: false},
                {nom: "Un sismographe", res: true},
                {nom: "Un sismomètre", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC63.png')}/>,
            title: "Qu'a inventé Benjamin Franklin ?",
            answer: [
                {nom: "L'ampoule", res: false},
                {nom: "La dynamo", res: false},
                {nom: "Le paratonnerre", res: true},
                {nom: "La lampe à incandescence", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC64.png')}/>,
            title: "Où peut-on trouver des bactéries ?",
            answer: [
                {nom: "Uniquement dans l'eau", res: false},
                {nom: "Uniquement sur le sol", res: false},
                {nom: "Partout", res: true},
                {nom: "Uniquement dans l'air", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC65.png')}/>,
            title: "Quelle taille faisait la météorite qui s'est écrasée à la fin du règne des dinosaures ?",
            answer: [
                {nom: "Un peu plus que la tour Eiffel", res: false},
                {nom: "Environ celle du mont Blanc, le plus haut sommet d'Europe", res: false},
                {nom: "Un peu moins que La Lune", res: false},
                {nom: "Un peu plus que l'Everest, le plus haut sommet du monde", res: true}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC66.png')}/>,
            title: "Qu'est-ce qu'un lymphocyte ?",
            answer: [
                {nom: "Un globule rouge", res: false},
                {nom: "Un globule blanc", res: true},
                {nom: "Un virus", res: false},
                {nom: "Une bactérie", res: false}
            ]
        },{
            images: <Image source={require('./assetsData/Science/cut/QSC67.png')}/>,
            title: "Que sont les bactéries ?",
            answer: [
                {nom: "Des organismes vivants unicellulaires procaryotes", res: true},
                {nom: "Des organismes vivants unicellulaires eucaryotes", res: false},
                {nom: "Un autre nom des virus", res: false},
                {nom: "Des cellules qui imunisent notre corps ", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC68.png')}/>,
            title: "Quelle théorie tente d'unifier le monde quantique avec la relativité générale",
            answer: [
                {nom: "La théorie totale", res: false},
                {nom: "La grande théorie", res: false},
                {nom: "La théorie des cordes", res: true},
                {nom: "La théorie spéciale", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC69.png')}/>,
            title: "Quel est le résultat de l'addition : 1+2+3+4+5+6+......+"+"\infty"+" ? ",
            answer: [
                {nom: "+"+"\infty"+"  ", res: false},
                {nom: "6/15", res: false},
                {nom: "-"+"\infty"+"  ", res: false},
                {nom: "-1/12", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC70.png')}/>,
            title: "Que signifie la fameuse équation d'Einstein 'E=mc²' ?",
            answer: [
                {nom: "L'entropie est égale au produit de la masse par une autre masse connue au carré", res: false},
                {nom: "L'énergie est égale au produit de la masse de l'atome de Meitnérium par la vitesse de la lumière au carré", res: false},
                {nom: "L'équivalence est égale au produit de la masse molaire de l'atome de carbone par sa masse au carré", res: false},
                {nom: "L'énergie est égale au produit de la masse d'un corps par la célérité au carré", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC71.png')}/>,
            title: "La pierre ponce est une roche... ?",
            answer: [
                {nom: "Radioactive", res: false},
                {nom: "Lourde", res: false},
                {nom: "Volcanique", res: true},
                {nom: "Liquide", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC72.png')}/>,
            title: "Quelle est l'altitude du mont Olympe, point culminant de Mars et du Système solaire ?",
            answer: [
                {nom: "11. 865 m", res: false},
                {nom: "27. 398 m", res: false},
                {nom: "21. 229 m", res: true},
                {nom: "31. 519 m", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC73.png')}/>,
            title: "Il est protégé par la boîte crânienne. Parmi ces 3 os, lequel est un os du crâne ?",
            answer: [
                {nom: "Le scaphoïde", res: false},
                {nom: "Le sphénoïde", res: true},
                {nom: "L'os hyoïde", res: false},
                {nom: "La choroïde", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC74.png')}/>,
            title: "Quel animal est la drosophile utilisée dans des expérimentations génétiques ?",
            answer: [
                {nom: "Une mouche", res: true},
                {nom: "Un rat", res: false},
                {nom: "Un cochon d'inde", res: false},
                {nom: "Une chèvre", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC75.png')}/>,
            title: "Quel genre d’animaux un entomologiste étudie-t-il ?",
            answer: [
                {nom: "Les oiseaux", res: false},
                {nom: "Les poissons", res: false},
                {nom: "Les insectes", res: true},
                {nom: "Les serpents", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC76.png')}/>,
            title: "Quelle catégorie de tissu du système nerveux au niveau de l'encéphale le cortex désignet-il ?\n" +
                "\n",
            answer: [
                {nom: "La substance blanche", res: false},
                {nom: "La substance grise", res: true},
                {nom: "Le corps strié", res: false},
                {nom: "La substance strié", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC77.png')}/>,
            title: "Qu'est-ce que la ceinture de Kuiper ?",
            answer: [
                {nom: "Un anneau de Saturne", res: false},
                {nom: "Un amas globulaire", res: false},
                {nom: "Un amas de comètes et d'astéroides", res: false},
                {nom: "Un anneau situé autour des éléctrons découvert par Maurice Kuiper en 1995", res: true}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC78.png')}/>,
            title: "Le soleil s'éteindra dans 5 milliards d'années, que deviendra t-il ?",
            answer: [
                {nom: "Une naine brune", res: false},
                {nom: "Une naine blanche", res: true},
                {nom: "Une naine rouge", res: false},
                {nom: "Il explosera", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC79.png')}/>,
            title: "Qu'est-ce que le mot 'quasar' ?",
            answer: [
                {nom: "Une espèce d'étoile", res: false},
                {nom: "Un amas globulaire", res: false},
                {nom: "Un rayon qui émane du centre d'une galaxie", res: true},
                {nom: "Un très gros trou noire", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC80.png')}/>,
            title: "Dans l'oreille, Il communique avec le pavillon et se trouve fermé par une fine membrane." ,
            answer: [
                {nom: "Le conduit auditif", res: true},
                {nom: "Le liquide de l'oreille", res: false},
                {nom: "Le tympan", res: false},
                {nom: "L'oreille interne", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC81.png')}/>,
            title: "Les osselets se trouvent dans une cavité qui communique avec la gorge (pharynx) et l'oreille interne. Comment appelle-t-on le canal permettant la communication ?",
            answer: [
                {nom: "La trompe d'Eustache", res: true},
                {nom: "La trompe de Couesnon", res: false},
                {nom: "La trompe de Fallope", res: false},
                {nom: "La trompe Aitte", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC82.png')}/>,
            title: "Quel est l'autre nom de la colonne vertébrale ?",
            answer: [
                {nom: "L'axis", res: false},
                {nom: "Le rachis", res: true},
                {nom: "Le sternum", res: false},
                {nom: "Le thorax ", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC83.png')}/>,
            title: "Comment s'appelle la couche atmosphérique la plus éloignée de la Terre",
            answer: [
                {nom: "La thermosphère", res: false},
                {nom: "L'exosphère", res: true},
                {nom: "La stratosphère", res: false},
                {nom: "La mésosphère", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC84.png')}/>,
            title: "Comment s'appelle la 1ère vertèbre cervicale ?",
            answer: [
                {nom: "Axis", res: false},
                {nom: "Scaphoïde", res: false},
                {nom: "Atlas", res: true},
                {nom: "Damien Dupont", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC85.png')}/>,
            title: "Quel a été le record pour une tornade dans le monde ?",
            answer: [
                {nom: "400 Km/h", res: false},
                {nom: "445 Km/h", res: false},
                {nom: "490 Km/h", res: false},
                {nom: "511 Km/h", res: true}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC86.png')}/>,
            title: "Le nombre Pi porte un autre nom, ce nom est très peu connu. Alors, à votre avis, quel est ce nom ?" ,
            answer: [
                {nom: "Le nombre infini.", res: false},
                {nom: "Le nombre univers.", res: true},
                {nom: "Le nombre de Dieu.", res: false},
                {nom: "Le nombre Ultime", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC87.png')}/>,
            title: "Qu'est-ce qu'une exoplanète?",
            answer: [
                {nom: "Une planète extérieur à notre système solaire", res: true},
                {nom: "Le satellite d'une planète", res: false},
                {nom: "Une planète dont l'atmomosphère est semblable à celle de la terre", res: false},
                {nom: "Une planète tellurique que la voie lactée.", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC88.png')}/>,
            title: "Pourquoi parle-t-on d' \"expansion de l'univers\" ?",
            answer: [
                {nom: "Le nombre de planètes est hypothétiquement en croissance", res: true},
                {nom: "De nouvelles galaxies se créent en permanence", res: false},
                {nom: "Les objets de l'univers s'éloigenent les uns des autres", res: true},
                {nom: "Car la découverte d'autres galaxies est récente", res: false}
            ]
        },

        {
            images: <Image source={require('./assetsData/Science/cut/QSC89.png')}/>,
            title: "Quelle est la molécule psycho-active contenue dans le chocolat ?\n" +
                "N'importe quoi c'est pas de la drogue mes enfant en mangent !",
            answer: [
                {nom: "Théobromine", res: true},
                {nom: "Caféine", res: false},
                {nom: "Théine", res: false},
                {nom: "Guaranine", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC90.png')}/>,
            title: "Une tempête tropicale devient un ouragan lorsque la vitesse des vents dépasse ..",
            answer: [
                {nom: "99 Km/h", res: false},
                {nom: "119 Km/h", res: true},
                {nom: "130 Km/h", res: false},
                {nom: "145 Km/h", res: false}
            ]
        },
        {
            images: <Image source={require('./assetsData/Science/cut/QSC91.png')}/>,
            title: "Quelle est la taille du plus grand éclaire de l'univers",
            answer: [
                {nom: "20km", res: false},
                {nom: "500 km", res: false},
                {nom: "1 000 000 km", res: false},
                {nom: "150 000 Années lumières", res: true}
                    ]
                },
                {
                    images: <Image source={require('./assetsData/Science/cut/QSC92.png')}/>,
                    title: "En une seule journée, le sang franchit une distance de ...",
                    answer: [
                        {nom: "20 km", res: false},
                        {nom: "500 km", res: false},
                        {nom: "8000 km", res: false},
                        {nom: "19 000 km", res: true}
                    ]
                },
                {
                    images: <Image source={require('./assetsData/Science/cut/QSC93.png')}/>,
                    title: "En 1943, de quel produit le chimiste suisse Albert Hofmann a-t-il découvert par hasard les propriétés hallucinogènes ?",
                    answer: [
                        {nom: "La cocaïne", res: false},
                        {nom: "L'héroïne", res: false},
                        {nom: "Le LSD", res: true},
                        {nom: "L'ecstasy", res: false}
                    ]
                },
                {
                    images: <Image source={require('./assetsData/Science/cut/QSC94.png')}/>,
                    title: "Les forêts couvrent ... %  de la superficie totale de notre planète",
                    answer: [
                        {nom: "5%", res: false},
                        {nom: "9%", res: true},
                        {nom: "15%", res: false},
                        {nom: "30%", res: false}
                    ]
                },
                {
                    images: <Image source={require('./assetsData/Science/cut/QSC95.png')}/>,
                    title: "Le Concorde volait combien de fois plus vite que le son ?",
                    answer: [
                        {nom: "1.5x", res: false},
                        {nom: "2x", res: true},
                        {nom: "2.5x", res: false},
                        {nom: "3x", res: false}
                    ]
                },
                {
                    images: <Image source={require('./assetsData/Science/cut/QSC96.png')}/>,
                    title: "Quels ont été les tout premiers passager du vol initial habiter d'une montgolfière ?",
                    answer: [
                        {nom: "Un chien et un chat", res: false},
                        {nom: "Un coq, un mouton et un canard", res: true},
                        {nom: "Son créateur accompagner de sa femme", res: false},
                        {nom: "Son créateur accompagner de son chien", res: false}
                    ]
                },
                {
                    images: <Image source={require('./assetsData/Science/cut/QSC97.png')}/>,
                    title: "Un trou noir se forme suite à :",
                    answer: [
                        {nom: "L'explosion d'un astéroïde", res: false},
                        {nom: "Une faille dans l'espace", res: false},
                        {nom: "L'explosion d'une étoile", res: true},
                        {nom: "La déformation de l'espace par un trou de verre", res: false}
                    ]
                },
                {
                    images: <Image source={require('./assetsData/Science/cut/QSC98.png')}/>,
                    title: "A quand remonte la première carte détaillée de Mars ?",
                    answer: [
                        {nom: "1868", res: false},
                        {nom: "1874", res: false},
                        {nom: "1877", res: true},
                        {nom: "1920", res: false}
                    ]
                },
                {
                    images: <Image source={require('./assetsData/Science/cut/QSC99.png')}/>,
                    title: "L'effet de serre est un bienfait pour nous, il permet à la Terre d'avoir une température moyenne de 15 °C. S'il n'y avait pas ce complément de chauffage cette température chuterait à ... .",
                    answer: [
                        {nom: "-18 °C", res: true},
                        {nom: "-30 °C", res: false},
                        {nom: "-49 °C", res: false},
                        {nom: "-160 °C", res: false}
                    ]
                },
    ]
};
