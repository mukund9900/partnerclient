import React from 'react';
import RangeInput from './rangeInput';
import PartnerList from './partnerlist';
import { fetchPartnerWithInRange } from '../api/partnerApi';

class App extends React.Component {


  state = {partners:[]};

  onSearchSubmit = async range => {
    const partnerList = await fetchPartnerWithInRange(
      'http://localhost:4000/range', range)
    console.log('=========', partnerList)
    this.setState({ partners: partnerList });
  };

render(){
  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <RangeInput onClick = {this.onSearchSubmit}/>
      <PartnerList partners={this.state.partners} />
    </div>
  );
}
};

export default App;
