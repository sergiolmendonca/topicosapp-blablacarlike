import { Viagem } from "@/models/viagem";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { useThemeCard } from "@/hooks/use-theme";

interface ViagemCardProps {
  viagem: Viagem;
  onPress: () => void;
}

export default function ViagemCard({ viagem, onPress }: ViagemCardProps) {
    const theme = useThemeCard();

  return (
    <TouchableOpacity style={theme.card} onPress={onPress} activeOpacity={0.7}>
      <View style={theme.routeRow}>
        <ThemedText type="smallBold">{viagem.origem}</ThemedText>
        <ThemedText style={theme.seta}> → </ThemedText>
        <ThemedText type="smallBold">{viagem.destino}</ThemedText>
      </View>

      <ThemedText type="small">
        {viagem.data} - {viagem.horarioSaida}
      </ThemedText>

      <View style={theme.footerRow}>
        {viagem.passageiros.map((passageiro) => (
            <View key={passageiro.id} style={theme.passageiroInfo}>
                <Image source={{ uri: passageiro.avatar }} style={theme.avatar} />
            </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}