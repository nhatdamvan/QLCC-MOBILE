import {Alert, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from 'styles/styleGlobal';
import Header from 'components/commonComponents/Header';
import CustomerDetailBody from './CustomerDetailBody';
import {Formik} from 'formik';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {updateCustomer} from 'api/customerApi';

export default function CustomerDetail(props) {
  const {route} = props;
  const {customer} = route?.params;
  const [editAbel, setEditAbel] = useState(false);

  const queryClient = useQueryClient();

  const updateCustomerMutation = useMutation({
    mutationFn: updateCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['customers']});
      Alert.alert('Edit customer info successfull!', '');
    },
    // onError: error => {
    //   showAlert(TYPE.ERROR, '', error);
    // },
  });

  const clickLeftIcon = () => {
    setEditAbel(!editAbel);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          id: customer?.id,
          Code: customer?.Code || '',
          Email: customer?.Email || '',
          Name: customer?.Name || '',
          BirthDay: customer?.BirthDay || '', // YYYY-MM-DD
          Sex: customer?.Sex || '',
          SexName: customer?.SexName || '',
          CCCD: customer?.CCCD || '',
          Zalo: customer?.Zalo || '',
          Facebook: customer?.Facebook || '',
          Address: customer?.Address || '',
          PhonenumberFirst: customer?.PhonenumberFirst || '',
        }}
        onSubmit={values => updateCustomerMutation.mutate(values)}>
        {({handleChange, handleSubmit, values, setFieldValue}) => (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Header
              label={customer?.Name}
              isBack
              nameIconLeft="edit"
              textLeft={editAbel ? 'Lưu' : null}
              clickLeftIcon={clickLeftIcon}
              clickTextIcon={handleSubmit}
            />
            <CustomerDetailBody
              values={values}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
              editAbel={editAbel}
            />
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white},
});
