import $ from 'jquery';
import React from 'react';

class AjaxUtil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: null,
      elements: [],
    };
  }

/*  queryData() {

  } */

/*  fetch('http://www.wcxuan.club:8080/12springboot/queryList', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  mode: 'cors',
  cache: 'default',
}).then(res => res.json())
  .then(data => {
    console.log(data);
    this.setState({
      getdata: data,
    });
  }); */
  componentWillMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      success: res => {
        // console.log(res.data.teachers);
        this.setState({ responseData: res.result.content.data });
        // console.log(this.state.responseData);
        const elements = [];
        this.state.responseData.forEach(item => {
            elements.push(
              <div style={{
                width: '300px',
                border: 'skyblue 1px solid',
                margin: 'auto',
                textAlign: 'center',
              }}>{item.id},{item.username}</div>
            );
          },
        );
        this.setState({ element: elements });
        console.log(this.state.element);
      },
    });
  }

  render() {
    return (
      <div style={{
        background: 'pink',
      }}>
        {this.state.element}
      </div>
    );
  }
}

export default AjaxUtil;
