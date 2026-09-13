import { Passageiro } from "./passageiro";

export interface Viagem {
  id: string;
  origem: string;
  destino: string;
  data: string;
  horarioSaida: string;
  horarioChegada: string;
  preco: number;
  vagasDisponiveis: number;
  passageiros: Passageiro[];
  observacoes?: string;
}

export const VIAGENS: Viagem[] = [
  {
    id: "v1",
    origem: "Porto Alegre",
    destino: "Rio Grande",
    data: "2026-09-20",
    horarioSaida: "08:30",
    horarioChegada: "07:00",
    preco: 85,
    vagasDisponiveis: 2,
    passageiros: [
      {
        id: "m1",
        nome: "Carlos Santana",
        avaliacao: 4.8,
        avatar: "https://i.pravatar.cc/150?u=Santana",
      },
    ],
    observacoes: "Carro com ar-condicionado",
  },
  {
    id: "v2",
    origem: "Rio Grande",
    destino: "Porto Alegre",
    data: "2026-09-24",
    horarioSaida: "04:30",
    horarioChegada: "07:00",
    preco: 40,
    vagasDisponiveis: 1,
    passageiros: [
      {
        id: "m2",
        nome: "Ronaldo N.",
        avaliacao: 4.6,
        avatar: "https://i.pravatar.cc/150?u=Ronaldo",
      },
      {
        id: "m3",
        nome: "Romario",
        avaliacao: 4.6,
        avatar: "https://i.pravatar.cc/150?u=Romario",
      },
      {
        id: "m4",
        nome: "Rivaldo",
        avaliacao: 4.6,
        avatar: "https://i.pravatar.cc/150?u=Rivaldo",
      },
    ],
  },
  {
    id: "v3",
    origem: "Nova York",
    destino: "Não-Me-Toque",
    data: "2026-10-22",
    horarioSaida: "07:00",
    horarioChegada: "12:00",
    preco: 20,
    vagasDisponiveis: 1,
    passageiros: [
      {
        id: "m5",
        nome: "Lisbela",
        avaliacao: 4.9,
        avatar: "https://i.pravatar.cc/150?u=Lisbela",
      },
    ],
    observacoes: "Sem paradas",
  },
];