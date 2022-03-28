import React,{Component} from "react";
import "./style.css";
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      date :new Date()
    };
  }
  componentDidMount(){
     this.TimerID = setInterval(()=>this.tick(),1000);
  }
  componentWillUnMount(){
    //Clear the interval
    clearInterval(this.TimerID)
  }
  
  tick(){
    this.setState({date:new Date()});
  }
  render(){
    return (
      <div>
        <h3>{this.state.date.toTimeString()}</h3>
        </div>
    );
  }
}
export default function App() {
  return (
    <div>
      <h1><Clock /></h1>
      <p>Class Component life cycle Methods :)</p>
    </div>
  );
}
