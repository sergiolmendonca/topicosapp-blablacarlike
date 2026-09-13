import { Viagem } from "@/models/viagem";
import { View, Image, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { useThemeCard } from "@/hooks/use-theme";

interface InfoGeralProps {
  viagens: Viagem[];
}

export default function InfoGeral({ viagens }: InfoGeralProps) {
    const theme = useThemeCard();
    const totalCusto = viagens.reduce((sum, item) => sum + (item.preco * item.passageiros.length), 0);
  return (
    <View style={styles.card}>
      <View style={theme.footerRow}>
        <View style={theme.footerRow}>
            <Image source={require("@/assets/images/Coins--Streamline-Kameleon.png")} />
            <View>
                <ThemedText type="subtitle">R$ {totalCusto}</ThemedText>
                <ThemedText type="small">Economia até agora</ThemedText>
            </View>
        </View>
        <View style={theme.footerRow}>
            <Image source={require("@/assets/images/Car--Streamline-Kameleon.png")} />
            <View>
                <ThemedText type="subtitle">{viagens.length}</ThemedText>
                <ThemedText type="small">Total de viagem</ThemedText>
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 5,
    marginHorizontal: 16,
    marginTop: 40,
    borderWidth: 2,
    borderColor: "#000000ff",
  },
});