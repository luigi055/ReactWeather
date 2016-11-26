import React, { Component } from 'react';


class ErrorModal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const modal = new Foundation.Reveal($('#error-modal')); //from jquery Foundation
    modal.open();
  }
  render() {
    const { title, message } = this.props;
    return (
      <div id="error-modal" className="small reveal text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="" aria-label="Close modal" > Okay </button>
        </p>
      </div>
    );
  }
}
ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
};

ErrorModal.defaultProps = {
  title: 'Error',
};

export default ErrorModal;
