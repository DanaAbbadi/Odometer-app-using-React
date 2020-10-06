import React from 'react';
import './App.css';


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={
      msg : props.greeting
    }
  };

  render(){
    return(
      <>
      <header className='header'>
      <h1>{this.state.msg}</h1>
      <img src='https://i.pinimg.com/originals/88/8d/84/888d8449184f7aa34327cc544855cecc.gif'></img>
      <p>Play around with different odometer values</p>
      </header>
      </>
    )
  }
}

class Odometer extends React.Component{
  constructor(){
    super();
    this.state={
      odometerValue : '1'

    };
  }

  changeValue(mile){
    let newValue = Number(this.state.odometerValue) + mile;
    newValue = (newValue>9999) ? (mile - (9999 - Number(this.state.odometerValue))) : (newValue) ;
    this.setState({
      odometerValue: newValue.toString()
    });
  }

  render(){
    return(
      <>
      <div className='odometerContainer'>
        <p>{this.state.odometerValue.padStart(4, '0')}</p>

        <button onClick= { () => this.changeValue(1)}>1 Mile</button>
        <button onClick= { () => this.changeValue(10)}> 10 Miles</button>
        <button onClick= { () => this.changeValue(100)}>100 Miles</button>
        <button onClick= { () => this.changeValue(1000)}>1000 Miles</button>
      </div>


      </>
    );
  }

}

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      trademark : props.trademarkText
    }
  };

  render(){
    return(
      <>
      <footer className="Footer">
        <p>Copy Right Stuff for {this.state.trademark}</p>
      </footer>
      </>
    )
  }
}


function App() {
  return (
    <>
    <Header greeting="Welcome to the ''coolest'' Odometer App!!!!" />
    <Odometer />
    <Footer trademarkText='ASAC' />

    



    </>
  );
}

export default App;
