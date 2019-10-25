import React from 'react';
// import { FacebookProvider } from 'react-facebook';
const ref = React.createRef();

class Home extends React.Component {

  render() {
    return (
      <FancyButton ref={ref} children="button" />
    );
  }
}

// function FancyButton(props) {
//   return (
//     <button className="FancyButton">
//       {props.children}
//     </button>
//   );
// }

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));


export default Home;
