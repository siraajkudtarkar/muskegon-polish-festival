// screens/ContentScreen.tsx

import { useEffect, useMemo, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import EraTabBar from "../components/EraTabBar";
import ContentCard from "../components/ContentCard";
// import { ERA_TABS, MOCK_CARDS, EraKey } from "../constants/contentData";
import { ERA_TABS, EraKey } from "../constants/contentData";
import { sanityClient } from "../lib/sanityClient";

import { ThemedText } from "@/components/themed-text";
import { MainColors, EraColors } from "@/constants/theme";

type SanityCard = {
  id: string;
  eraKey: EraKey;
  yearLabel?: string;
  titleTop?: string;
  titleBottom: string;
  imageUrl?: string;
  order: number;
};

type ColumnItem = {
  top?: SanityCard;
  bottom?: SanityCard;
};

type ContentScreenProps = {
  onPressTimeline?: (year: number) => void;
  initialEra?: EraKey;
};

const earliestYearByEra: Record<EraKey, number> = {
  all: 1635,
  golden_age: 1635,
  wars_partitions: 1686,
  independence: 1804,
  rebirth: 1914,
  ww2: 1939,
  communist: 1948,
  modern: 1991,
};

const CONTENT_CARDS_QUERY = `*[_type == "contentCard"] | order(order asc){
  id,
  eraKey,
  yearLabel,
  titleTop,
  titleBottom,
  order,
  "imageUrl": image.asset->url
}`;

export default function ContentScreen({
  onPressTimeline,
  initialEra = "all",
}: ContentScreenProps) {
  const router = useRouter();
  const [selectedEra, setSelectedEra] = useState<EraKey>(initialEra);
  const [cards, setCards] = useState<SanityCard[]>([]);

  useEffect(() => {
    setSelectedEra(initialEra);
  }, [initialEra]);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const data = await sanityClient.fetch<SanityCard[]>(CONTENT_CARDS_QUERY);
        setCards(data);
      } catch (error) {
        console.error("Failed to fetch content cards from Sanity:", error);
      }
    };

    loadCards();
  }, []);

  const currentTitle =
    selectedEra === "all"
      ? "Title"
      : ERA_TABS.find((tab) => tab.key === selectedEra)?.label ?? "Title";

  const eraColorMap: Record<string, string> = {
    golden_age: EraColors.goldenAge,
    wars_partitions: EraColors.warsAndPartitions,
    independence: EraColors.independence,
    rebirth: EraColors.rebirth,
    ww2: EraColors.wwii,
    communist: EraColors.communistPoland,
    modern: EraColors.modern,
  };

  const activeEraColor =
    selectedEra === "all"
      ? MainColors.buttonBlack
      : eraColorMap[selectedEra] ?? MainColors.pointRed;

  const filteredCards = useMemo(() => {
    if (selectedEra === "all") return cards;
    return cards.filter((card) => card.eraKey === selectedEra);
  }, [selectedEra, cards]);

  const columns: ColumnItem[] = useMemo(() => {
    const result: ColumnItem[] = [];
    for (let i = 0; i < filteredCards.length; i += 2) {
      result.push({ top: filteredCards[i], bottom: filteredCards[i + 1] });
    }
    return result;
  }, [filteredCards]);

  const targetYear = earliestYearByEra[selectedEra] ?? 1635;

  return (
    <View style={styles.container}>
      <EraTabBar
        selectedKey={selectedEra}
        onSelect={setSelectedEra}
        activeColor={activeEraColor}
      />

      <ThemedText
        type="h4"
        style={[styles.pageTitle, { color: MainColors.primaryBlack }]}
      >
        {currentTitle}
      </ThemedText>

      <FlatList
        data={columns}
        keyExtractor={(_, idx) => `col-${idx}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.columnsContainer}
        renderItem={({ item }) => (
          <View style={styles.column}>
            {item.top && (
              <ContentCard
                item={item.top}
                onPress={() => console.log("Pressed:", item.top?.id)}
              />
            )}
            {item.bottom && (
              <View style={styles.cardGap}>
                <ContentCard
                  item={item.bottom}
                  onPress={() => console.log("Pressed:", item.bottom?.id)}
                />
              </View>
            )}
          </View>
        )}
      />

      <View style={styles.bottomToggleContainer}>
        <View style={styles.toggleWrapper}>
          <TouchableOpacity
            style={styles.inactiveToggle}
            onPress={() =>
              onPressTimeline ? onPressTimeline(targetYear) : router.push("/")
            }
            activeOpacity={0.85}
          >
            <ThemedText type="button" style={{ color: MainColors.primaryBlack }}>
              Timeline
            </ThemedText>
          </TouchableOpacity>

          <View
            style={[
              styles.activeToggle,
              { backgroundColor: MainColors.primaryBlack },
            ]}
          >
            <ThemedText type="button" style={{ color: "#FFFFFF" }}>
              Content
            </ThemedText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainColors.backgroundGrey,
    paddingTop: 20,
  },

  pageTitle: {
    paddingHorizontal: 20,
    marginTop: 4,
    marginBottom: 10,
  },

  columnsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 140,
  },

  column: {
    width: 350,
    marginRight: 20,
    alignItems: "stretch",
  },

  cardGap: {
    marginTop: 14,
  },

  bottomToggleContainer: {
    position: "absolute",
    bottom: 18,
    left: 20,
  },

  toggleWrapper: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    padding: 2,
  },

  inactiveToggle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
  },

  activeToggle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
});