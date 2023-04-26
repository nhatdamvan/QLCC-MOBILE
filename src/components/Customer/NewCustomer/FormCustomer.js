import {CheckBox, Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {COLORS, STYLES} from 'styles/styleGlobal';

const FormCustomer = props => {
  const {values, handleChange, setFieldValue} = props;
  const [date] = useState(new Date());
  const [open, setOpen] = useState(false);
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <ScrollView>
      <View style={styles.itemContainer}>
        <Text style={styles.labelText}>Mã KH</Text>
        <View style={styles.textInput}>
          <Text
            style={{color: COLORS.gray, paddingVertical: STYLES.paddingText}}>
            {values.Code}
          </Text>
          {/* <TextInput
            onChangeText={handleChange('Code')}
            value={values.Code}
            placeholder="Mã tự động tạo"
            placeholderTextColor={COLORS.gray}
          /> */}
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.labelText}>Họ tên khách hàng</Text>
        <View style={styles.textInput}>
          <TextInput
            onChangeText={handleChange('Name')}
            value={values.Name}
            placeholder="Nhập họ tên khách hàng"
            placeholderTextColor={COLORS.gray}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.labelText}>Số điện thoại</Text>
        <View style={styles.textInput}>
          <TextInput
            keyboardType="number-pad"
            onChangeText={handleChange('PhonenumberFirst')}
            value={values.PhonenumberFirst}
            placeholder="Nhập số điện thoại"
            placeholderTextColor={COLORS.gray}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.labelText}>Email</Text>
        <View style={styles.textInput}>
          <TextInput
            onChangeText={handleChange('Email')}
            value={values.Email}
            placeholder="Nhập địa chỉ email"
            placeholderTextColor={COLORS.gray}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.labelText}>Ngày sinh</Text>
        <View
          style={[
            styles.textInput,
            {flexDirection: 'row', justifyContent: 'space-between'},
          ]}>
          <TextInput
            onChangeText={handleChange('BirthDay')}
            value={values.BirthDay}
            placeholder="YYYY-MM-DD"
            placeholderTextColor={COLORS.gray}
          />
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="calendar-month"
              size={16}
              color={COLORS.black}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.itemContainer, {marginBottom: 8}]}>
        <Text style={styles.sexLabelText}>Giới tính</Text>
        <View style={styles.sexContainer}>
          <CheckBox
            title="Nam"
            center
            checkedIcon={
              <Icon
                name="radio-button-checked"
                type="material"
                color={colorrdata}
                size={20}
              />
            }
            uncheckedIcon={
              <Icon
                name="radio-button-unchecked"
                type="material"
                color="grey"
                size={20}
              />
            }
            checked={values.Sex == 'male'}
            onPress={() => {
              setFieldValue('Sex', 'male');
            }}
          />
          <CheckBox
            center
            title="Nữ"
            checkedIcon={
              <Icon
                name="radio-button-checked"
                type="material"
                color={colorrdata}
                size={20}
              />
            }
            uncheckedIcon={
              <Icon
                name="radio-button-unchecked"
                type="material"
                color="grey"
                size={20}
              />
            }
            checked={values.Sex == 'female'}
            onPress={() => {
              setFieldValue('Sex', 'female');
            }}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.labelText}>Số CCCD / CMND</Text>
        <View style={styles.textInput}>
          <TextInput
            keyboardType="number-pad"
            onChangeText={handleChange('CCCD')}
            value={values.CCCD}
            placeholder="Nhập số CCCD / CMND"
            placeholderTextColor={COLORS.gray}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.labelText}>Địa chỉ</Text>
        <View style={styles.textInput}>
          <TextInput
            onChangeText={handleChange('Address')}
            value={values.Address}
            placeholder="Nhập địa chỉ"
            placeholderTextColor={COLORS.gray}
          />
        </View>
      </View>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={value => {
          setFieldValue('BirthDay', value.toLocaleDateString('en-CA'));
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </ScrollView>
  );
};

export default React.memo(FormCustomer);

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
    // justifyContent: 'center'
  },
  labelText: {
    marginVertical: 12,
    fontSize: 14,
    color: COLORS.black,
  },
  sexLabelText: {
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
  sexContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
