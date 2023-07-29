const games = [
    {
        name: "5-minute Dungeon",
        status: "Previously Owned",
        buydate: "2018-02-24",
        buyprice: 26.108947,
        selldate: "2019-05-15",
        sellprice: 15,
        playcount: 14,
        },
        {
        name: "Adventure Tactics",
        status: "Previously Owned",
        buydate: "2019-11-18",
        buyprice: 156.4575,
        selldate: "2021-03-29",
        sellprice: 108,
        playcount: 2,
        },
        {
        name: "Aeon's End",
        status: "Previously Owned",
        buydate: "2016-12-19",
        buyprice: 102,
        selldate: "2018-04-15",
        sellprice: 50,
        playcount: 5,
        },
        {
        name: "Aeon's End Legacy",
        status: "Previously Owned",
        buydate: "2018-03-19",
        buyprice: 150.75,
        selldate: "2020-01-07",
        sellprice: 50,
        playcount: 10,
        },
        {
        name: "After the Empire",
        status: "Previously Owned",
        buydate: "2021-06-23",
        buyprice: 134.33,
        selldate: "2022-12-12",
        sellprice: 115,
        playcount: 2,
        },
        {
        name: "Agemonia",
        status: "Pre-ordered",
        buydate: "2021-11-23",
        buyprice: 217.16,
        selldate: "",
        sellprice: null,
        playcount: 0,
        },
        {
        name: "Architects of the West Kingdom",
        status: "Previously Owned",
        buydate: "2019-02-10",
        buyprice: 65.967318,
        selldate: "2020-01-05",
        sellprice: 38,
        playcount: 8,
        },
        {
        name: "Ares Expedition",
        status: "Previously Owned",
        buydate: "2021-03-03",
        buyprice: 70.5,
        selldate: "2022-08-08",
        sellprice: 50,
        playcount: 11,
        },
        {
        name: "Arkham Horror The Card Game",
        status: "Previously Owned",
        buydate: "2017-09-14",
        buyprice: 220,
        selldate: "2018-03-16",
        sellprice: 185,
        playcount: 8,
        },
        {
        name: "Arydia: The Paths We Dare Tread",
        status: "Pre-ordered",
        buydate: "2021-08-25",
        buyprice: 278,
        selldate: "",
        sellprice: null,
        playcount: 0,
        },
        {
        name: "Bad Company",
        status: "Own",
        buydate: "2023-07-02",
        buyprice: 75.94,
        selldate: "",
        sellprice: null,
        playcount: 0,
        },
        {
        name: "Bamboo",
        status: "Own",
        buydate: "2023-04-24",
        buyprice: 43.12,
        selldate: "",
        sellprice: null,
        playcount: 0,
        },
        {
        name: "Betrayal at the House on the Hill",
        status: "Previously Owned",
        buydate: "2015-11-15",
        buyprice: 54.6,
        selldate: "2017-08-14",
        sellprice: 38,
        playcount: 5,
        },
        {
        name: "Big Book of Madness",
        status: "Previously Owned",
        buydate: "2016-11-28",
        buyprice: 40,
        selldate: "2017-06-13",
        sellprice: 36,
        playcount: 3,
        },
        {
        name: "Bitoku",
        status: "Own",
        buydate: "2021-12-24",
        buyprice: 100.01,
        selldate: "",
        sellprice: null,
        playcount: 6,
        },
        {
        name: "Blood Rage + 5th player expansion",
        status: "Previously Owned",
        buydate: "2017-11-11",
        buyprice: 92.535232,
        selldate: "2018-03-16",
        sellprice: 90,
        playcount: 2,
        },
        {
        name: "Bloodborne Board Game",
        status: "Previously Owned",
        buydate: "2019-08-01",
        buyprice: 323.53,
        selldate: "2021-10-12",
        sellprice: 190,
        playcount: 15,
        },
        {
        name: "Brew Crafters",
        status: "Previously Owned",
        buydate: "2020-11-11",
        buyprice: 49.66,
        selldate: "2021-03-17",
        sellprice: 40,
        playcount: 2,
        },
        {
        name: "Canvas",
        status: "Previously Owned",
        buydate: "2020-06-20",
        buyprice: 70,
        selldate: "2021-06-11",
        sellprice: 50,
        playcount: 2,
        },
        {
        name: "Cartographers Heroes",
        status: "Previously Owned",
        buydate: "2020-11-06",
        buyprice: 76,
        selldate: "2021-10-24",
        sellprice: 76,
        playcount: 0,
        },
        {
        name: "Chocolate Factory",
        status: "Previously Owned",
        buydate: "2019-11-26",
        buyprice: 63.12,
        selldate: "2020-06-17",
        sellprice: 45,
        playcount: 2,
        },
        {
        name: "Chronicles of Crime",
        status: "Previously Owned",
        buydate: "2018-03-21",
        buyprice: 120.8,
        selldate: "2019-08-10",
        sellprice: 88,
        playcount: 16,
        },
        {
        name: "Chronicles of Drunagor",
        status: "Previously Owned",
        buydate: "2021-06-27",
        buyprice: 205.54,
        selldate: "2021-11-12",
        sellprice: 100,
        playcount: 54,
        },
        {
        name: "Circadians Chaos Order",
        status: "Previously Owned",
        buydate: "2022-09-05",
        buyprice: 64.08,
        selldate: "2023-03-08",
        sellprice: 70,
        playcount: 1,
        },
        {
        name: "Circadians First Light",
        status: "Own",
        buydate: "2022-09-05",
        buyprice: 64.08,
        selldate: "",
        sellprice: null,
        playcount: 3,
        },
        {
        name: "Clank! Catacombs",
        status: "Own",
        buydate: "2022-11-20",
        buyprice: 82.62,
        selldate: "",
        sellprice: null,
        playcount: 3,
        },
        {
        name: "Clank! Legacy Acquisitions Inc",
        status: "Own",
        buydate: "2019-12-01",
        buyprice: 95.63,
        selldate: "",
        sellprice: null,
        playcount: 35,
        },
        {
        name: "Clans of Caledonia",
        status: "Previously Owned",
        buydate: "2019-09-25",
        buyprice: 60.2485527,
        selldate: "2020-05-20",
        sellprice: 47,
        playcount: 10,
        },
        {
        name: "Codenames: Pictures",
        status: "Previously Owned",
        buydate: "2017-02-22",
        buyprice: 22.6224,
        selldate: "2018-07-19",
        sellprice: 15,
        playcount: 1,
        },
        {
        name: "Coffee Roaster",
        status: "Previously Owned",
        buydate: "2018-10-15",
        buyprice: 67.753651084,
        selldate: "2020-12-15",
        sellprice: 15,
        playcount: 13,
        },
        {
        name: "Coffee Traders",
        status: "Previously Owned",
        buydate: "2021-07-25",
        buyprice: 144.03,
        selldate: "2022-02-03",
        sellprice: 97,
        playcount: 2,
        },
        {
        name: "Coimbra",
        status: "Previously Owned",
        buydate: "2019-01-18",
        buyprice: 65,
        selldate: "2019-11-12",
        sellprice: 45,
        playcount: 9,
        },
        {
        name: "Crown of Emara",
        status: "Previously Owned",
        buydate: "2019-08-05",
        buyprice: 54.1873883127675,
        selldate: "2020-03-20",
        sellprice: 35,
        playcount: 5,
        },
        {
        name: "Cthulhu: Death May Die",
        status: "Own",
        buydate: "2022-02-27",
        buyprice: 162,
        selldate: "",
        sellprice: null,
        playcount: 13,
        },
        {
        name: "Dead of Winter",
        status: "Previously Owned",
        buydate: "2016-05-04",
        buyprice: 59.054295,
        selldate: "2017-05-22",
        sellprice: 48,
        playcount: 5,
        },
        {
        name: "Descent 2e",
        status: "Previously Owned",
        buydate: "2016-10-01",
        buyprice: 95.389,
        selldate: "2017-03-19",
        sellprice: 58.863,
        playcount: 3,
        },
        {
        name: "Descent: Legends of the Dark",
        status: "Previously Owned",
        buydate: "2021-10-01",
        buyprice: 193.47,
        selldate: "2022-06-13",
        sellprice: 123,
        playcount: 17,
        },
        {
        name: "Dice Hospital + Deluxe",
        status: "Previously Owned",
        buydate: "2020-11-30",
        buyprice: 119.88,
        selldate: "2021-07-16",
        sellprice: 90,
        playcount: 6,
        },
        {
        name: "Diceborn Heroes",
        status: "Previously Owned",
        buydate: "2017-05-25",
        buyprice: 85.3239563337,
        selldate: "2021-07-16",
        sellprice: 35,
        playcount: 1,
        },
        {
        name: "Dinosaur World",
        status: "Previously Owned",
        buydate: "2021-10-16",
        buyprice: 170.63,
        selldate: "2022-03-27",
        sellprice: 135,
        playcount: 4,
        },
        {
        name: "Dixit",
        status: "Previously Owned",
        buydate: "2015-10-15",
        buyprice: 34.5025,
        selldate: "2016-10-21",
        sellprice: 22,
        playcount: 3,
        },
        {
        name: "Draftosaurus",
        status: "Previously Owned",
        buydate: "2019-12-01",
        buyprice: 25.35,
        selldate: "2021-03-29",
        sellprice: 25,
        playcount: 10,
        },
        {
        name: "Dune Imperium",
        status: "Previously Owned",
        buydate: "2022-05-14",
        buyprice: 52,
        selldate: "2023-03-30",
        sellprice: 35,
        playcount: 5,
        },
        {
        name: "Earth",
        status: "Own",
        buydate: "2023-04-24",
        buyprice: 60.69,
        selldate: "",
        sellprice: null,
        playcount: 2,
        },
        {
        name: "Elder Sign",
        status: "Previously Owned",
        buydate: "2015-11-30",
        buyprice: 35,
        selldate: "2016-11-18",
        sellprice: 35,
        playcount: 5,
        },
        {
        name: "Endeavor Age of Sail",
        status: "Previously Owned",
        buydate: "2021-07-13",
        buyprice: 75.24,
        selldate: "2021-11-05",
        sellprice: 65,
        playcount: 3,
        },
        {
        name: "Escape Plan",
        status: "Previously Owned",
        buydate: "2019-06-01",
        buyprice: 225.26,
        selldate: "2020-05-29",
        sellprice: 116.5,
        playcount: 2,
        },
        {
        name: "Escape: Curse of the Temple",
        status: "Previously Owned",
        buydate: "2015-11-15",
        buyprice: 70,
        selldate: "2017-02-03",
        sellprice: 42.2238,
        playcount: 5,
        },
        {
        name: "Everdell",
        status: "Previously Owned",
        buydate: "2019-11-26",
        buyprice: 190.25,
        selldate: "2022-03-12",
        sellprice: 100,
        playcount: 26,
        },
        {
        name: "Flamecraft",
        status: "Own",
        buydate: "2022-10-14",
        buyprice: 140.42,
        selldate: "",
        sellprice: null,
        playcount: 3,
        },
        {
        name: "Forbidden Desert",
        status: "Previously Owned",
        buydate: "2015-11-24",
        buyprice: 28.188,
        selldate: "2016-12-02",
        sellprice: 28,
        playcount: 5,
        },
        {
        name: "Frosthaven",
        status: "Own",
        buydate: "2020-05-02",
        buyprice: 206,
        selldate: "",
        sellprice: null,
        playcount: 31,
        },
        {
        name: "Gloomhaven",
        status: "Previously Owned",
        buydate: "2017-01-23",
        buyprice: 171.6,
        selldate: "",
        sellprice: 0,
        playcount: 60,
        },
        {
        name: "Gloomhaven Forgotten Circles",
        status: "Previously Owned",
        buydate: "2018-05-15",
        buyprice: 34.1566,
        selldate: "2020-04-14",
        sellprice: 26.5,
        playcount: 0,
        },
        {
        name: "Gloomhaven Jaws of the Lion",
        status: "Previously Owned",
        buydate: "2020-09-01",
        buyprice: 93.5,
        selldate: "2021-05-20",
        sellprice: 40,
        playcount: 15,
        },
        {
        name: "Grand Austria Hotel",
        status: "Previously Owned",
        buydate: "2018-08-05",
        buyprice: 50,
        selldate: "2019-02-13",
        sellprice: 48,
        playcount: 11,
        },
        {
        name: "Harbour",
        status: "Previously Owned",
        buydate: "2017-11-27",
        buyprice: 21.502747008,
        selldate: "2018-08-05",
        sellprice: 20,
        playcount: 4,
        },
        {
        name: "Hardback",
        status: "Previously Owned",
        buydate: "2017-04-24",
        buyprice: 50.15592,
        selldate: "2018-03-09",
        sellprice: 40,
        playcount: 1,
        },
        {
        name: "Hokkaido",
        status: "Previously Owned",
        buydate: "2019-02-10",
        buyprice: 35.2404,
        selldate: "2019-07-26",
        sellprice: 20,
        playcount: 3,
        },
        {
        name: "IKI",
        status: "Previously Owned",
        buydate: "2019-10-30",
        buyprice: 59.1876887712,
        selldate: "2020-07-27",
        sellprice: 45,
        playcount: 5,
        },
        {
        name: "In the Hall of the Mountain King",
        status: "Previously Owned",
        buydate: "2021-04-22",
        buyprice: 41,
        selldate: "2021-10-04",
        sellprice: 15,
        playcount: 5,
        },
        {
        name: "Isle of Skye",
        status: "Previously Owned",
        buydate: "2017-07-29",
        buyprice: 30.7,
        selldate: "2018-01-05",
        sellprice: 30,
        playcount: 4,
        },
        {
        name: "It's a Wonderful World",
        status: "Previously Owned",
        buydate: "2021-06-01",
        buyprice: 41.38,
        selldate: "2021-11-27",
        sellprice: 30,
        playcount: 5,
        },
        {
        name: "Jamaica",
        status: "Own",
        buydate: "2021-04-07",
        buyprice: 17.76,
        selldate: "",
        sellprice: null,
        playcount: 7,
        },
        {
        name: "Kanban EV",
        status: "Previously Owned",
        buydate: "2020-02-14",
        buyprice: 155,
        selldate: "2021-03-01",
        sellprice: 155,
        playcount: 0,
        },
        {
        name: "Knight Tales",
        status: "Own",
        buydate: "2022-10-14",
        buyprice: 162.96,
        selldate: "",
        sellprice: null,
        playcount: 4,
        },
        {
        name: "Laga Jakarta",
        status: "Own",
        buydate: "2018-12-01",
        buyprice: 0,
        selldate: "",
        sellprice: null,
        playcount: 3,
        },
        {
        name: "Legendary: A Marvel Deck-building Game",
        status: "Previously Owned",
        buydate: "2017-05-29",
        buyprice: 74,
        selldate: "2018-03-20",
        sellprice: 55,
        playcount: 7,
        },
        {
        name: "Lords of Waterdeep",
        status: "Previously Owned",
        buydate: "2015-10-15",
        buyprice: 49.6836,
        selldate: "2018-07-11",
        sellprice: 25,
        playcount: 10,
        },
        {
        name: "Lords of Waterdeep: Scoundrels of Skullport",
        status: "Previously Owned",
        buydate: "2016-11-13",
        buyprice: 42,
        selldate: "2017-05-26",
        sellprice: 35,
        playcount: 2,
        },
        {
        name: "Lost Ruins of Arnak",
        status: "Own",
        buydate: "2020-12-19",
        buyprice: 77.09,
        selldate: "",
        sellprice: null,
        playcount: 18,
        },
        {
        name: "Manchukuo",
        status: "Pre-ordered",
        buydate: "2019-10-04",
        buyprice: 120,
        selldate: "",
        sellprice: null,
        playcount: 0,
        },
        {
        name: "Maracaibo",
        status: "Previously Owned",
        buydate: "2020-07-10",
        buyprice: 97.71,
        selldate: "2021-02-23",
        sellprice: 60,
        playcount: 7,
        },
        {
        name: "Marco Polo 2",
        status: "Previously Owned",
        buydate: "2020-07-10",
        buyprice: 100.49,
        selldate: "2021-01-01",
        sellprice: 90,
        playcount: 4,
        },
        {
        name: "Marvel Champions",
        status: "Previously Owned",
        buydate: "2020-08-12",
        buyprice: 180,
        selldate: "2020-12-12",
        sellprice: 110,
        playcount: 2,
        },
        {
        name: "Marvel Remix",
        status: "Own",
        buydate: "2022-12-16",
        buyprice: 0,
        selldate: "",
        sellprice: null,
        playcount: 10,
        },
        {
        name: "Marvel Zombies Heroes' Resistance",
        status: "Previously Owned",
        buydate: "2022-10-13",
        buyprice: 50.74,
        selldate: "2023-06-24",
        sellprice: 0,
        playcount: 3,
        },
        {
        name: "Massive Darkness 2",
        status: "Own",
        buydate: "2022-07-13",
        buyprice: 115.24,
        selldate: "",
        sellprice: null,
        playcount: 9,
        },
        {
        name: "Merchants Cove",
        status: "Previously Owned",
        buydate: "2021-07-16",
        buyprice: 175,
        selldate: "2021-11-22",
        sellprice: 130,
        playcount: 6,
        },
        {
        name: "Merchants of the Dark Road",
        status: "Previously Owned",
        buydate: "2021-12-17",
        buyprice: 100.88,
        selldate: "2022-12-17",
        sellprice: 75,
        playcount: 6,
        },
        {
        name: "Mice and Mystics",
        status: "Previously Owned",
        buydate: "2015-12-15",
        buyprice: 168.636,
        selldate: "2016-11-12",
        sellprice: 60,
        playcount: 15,
        },
        {
        name: "Middara",
        status: "Previously Owned",
        buydate: "2018-01-05",
        buyprice: 198.972,
        selldate: "2019-04-18",
        sellprice: 203.367,
        playcount: 1,
        },
        {
        name: "Monsters on Board",
        status: "Own",
        buydate: "2020-11-06",
        buyprice: 98,
        selldate: "",
        sellprice: null,
        playcount: 3,
        },
        {
        name: "Monumental",
        status: "Own",
        buydate: "2022-06-04",
        buyprice: 280,
        selldate: "",
        sellprice: null,
        playcount: 7,
        },
        {
        name: "Near and Far",
        status: "Previously Owned",
        buydate: "2018-08-05",
        buyprice: 42.36,
        selldate: "2018-12-06",
        sellprice: 45,
        playcount: 15,
        },
        {
        name: "New Lost Legacy",
        status: "Previously Owned",
        buydate: "2017-12-14",
        buyprice: 18.10699881984,
        selldate: "",
        sellprice: 0,
        playcount: 0,
        },
        {
        name: "Nine Tiles Panic",
        status: "Previously Owned",
        buydate: "2019-10-30",
        buyprice: 34.07358911712,
        selldate: "2021-03-29",
        sellprice: 27,
        playcount: 13,
        },
        {
        name: "Now or Never",
        status: "Previously Owned",
        buydate: "2021-08-25",
        buyprice: 112.18,
        selldate: "2022-05-04",
        sellprice: 75,
        playcount: 7,
        },
        {
        name: "Oathsworn: Into the Deepwood",
        status: "Pre-ordered",
        buydate: "2022-11-16",
        buyprice: 260.14,
        selldate: "",
        sellprice: null,
        playcount: 0,
        },
        {
        name: "One Deck Dungeon: Forest of Shadows",
        status: "Previously Owned",
        buydate: "2018-05-12",
        buyprice: 25.96,
        selldate: "2018-07-09",
        sellprice: 25,
        playcount: 1,
        },
        {
        name: "Orleans + Trade & Intrigue",
        status: "Previously Owned",
        buydate: "2018-11-26",
        buyprice: 100.29,
        selldate: "2019-05-04",
        sellprice: 60,
        playcount: 4,
        },
        {
        name: "Pandemic + On the Brink",
        status: "Previously Owned",
        buydate: "2015-11-24",
        buyprice: 82.365336,
        selldate: "2017-12-11",
        sellprice: 65,
        playcount: 10,
        },
        {
        name: "PARKS",
        status: "Own",
        buydate: "2020-09-01",
        buyprice: 59.4,
        selldate: "",
        sellprice: null,
        playcount: 16,
        },
        {
        name: "Pathfinder ACG",
        status: "Previously Owned",
        buydate: "2016-10-08",
        buyprice: 160,
        selldate: "2017-03-09",
        sellprice: 100,
        playcount: 18,
        },
        {
        name: "Perseverence Castaway Chronicles Ep 1 & 2",
        status: "Previously Owned",
        buydate: "2022-02-01",
        buyprice: 223.1,
        selldate: "2023-01-09",
        sellprice: 172,
        playcount: 3,
        },
        {
        name: "Quadropolis",
        status: "Previously Owned",
        buydate: "2017-02-22",
        buyprice: 59.3838,
        selldate: "2018-01-17",
        sellprice: 40,
        playcount: 7,
        },
        {
        name: "Railroad Ink",
        status: "Previously Owned",
        buydate: "2019-02-24",
        buyprice: 25.88,
        selldate: "2019-07-04",
        sellprice: 22,
        playcount: 2,
        },
        {
        name: "Realm of Sand",
        status: "Previously Owned",
        buydate: "2019-06-26",
        buyprice: 43.3489747977,
        selldate: "2020-05-20",
        sellprice: 19.5,
        playcount: 6,
        },
        {
        name: "Reavers of Midgard",
        status: "Previously Owned",
        buydate: "2022-01-20",
        buyprice: 66.808,
        selldate: "2022-06-13",
        sellprice: 23,
        playcount: 2,
        },
        {
        name: "Res Arcana + Lux Et Tenebrae",
        status: "Previously Owned",
        buydate: "2020-03-03",
        buyprice: 83.54,
        selldate: "2020-11-11",
        sellprice: 60,
        playcount: 15,
        },
        {
        name: "Rescue Polar Bears",
        status: "Previously Owned",
        buydate: "2019-06-26",
        buyprice: 65.2423964127,
        selldate: "2020-05-15",
        sellprice: 36.5,
        playcount: 5,
        },
        {
        name: "Revive",
        status: "Own",
        buydate: "2022-11-18",
        buyprice: 0,
        selldate: "",
        sellprice: null,
        playcount: 2,
        },
        {
        name: "Rococo Deluxe",
        status: "Previously Owned",
        buydate: "2020-02-03",
        buyprice: 176.68,
        selldate: "2021-05-05",
        sellprice: 100,
        playcount: 3,
        },
        {
        name: "Roll Player Adventures",
        status: "Previously Owned",
        buydate: "2021-06-11",
        buyprice: 203.98,
        selldate: "2022-03-31",
        sellprice: 120,
        playcount: 20,
        },
        {
        name: "Sagrada",
        status: "Previously Owned",
        buydate: "2017-05-18",
        buyprice: 55.7028,
        selldate: "2018-07-23",
        sellprice: 50,
        playcount: 14,
        },
        {
        name: "Sanctum",
        status: "Previously Owned",
        buydate: "2021-06-10",
        buyprice: 45.92,
        selldate: "2021-11-05",
        sellprice: 30,
        playcount: 4,
        },
        {
        name: "Scoville",
        status: "Previously Owned",
        buydate: "2018-12-06",
        buyprice: 57.8,
        selldate: "2019-08-27",
        sellprice: 38,
        playcount: 3,
        },
        {
        name: "Scythe",
        status: "Previously Owned",
        buydate: "2018-11-26",
        buyprice: 67.94,
        selldate: "2019-11-12",
        sellprice: 45,
        playcount: 10,
        },
        {
        name: "Seize the Beans",
        status: "Previously Owned",
        buydate: "2018-02-14",
        buyprice: 63.8659180692,
        selldate: "2022-08-08",
        sellprice: 45,
        playcount: 6,
        },
        {
        name: "Septima",
        status: "Pre-ordered",
        buydate: "2022-08-10",
        buyprice: 130,
        selldate: "",
        sellprice: null,
        playcount: 0,
        },
        {
        name: "Sleeping Gods",
        status: "Previously Owned",
        buydate: "2019-09-13",
        buyprice: 180.025272,
        selldate: "2021-06-14",
        sellprice: 130,
        playcount: 22,
        },
        {
        name: "Sleeping Gods Distant Skies",
        status: "Pre-ordered",
        buydate: "2022-09-15",
        buyprice: 135.8,
        selldate: "",
        sellprice: null,
        playcount: 0,
        },
        {
        name: "Small World",
        status: "Previously Owned",
        buydate: "2018-05-04",
        buyprice: 58,
        selldate: "2018-12-03",
        sellprice: 35,
        playcount: 10,
        },
        {
        name: "Spirit Island",
        status: "Previously Owned",
        buydate: "2018-02-24",
        buyprice: 80.450914,
        selldate: "2018-10-29",
        sellprice: 80,
        playcount: 10,
        },
        {
        name: "Splendor",
        status: "Previously Owned",
        buydate: "2016-11-14",
        buyprice: 48,
        selldate: "2017-06-05",
        sellprice: 35,
        playcount: 5,
        },
        {
        name: "Starship Captains",
        status: "Previously Owned",
        buydate: "2022-11-14",
        buyprice: 86.78,
        selldate: "2023-05-10",
        sellprice: 55,
        playcount: 2,
        },
        {
        name: "Street Masters",
        status: "Own",
        buydate: "2022-03-24",
        buyprice: 300,
        selldate: "",
        sellprice: null,
        playcount: 24,
        },
        {
        name: "Streets",
        status: "Previously Owned",
        buydate: "2020-09-28",
        buyprice: 73.16,
        selldate: "2022-08-11",
        sellprice: 45,
        playcount: 9,
        },
        {
        name: "Stroganov",
        status: "Previously Owned",
        buydate: "2022-02-22",
        buyprice: 93,
        selldate: "2022-09-19",
        sellprice: 55,
        playcount: 3,
        },
        {
        name: "Sushi Go!",
        status: "Previously Owned",
        buydate: "2017-07-28",
        buyprice: 6.5,
        selldate: "",
        sellprice: 0,
        playcount: 27,
        },
        {
        name: "Taiwan",
        status: "Previously Owned",
        buydate: "2019-06-26",
        buyprice: 52.544211876,
        selldate: "2020-12-15",
        sellprice: 15,
        playcount: 2,
        },
        {
        name: "Taluva",
        status: "Previously Owned",
        buydate: "2020-03-27",
        buyprice: 53.39,
        selldate: "2020-05-31",
        sellprice: 25,
        playcount: 15,
        },
        {
        name: "Tapestry",
        status: "Previously Owned",
        buydate: "2020-10-14",
        buyprice: 53.32,
        selldate: "2021-07-16",
        sellprice: 50,
        playcount: 9,
        },
        {
        name: "Taverns of Tiefenthal",
        status: "Previously Owned",
        buydate: "2021-06-23",
        buyprice: 54.14,
        selldate: "2022-04-19",
        sellprice: 35,
        playcount: 7,
        },
        {
        name: "The Crew Deep Sea Mission",
        status: "Previously Owned",
        buydate: "2021-12-27",
        buyprice: 0,
        selldate: "2023-05-10",
        sellprice: 0,
        playcount: 1,
        },
        {
        name: "The Festivals",
        status: "Previously Owned",
        buydate: "2018-12-01",
        buyprice: 0,
        selldate: "2020-01-01",
        sellprice: 0,
        playcount: 1,
        },
        {
        name: "The Hunger",
        status: "Previously Owned",
        buydate: "2021-11-13",
        buyprice: 69.48,
        selldate: "2022-10-31",
        sellprice: 35,
        playcount: 6,
        },
        {
        name: "The Networks",
        status: "Previously Owned",
        buydate: "2017-04-30",
        buyprice: 47.4929,
        selldate: "2017-09-12",
        sellprice: 38,
        playcount: 2,
        },
        {
        name: "The Reckoners",
        status: "Previously Owned",
        buydate: "2021-04-28",
        buyprice: 91.82,
        selldate: "2023-01-13",
        sellprice: 45,
        playcount: 12,
        },
        {
        name: "This War of Mine",
        status: "Previously Owned",
        buydate: "2018-02-24",
        buyprice: 91.0317,
        selldate: "2018-07-24",
        sellprice: 63,
        playcount: 2,
        },
        {
        name: "Thunderstone Quest",
        status: "Previously Owned",
        buydate: "2018-12-26",
        buyprice: 120,
        selldate: "2019-09-09",
        sellprice: 100,
        playcount: 10,
        },
        {
        name: "Ticket to Ride",
        status: "Previously Owned",
        buydate: "2015-10-15",
        buyprice: 52.4438,
        selldate: "2017-01-15",
        sellprice: 40,
        playcount: 5,
        },
        {
        name: "Tiny Epic Defenders + Dark Wars",
        status: "Previously Owned",
        buydate: "2017-10-19",
        buyprice: 64.81,
        selldate: "2018-12-21",
        sellprice: 40,
        playcount: 4,
        },
        {
        name: "Tiny Epic Galaxies",
        status: "Previously Owned",
        buydate: "2016-11-28",
        buyprice: 33,
        selldate: "2017-12-14",
        sellprice: 33,
        playcount: 3,
        },
        {
        name: "Tiny Epic Quest",
        status: "Previously Owned",
        buydate: "2017-10-22",
        buyprice: 38,
        selldate: "2018-08-05",
        sellprice: 28,
        playcount: 7,
        },
        {
        name: "Tiny Epic Zombies",
        status: "Own",
        buydate: "2022-01-20",
        buyprice: 31.76,
        selldate: "",
        sellprice: null,
        playcount: 10,
        },
        {
        name: "Tokaido + Crossroads",
        status: "Previously Owned",
        buydate: "2015-11-15",
        buyprice: 71.4,
        selldate: "2018-09-02",
        sellprice: 40,
        playcount: 15,
        },
        {
        name: "Tokyo Highway",
        status: "Previously Owned",
        buydate: "2018-08-24",
        buyprice: 46.366648776,
        selldate: "2019-04-08",
        sellprice: 25,
        playcount: 6,
        },
        {
        name: "Tokyo Highway (4 player)",
        status: "Previously Owned",
        buydate: "2019-02-13",
        buyprice: 58.34187,
        selldate: "2020-03-08",
        sellprice: 58.34,
        playcount: 3,
        },
        {
        name: "Treasure Island",
        status: "Previously Owned",
        buydate: "2021-04-07",
        buyprice: 15,
        selldate: "2022-02-19",
        sellprice: 15,
        playcount: 2,
        },
        {
        name: "Tzolkin",
        status: "Previously Owned",
        buydate: "2018-11-29",
        buyprice: 54.5,
        selldate: "2020-03-07",
        sellprice: 40,
        playcount: 7,
        },
        {
        name: "Underwater Cities",
        status: "Previously Owned",
        buydate: "2019-08-05",
        buyprice: 65.4017946321675,
        selldate: "2020-05-16",
        sellprice: 46.5,
        playcount: 2,
        },
        {
        name: "Villainous",
        status: "Previously Owned",
        buydate: "2018-09-01",
        buyprice: 48.15,
        selldate: "2018-12-26",
        sellprice: 40,
        playcount: 4,
        },
        {
        name: "Vindication",
        status: "Previously Owned",
        buydate: "2021-04-01",
        buyprice: 100,
        selldate: "2022-10-09",
        sellprice: 85,
        playcount: 13,
        },
        {
        name: "Walking in Burano",
        status: "Previously Owned",
        buydate: "2019-06-26",
        buyprice: 24.0827637765,
        selldate: "2020-05-20",
        sellprice: 17,
        playcount: 8,
        },
        {
        name: "Warhammer Quest Adventure Card Game",
        status: "Previously Owned",
        buydate: "2017-05-18",
        buyprice: 34.81425,
        selldate: "2017-09-26",
        sellprice: 25,
        playcount: 5,
        },
        {
        name: "Yamatai",
        status: "Previously Owned",
        buydate: "2020-06-14",
        buyprice: 70,
        selldate: "2021-02-19",
        sellprice: 45,
        playcount: 5,
        },
        {
        name: "Yokohama",
        status: "Previously Owned",
        buydate: "2018-10-20",
        buyprice: 73.975,
        selldate: "2020-08-14",
        sellprice: 25,
        playcount: 11,
        },
        {
        name: "Yokohama Duel",
        status: "Previously Owned",
        buydate: "2020-08-16",
        buyprice: 88.89,
        selldate: "2022-07-13",
        sellprice: 60,
        playcount: 5,
        },
        {
        name: "Zombicide",
        status: "Previously Owned",
        buydate: "2016-05-04",
        buyprice: 79.825116,
        selldate: "2016-11-16",
        sellprice: 80,
        playcount: 5,
        },
        
        
        
        
];

export default games;