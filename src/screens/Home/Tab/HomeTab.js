import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView, } from 'react-native';
import images from '../../../index';
import { HomeStyle } from '../../../styles';
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Fontisto';
import { Strings, Calenderdata } from '../../../utils';
import RouteName from '../../../routes/RouteName';
import useGetPendings from 'hooks/ticketRequests/useGetPendings';
import useGetProgress from 'hooks/ticketRequests/useGetProgress';
import useGetCompleted from 'hooks/ticketRequests/useGetCompleted';
import ListTicketRequests from 'components/Home/ListTicketRequests';
import useGetListCustomers from 'hooks/useGetListCustomers';
import Draggable from 'react-native-draggable';

const HomeTab = (props) => {
    const { navigation } = props;
    const [slectdate, setslectdate] = useState('3');
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const Selectedfunctiodata = (item) => {
        setslectdate(item);
    };
    const queryPending = useGetPendings({
        ValueFilter: 'wait',
        Sort: { Name: 1 },
        PageIndex: 1,
        PageSize: 5,
    });

    const queryProgress = useGetProgress({
        ValueFilter: 'inprogress',
        Sort: { Name: 1 },
        PageIndex: 1,
        PageSize: 5,
    });

    const queryCompleted = useGetCompleted({
        ValueFilter: 'done',
        Sort: { Name: 1 },
        PageIndex: 1,
        PageSize: 5,
    });
    const {data, isLoading} = useGetListCustomers({
        ValueFilter: '',
        Sort: {Name: 1},
        PageIndex: 1,
        PageSize: 20,
      });
      console.log('data?.datas', data?.datas)
    const Celenderdataitem = (item) => {
        return (
            <TouchableOpacity onPress={() => Selectedfunctiodata(item.digit)} style={slectdate === item.digit ? [HomeStyle.SetwidStyletwo, { backgroundColor: colorrdata }] : HomeStyle.SetwidStyle}>
                <View>
                    <Text style={slectdate === item.digit ? HomeStyle.settextstyletilewhite : HomeStyle.settextstyletile}>{item.title}</Text>
                    <Text style={slectdate === item.digit ? HomeStyle.Setdigitstylewhite : HomeStyle.Setdigitstyle}>{item.digit}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView>
            <View style={[HomeStyle.ImageCenter, HomeStyle.ImageBox]}>
                <Image style={HomeStyle.UserPictureSet} source={images.UserPicture} resizeMode="cover" />
            </View>
            {/* Start Code for Calender date */}
            <View>
                <View style={HomeStyle.flexrowsetcelender}>
                    <Text style={[HomeStyle.CelenderHeadText, { color: colorrdata }]}>{Strings.HomeTabText.Decembertext}</Text>
                    <Text style={HomeStyle.CelenderHeadTexttwo}>{Strings.HomeTabText.Todaytext}</Text>
                </View>
                <View>
                    <FlatList
                        data={Calenderdata}
                        horizontal
                        renderItem={({ item, index }) => Celenderdataitem(item, index)}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={HomeStyle.setcontainertyle}
                    />
                </View>
            </View>
            {/* End Code for Calender date */}
            <ListTicketRequests
                ticketRequests={queryPending?.data?.datas}
                statusTicket="wait"
                isLoading={queryPending.isLoading}
            />
            <ListTicketRequests
                ticketRequests={queryProgress?.data?.datas}
                statusTicket="inprogress"
                isLoading={queryProgress.isLoading}
            />
            <ListTicketRequests
                ticketRequests={queryCompleted?.data?.datas}
                statusTicket="done"
                isLoading={queryCompleted.isLoading}
            />
            {/* Start Meeting */}
            {/* <View style={HomeStyle.Setbgcolohometab}>
                <View style={HomeStyle.Setfullwidth}>
                    <View style={HomeStyle.setcentericon}>
                        <Icon name="slightly-smile" color={colorrdata} size={100} />
                    </View>
                    <Text style={[HomeStyle.Smilebottomtext, { color: colorrdata }]}>{Strings.HomeTabText.youhavtext_long}</Text>
                    <View style={[HomeStyle.Flexminviewplus, { borderTopColor: colorrdata }]}>
                        <TouchableOpacity style={[HomeStyle.Setbuttonwidth, { backgroundColor: colorrdata, }]} onPress={() => navigation.navigate(RouteName.ADD_MEETING_SCREEN)}>
                            <Text style={HomeStyle.Smilebottomtexttwo}>{Strings.HomeTabText.plusmeeting}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[HomeStyle.Setbuttonwidth, { backgroundColor: colorrdata, }]} onPress={() => navigation.navigate(RouteName.ADD_TASK_SCREEN)}>
                            <Text style={HomeStyle.Smilebottomtexttwo}>{Strings.HomeTabText.plustask}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[HomeStyle.Setbuttonwidth, { backgroundColor: colorrdata, }]} onPress={() => navigation.navigate(RouteName.ADD_CALL_SCREEN)}>
                            <Text style={HomeStyle.Smilebottomtexttwo}>{Strings.HomeTabText.pluscall}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View> */}
            {/* End Meeting */}
        </ScrollView>
    );
};
export default HomeTab;
