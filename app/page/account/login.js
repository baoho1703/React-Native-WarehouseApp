import React, { Component } from 'react';
import { Image, Text, Dimensions, ImageBackground } from 'react-native';
import { Container, Form, Item, Input, Label, Button, Title, View } from 'native-base';
import { users } from '../../data/sample-type'

const DEVICE_WIDTH = Math.round(Dimensions.get('window').width);
const DEVICE_HEIGHT = Math.round(Dimensions.get('window').height);

class Login extends Component {
  constructor(props) {
    super(props);
    this.initState();
  }

  initState = () => {
    this.state = {
      account: {
        email: 'ngocvy@gmail.com',
        password: 'abc123',
      },
      status: '',
      isLogin: true,
      onSignUp: false,
      count: 1,
    }
  }
  // componentWillMount() {
  //   this.loadData();
  // }
  // loadData = async () => {
  //   console.log('ngao ngo')
  //   try {
  //     AsyncStorage.getItem(LOG_IN).then(t => console.log('---', t))
  //     var data = JSON.parse(await AsyncStorage.getItem(LOG_IN)) || 'null';
  //     console.log('data1', data)
  //     if (data === 'null') {
  //       data = [];
  //     }
  //     this.setState({
  //       data1: data,
  //     })
  //   } catch (error) {
  //     console.log('error log in =>', error)
  //   }

  // }
  setValue = (data) => {
    this.setState({
      account: {
        ...this.state.account,
        ...data
      }
    })
  }

  onSubmit = () => {
    const { account, data1 } = this.state;
    var email = account.email;
    var password = account.password;

    users.map((item, index) => {
      if (email === item.email && password === item.password) {
        this.props.checkLogin();
        // var createDate = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
        // var count = this.state.data1;
        // if (data1 == '' || data1.findIndex(t => t.email == email) == -1) {
        //   count.push({ email: email, date: createDate, count: 1 })
        // } else {
        // var index = data1.findIndex(t => t.email == email);
        // console.log('index', index)
        // if (email === data1[index].email && createDate === data1[index].date) {
        //   var push = 0;

        //   count.splice(index, 1, { email: data1[index].email, date: createDate, count: data1[index].count + 1 });
        // } else {
        //   var push = 1;

        //   count.push({ email: email, date: createDate, count: 1 });

        // }
        // }
        // this.props.login(email, password, item.id, createDate, count, push);
        return
      }
    })
  }

  _checkSingup = () => {
    this.props.checkLogin();
  }
  onSignUp = () => {
    this.setState({
      onSignUp: true,
    })
  }

  render() {
    return (
      <Container>
        <ImageBackground style={{ height: DEVICE_HEIGHT, width: DEVICE_WIDTH }} source={require('../../lib/image/nen2.jpg')} >
          <Image style={{ height: 140, width: 140, borderRadius: 90, marginLeft: DEVICE_WIDTH / 3, marginTop: DEVICE_HEIGHT / 7 }} source={require('../../lib/image/fhs.jpg')}></Image>
          <View  >
            <Text style={{ fontSize: 32, paddingBottom: 20, marginTop: 50, textAlign: "center" }}>Welcome !</Text>
            <Form style={{ paddingTop: '1%', marginLeft: 40, marginRight: 40, }}>
              <Item fixedLabel style={{ width: DEVICE_WIDTH / 1.25, alignSelf: "center" }}>
                <Label>Username : </Label>
                <Input
                  onChangeText={(text) => this.setValue({ email: text })}
                  value={this.state.account.email}
                />
              </Item>
              <Item fixedLabel style={{ width: DEVICE_WIDTH / 1.25, alignSelf: "center" }}>
                <Label>Password : </Label>
                <Input
                  onChangeText={(text) => this.setValue({ password: text })}
                  value={this.state.account.password}
                />
              </Item>
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 20 }}>
                <Button block onPress={this.onSubmit} style={{ marginTop: 10, borderRadius: 8, width: 100 }}>
                  <Title>LOGIN</Title>
                </Button>
                <Button block onPress={this.onSignUp} style={{ marginTop: 10, borderRadius: 8, width: 100 }}>
                  <Title>SIGIN UP</Title>
                </Button>
              </View>
            </Form>
          </View>
        </ImageBackground>
      </Container >
    );
  }
}

export default Login;