import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";



export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="viagem/[id]" options={{ title: 'Resumo da Viagem' }} />
      </Stack>
  );
}