import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import News from './component/News';
import Footer from './component/Footer';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  api = process.env.REACT_APP_NEWS_API;
  state ={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route path="/business" element={ <News setProgress={this.setProgress} api={this.api} key="business" pageSize={6} country="in" category="business" />} />
            <Route path="/entertainment" element={ <News setProgress={this.setProgress} api={this.api} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route path="/general" element={ <News setProgress={this.setProgress} api={this.api} key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/health" element={ <News setProgress={this.setProgress} api={this.api} key="health" pageSize={6} country="in" category="health" />} />
            <Route path="/science" element={ <News setProgress={this.setProgress} api={this.api} key="science" pageSize={6} country="in" category="science" />} />
            <Route path="/sports" element={ <News setProgress={this.setProgress} api={this.api} key="sports" pageSize={6} country="in" category="sports" />} />
            <Route path="/technology" element={ <News setProgress={this.setProgress} api={this.api} key="technology" pageSize={6} country="in" category="technology" />} />
            <Route path="/" element={ <News setProgress={this.setProgress} api={this.api} key="general" pageSize={6} country="in" category="general" />} />
          </Routes>
          <Footer/>
        </Router>
      </>
    );
  }
}
