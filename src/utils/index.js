import moment from 'moment';
import {COLORS} from 'styles/styleGlobal';

export * from './dimensions';
export {default as Colors} from './Colors';
export {default as Strings} from './Strings';
export {default as Fonts} from './Fonts';
export * from './Passwordviseble';
export * from './Imagedataset';

export const getStatusTicket = statusTicket => {
  if (statusTicket === 'wait') {
    return {
      label: 'Chờ',
      color: COLORS.red,
    };
  } else if (statusTicket === 'inprogress') {
    return {
      label: 'Tiến hành',
      color: COLORS.blue,
    };
  } else {
    return {
      label: 'Đã giải quyết',
      color: COLORS.green,
    };
  }
};

export const formatData = (datas, numColumns) => {
  if (datas?.length) {
    const totalRows = Math.floor(datas?.length / numColumns);
    let totalLastRow = datas?.length - totalRows * numColumns;
    if (totalLastRow) {
      while (totalLastRow !== 0 && totalLastRow !== numColumns) {
        datas.push({key: 'blank', empty: true});
        totalLastRow++;
      }
    }
  }
  return datas;
};

export const getAcronym = name => {
  if (name) {
    const acronym = name
      .split(/\s/)
      .reduce((response, word) => (response += word.slice(0, 1)), '')
      .toUpperCase();

    return acronym.slice(0, 2);
  }
  return '';
};

export function dateFromNow(date) {
  return moment(date).fromNow();
}