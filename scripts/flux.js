import AppointmentStore from './stores/appointments';
import AssociationStore from './stores/associations';
import Fluxxor from 'fluxxor';

let stores = {
  Appointments: new AppointmentStore(),
  Associations: new AssociationStore()

};

export default new Fluxxor.Flux(stores, {});
