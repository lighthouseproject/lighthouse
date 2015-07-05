import React, {PropTypes} from 'react';

export default React.createClass({

  displayName: 'Appointment',

  propTypes: {
    appointment: PropTypes.object.isRequired
  },

  getLocation(appointment) {
    if (appointment.appointment_location) {
      return <div>Location: { appointment.appointee_location }</div>;
    }
    return null;
  },

  render() {
    return (
      <td style={ { width: '35%', textAlign: 'right' } }>
        <div style={ { fontWeight: 'bold', fontSize: 'larger' } }>{ this.props.appointment.appointee_name }</div>
        <div style={ { fontSize: 'smaller' } }>Appointed to</div>
        <div>"{ this.props.appointment.category }"</div>
        { this.getLocation(this.props.appointment) }
      </td>
    );
  }
})
