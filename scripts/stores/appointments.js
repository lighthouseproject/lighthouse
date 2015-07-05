import Fluxxor from 'fluxxor';
import honours from '../data/appointments/honours.json';
import general from '../data/appointments/general.json';

export default Fluxxor.createStore({
  initialize() {
    this.honours = honours;
    this.general = general;
    this.appointments = honours.concat(this.general);
  },

  getAppointments() {
    return this.appointments;
  }

});
