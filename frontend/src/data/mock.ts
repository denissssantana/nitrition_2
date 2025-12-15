export type Patient = {
  name: string;
  age: number;
  gender: 'Masculino' | 'Feminino' | string;
  goal: string;
  height: string;
  weight: string;
  bmi: string;
  bmiLabel: string;
  warning: string;
  comorbidities: string[];
  activity: {
    practice: string;
    modality: string;
    frequency: string;
  };
  appointments: { title: string; date: string }[];
  guidelines: string[];
  contacts: {
    whatsapp: string;
    email: string;
    instagram: string;
  };
  meals: {
    title: string;
    options: string[];
  }[];
};

export const patient: Patient = {
  name: 'Dênis Santana',
  age: 42,
  gender: 'Masculino',
  goal: 'Perder peso e ganhar massa muscular',
  height: '1,73 m',
  weight: '97,4 kg',
  bmi: '32,54',
  bmiLabel: 'Obesidade grau I',
  warning: 'Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais.',
  comorbidities: ['Hipertensão', 'Submetido cirurgia bariátrica'],
  activity: {
    practice: 'Sim',
    modality: 'Musculação',
    frequency: '5 dias / semana',
  },
  appointments: [
    { title: 'Primeira consulta', date: '15/06/2024' },
    { title: 'Próxima consulta', date: '15/07/2024' },
  ],
  guidelines: [
    'Tempere os alimentos com sucos de frutas; use ervas e especiarias naturais; evite temperos industrializados.',
    'Prefira carnes grelhadas, assadas ou no vapor; evite milanesa e frituras.',
    'Priorize carnes brancas como frango e também soja.',
    'Evite ao máximo álcool e refrigerantes comuns; se necessário, use versões zero com moderação.',
    'Coma frutas com bagaço/casca e use fibras (aveia, frutas, hortaliças cruas, integrais).',
    'Leia os rótulos dos alimentos e fique atento a excesso de gordura saturada/trans, sal e açúcar.',
    'Pratique atividade física regularmente com orientação médica.',
    'Prefira adoçantes como Stevia ou Sucralose; evite açúcar refinado.',
    'Evite maionese, creme de leite, margarina, sorvetes, chocolates, leite condensado, enlatados, embutidos e frituras.',
    'Prefira produtos com indicações light/diet/zero e baixo teor de açúcar.',
    'Sentindo intolerância a qualquer alimento prescrito, suspenda e entre em contato.',
    'Anote dificuldades, dúvidas e sugestões para próxima consulta.',
    'Este é um plano inicial; vamos evoluir juntos para deixá-lo mais adequado e fácil de seguir.',
  ],
  contacts: {
    whatsapp: '(81) 99276-9485',
    email: 'denisss.nutri@gmail.com',
    instagram: 'https://www.instagram.com/nutrition/',
  },
  meals: [
    { title: 'Café da manhã', options: ['Opção 01', 'Opção 02', 'Opção 03', 'Opção 04', 'Opção 05'] },
    { title: 'Lanche da manhã', options: ['Opção 01', 'Opção 02', 'Opção 03', 'Opção 04', 'Opção 05'] },
    { title: 'Almoço', options: ['Opção 01', 'Opção 02', 'Opção 03', 'Opção 04', 'Opção 05'] },
    { title: 'Lanche da tarde', options: ['Opção 01', 'Opção 02', 'Opção 03', 'Opção 04', 'Opção 05'] },
    { title: 'Jantar', options: ['Opção 01', 'Opção 02', 'Opção 03', 'Opção 04', 'Opção 05'] },
    { title: 'Ceia', options: ['Opção 01', 'Opção 02', 'Opção 03', 'Opção 04', 'Opção 05'] },
  ],
};
