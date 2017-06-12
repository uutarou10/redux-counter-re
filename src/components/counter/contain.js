import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import {
  increment,
  decrement,
  reset,
} from '../../actions/counters';

// selector
import { getNum } from '../../reducers/counters';

const mapStateToProps = (state) => {
  return {
    num: getNum(state)
  };
}

console.log(mapStateToProps);

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    increment,
    decrement,
  },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps);
