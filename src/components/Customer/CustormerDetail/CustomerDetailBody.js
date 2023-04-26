import {View} from 'react-native';
import React from 'react';
import moment from 'moment';
import RowComponent from '../RowComponent';

const CustomerDetailBody = (props) => {
  const {values, handleChange, editAbel} = props;
  return (
    <View>
      <RowComponent
        label="Họ tên khách hàng"
        value={values?.Name}
        handleChange={handleChange('Name')}
        editAbel={editAbel}
      />
      <RowComponent
        label="Mã khách hàng"
        value={values?.Code}
        handleChange={handleChange('Name')}
        editAbel={editAbel}
      />
      <RowComponent
        label="Số điện thoại"
        value={values?.PhonenumberFirst}
        handleChange={handleChange('PhonenumberFirst')}
        editAbel={editAbel}
      />
      <RowComponent
        label="Email"
        value={values?.Email}
        handleChange={handleChange('Email')}
        editAbel={editAbel}
      />
      <RowComponent
        label="Giới tính"
        value={values?.SexName}
        editAbel={editAbel}
      />
      <RowComponent
        label="Ngày sinh"
        value={moment(values?.BirthDay).format('DD/MM/YYYY')}
        editAbel={editAbel}
      />
      <RowComponent
        label="Số CCCD/CMND"
        value={values?.CCCD}
        handleChange={handleChange('CCCD')}
        editAbel={editAbel}
      />
      <RowComponent
        label="Địa chỉ"
        value={values?.Address}
        handleChange={handleChange('Address')}
        editAbel={editAbel}
      />
    </View>
  );
};

export default React.memo(CustomerDetailBody);
