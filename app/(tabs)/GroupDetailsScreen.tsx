import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { supabase } from '../supabaseClient';

type Props = {
  route: { params: { groupId: string } };
};

type Group = {
  id: string;
  nome: string;
  descricao: string;
  lider_id: string; // Exemplo adicional
};

type Member = {
  id: string;
  nome: string;
};

export default function GroupDetailsScreen({ route }: Props) {
  const { groupId } = route.params;
  const [group, setGroup] = useState<Group | null>(null);
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGroupDetails();
    fetchGroupMembers();
  }, []);

  async function fetchGroupDetails() {
    const { data, error } = await supabase
      .from('grupos')
      .select('*')
      .eq('id', groupId)
      .single();
    
    if (error) {
      console.error('Erro ao buscar detalhes do grupo:', error);
    } else {
      setGroup(data);
    }
    setLoading(false);
  }

  async function fetchGroupMembers() {
    const { data, error } = await supabase
      .from('alunos')
      .select('id, nome')
      .eq('grupo_id', groupId);
    
    if (error) {
      console.error('Erro ao buscar membros do grupo:', error);
    } else {
      setMembers(data);
    }
  }

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!group) {
    return (
      <View style={styles.container}>
        <Text>Grupo não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{group.nome}</Text>
      <Text style={styles.description}>{group.descricao}</Text>
      <Text style={styles.subtitle}>Membros do Grupo:</Text>
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.member}>{item.nome}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#333', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  member: { fontSize: 16, color: '#555' },
});
