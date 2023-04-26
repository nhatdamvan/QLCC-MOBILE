import {
  Alert,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import moment from 'moment';
import RowComponent from 'components/TicketDetail/RowComponent';
import {COLORS, STYLES} from 'styles/styleGlobal';
import RowComponentStatus from 'components/TicketDetail/RowComponentStatus';
import ModalSelector from 'react-native-modal-selector';
import {getStatusTicket} from 'utils';

const TicketDetailBody = props => {
  const {values, setTicket} = props;
  let index = 0;
  const data = [
    {
      key: index++,
      section: values?.StatusTicketCode === 'wait',
      label: 'Chờ',
      code: 'wait',
    },
    {
      key: index++,
      section: values?.StatusTicketCode === 'inprogress',
      label: 'Tiến hành',
      code: 'inprogress',
    },
    {
      key: index++,
      section: values?.StatusTicketCode === 'done',
      label: 'Đã giải quyết',
      code: 'done',
    },
  ];

  const callNumber = phone => {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View>
      <RowComponent label="Tiêu đề" value={values?.RequestTitle} />
      <ModalSelector
        touchableActiveOpacity={1}
        data={data}
        initValue={getStatusTicket(values?.StatusTicketCode)}
        accessible={true}
        scrollViewAccessibilityLabel={'Scrollable options'}
        cancelButtonAccessibilityLabel={'Cancel Button'}
        onChange={option => {
          setTicket({...values, StatusTicketCode: option.code});
        }}>
        <RowComponentStatus
          label="Trạng thái"
          value={values?.StatusTicketCode}
        />
      </ModalSelector>
      <RowComponent
        label="Mức độ ưu tiên"
        value={values?.Priority ? 'true' : 'false'}
      />
      <RowComponent label="Kênh tiếp nhận" value={values?.ChannelRequestCode} />
      <RowComponent label="Người xử lý" value={values?.AsignUserId} />
      <RowComponent label="Người liên hệ" value={values?.Name} />
      <RowComponent
        label="Ngày tạo"
        value={moment(values?.CreatedDate)
          // .utc()
          .format('DD/MM/YYYY  HH:mm')}
      />
      <RowComponent
        label="Số điện thoại liên hệ"
        value={values?.Phonenumber}
        onPressValue={() => callNumber(values?.Phonenumber)}
      />
      <RowComponent label="Email" value={values?.Email} />
      <RowComponent label="Địa chỉ" value={values?.Address} />
      <View style={styles.itemContainer}>
        <Text style={styles.labelText}>Nội dung</Text>
        <View style={styles.textInput}>
          <Text
            style={{color: COLORS.gray, paddingVertical: STYLES.paddingText}}>
            {values.Note}
          </Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.labelText}>Phương án xử lý</Text>
        <View style={styles.textInput}>
          <Text
            style={{color: COLORS.gray, paddingVertical: STYLES.paddingText}}>
            {values.Note}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(TicketDetailBody);

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  labelText: {
    marginVertical: 12,
    fontSize: 14,
    color: COLORS.black,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 12 : 0,
    borderRadius: 4,
  },
});
