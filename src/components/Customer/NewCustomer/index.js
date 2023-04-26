import {Alert, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from 'styles/styleGlobal';
import Header from 'components/commonComponents/Header';
import FormCustomer from './FormCustomer';
import jwtAxios from 'api/jwtAxios';
import {Formik} from 'formik';
import AppLoader from 'components/commonComponents/AppLoader';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {addCustomer} from 'api/customerApi';

export default function NewCustomer() {
  const [codeCustomer, setCodeCustomer] = useState('');
  const [loadingGetCode, setLoadingGetCode] = useState(true);

  const queryClient = useQueryClient();

  const addCustomerMutation = useMutation({
    mutationFn: addCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['customers']});
      Alert.alert('Add new customer successfull!', '');
    },
    onError: error => {
      Alert.alert('Thêm khách hàng', error);
    },
  });

  useEffect(() => {
    getCodeCustomer();
  }, []);

  const getCodeCustomer = async () => {
    setLoadingGetCode(true);
    jwtAxios
      .post('generationCode', {
        code: 'KH',
      })
      .then(request => {
        console.log('request.data.data', request.data.data);
        setCodeCustomer(request.data.data);
      })
      .catch(error => {
        showAlert(TYPE.ERROR, error, '');
      })
      .finally(() => {
        setLoadingGetCode(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {loadingGetCode ? (
        <AppLoader />
      ) : (
        <Formik
          initialValues={{
            id: '',
            Code: codeCustomer,
            Email: '',
            Name: '',
            BirthDay: null, // YYYY-MM-DD
            Sex: 'male',
            CCCD: '',
            Zalo: '',
            Facebook: '',
            Address: '',
            PhonenumberFirst: '',
          }}
          onSubmit={values => addCustomerMutation.mutate(values)}>
          {({handleChange, handleSubmit, values, setFieldValue}) => (
            <ScrollView showsVerticalScrollIndicator={false}>
              <Header
                label="Thêm mới khách hàng"
                isBack
                textLeft="Lưu"
                clickTextIcon={handleSubmit}
              />
              <FormCustomer
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
            </ScrollView>
          )}
        </Formik>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white},
});
