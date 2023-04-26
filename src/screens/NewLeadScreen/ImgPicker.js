import React, { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { SH, SF, SW } from '../../utils';
import images from '../../index';

function ImgPicker(props) {
    const { userImage, onPress } = props;
    console.log('props', props)


    const Styles = useMemo(
        () =>
            StyleSheet.create({
                userimagstyle: {
                    width: Platform.OS === 'ios' ? 100 : SW(115),
                    height: Platform.OS === 'ios' ? 100 : SW(115),
                    overflow: 'hidden',
                    borderRadius: 100,
                    alignSelf: "center",
                    justifyContent: 'center',
                    flexDirection: 'row',
                    width: SW(100),
                    height: SH(100)
                },
                userimagstyleTwo: {
                    width: Platform.OS === 'ios' ? 100 : SW(115),
                    height: Platform.OS === 'ios' ? 100 : SW(115),
                    overflow: 'hidden',
                   
                    alignSelf: "center",
                    justifyContent: 'center',
                    flexDirection: 'row',
                    width: SW(90),
                    height: SH(90)
                },
                borderroundimage: {
                    position: 'relative',
                },
                mainView: {
                    position: "relative",
                    alignSelf: "center",
                    justifyContent: 'center',
                    flexDirection: 'row',
                }
            }),
        [],
    );

    return (
        <View style={Styles.mainView}>
            <TouchableOpacity onPress={() => onPress()}>
                {userImage ?
                    <Image style={Styles.userimagstyle} resizeMode="cover" source={{ uri: userImage }} />
                    :
                    <Image style={Styles.userimagstyleTwo} resizeMode="center" source={images.UploadImage} />
                }
            </TouchableOpacity>
        </View>
    );
}

ImgPicker.defaultProps = {
    userImage: '',
    noImageType: '',
    onPress: () => { }
};

ImgPicker.propTypes = {
    userImage: PropTypes.string,
    noImageType: PropTypes.string,
    onPress: PropTypes.func,
};

export default ImgPicker;
