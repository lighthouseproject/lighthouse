import React, {PropTypes} from 'react';
import {isEmpty} from 'lodash';

export default React.createClass({

  displayName: 'Donations',

  propTypes: {
    candidacies: PropTypes.array.isRequired
  },

  renderCandidate(candidate) {
    return (
      <div>
        Ran for <b>{ candidate.party }</b> in the { candidate.election }
      </div>
    );
  },

  render() {
    const candidacies = this.props.candidacies;
    if (isEmpty(candidacies)) {
      return null;
    }

    return (
      <td style={ { textAlign: 'left' } }>
        { candidacies.map((c) => this.renderCandidate(c)) }
      </td>
    );
  }
})
