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
                {nom: "hurle", res: false},
                {nom: "blatère", res: false},
                {nom: "hennit", res: true},
                {nom: "rugit", res: false}
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
                {nom: "triangulaire", res: false},
                {nom: "cubique", res: true}
            ]
        },
    ]
};
