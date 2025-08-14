const waypoints = [

// ------------------- SUISSE ------------------- //

{
        name: "Barrage de Moiry",
        city: "Grimentz",
        difficulty: "Difficile et Extrêmement Difficile",
        characteristics: "Très athlétique, tyrolienne, splendide panorama. Avril-Novembre",
        viaFerrataDuration: "1h45",
        coord: "46'08'371,007'34'391",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/30-501-via-ferrata-barrage-de-moiry-grimentz-val-anniviers-valais-suisse.html"
},
{
        name: "Via Ferrata Farinetta",
        city: "Saillon",
        difficulty: "Très Difficile à Extrêmement difficile",
        characteristics: "En 3 parties. A ne pas mettre en toutes les mains.  Débute par un pont de singe",
        viaFerrataDuration: "2h45",
        coord: "46.10.938,007.11.236",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/69-527-via-ferrata-la-farinetta-saillon-valais-suisse.html"
},
{
        name: "Via Ferrata de Tière",
        city: "Champéry",
        difficulty: "En deux parties Facile puis Difficile",
        characteristics: "Deux passerelles sur la cascade. Simple mais passage de 2 m un peu physique",
        viaFerrataDuration: "0h35",
        coord: "46'10.630, 006'53.013",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/32-503-via-ferrata-tiere-champery-valais-suisse.html"
},
{
        name: "Via Ferrata Evolène",
        city: "Evolène",
        difficulty: "Extrêmement difficile",
        characteristics: "La 3 partie est hyper physique pas pour les débutants",
        viaFerrataDuration: "0h45",
        coord: "46’06.460, 007’30.242",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/44-513-via-ferrata-d-evol%C3%A8ne-evol%C3%A8ne-valais-suisse.html"
},
{
        name: "Via Ferrata de Jägihorn Weissmies",
        city: "Saas Fee",
        difficulty: "Très Difficile",
        characteristics: "Super panorama +3'000m. La difficulté vient de la longueur",
        viaFerrataDuration: "3h",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/42-511-via-ferrata-jagihorn-saas-fee-valais-suisse.html"
},
{
        name: "Via Ferrata Baltschiedertaler",
        city: "Baltschieder",
        difficulty: "Très Difficile",
        characteristics: "Une très longue ballade en haute montagne, peu équipée",
        viaFerrataDuration: "3h30",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/40-510-via-ferrata-de-baltschiedertaler-baltschieder-valais-suisse.html"
},
{
        name: "Via Ferrata de Loèche",
        city: "Loèche",
        difficulty: "Très Difficile",
        characteristics: "Des pieux à la place de marches Nombreuses chutes de pierres",
        viaFerrataDuration: "6h",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/52-517-viaferrata-loeche-loeche-valais-suisse.html"
},
{
        name: "Via Ferrata du Belvédère",
        city: "Nax",
        difficulty: "Facile - Initiation",
        characteristics: "Ouverte toute l'année. Très bien pour l'initiation et pour une première.",
        viaFerrataDuration: "1h",
        coord: "46.13.454, 007.25.166",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/50-516-via-ferrata-le-belv%C3%A9d%C3%A8re-nax-valais-suisse.html"},
{
        name: "Via Ferata Schweifine",
        city: "Zermatt",
        difficulty: "Difficile",
        characteristics: "3 parcours possibles de peu difficile à difficile. Au centre de la station.",
        viaFerrataDuration: "9h",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/57-521-via-ferrata-schweifine-zermatt-valais-suisse.html"
},
{
        name: "Via Ferrata Gabi",
        city: "Simplon",
        difficulty: "Difficile",
        characteristics: "A quelques km du col du Simplon Vertigineuse",
        viaFerrataDuration: "1h30",
        coord: "46.184645, 8.073434",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/130-528-via-ferrata-gabi-simplon-valais-suisse.html"
},
{
        name: "Via Ferrata Cascade",
        city: "Les Diablerets",
        difficulty: "Extrêmement difficile",
        characteristics: "Fort à Bras, passe dans les rochers Tyrolienne possible",
        viaFerrataDuration: "1h30",
        coord: "46’20.998, 007’12.157",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/33-504-via-ferrata-de-la-cascade-les-diablerets-vaud-suisse.html"},
{
        name: "Via Ferrata Tête Chamois Rocher Jaune",
        city: "Les Diablerets",
        difficulty: "Difficile",
        characteristics: "En haute montagne, belle traversée. Actuellement Fermée!",
        viaFerrataDuration: "2h30",
        coord: "46’20.357, 007’12.854",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/31-502-via-ferrata-rocher-jaune-les-diablerets-vaud-suisse.html"
},
{
        name: "Via Ferrata des Dames Anglaises",
        city: "Les Diablerets",
        difficulty: "Difficile",
        characteristics: "Via de haute montagne. Endurance! Juin à Octobre",
        viaFerrataDuration: "1h",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/286-530-via-ferrata-des-dames-anglaises-les-diablerets-vaud-suisse.html"
},
{
        name: "Via Ferrata La Tour d'Ai",
        city: "Leysin",
        difficulty: "Difficile",
        characteristics: "Pour débutant si accompagné. Difficile au départ. Vertigineux.",
        viaFerrataDuration: "1h15",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/34-505-via-ferrata-tour-d-ai-leysin-vaud-suisse.html"
},
{
        name: "Via Ferrata Planpraz",
        city: "Leysin",
        difficulty: "Extrêmement Difficile",
        characteristics: "Tout en force et en surplomb Dans le village de Leysin",
        viaFerrataDuration: "1h15",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/53-518-via-ferrata-plan-praz-leysin-vaud-suisse.html"
},
{
        name: "Ferrata Videmanette 1-2",
        city: "Rougemont",
        difficulty: "Initiation",
        characteristics: "Hyper Facile - Courte Au sommet du Téléphérique",
        viaFerrataDuration: "0h15",
        coord: "46'27.666, 007 12.444",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/35-506-via-ferrata-videmanette-initiation-rougemont-vaud-suisse.html"
},
{
        name: "Via Ferrata Videmanette 3",
        city: "Rougemont",
        difficulty: "Très Difficile",
        characteristics: "Vertigineuse - A bras Au sommet du Téléphérique",
        viaFerrataDuration: "0h45",
        coord: "46'27.666, 007 12.444",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/36-507-via-ferra-videmanette-3-rougemont-vaud-suisse.html"
},
{
        name: "Via Ferrata la Splendide",
        city: "Rocher de Naye",
        difficulty: "Extrêmement difficile",
        characteristics: "Superbe, Magnifique panorama, physique, contact avec les rochers",
        viaFerrataDuration: "1h30",
        coord: "46.436587848039, 6.9806818993206",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/56-522-rochers-de-naye-montreux-vaud.html"
},
{
        name: "Via Ferrata du Lavanchy",
        city: "Pont de Nant Bex",
        difficulty: "Difficile",
        characteristics: "Très courte mais physique avec du gaz. Avril à novembre",
        viaFerrataDuration: "0h15",
        coord: "46.15.473, 0.07.309",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/171-529-via-ferrata-du-lavanchy-pont-de-nant-plan-sur-bex-vaud-suisse.html"
},
{
        name: "Via Ferrata Tälli",
        city: "Meiringen",
        difficulty: "Initiation Très Difficile",
        characteristics: "2 parcours: Enfants et Pros!",
        viaFerrataDuration: "6h30",
        coord: "46.740148, 8.328353",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/37-508-via-ferrata-de-meiringen-meiringen-berne-suisse.html"
},
{
        name: "Via Ferrata Allmenalp",
        city: "Kandersteg",
        difficulty: "Extrêmement Difficile",
        characteristics: "Des pieux à la place de marches! Exige de l'expérience",
        viaFerrataDuration: "3h",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/54-519-via-ferrata-allmenalp-kandersteg-berne-suisse.html"
},
{
        name: "Klettersteig Gantrisch",
        city: "Gantrisch",
        difficulty: "Difficile",
        characteristics: "Du 15 juin à la fin octobre Compte 5 heures",
        viaFerrataDuration: "2h",
        coord: "46°43'20.6, 7°26'44.6",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/59-524-via-ferrata-gantrisch-gantrisch-berne-suisse.html"
},
{
        name: "Voie Hohl La Face",
        city: "Moléson",
        difficulty: "Très Difficile",
        characteristics: "Pas pour débutant 1 surplomb très difficile",
        viaFerrataDuration: "2h30",
        coord: "46'33'363, 007'33'363",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/45-514-via-ferrata-voie-hohl-la-face-moleson-fribourg-suisse.html"
},
{
        name: "Voie Hohl Le Pilier",
        city: "Moléson",
        difficulty: "Difficile",
        characteristics: "Aérienne Le long d'une arrête (Payante)",
        viaFerrataDuration: "2h",
        coord: "46'33'363, 007'33'363",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/46-515-via-ferrata-le-pillier-moleson-gruyere-fribourg-suisse.html"
},
{
        name: "Via Ferrata Tichodome",
        city: "Noiraigue",
        difficulty: "Initiation, pour enfants et débutants",
        characteristics: "Ouverte uniquement de juillet à Décembre",
        viaFerrataDuration: "1h",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/43-512-via-ferrata-tichodrome-noiraigue-val-de-travers-neuchatel-suisse.html"
},
{
        name: "Via Ferrata Eggstock",
        city: "Braunwald",
        difficulty: "Extrêmement difficile pour la partie Super Man",
        characteristics: "3 parties. Très longue. Compte 5h30 pour la version totale",
        viaFerrataDuration: "5h30",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/60-526-via-ferrata-eggstock-braunwald-gunen-glaris-suisse.html"
},
{
        name: "Via Ferrata Diavolo",
        city: "Andermatt",
        difficulty: "Initiation",
        characteristics: "Parfait pour les enfants et les débutants",
        viaFerrataDuration: "1h30",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/38-509-via-ferrata-diavolo-andermatt-uri-suisse.html"
},
{
        name: "Via Ferrata Kröntenhütte",
        city: "Erstfeld Bodenberg",
        difficulty: "Très difficile",
        characteristics: "Tyrolienne au-dessus de la cascade Juin à fin septembre",
        viaFerrataDuration: "",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/342-531-via-ferrata-krontenhutte-erstfeld-bodenberg-uri-suisse.html"
},
{
        name: "Via Ferrata Fruttstiege Fruttstägä",
        city: "Bürglen",
        difficulty: "Difficile",
        characteristics: "",
        viaFerrataDuration: "1h",
        coord: "46.87676821, 8.6819458",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/343-532-via-ferrata-fruttstaga-fruttstiege-burglen-uri-suisse.html"
},
{
        name: "Via Ferrata Salvatore",
        city: "Lugano",
        difficulty: "Très Difficile",
        characteristics: "Pour les personnes expérimentées",
        viaFerrataDuration: "1h",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/55-520-via-ferrata-san-salvatore-paradiso-tessin-suisse.html"
},
{
        name: "Via Ferrata Dei Tre Signori",
        city: "Mornera",
        difficulty: "Difficile Très Difficile",
        characteristics: "Deux parcours possibles. Prendre la télécabine. Possible dormir cabane.",
        viaFerrataDuration: "2h",
        coord: "",
        link: "https://www.viaferrata.com/fr/via-ferrata-fr/via-ferrata-suisse-fr/via-ferrata-suisse-fr/362-533-via-ferrata-dei-tre-signori-mornera-tessin-suisse.html"
},
{
        name: "Via Ferrata Pinut",
        city: "Flims",
        difficulty: "Facile",
        characteristics: "La plus vieille via ferrata en Suisse (1900) Passages suspendus",
        viaFerrataDuration: "2h30",
        coord: "",
        link: "https://www.sac-cas.ch/fr/cabanes-et-courses/portail-des-courses-du-cas/flimser-stein-7092/via-ferrata/via-ferrata-pinut-708/"
},
{
        name: "Via Ferrata de la Sulzlfluh",
        city: "Sankt Antonien",
        difficulty: "Très Difficile",
        characteristics: "Nombreux contacts avec le rocher",
        viaFerrataDuration: "2h30",
        coord: "",
        link: "https://www.sac-cas.ch/fr/cabanes-et-courses/portail-des-courses-du-cas/sulzfluh-1911/via-ferrata/via-ferrata-de-la-sulzfluh-675/"
},
{
        name: "klettersteig Flimspitz",
        city: "Samnaun",
        difficulty: "Facile",
        characteristics: "200m de long à 2'900 m. A l'arrivée des remontées",
        viaFerrataDuration: "0h45",
        coord: "",
        link: "https://www.sac-cas.ch/fr/cabanes-et-courses/portail-des-courses-du-cas/greitspitz-7435/via-ferrata/via-ferrata-du-greitspitz-677/"
},
{
        name: "Klettersteig de La Resgia",
        city: "Pontresina",
        difficulty: "Difficile",
        characteristics: "Sportive et Aérienne",
        viaFerrataDuration: "1h30",
        coord: "",
        link: "https://www.sac-cas.ch/fr/cabanes-et-courses/portail-des-courses-du-cas/la-resgia-7790/via-ferrata/via-ferrata-de-la-resgia-709/"
},
{
        name: "Klettersteig Piz Trovat",
        city: "Col de la Bernina",
        difficulty: "Difficile",
        characteristics: "Aérienne",
        viaFerrataDuration: "1h45",
        coord: "",
        link: "https://www.sac-cas.ch/fr/cabanes-et-courses/portail-des-courses-du-cas/piz-trovat-2035/via-ferrata/via-ferrata-du-piz-trovat-678/"
},










// ------------------- FRANCE ------------------- //







{
        name: "La Guinguette",
        city: "La Guinguette, Hostias",
        difficulty: "PD ou AD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 700m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h15",
        coord: "",
        link: ""
},
{
        name: "Fort l'Ecluse",
        city: "Fort l'Ecluse, Léaz",
        difficulty: "AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 400m</span><br><span style='margin-left: 20px;'>Approche : 0h03</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "0h45",
        coord: "",
        link: ""
},
{
        name: "Les Gorges du Haut Cher",
        city: "Les Gorges du Haut Cher, Lignerolles",
        difficulty: "PD / PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 200m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Le Rocher de Neuf Heures",
        city: "Le Rocher de Neuf Heures, Digne-les-Bains",
        difficulty: "AD / AD+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 500m</span><br><span style='margin-left: 20px;'>Approche : 0h40</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "La Grande Fistoire",
        city: "La Grande Fistoire, Le Caire",
        difficulty: "AD / D+ / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 500m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3 / 4 / 4</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "Saint Ours",
        city: "Saint Ours, Meyronnes",
        difficulty: "PD // D // TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1170m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "5h00",
        coord: "",
        link: ""
},
{
        name: "La Falaise de Meichira",
        city: "La Falaise de Meichira, Prads-Haute-Bléone",
        difficulty: "AD / AD+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h40</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "3h30",
        coord: "",
        link: ""
},
{
        name: "Les Ammonites",
        city: "Les Ammonites, Le Caire",
        difficulty: "PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 280m</span><br><span style='margin-left: 20px;'>Approche : 0h00</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "0h45",
        coord: "",
        link: ""
},
{
        name: "La Crête de Combe La Roche",
        city: "La Crête de Combe La Roche, Arvieux",
        difficulty: "D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 460m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Pra-Premier",
        city: "Pra-Premier, Arvieux",
        difficulty: "AD ou D - AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 400m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "La Croix de Toulouse",
        city: "La Croix de Toulouse, Briançon",
        difficulty: "PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 370m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 0h40</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "L'Arête de la Schappe",
        city: "L'Arête de la Schappe, Briançon",
        difficulty: "PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 175m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "0h50",
        coord: "",
        link: ""
},
{
        name: "Les Rochers de la Clapière",
        city: "Les Rochers de la Clapière, Ceillac",
        difficulty: "AD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 500m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Le Rocher Blanc",
        city: "Le Rocher Blanc, Chantemerle",
        difficulty: "PD ou D+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 350m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h35</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "0h45",
        coord: "",
        link: ""
},
{
        name: "Fort Queyras",
        city: "Fort Queyras, Château-Ville-Vieille",
        difficulty: "F",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 800m</span><br><span style='margin-left: 20px;'>Approche : 0h01</span><br><span style='margin-left: 20px;'>Retour : 0h05</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "0h45",
        coord: "",
        link: ""
},
{
        name: "La Grande Falaise",
        city: "La Grande Falaise, Freissinières",
        difficulty: "AD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1000m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "3h00",
        coord: "",
        link: ""
},
{
        name: "Les Gorges d'Agnielles",
        city: "Les Gorges d'Agnielles, La Faurie",
        difficulty: "AD+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 500m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "0h50",
        coord: "",
        link: ""
},
{
        name: "Les Mines du Grand Clôt",
        city: "Les Mines du Grand Clôt, La Grave",
        difficulty: "D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 2000m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 1h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "3h00",
        coord: "",
        link: ""
},
{
        name: "Les Gorges de la Durance",
        city: "Les Gorges de la Durance, L'Argentière-la-Bessée",
        difficulty: "AD / F / F // AD // TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1800m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Gaz (/4) : 4</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "L'Horloge",
        city: "L'Horloge, L'Argentière-la-Bessée",
        difficulty: "PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 150m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "0h20",
        coord: "",
        link: ""
},
{
        name: "Marcelinas",
        city: "Marcelinas, Les Orres",
        difficulty: "AD ou PD / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 500m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "La Cascade",
        city: "La Cascade, Les Orres",
        difficulty: "D / TD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 800m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Gaz (/4) : 4</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h20",
        coord: "",
        link: ""
},
{
        name: "Les Vigneaux",
        city: "Les Vigneaux, Les Vigneaux",
        difficulty: "PD - PD ou D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 500m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2 ou 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "L'Aiguilette du Lauzet",
        city: "L'Aiguilette du Lauzet, Monêtier-les-Bains",
        difficulty: "PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1000m</span><br><span style='margin-left: 20px;'>Approche : 1h00</span><br><span style='margin-left: 20px;'>Retour : 1h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "L'Yret (ou Pointe des Meyzets)",
        city: "L'Yret (ou Pointe des Meyzets), Monêtier-les-Bains",
        difficulty: "PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1000m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 1h00</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "La Pointe de Charra",
        city: "La Pointe de Charra, Plampinet",
        difficulty: "PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1000m</span><br><span style='margin-left: 20px;'>Approche : 3h00</span><br><span style='margin-left: 20px;'>Retour : 2h00</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Le sentier de la Combe",
        city: "Le sentier de la Combe, Puy-Saint-Vincent",
        difficulty: "F ou PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h25</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h05",
        coord: "",
        link: ""
},
{
        name: "Tournoux",
        city: "Tournoux, Puy-Saint-Vincent",
        difficulty: "AD / PD / PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Le défilé des Etroits",
        city: "Le défilé des Etroits, Saint-Etienne-en-Dévoluy",
        difficulty: "PD ou D / D+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1100m</span><br><span style='margin-left: 20px;'>Approche : 0h01</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2 / 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "La Montagne de Céüse",
        city: "La Montagne de Céüse, Sigoyer",
        difficulty: "AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 60m</span><br><span style='margin-left: 20px;'>Approche : 1h30</span><br><span style='margin-left: 20px;'>Retour : 2h00</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "0h20",
        coord: "",
        link: ""
},
{
        name: "Arsine",
        city: "Arsine, Villar-d'Arêne",
        difficulty: "PD / PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 300m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Le Rocher du Bez",
        city: "Le Rocher du Bez, Villeneuve-la-Salle",
        difficulty: "F / F // F / F",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 350m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Le Rocher d’Arthouze",
        city: "Le Rocher d’Arthouze, Orcières",
        difficulty: "F / PD / AD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 500m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Les Gorges d’Ailefroide",
        city: "Les Gorges d’Ailefroide, Pelvoux",
        difficulty: " ",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée :  m</span><br><span style='margin-left: 20px;'>Approche : 0h00</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Rouanne",
        city: "Rouanne, Ancelle",
        difficulty: "PD - AD - D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée :  m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h25</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "Via Souterrata de la Tune",
        city: "Via Souterrata de la Tune, Saint-Etienne-en-Dévoluy",
        difficulty: "AD+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 200m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "La Traditionnelle",
        city: "La Traditionnelle, Auron",
        difficulty: "F / D / AD / D / TD / D / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1900m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2 à 3</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "3h30",
        coord: "",
        link: ""
},
{
        name: "Via souterrata",
        city: "Via souterrata, Caille",
        difficulty: "AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 350m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "La Ciappéa",
        city: "La Ciappéa, La Brigue",
        difficulty: "D+ / D / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Le Baus de la Frema",
        city: "Le Baus de la Frema, La Colmiane",
        difficulty: "De D+ à TD (6)",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1900m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "4h30",
        coord: "",
        link: ""
},
{
        name: "Les Canyons de Lantosque",
        city: "Les Canyons de Lantosque, Lantosque",
        difficulty: "F / AD / AD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1200m</span><br><span style='margin-left: 20px;'>Approche : 0h02</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "L'Escale",
        city: "L'Escale, Peille",
        difficulty: "D / TD / D / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 750m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Les Demoiselles du Castagnet",
        city: "Les Demoiselles du Castagnet, Puget-Théniers",
        difficulty: "D+ / D / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 750m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "La Balma Negra",
        city: "La Balma Negra, Roubion",
        difficulty: "AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 250m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Les Hérétiques",
        city: "Les Hérétiques, Tende",
        difficulty: "D / D / D / TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1000m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Le Pont du Diable",
        city: "Le Pont du Diable, Thueyts",
        difficulty: "AD+ // D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 490m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Les Estagnous",
        city: "Les Estagnous, Castillon-en-Couserans",
        difficulty: "AD / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 620m</span><br><span style='margin-left: 20px;'>Approche : 3h30</span><br><span style='margin-left: 20px;'>Retour : 3h30</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Vicdessos",
        city: "Vicdessos, Vicdessos",
        difficulty: "F / PD // D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 350m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "La porte des gorges du Tarn",
        city: "La porte des gorges du Tarn, Liaucous",
        difficulty: "PD ou TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1000m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Le Boffi",
        city: "Le Boffi, Millau",
        difficulty: "PD - PD ou D - TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1100m</span><br><span style='margin-left: 20px;'>Approche : 0h25</span><br><span style='margin-left: 20px;'>Retour : 0h25</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Les Bois des Baltuergues",
        city: "Les Bois des Baltuergues, Sainte-Geneviève-sur-Argence",
        difficulty: "AD / AD ou D / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 800m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h05</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "Roc del Gorb",
        city: "Roc del Gorb, Bor-et-Bar",
        difficulty: "PD - D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 450m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "La Cambronnerie",
        city: "La Cambronnerie, Clécy",
        difficulty: "AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 250m</span><br><span style='margin-left: 20px;'>Approche : 0h01</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "0h45",
        coord: "",
        link: ""
},
{
        name: "Le Lac des Graves",
        city: "Le Lac des Graves, Lascelle",
        difficulty: "AD ou D - AD / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 320m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "La Dordogne",
        city: "La Dordogne, Saint-Martial Entraygues",
        difficulty: "AD - AD - AD+ - D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 400m</span><br><span style='margin-left: 20px;'>Approche : 0h00</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "1h20",
        coord: "",
        link: ""
},
{
        name: "Les échelles de la mort",
        city: "Les échelles de la mort, Combe-Saint-Pierre",
        difficulty: "AD / AD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 500m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h20",
        coord: "",
        link: ""
},
{
        name: "Val de Consolation",
        city: "Val de Consolation, Consolation-Maisonnettes",
        difficulty: "F // AD // D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 200m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Les Baumes du Verneau",
        city: "Les Baumes du Verneau, Nans-sous-Sainte-Anne",
        difficulty: "F / PD / AD / TD ou ED",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1400m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1 / 2 / 2 / 3</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "1h50",
        coord: "",
        link: ""
},
{
        name: "La Roche du Mont",
        city: "La Roche du Mont, Ornans",
        difficulty: "AD / AD / AD // ED+ / ED",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 530m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2 // 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h15",
        coord: "",
        link: ""
},
{
        name: "Saint Julien",
        city: "Saint Julien, Buis-les-Baronnies",
        difficulty: "PD // D // D+ // D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1710m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2 / 3 / 3 / 4</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "5h00",
        coord: "",
        link: ""
},
{
        name: "Le Pas de l'Echelle",
        city: "Le Pas de l'Echelle, Chalancon",
        difficulty: "AD / AD+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 650m</span><br><span style='margin-left: 20px;'>Approche : 0h01</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h15",
        coord: "",
        link: ""
},
{
        name: "Chironne",
        city: "Chironne, Chamaloc",
        difficulty: "D / TD / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 500m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Le Claps",
        city: "Le Claps, Luc-En-Diois",
        difficulty: "AD / AD+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 650m</span><br><span style='margin-left: 20px;'>Approche : 0h01</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h10",
        coord: "",
        link: ""
},
{
        name: "La Berche",
        city: "La Berche, Lus-la-Croix-Haute",
        difficulty: "AD - D ou F / AD / F",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 650m</span><br><span style='margin-left: 20px;'>Approche : 0h00</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "2h15",
        coord: "",
        link: ""
},
{
        name: "Péri",
        city: "Péri, Péri",
        difficulty: "AD / PD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée :  m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 1h30</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "Tolla",
        city: "Tolla, Tolla",
        difficulty: "PD / AD / F",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1000m</span><br><span style='margin-left: 20px;'>Approche : 0h00</span><br><span style='margin-left: 20px;'>Retour : 0h00</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "Tafunatu di Paliri",
        city: "Tafunatu di Paliri, Zonza",
        difficulty: "D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée :  m</span><br><span style='margin-left: 20px;'>Approche : 2h10</span><br><span style='margin-left: 20px;'>Retour : 2h10</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "U Calanconi",
        city: "U Calanconi, Chisa",
        difficulty: "PD / D / D / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 400m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "Les Gorges du Gardon",
        city: "Les Gorges du Gardon, Collias",
        difficulty: "AD - AD ou D / AD / TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 320m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Le Rocher de l'Aigle",
        city: "Le Rocher de l'Aigle, Méjannes-le-Clap",
        difficulty: "AD / PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 150m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "0h30",
        coord: "",
        link: ""
},
{
        name: "Thaurac",
        city: "Thaurac, Saint-Bauzille-de-Putois",
        difficulty: "D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 400m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "La Roque (Vidourle)",
        city: "La Roque (Vidourle), Saint-Sériès",
        difficulty: "D / TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 260m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h15",
        coord: "",
        link: ""
},
{
        name: "La Cascade",
        city: "La Cascade, Alpe-du-Grand-Serre",
        difficulty: "F / F / PD / PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 500m</span><br><span style='margin-left: 20px;'>Approche : 0h02</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Le Grand Bec",
        city: "Le Grand Bec, Alpe-du-Grand-Serre",
        difficulty: "AD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 750m</span><br><span style='margin-left: 20px;'>Approche : 0h55</span><br><span style='margin-left: 20px;'>Retour : 1h45</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1 / 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h05",
        coord: "",
        link: ""
},
{
        name: "Le Rocher des 3 Fontaines",
        city: "Le Rocher des 3 Fontaines, Chamrousse",
        difficulty: "PD / AD / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 350m</span><br><span style='margin-left: 20px;'>Approche : 1h45</span><br><span style='margin-left: 20px;'>Retour : 0h50</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Les Lacs Robert",
        city: "Les Lacs Robert, Chamrousse",
        difficulty: "AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 300m</span><br><span style='margin-left: 20px;'>Approche : 1h50</span><br><span style='margin-left: 20px;'>Retour : 1h00</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Le Lac du Sautet",
        city: "Le Lac du Sautet, Corps",
        difficulty: "PD / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1400m</span><br><span style='margin-left: 20px;'>Approche : 0h01</span><br><span style='margin-left: 20px;'>Retour : 0h02</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "3h00",
        coord: "",
        link: ""
},
{
        name: "Le Belvédère du Sautet",
        city: "Le Belvédère du Sautet, Corps",
        difficulty: "F // PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 130m</span><br><span style='margin-left: 20px;'>Approche : 0h01</span><br><span style='margin-left: 20px;'>Retour : 0h01</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "0h30",
        coord: "",
        link: ""
},
{
        name: "La Cascade de l'Oule",
        city: "La Cascade de l'Oule, Crolles",
        difficulty: "AD - D ou ED",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 800m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3 - 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Les Prises de la Bastille",
        city: "Les Prises de la Bastille, Grenoble",
        difficulty: "D // D / AD ou D / AD ou TD - AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 950m</span><br><span style='margin-left: 20px;'>Approche : 0h02</span><br><span style='margin-left: 20px;'>Retour : 0h25</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1 // 2</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "1h20",
        coord: "",
        link: ""
},
{
        name: "Les Gorges de Sarenne",
        city: "Les Gorges de Sarenne, L'Alpe-d'Huez",
        difficulty: "PD ou D+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 300m</span><br><span style='margin-left: 20px;'>Approche : 0h25</span><br><span style='margin-left: 20px;'>Retour : 0h05</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2 / 3</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "0h50",
        coord: "",
        link: ""
},
{
        name: "Les Perrons",
        city: "Les Perrons, Les Deux Alpes / Venosc",
        difficulty: "D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 900m</span><br><span style='margin-left: 20px;'>Approche : 1h00</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "St Christophe en Oisans",
        city: "St Christophe en Oisans, Saint-Christophe-en-Oisans",
        difficulty: "D / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1200m</span><br><span style='margin-left: 20px;'>Approche : 0h02</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "La Cascade de la Pisse",
        city: "La Cascade de la Pisse, Mizoen",
        difficulty: "D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 350m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 1h00</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Cascade de la Fare",
        city: "Cascade de la Fare, Vaujany",
        difficulty: "D / D+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 500m</span><br><span style='margin-left: 20px;'>Approche : 0h25</span><br><span style='margin-left: 20px;'>Retour : 1h00</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h20",
        coord: "",
        link: ""
},
{
        name: "Le Rocher de l’Envers",
        city: "Le Rocher de l’Envers, Saint-Vincent-de-Mercuze",
        difficulty: "AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 290m</span><br><span style='margin-left: 20px;'>Approche : 0h40</span><br><span style='margin-left: 20px;'>Retour : 0h40</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "0h40",
        coord: "",
        link: ""
},
{
        name: "Le Regardoir",
        city: "Le Regardoir, Moirans-en-Montagne",
        difficulty: "AD à D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 350m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h05</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "La Roche du Dade",
        city: "La Roche du Dade, Morez",
        difficulty: "AD / D / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 650m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Les Pillots",
        city: "Les Pillots, Planfoy",
        difficulty: "F",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 250m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Planfoy",
        city: "Planfoy, Planfoy",
        difficulty: "AD / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h45</span><br><span style='margin-left: 20px;'>Retour : 0h35</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Puy des Juscles",
        city: "Puy des Juscles, Le Pertuis",
        difficulty: "F / PD ou AD (4 échappatoires)",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 425m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Les Rochers de la Miramande",
        city: "Les Rochers de la Miramande, Saint-Jean-Lachalm",
        difficulty: "AD / AD / PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 950m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "1h15",
        coord: "",
        link: ""
},
{
        name: "Rousses",
        city: "Rousses, Rousses",
        difficulty: "F ou PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée :  m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Le Lac de Villefort",
        city: "Le Lac de Villefort, Villefort",
        difficulty: "F ou D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 350m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "Roqueprins",
        city: "Roqueprins, La Canourgue",
        difficulty: "AD ou D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 110m</span><br><span style='margin-left: 20px;'>Approche : 0h00</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Le Rocher de Moïse",
        city: "Le Rocher de Moïse, Mende",
        difficulty: "F - TD ou F / F",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 185m</span><br><span style='margin-left: 20px;'>Approche : 0h25</span><br><span style='margin-left: 20px;'>Retour : 0h40</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Malzieu",
        city: "Malzieu, Malzieu",
        difficulty: "AD ou TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée :  m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "Florac",
        city: "Florac, Florac",
        difficulty: "AD / ED",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 800m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "Le Capucin",
        city: "Le Capucin, Le Mont-Dore",
        difficulty: "PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 400m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Siala",
        city: "Siala, Eaux-Bonnes",
        difficulty: "PD / F - (PD / D ) ou (TD)",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 320m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Les Alias",
        city: "Les Alias, Cauterets",
        difficulty: "F ou TD - AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1500m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "Chaos de Coumély",
        city: "Chaos de Coumély, Gavarnie",
        difficulty: "PD - TD ou TD+ - PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 400m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "Le Pont Napoléon",
        city: "Le Pont Napoléon, Luz-Saint-Sauveur",
        difficulty: "D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 150m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h01</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Les Escaldilles",
        city: "Les Escaldilles, Llo",
        difficulty: "AD - AD ou D+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 800m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Fenouillèdes - La Panoramique",
        city: "Fenouillèdes - La Panoramique, Saint-Paul-de-Fenouillet",
        difficulty: "AD - D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 900m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h50</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "3h00",
        coord: "",
        link: ""
},
{
        name: "Fenouillèdes - La Pichona",
        city: "Fenouillèdes - La Pichona, Saint-Paul-de-Fenouillet",
        difficulty: "F",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 150m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Les bourtes",
        city: "Les bourtes, La Plagne",
        difficulty: "AD / AD+ / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h45</span><br><span style='margin-left: 20px;'>Retour : 1h00</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Le Grand Vallon",
        city: "Le Grand Vallon, Valfrejus",
        difficulty: "AD / D / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 300m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h00</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "La Tête de Cheval",
        city: "La Tête de Cheval, Aiguebelette-le-Lac",
        difficulty: "AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 330m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Le Nant de Rossane",
        city: "Le Nant de Rossane, Aillon-le-Jeune",
        difficulty: "AD / F / AD ou D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 300m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "L'école Buissonnière",
        city: "L'école Buissonnière, Aussois",
        difficulty: "AD / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 150m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h05</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Le Diable",
        city: "Le Diable, Aussois",
        difficulty: "AD // D // D // D // D // AD // PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 3760m</span><br><span style='margin-left: 20px;'>Approche : 0h00</span><br><span style='margin-left: 20px;'>Retour : 0h00</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "8h00",
        coord: "",
        link: ""
},
{
        name: "Le Roc du Vent",
        city: "Le Roc du Vent, Beaufort",
        difficulty: "AD // AD+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 850m</span><br><span style='margin-left: 20px;'>Approche : 0h35</span><br><span style='margin-left: 20px;'>Retour : 0h40</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h15",
        coord: "",
        link: ""
},
{
        name: "Le Roc du Cornillon",
        city: "Le Roc du Cornillon, Bourdeau",
        difficulty: "PD / AD / PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 370m</span><br><span style='margin-left: 20px;'>Approche : 0h25</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "0h50",
        coord: "",
        link: ""
},
{
        name: "Le Plan du Bouc",
        city: "Le Plan du Bouc, Champagny-en-Vanoise",
        difficulty: "PD ou AD / PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 900m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 0h50</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Les Grosses Pierres",
        city: "Les Grosses Pierres, Champagny-en-Vanoise",
        difficulty: "TD+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 200m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "0h50",
        coord: "",
        link: ""
},
{
        name: "La Croix des Verdons",
        city: "La Croix des Verdons, Courchevel",
        difficulty: "D / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 800m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Le Pichet",
        city: "Le Pichet, Lanslevillard",
        difficulty: "PD / AD+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 350m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Le Levassaix",
        city: "Le Levassaix, Levassaix",
        difficulty: "PD / PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 450m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h40</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Andagne",
        city: "Andagne, Le Villaron",
        difficulty: "AD / PD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1000m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 1h00</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Le Lac de la Rosière",
        city: "Le Lac de la Rosière, Moriond",
        difficulty: "PD / PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Les Bettières",
        city: "Les Bettières, Peisey-Nancroix",
        difficulty: "PD / AD / D+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h50</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2 / 3 / 3</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "L'Adret",
        city: "L'Adret, Pontamafrey-Montpascal",
        difficulty: "D // TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 450m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Gaz (/4) : 4 / 4</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "La Cascade de la Fraîche",
        city: "La Cascade de la Fraîche, Pralognan-la-Vanoise",
        difficulty: "AD - PD ou AD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 300m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Le Ouistiti",
        city: "Le Ouistiti, Pralognan-la-Vanoise",
        difficulty: "F",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 70m</span><br><span style='margin-left: 20px;'>Approche : 0h00</span><br><span style='margin-left: 20px;'>Retour : 0h00</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "0h20",
        coord: "",
        link: ""
},
{
        name: "La Chal",
        city: "La Chal, Saint-Colomban-des Villards",
        difficulty: "AD+ / D+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 4</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h30",
        coord: "",
        link: ""
},
{
        name: "Le Rocher de Capaillan",
        city: "Le Rocher de Capaillan, Saint-Colomban-des Villards",
        difficulty: "F // PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 130m</span><br><span style='margin-left: 20px;'>Approche : 0h01</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "0h30",
        coord: "",
        link: ""
},
{
        name: "Savoie Grand Revard",
        city: "Savoie Grand Revard, Saint Jean d'Arvey",
        difficulty: "D+ ou ED+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 450m</span><br><span style='margin-left: 20px;'>Approche : 1h00</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 4 ou 4</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Le Fort du Télégraphe",
        city: "Le Fort du Télégraphe, Saint Martin d'Arc",
        difficulty: "D // AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 900m</span><br><span style='margin-left: 20px;'>Approche : 0h45</span><br><span style='margin-left: 20px;'>Retour : 2h00</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "3h00",
        coord: "",
        link: ""
},
{
        name: "Le Cochet",
        city: "Le Cochet, Saint-Martin-de-Belleville",
        difficulty: "AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 750m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "3h00",
        coord: "",
        link: ""
},
{
        name: "La Roche Veyrand",
        city: "La Roche Veyrand, Saint-Pierre-d'Entremont",
        difficulty: "AD / AD / TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 900m</span><br><span style='margin-left: 20px;'>Approche : 0h40</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2 / 4</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "La Comborcière",
        city: "La Comborcière, Saint-Sorlin-d'Arves",
        difficulty: "AD / PD ou D / PD ou AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 260m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Le Golet de la Trouye",
        city: "Le Golet de la Trouye, Ugine",
        difficulty: "PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée :  m</span><br><span style='margin-left: 20px;'>Approche : 1h00</span><br><span style='margin-left: 20px;'>Retour : 2h00</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Le Pas de l'Ours",
        city: "Le Pas de l'Ours, Ugine",
        difficulty: "PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 250m</span><br><span style='margin-left: 20px;'>Approche : 1h30</span><br><span style='margin-left: 20px;'>Retour : 2h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Le Roc de Tovière",
        city: "Le Roc de Tovière, Val-d'Isère",
        difficulty: "PD / D / ED",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1400m</span><br><span style='margin-left: 20px;'>Approche : 0h01</span><br><span style='margin-left: 20px;'>Retour : 1h00</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3 / 3 / 4</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "3h00",
        coord: "",
        link: ""
},
{
        name: "Les Plates de la Daille",
        city: "Les Plates de la Daille, Val-d'Isère",
        difficulty: "TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 699m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h35</span><br><span style='margin-left: 20px;'>Gaz (/4) : 4</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Le rocher Saint Pierre",
        city: "Le rocher Saint Pierre, Valloire",
        difficulty: "TD / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 800m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "Poingt Ravier",
        city: "Poingt Ravier, Valloire",
        difficulty: "PD - PD+ ou PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h02</span><br><span style='margin-left: 20px;'>Retour : 0h25</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "La Madeleine",
        city: "La Madeleine, Lanslevillard",
        difficulty: "AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 400m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Le Saix du Tour",
        city: "Le Saix du Tour, Avoriaz",
        difficulty: "F / AD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "La Grotte du Maquis",
        city: "La Grotte du Maquis, Gruffy",
        difficulty: "F",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée :  m</span><br><span style='margin-left: 20px;'>Approche : 0h40</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "0h20",
        coord: "",
        link: ""
},
{
        name: "Le Saix de Miolène",
        city: "Le Saix de Miolène, La Chapelle-d'Abondance",
        difficulty: "AD+ / TD / TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 900m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2 / 3 / 4</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "3h00",
        coord: "",
        link: ""
},
{
        name: "La Yves Pollet Villard",
        city: "La Yves Pollet Villard, La Clusaz",
        difficulty: "D / F ou D+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 700m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Gaz (/4) : 4</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "3h00",
        coord: "",
        link: ""
},
{
        name: "La Tour du Jalouvre",
        city: "La Tour du Jalouvre, Le Grand-Bornand",
        difficulty: "D / D+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 1100m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 1h00</span><br><span style='margin-left: 20px;'>Gaz (/4) : 4</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "2h15",
        coord: "",
        link: ""
},
{
        name: "La Curalla",
        city: "La Curalla, Passy",
        difficulty: "AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 400m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h45</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h00",
        coord: "",
        link: ""
},
{
        name: "Jacques Revaclier",
        city: "Jacques Revaclier, Saint-Julien-en-Genevois",
        difficulty: "D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 500m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "0h30",
        coord: "",
        link: ""
},
{
        name: "Le Mont",
        city: "Le Mont, Sixt-Fer-à-Cheval",
        difficulty: "AD / D / AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 800m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h20",
        coord: "",
        link: ""
},
{
        name: "La Roche à l'agathe",
        city: "La Roche à l'agathe, Thônes",
        difficulty: "PD / D / D+ ou ED",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 3</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Le Rocher de la Chaux",
        city: "Le Rocher de la Chaux, Saint-Jean-d'Aulps",
        difficulty: "D+ ou ED",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 300m</span><br><span style='margin-left: 20px;'>Approche : 0h25</span><br><span style='margin-left: 20px;'>Retour : 0h35</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Bellevaux",
        city: "Bellevaux, Bellevaux",
        difficulty: "AD - D - TD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 630m</span><br><span style='margin-left: 20px;'>Approche : 0h30</span><br><span style='margin-left: 20px;'>Retour : 0h40</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1 / 2 / ?</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "4h00",
        coord: "",
        link: ""
},
{
        name: "Les Evettes",
        city: "Les Evettes, Chamonix",
        difficulty: "AD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 200m</span><br><span style='margin-left: 20px;'>Approche : 0h20</span><br><span style='margin-left: 20px;'>Retour : 0h20</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "La Cordée des Dahuts",
        city: "La Cordée des Dahuts, Faverges-Seythenex",
        difficulty: "PD+",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 220m</span><br><span style='margin-left: 20px;'>Approche : 0h10</span><br><span style='margin-left: 20px;'>Retour : 0h25</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "0h45",
        coord: "",
        link: ""
},
{
        name: "Malamort",
        city: "Malamort, Durfort",
        difficulty: "F - F ou D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée :  m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h15</span><br><span style='margin-left: 20px;'>Pour enfants : Non</span><br>",
        time: "1h30",
        coord: "",
        link: ""
},
{
        name: "Cavaillon",
        city: "Cavaillon, Cavaillon",
        difficulty: "AD / D",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 600m</span><br><span style='margin-left: 20px;'>Approche : 0h15</span><br><span style='margin-left: 20px;'>Retour : 0h10</span><br><span style='margin-left: 20px;'>Gaz (/4) : 2 / 2</span><br><span style='margin-left: 20px;'>Pour enfants : Partiel</span><br>",
        time: "2h00",
        coord: "",
        link: ""
},
{
        name: "La Source de la Moselle",
        city: "La Source de la Moselle, Bussang",
        difficulty: "F - F ou AD / PD",
        characteristics: "<br><span style='margin-left: 20px;'>Longueur câblée : 850m</span><br><span style='margin-left: 20px;'>Approche : 0h05</span><br><span style='margin-left: 20px;'>Retour : 0h30</span><br><span style='margin-left: 20px;'>Gaz (/4) : 1</span><br><span style='margin-left: 20px;'>Pour enfants : Oui</span><br>",
        time: "1h15",
        coord: "",
        link: ""
}


];
