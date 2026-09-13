import FormField from "@/components/form-fields";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useTheme } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, Switch, TouchableOpacity, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function OferecerViagem() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [preco, setPreco] = useState('');
  const [vagas, setVagas] = useState('');
  const [aceitaBagagem, setAceitaBagagem] = useState(true);
  const [observacoes, setObservacoes] = useState('');

  const [erros, setErros] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  function validar(): boolean {
    const novosErros: Record<string, string> = {};

    if (!origem.trim()) novosErros.origem = 'Informe a cidade de origem.';
    if (!destino.trim()) novosErros.destino = 'Informe a cidade de destino.';
    if (!data.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(data.trim())) {
      novosErros.data = 'Use o formato AAAA-MM-DD.';
    }
    if (!horario.trim() || !/^\d{2}:\d{2}$/.test(horario.trim())) {
      novosErros.horario = 'Use o formato HH:MM.';
    }
    if (!preco.trim() || isNaN(Number(preco))) {
      novosErros.preco = 'Informe um preço válido.';
    }
    if (!vagas.trim() || isNaN(Number(vagas)) || Number(vagas) < 1) {
      novosErros.vagas = 'Informe ao menos 1 vaga.';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function handlePublicar() {
    if (!validar()) return;

    setEnviado(true);
    Alert.alert('Viagem publicada!', `${origem} → ${destino} em ${data} às ${horario}`);

    setTimeout(() => setEnviado(false), 2000);
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + Spacing.four, paddingBottom: insets.bottom + BottomTabInset + Spacing.four },
        ]}
      >
        <View style={styles.formWrapper}>
          <ThemedText type="subtitle" style={styles.titulo}>
            Oferecer Viagem
          </ThemedText>

          <FormField
            label="Origem"
            placeholder="Ex: Porto Alegre"
            value={origem}
            onChangeText={setOrigem}
            error={erros.origem}
          />

          <FormField
            label="Destino"
            placeholder="Ex: Florianópolis"
            value={destino}
            onChangeText={setDestino}
            error={erros.destino}
          />

          <View style={styles.row}>
            <View style={styles.metade}>
              <FormField
                label="Data"
                placeholder="AAAA-MM-DD"
                value={data}
                onChangeText={setData}
                error={erros.data}
              />
            </View>
            <View style={styles.metade}>
              <FormField
                label="Horário"
                placeholder="HH:MM"
                value={horario}
                onChangeText={setHorario}
                error={erros.horario}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.metade}>
              <FormField
                label="Preço (R$)"
                placeholder="Ex: 85"
                keyboardType="numeric"
                value={preco}
                onChangeText={setPreco}
                error={erros.preco}
              />
            </View>
            <View style={styles.metade}>
              <FormField
                label="Vagas"
                placeholder="Ex: 3"
                keyboardType="numeric"
                value={vagas}
                onChangeText={setVagas}
                error={erros.vagas}
              />
            </View>
          </View>

          <View style={styles.switchRow}>
            <ThemedText type="small">Aceita bagagem de mão</ThemedText>
            <Switch value={aceitaBagagem} onValueChange={setAceitaBagagem} />
          </View>

          <FormField
            label="Observações (opcional)"
            placeholder="Ex: sem paradas, ar-condicionado..."
            value={observacoes}
            onChangeText={setObservacoes}
            multiline
            numberOfLines={3}
            style={{ height: 80, textAlignVertical: 'top' }}
          />

          <TouchableOpacity
            style={[styles.botao, { backgroundColor: enviado ? '#4caf50' : '#00AFF5' }]}
            onPress={handlePublicar}
            activeOpacity={0.8}
          >
            <ThemedText type="smallBold" style={styles.botaoTexto}>
              {enviado ? 'Publicado ✓' : 'Publicar viagem'}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { flexDirection: 'row', justifyContent: 'center' },
  formWrapper: { width: '100%', maxWidth: MaxContentWidth, paddingHorizontal: Spacing.four },
  titulo: { marginBottom: Spacing.four },
  row: { flexDirection: 'row', gap: Spacing.three },
  metade: { flex: 1 },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.three,
  },
  botao: {
    borderRadius: 10,
    paddingVertical: Spacing.three,
    alignItems: 'center',
    marginTop: Spacing.two,
  },
  botaoTexto: { color: '#fff' },
});
