import React, { Component } from 'react'
import { Button, Image, Text, View, Dimensions, TextInput, Picker, AsyncStorage, StyleSheet } from 'react-native';
import { DatePicker, Icon } from 'native-base';
// import { connect } from 'react-redux'
// import { KEY_PROFILES } from '../../../actions/actionType'
// import { profiles, product, invoice, Warehouse } from '../../../data/sample-type'

const DEVICE_WIDTH = Math.round(Dimensions.get('window').width);
const DEVICE_HEIGHT = Math.round(Dimensions.get('window').height);


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            profiles: profiles
        }
    }
    // componentWillMount() {
    //     this.load_Data();
    // }

    // load_Data = async () => {
    //     try {
    //         var dataProfiles = JSON.parse(await AsyncStorage.getItem(KEY_PROFILES));
    //         this.setState({
    //             ...this.state,
    //             id: dataProfiles.id,
    //             profiles: dataProfiles.dataProfile,
    //         })
    //     }
    //     catch (e) {
    //         console.log('Load Data __USER_', e)
    //     }
    // }
    render() {
        if (this.props.account == '') {
            var profiles = this.state.profiles;
            var findIndex = profiles.findIndex(t => t.userid == this.state.id);
            var name = profiles[findIndex].fullname;
            var image = profiles[findIndex].image;
        }
        else {
            var profiles = this.props.account;
            var name = profiles.fullname;
            var image = profiles.image;
        }
        return (
            <View style={{ height: DEVICE_HEIGHT - 80 }}>

                <View style={{ height: DEVICE_HEIGHT / 2 - 100, backgroundColor: '#b977fb' }}>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Image style={{ height: 120, width: 120, borderRadius: 100 }} source={image}>
                        </Image></View>
                    <View style={{ alignItems: 'center', marginTop: 20 }}><Text style={{ color: 'red', fontSize: 15 }}>{name}</Text></View>
                    <View style={{ marginTop: 10 }}>
                        <Text onPress={() => this.props.navigation.navigate('Login')
                            //this.props.navigation.setParams({ name: 'Lucy' })
                        } style={{ position: 'absolute', right: 20 }}>Logout</Text>
                    </View>
                </View>

                <View style={{ height: DEVICE_HEIGHT / 2 + 100, backgroundColor: 'cyan' }}>
                    <Image style={{ height: DEVICE_HEIGHT / 2 + 80, width: DEVICE_WIDTH }} source={require('../../../lib/image/nenuser.jpg')}>
                    </Image>
                </View>
                <View style={{ marginTop: -470, }}></View>
                <View style={style.viewText}>
                    <View style={{ width: 50, marginLeft: 120 }}><Icon name='contact' color="blue"></Icon></View>
                    <Text onPress={() => this.props.navigation.navigate('UserDetail', { user: profiles[findIndex] })} style={{ color: 'red' }}>User</Text>
                </View>
                <View style={style.viewText}>
                    <View style={{ width: 50, marginLeft: 120 }}><Icon name='clipboard' color='red'></Icon></View>
                    <Text onPress={() => this.props.navigation.navigate('Product')} style={{ color: 'red' }}>Sản Phẩm</Text>
                </View>

                <View style={style.viewText}>
                    <View style={{ width: 50, marginLeft: 120 }}><Icon name='outlet' color="blue"></Icon></View>
                    <Text onPress={() => this.props.navigation.navigate('Warehouse')} style={{ color: 'red' }}>Kho</Text>
                </View>

                <View style={style.viewText}>
                    <View style={{ width: 50, marginLeft: 120 }}><Icon name='skip-backward' color="blue"></Icon></View>
                    <Text onPress={() => this.props.navigation.navigate('EnterWarehouse')} style={{ color: 'red' }}>Nhập Kho</Text>
                </View>
                <View style={style.viewText}>
                    <View style={{ width: 50, marginLeft: 120 }}><Icon name='skip-forward' color="blue"></Icon></View>
                    <Text onPress={() => this.props.navigation.navigate('Export')} style={{ color: 'red' }}>Xuất Kho</Text>
                </View>
                <View style={style.viewText}>
                    <View style={{ width: 50, marginLeft: 120 }}><Icon name='paper-plane' color="blue"></Icon></View>
                    <Text onPress={() => this.props.navigation.navigate('ReportLogin')} style={{ color: 'red' }}>Báo Cáo Đăng Nhập</Text>
                </View>
                <View style={style.viewText}>
                    <View style={{ width: 50, marginLeft: 120 }}><Icon name='paper-plane' color="blue"></Icon></View>
                    <Text onPress={() => this.props.navigation.navigate('Invoice')} style={{ color: 'red' }}>Hóa Đơn</Text>
                </View>
                <View style={style.viewText}>
                    <View style={{ width: 50, marginLeft: 120 }}><Icon name='paper' color="blue"></Icon></View>
                    <Text onPress={() => this.props.navigation.navigate('Report')} style={{ color: 'red' }}>Báo Cáo</Text>
                </View>
            </View>
        )
    }
}
// const mapStateToProps = State => (
//     console.log('aaa', State.account.id),
//     {
//         id: State.account.id,
//         account: State.account.account,
//     }
// )
// export default connect(mapStateToProps, null)(User)
export default User;
const style = StyleSheet.create({

    viewText: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50
    }

})