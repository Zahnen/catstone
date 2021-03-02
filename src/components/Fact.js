import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall, makeBreedCall } from '../actions/index';


class Fact extends React.Component {

  makeFactCall = () => {
    
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  makeBreedCall = () => {
    const { dispatch } = this.props;
    dispatch(makeBreedCall());
  }

  componentDidMount() {
    this.makeFactCall();
  }

  render(){
    const { error, isLoaded, fact } = this.props;
    if(error) { 
      return <>Error: {error.message} </>;
    } else if (isLoaded) {
      return <>Loading...</>
    } else {
      return(
        <>
          <h5>Cat Facts</h5>
          <ul>
            <p>{fact}</p>
          </ul>
          <button className="btn btn-info" onClick={this.makeFactCall}>Get Another Cat Fact</button>
          <button className="btn btn-info" onClick={this.makeBreedCall}>Get Another Cat Breed</button>

        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    fact: state.fact,
    breeds: state.breeds,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Fact);