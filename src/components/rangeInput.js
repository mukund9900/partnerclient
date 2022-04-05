import React from 'react';

class RangeInput extends React.Component {
    
  state = { minKm: '', maxKm: '' };
  onRangeSubmit = (e)=>{
    e.preventDefault();
    this.props.onClick(this.state);
  }

  render() {
    return (
      <div className="ui segment">
        <h4 className="ui dividing header">Fetch Partners</h4>  
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="two fields">
            <div className='field'>
              <label>Minimun Range(Km)</label>
              <input type="number"
              onChange={e=>this.setState({minKm:e.target.value, maxKm:this.state.maxKm})}
              placeholder="Example: 1" required
              />
            </div>
            <div className='field'>
              <label>Maximun Range(Km)</label>
              <input type="number" value={this.state.maxKm}
              onChange={e=>this.setState({minKm:this.state.minKm, maxKm:e.target.value})}
              placeholder="Example: 200" required
              />
            </div>
          </div>
          <button className="ui button" type="submit"
          onClick={this.onRangeSubmit}
          >Submit</button>
        </form>
      </div>
    );
  }
}

export default RangeInput;
