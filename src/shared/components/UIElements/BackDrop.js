import ReactDOM from 'react-dom';

import './BackDrop.styles.scss';

const BackDrop = props => {

    const backdrop = <div className='backdrop' onClick={props.onClick}></div>

    return ReactDOM.createPortal(backdrop, document.getElementById('backdrop-hook'));
}

export default BackDrop;