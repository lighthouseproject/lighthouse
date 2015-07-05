import React, {PropTypes} from 'react';
import {isEmpty, values} from 'lodash';

function sumDonations(donations) {
  return donations.reduce((object, d) => {
    if (object[d.party]) {
      object[d.party].amount += +d.amount;
    } else {
      object[d.party] = {}
      object[d.party].amount = +d.amount;
      object[d.party].party = d.party;
    }
    return object;
  }, {})

}

export default React.createClass({

  displayName: 'Donations',

  propTypes: {
    donations: PropTypes.array.isRequired
  },

  renderDonation(donation) {
    let amount = (+donation.amount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return (
      <div>
        Donated <b>${ amount }</b> to the <b>{ donation.party }</b>
      </div>
    );
  },

  render() {
    const donations = sumDonations(this.props.donations);
    if (isEmpty(donations)) {
      return null;
    }
    return (
      <td style={ { textAlign: 'left' } }>
        { values(donations).map((donation) => this.renderDonation(donation)) }
      </td>
    );
  }
})
