import { h, Component } from 'preact';
import style from './style';
import { classJoin } from '../../helpers';

export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  clicked = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    const { username, image } = this.props;
    const activeClass = this.state.active ? style.activeHexagon : null;
    return (
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          height: '100px'
        }}
      >
        <defs>
          <pattern id={image} patternUnits="userSpaceOnUse" width="100" height="100">
            <image href={image} x="-25" width="150" height="100" />
          </pattern>
        </defs>
        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill={`url(#${image})`}/>
      </svg>

    );
  }
}
