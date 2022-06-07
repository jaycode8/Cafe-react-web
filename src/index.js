import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class JayMoh extends React.Component {
  render() {
    return (
      <div className='kenya'>
             <App/>
      </div>
    )
  }
}
ReactDOM.render(<JayMoh />, document.getElementById('root'))


