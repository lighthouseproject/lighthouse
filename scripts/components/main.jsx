import React from 'react';
import Flux from '../flux';
import Appointment from './appointment.jsx';
import Donations from './donations.jsx';
import Candidacies from './candidacies.jsx';

export default React.createClass({

  displayName: 'Main',

  renderAppointmentRow(appointment) {
    let name = appointment.clean_name;
    let isDonor = Flux.stores.Associations.isDonor(name);
    let isCandidate = Flux.stores.Associations.isCandidate(name);

    if (isDonor || isCandidate) {
      const donations = Flux.stores.Associations.getDonations(name);
      const candidacies = Flux.stores.Associations.getCandidacies(name);
      return (
        <tr>
          <Appointment appointment={ appointment } />
          <Candidacies candidacies={ candidacies } />
          <Donations donations={ donations } />
        </tr>
      );
    }

    return null;
  },

  render() {
    const appointments = Flux.stores.Appointments.getAppointments();
    return (
      <div>
        <table style={ { width: '100%' } } className='table table-hover table-mc-light-blue table-bordered'>
          <tbody>
            { appointments.map((app) => this.renderAppointmentRow(app)) }
          </tbody>
        </table>
      </div>
    );
  }
})
