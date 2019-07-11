import React, {Component} from 'react';
class Ticker extends Component {
  constructor(props){
    super(props);
    this.state= {
      count:0
    }
  }

    componentDidMount() {
      setInterval(()=> {
          this.tick();
        },1000)
      };
    

    componentWillUnmount() {
      clearInterval(this.counterID);
    }
  
//functions added below

    tick = () => {
      this.setState({
        count: this.state.count + 1
      });
    }
  
    //reset button
    reset = () => {
      this.setState({
        count:0
      })
    }

    // pause = () => {
    //   this.setState({
    //     count: 
    //   })
    // }


  render(){
    return(
      <div>
        <h1>Greetings!</h1>
      <button type = "button" onClick ={this.reset}>Reset Count</button>
      <h2>The number of the count is currently {this.state.count}.
      </h2></div>
      
      );
  }
}


// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

export default Ticker;
