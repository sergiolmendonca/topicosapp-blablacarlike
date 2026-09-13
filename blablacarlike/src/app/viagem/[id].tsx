import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";
import { useThemeCard } from "@/hooks/use-theme";
import { VIAGENS } from "@/models/viagem";
import { useLocalSearchParams } from "expo-router";
import { View, Image, StyleSheet } from "react-native";

export default function ResumoDaViagem() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useThemeCard();
  const viagem = VIAGENS.find((v) => v.id === id);

  if (!viagem) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Viagem não encontrada.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <View style={styles.safeArea}>
        <ThemedText type="subtitle" style={styles.dataHora}>
          {viagem.data.split('-').reverse().join('/')}
        </ThemedText>

        <View>
          <ThemedText type="smallBold">{viagem.horarioSaida}: {viagem.origem} </ThemedText>
          <ThemedText type="smallBold" style={styles.seta}>↓</ThemedText>
          <ThemedText type="smallBold">{viagem.horarioChegada}: {viagem.destino} </ThemedText>
        </View>

        <View style={styles.routeRow}>
          <View>
            <ThemedText type="smallBold">preço total</ThemedText>
            <ThemedText type="default">{viagem.passageiros.length} passageiros</ThemedText>
          </View>
          <ThemedText type="subtitle">R$ {viagem.passageiros.length * viagem.preco}</ThemedText>
        </View>

        <View style={styles.infoRow}>
          <ThemedText type="small">Vagas disponíveis</ThemedText>
          <ThemedText type="smallBold">{viagem.vagasDisponiveis}</ThemedText>
        </View>

        {viagem.passageiros.map((passageiro) => (
            <View key={passageiro.id} style={theme.passageiroInfo}>
                <Image source={{ uri: passageiro.avatar }} style={styles.avatar} />
                <View>
                <ThemedText type="smallBold">{passageiro.nome}</ThemedText>
                <ThemedText type="small">★ {passageiro.avaliacao.toFixed(1)}</ThemedText>
                </View>
            </View>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1, padding: Spacing.four, gap: Spacing.three },
  routeRow: { flexDirection: 'row', justifyContent: "space-between", padding: 10, borderBottomWidth: 1, borderTopWidth: 1 },
  seta: { marginHorizontal: Spacing.two },
  dataHora: { marginBottom: Spacing.two },
  motoristaRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two },
  avatar: { width: 44, height: 44, borderRadius: 22 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between' },
  observacoes: { marginTop: Spacing.two, fontStyle: 'italic' },
});