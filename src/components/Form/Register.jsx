import React from 'react';
import $ from 'jquery';

class Submit extends React.Component {
/*  constructor(props){
    super(props);

  } */
  submit(usermap) {
    $.ajax({
      cache: true, // 保留缓存数据
      type: 'POST', // 为post请求
      url: 'http://localhost:8080/add', // 这是我在后台接受数据的文件名
      data: usermap, // 将该表单序列化
      async: false, // 设置成true，这标志着在请求开始后，其他代码依然能够执行。如果把这个选项设置成false，这意味着所有的请求都不再是异步的了，这也会导致浏览器被锁死
      error(request) { // 请求失败之后的操作
        console.log('fail');
      },
      success(data) { // 请求成功之后的操作
        console.log('success');
      },
    });
  }

  render() {
    return (
      <button onClick={this.submit(this.props.usermap)} name="submit">注册</button>
    );
  }
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usermap: {},
    };
  }

  handleChangeUsername(e) {
    const temp = this.state.usermap;
    temp.username = e.target.value;
    this.setState({
        usermap: temp,
      },
    );
  }

  handleChangePassword(e) {
    const temp = this.state.usermap;
    temp.password = e.target.value;
    this.setState({
        usermap: temp,
      },
    );
  }

  handleChangeNickname(e) {
    const temp = this.state.usermap;
    temp.nickname = e.target.value;
    this.setState({
        usermap: temp,
      },
    );
    console.log(this.state.usermap);
  }


  render() {
    return (
      <div>
        用户名：<input value={this.state.usermap.username}
                   onChange={this.handleChangeUsername.bind(this)}/><br/>
        密 码：<input value={this.state.usermap.password}
                   onChange={this.handleChangePassword.bind(this)}/><br/>
        昵 称：<input value={this.state.usermap.nickname}
                   onChange={this.handleChangeNickname.bind(this)}/><br/>
        <p>{this.state.usermap.username}</p>
        <p>{this.state.usermap.password}</p>
        <p>{this.state.usermap.nickname}</p>
        <Submit />
      </div>
    );
  }
}

export default Register;
