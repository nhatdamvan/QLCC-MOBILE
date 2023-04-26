import React, { useMemo, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Style } from '../../styles';
import { useTheme } from '@react-navigation/native';
import propTypes from 'prop-types';
import Tooltip from 'react-native-walkthrough-tooltip';

function Tooltips({ content, Openicon, buttonStyle, textstyle, setwhiteboxstyle }) {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  const { colors } = useTheme();
  const Styles = useMemo(() => Style(colors), [colors]);

  return <Tooltip
    animated={true}
    arrowSize={{ width: 0, height: 0 }}
    backgroundColor="rgba(0,0,0,0.5)"
    isVisible={toolTipVisible}
    content={
      <View style={[Styles.setwhiteboxstyle, { ...setwhiteboxstyle }]}>
        {content}
      </View>
    }
    placement="left"
    onClose={() => setToolTipVisible(false)}
  >
    <TouchableOpacity
      style={[Styles.buttonStyle, { ...buttonStyle }]}
      onPress={() => setToolTipVisible(true)}>
      <Text style={[Styles.settextcolor, { ...textstyle }]}>{Openicon}</Text>
    </TouchableOpacity>
  </Tooltip>;
}

Tooltips.defaultProps = {
  setToolTipVisible: () => { },
  toolTipVisible: false
};

Tooltips.propTypes = {
  setToolTipVisible: propTypes.func,
  toolTipVisible: propTypes.boolean
};

export default Tooltips;
