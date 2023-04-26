import {Alert, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from 'styles/styleGlobal';
import Header from 'components/commonComponents/Header';
import HeaderHome from './Header';
import TicketDetailBody from './TicketDetailBody';
import {Button} from 'components';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {updateTicket} from 'api/ticketApi';
import {TaskScreenStyle} from 'styles';

export default function TicketDetail(props) {
  const {route} = props;
  const {ticketRequest} = route?.params;
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [ticket, setTicket] = useState(ticketRequest);
  console.log('ticket', ticket);

  const queryClient = useQueryClient();

  const editTicketMutation = useMutation({
    mutationFn: updateTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['pendings'],
      });
      queryClient.invalidateQueries({
        queryKey: ['progress'],
      });
      queryClient.invalidateQueries({
        queryKey: ['completed'],
      });
      Alert.alert('Update status successfull!', '');
    },
    onError: error => {
      Alert.alert('Update failed!', error);
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header label="Yêu cầu" isBack />
        <HeaderHome
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <TicketDetailBody values={ticket} setTicket={setTicket} />
        <View style={TaskScreenStyle.cetcenterbutton}>
          <Button
            title="Lưu"
            onPress={() => editTicketMutation.mutate(ticket)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white},
});
