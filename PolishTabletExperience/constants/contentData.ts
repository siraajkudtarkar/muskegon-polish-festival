export type EraKey =
    | "all"
    | "golden_age"
    | "wars_partitions"
    | "independence"
    | "rebirth"
    | "ww2"
    | "communist"
    | "modern";

export type EraTab = {
    key: EraKey;
    label: string;
};

export type ContentCardItem = {
    id: string;
    eraKey: Exclude<EraKey, "all">;
    yearLabel: string; //  "1400s" / "1791"
    titleTop: string;  //  "Did You Know?"
    titleBottom: string; // "Poland protected religious freedom early"
    imageUri: string | number;  // remote URL string or local require("...") asset
};

export const ERA_TABS: EraTab[] = [
    { key: "all", label: "All" },
    { key: "golden_age", label: "The Golden Age" },
    { key: "wars_partitions", label: "The Era of Wars & Partitions" },
    { key: "independence", label: "Struggle for Independence" },
    { key: "rebirth", label: "Rebirth of Poland" },
    { key: "ww2", label: "World War II & Occupation" },
    { key: "communist", label: "Communist Poland" },
    { key: "modern", label: "Modern Poland" },
];

// In a real app, this data would come from an API or database
export const MOCK_CARDS: ContentCardItem[] = [
    {
        id: "c1",
        eraKey: "golden_age",
        yearLabel: "1400s",
        titleTop: "Did You Know?",
        titleBottom: "Poland protected religious freedom early",
        imageUri: require("../assets/content_images/GoldenAge/GoldenAge_1.png"),
    },
    {
        id: "c2",
        eraKey: "golden_age",
        yearLabel: "",
        titleTop: "Did You Know?",
        titleBottom: "When voting rights were rare, Poland had them",
        imageUri: require("../assets/content_images/GoldenAge/GoldenAge_2.png"),
    },
    {
        id: "c3",
        eraKey: "wars_partitions",
        yearLabel: "1791",
        titleTop: "Did You Know?",
        titleBottom: "Poland wrote the world's second constitution",
        imageUri: require("../assets/content_images/WarsAndPartitions/WarsAndPartitions_1.png"),
    },
    {
        id: "c4",
        eraKey: "wars_partitions",
        yearLabel: "1792",
        titleTop: "Did You Know?",
        titleBottom: "How corruption undermined Poland's freedom",
        imageUri: require("../assets/content_images/WarsAndPartitions/WarsAndPartitions_2.png"),
    },
    {
        id: "c5",
        eraKey: "wars_partitions",
        yearLabel: "1795",
        titleTop: "Did You Know?",
        titleBottom: "How Poland vanished for 123 years",
        imageUri: require("../assets/content_images/WarsAndPartitions/WarsAndPartitions_3.png"),
    },
    {
        id: "c6",
        eraKey: "wars_partitions",
        yearLabel: "",
        titleTop: "Did You Know?",
        titleBottom: "Polish heroes helped win American freedom",
        imageUri: require("../assets/content_images/WarsAndPartitions/WarsAndPartitions_4.png"),
    },
    {
        id: "c7",
        eraKey: "independence",
        yearLabel: "",
        titleTop: "Did You Know?",
        titleBottom: "Polish Roots in Michigan",
        imageUri: require("../assets/content_images/Independence/Independence_1.png"),
    },
    {
        id: "c8",
        eraKey: "rebirth",
        yearLabel: "1918",
        titleTop: "Did You Know?",
        titleBottom: "After WWI, Russia, Austria, and Germany collapsed and Poland regained her ...",
        imageUri: require("../assets/content_images/Rebirth/Rebirth_1.png"),
    },
    {
        id: "c9",
        eraKey: "rebirth",
        yearLabel: "1920",
        titleTop: "Did You Know?",
        titleBottom: "Poles from America joined the Polish Army and provided millions of dollars in ...",
        imageUri: require("../assets/content_images/Rebirth/Rebirth_2.png"),
    },
    {
        id: "c10",
        eraKey: "rebirth",
        yearLabel: "1920",
        titleTop: "Did You Know?",
        titleBottom: "After the Russian Revolution, the Communist Red Army sought to crush ...",
        imageUri: require("../assets/content_images/Rebirth/Rebirth_3.png"),
    },
    {
        id: "c11",
        eraKey: "rebirth",
        yearLabel: "1920",
        titleTop: "Did You Know?",
        titleBottom: "Though outnumbered and alone, the Poles defeated the Communist invasion and ...",
        imageUri: require("../assets/content_images/Rebirth/Rebirth_4.png"),
    },
    {
        id: "c12",
        eraKey: "rebirth",
        yearLabel: "1920",
        titleTop: "Did You Know?",
        titleBottom: "Muskegon Heroes in the Blue Army",
        imageUri: require("../assets/content_images/Rebirth/Rebirth_5.png"),
    },
    {
        id: "c13",
        eraKey: "ww2",
        yearLabel: "1939",
        titleTop: "Did You Know?",
        titleBottom: "Invasion of Poland",
        imageUri: require("../assets/content_images/WW_II/WW_II_1.png"),
    },
    {
        id: "c14",
        eraKey: "ww2",
        yearLabel: "1939",
        titleTop: "Did You Know?",
        titleBottom: "Germans targeted Polish Jews, Christians",
        imageUri: require("../assets/content_images/WW_II/WW_II_2.png"),
    },
    {
        id: "c15",
        eraKey: "ww2",
        yearLabel: "1939-41",
        titleTop: "Did You Know?",
        titleBottom: "USSR deported Poles to Siberia",
        imageUri: require("../assets/content_images/WW_II/WW_II_3.png"),
    },
    {
        id: "c16",
        eraKey: "ww2",
        yearLabel: "1939",
        titleTop: "Did You Know?",
        titleBottom: "The Germans killed 3 million Polish Jews...",
        imageUri: require("../assets/content_images/WW_II/WW_II_4.png"),
    },
    {
        id: "c17",
        eraKey: "ww2",
        yearLabel: "1939",
        titleTop: "Did You Know?",
        titleBottom: "Polish resistance and joining the Allies",
        imageUri: require("../assets/content_images/WW_II/WW_II_5.png"),
    },
    {
        id: "c18",
        eraKey: "ww2",
        yearLabel: "1939",
        titleTop: "Did You Know?",
        titleBottom: "Muskegon Family's WWII Tragedy",
        imageUri: require("../assets/content_images/WW_II/WW_II_6.png"),
    },
    {
        id: "c19",
        eraKey: "ww2",
        yearLabel: "1941",
        titleTop: "Enigma in Russia",
        titleBottom: "Allies led by Polish scientists cracked German Enigma",
        imageUri: require("../assets/content_images/WW_II/WW_II_7.png"),
    },
    {
        id: "c20",
        eraKey: "ww2",
        yearLabel: "1944",
        titleTop: "Błyskawica Radio",
        titleBottom: "Błyskawica Radio was a voice of the uprising...",
        imageUri: require("../assets/content_images/WW_II/WW_II_8.png"),
    },
    {
        id: "c21",
        eraKey: "ww2",
        yearLabel: "1944",
        titleTop: "Kiliński Battalion",
        titleBottom: "Polish fighters, disguised, embody defiance ...",
        imageUri: require("../assets/content_images/WW_II/WW_II_9.png"),
    },
    {
        id: "c22",
        eraKey: "ww2",
        yearLabel: "1939",
        titleTop: "Enigma Exhibit",
        titleBottom: "Allies led by Polish scientists cracked German Enigma",
        imageUri: require("../assets/content_images/WW_II/WW_II_10.png"),
    },
    {
        id: "c23",
        eraKey: "ww2",
        yearLabel: "",
        titleTop: "Ruins of Warsaw",
        titleBottom: "Warsaw was systematically destroyed by German...",
        imageUri: require("../assets/content_images/WW_II/WW_II_11.png"),
    },
    {
        id: "c24",
        eraKey: "ww2",
        yearLabel: "1939",
        titleTop: "Did You Know?",
        titleBottom: "Polish resistance and joining the Allies",
        imageUri: require("../assets/content_images/WW_II/WW_II_5.png"),
    },
    {
        id: "c25",
        eraKey: "ww2",
        yearLabel: "1939",
        titleTop: "Did You Know?",
        titleBottom: "Polish codebreakers cracking Enigma",
        imageUri: require("../assets/content_images/WW_II/WW_II_12.png"),
    },
    {
        id: "c26",
        eraKey: "ww2",
        yearLabel: "",
        titleTop: "Did You Know?",
        titleBottom: "Helping Jews meant death penalty",
        imageUri: require("../assets/content_images/WW_II/WW_II_13.png"),
    },
    {
        id: "c27",
        eraKey: "ww2",
        yearLabel: "1939",
        titleTop: "Did You Know?",
        titleBottom: "Polish pilots in the Battle of Britain",
        imageUri: require("../assets/content_images/WW_II/WW_II_14.png"),
    },
    {
        id: "c28",
        eraKey: "ww2",
        yearLabel: "1939",
        titleTop: "Did You Know?",
        titleBottom: "Polish forces fighting globally",
        imageUri: require("../assets/content_images/WW_II/WW_II_15.png"),
    },
    {
        id: "c29",
        eraKey: "ww2",
        yearLabel: "1940",
        titleTop: "Battle of France ",
        titleBottom: "Enigma encryption vital in Blitzkrieg; Allies triumphed.",
        imageUri: require("../assets/content_images/WW_II/WW_II_16.png"),
    },
    {
        id: "c30",
        eraKey: "ww2",
        yearLabel: "1943",
        titleTop: "Warsaw Arrests",
        titleBottom: "Terrified boy symbolizes Nazi brutality during...",
        imageUri: require("../assets/content_images/WW_II/WW_II_17.png"),
    },
    {
        id: "c31",
        eraKey: "ww2",
        yearLabel: "1944",
        titleTop: "Old Town Battle",
        titleBottom: "The Warsaw Old Town was the site of intense ...",
        imageUri: require("../assets/content_images/WW_II/WW_II_18.png"),
    },
    {
        id: "c32",
        eraKey: "ww2",
        yearLabel: "",
        titleTop: "Did You Know?",
        titleBottom: "Polish resistance fought Nazi occupation",
        imageUri: require("../assets/content_images/WW_II/WW_II_19.png"),
    },
    {
        id: "c33",
        eraKey: "ww2",
        yearLabel: "",
        titleTop: "Did You Know?",
        titleBottom: "Polish resistance fighters proudly captured ...",
        imageUri: require("../assets/content_images/WW_II/WW_II_20.png"),
    },
    {
        id: "c34",
        eraKey: "communist",
        yearLabel: "",
        titleTop: "Did You Know?",
        titleBottom: "Poland oppressed under Soviet control",
        imageUri: require("../assets/content_images/CommunistPoland/CommunistPoland_1.png"),
    },
    {
        id: "c35",
        eraKey: "communist",
        yearLabel: "1978",
        titleTop: "Did You Know?",
        titleBottom: "Pope inspired Polish non-violent resistance",
        imageUri: require("../assets/content_images/CommunistPoland/CommunistPoland_2.png"),
    },
    {
        id: "c36",
        eraKey: "modern",
        yearLabel: "",
        titleTop: "Did You Know?",
        titleBottom: "Poland oppressed under Soviet control",
        imageUri: require("../assets/content_images/ModernPoland/ModernPoland_1.png"),
    },
    {
        id: "c37",
        eraKey: "modern",
        yearLabel: "1989",
        titleTop: "Did You Know?",
        titleBottom: "Solidarity won Poland's free elections",
        imageUri: require("../assets/content_images/ModernPoland/ModernPoland_2.png"),
    },
    {
        id: "c38",
        eraKey: "modern",
        yearLabel: "",
        titleTop: "Did You Know?",
        titleBottom: "Poland’s shift ended Cold War",
        imageUri: require("../assets/content_images/ModernPoland/ModernPoland_3.png"),
    },
    {
        id: "c39",
        eraKey: "modern",
        yearLabel: "",
        titleTop: "Did You Know?",
        titleBottom: "Poland thrives today with manufacturing ...",
        imageUri: require("../assets/content_images/ModernPoland/ModernPoland_4.png"),
    },

];
