import React, { useCallback } from 'react';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MainColors } from '@/constants/theme';
import { useVisited } from '@/components/VisitedContext';

export default function ModalScreen() {
  const { resetVisited } = useVisited();

  // Reset visited state when the modal screen is focused
  useFocusEffect(
    useCallback(() => {
      resetVisited();
    }, [resetVisited])
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="h2">This is a modal</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="body" lightColor={MainColors.pointRed} darkColor={MainColors.pointRed}>
          Go to home screen
        </ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
