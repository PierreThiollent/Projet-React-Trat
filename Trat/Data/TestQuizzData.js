import {Image} from "react-native";
import React from "react";

export const jsonTestData = {
    title: "testQuiz",
    questions: [
        {
            images: <Image source={require('./assetsData/CultureG/Quest1.png')}/>,
            title: "Quelle est la cause de la perte de capacité vocale du chanteur de Dream Theater ?",
            answer: [
                {nom: "Une grippe", res: false},
                {nom: "La cigarette", res: false},
                {nom: "Des crevettes", res: true},
                {nom: "Jean Lasalle", res: false}
            ]
        },
        {
            title: "Qu’a donné son nom à la rue massacre de Rouen?",
            answer: [
                {nom: "Jacques l’éventreur", res: false},
                {nom: "La bataille Francs - Vikings", res: false},
                {nom: "Le massacre de St Barthélemy ", res: false},
                {nom: "Les Bouchers", res: true}
            ]
        },
        {
            title: "Qui fut le premier Duc de Normandie?",
            answer: [
                {nom: "Jeanne D’arc", res: false},
                {nom: "Rollon, le Viking", res: true},
                {nom: "Jeanne Drac", res: false},
                {nom: "Guillaume le conquérant", res: false}
            ]
        },
        {
            title: "4",
            answer: [
                {nom: "1", res: false},
                {nom: "2", res: false},
                {nom: "3", res: true},
                {nom: "4", res: false}
            ]
        },
        {
            title: "5",
            answer: [
                {nom: "1", res: false},
                {nom: "2", res: false},
                {nom: "3", res: true},
                {nom: "4", res: false}
            ]
        },
        {
            title: "6",
            answer: [
                {nom: "1", res: false},
                {nom: "2", res: false},
                {nom: "3", res: true},
                {nom: "4", res: false}
            ]
        },
        {
            title: "7",
            answer: [
                {nom: "1", res: false},
                {nom: "2", res: false},
                {nom: "3", res: true},
                {nom: "4", res: false}
            ]
        },
        {
            title: "8",
            answer: [
                {nom: "1", res: false},
                {nom: "2", res: false},
                {nom: "3", res: true},
                {nom: "4", res: false}
            ]
        },
        {
            title: "9",
            answer: [
                {nom: "1", res: false},
                {nom: "2", res: false},
                {nom: "3", res: true},
                {nom: "4", res: false}
            ]
        },
        {
            title: "10",
            answer: [
                {nom: "1", res: false},
                {nom: "2", res: false},
                {nom: "3", res: true},
                {nom: "4", res: false}
            ]
        },
    ]
};