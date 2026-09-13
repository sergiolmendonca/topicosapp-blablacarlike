import InfoGeral from "@/components/info-geral";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ViagemCard from "@/components/viagem-card";
import { Spacing } from "@/constants/theme";
import { Viagem, VIAGENS } from "@/models/viagem";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet } from "react-native";


export default function MinhasViagens() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
        <InfoGeral viagens={VIAGENS}></InfoGeral>
        <FlatList
          data={VIAGENS}
          keyExtractor={(item: Viagem) => item.id}
          renderItem={({ item }) => (
            <ViagemCard viagem={item} onPress={() => router.push(`/viagem/${item.id}`)} />
          )}
          ListHeaderComponent={
            <ThemedText type="subtitle" style={styles.header}>
              Suas próximas viagens
            </ThemedText>
          }
        />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: { marginHorizontal: Spacing.four, marginVertical: Spacing.three },
});

