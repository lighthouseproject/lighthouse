import Fluxxor from 'fluxxor';
import fuzzy from 'fuzzy';
import {uniq, isEmpty} from 'lodash';

import candidates from '../data/associations/candidates.json';
import donations from '../data/associations/donations.json';

const leftParties = ['Labour Party', 'New Zealand First Party', 'Green Party', 'Libertarianz', 'Independent'];
const rightParties = ['National Party', 'United Future', 'The Republic of New Zealand Party', 'Conservative', 'United Future New Zealand'];


function getCandidates() {
  return uniq(candidates.map((e) => e.clean_name ));
}

function getDonors() {
  return uniq(donations.reduce((donors, entity) => {
    let donor = entity.donor;
    if (isEmpty(donor)) { return donors; }

    if (donor.directors) {
      donors = donors.concat(donor.directors.map((d) => d.clean_name));
      donors = donors.concat(donor.shareholders.map((s) => s.clean_name));
    } else {
      donors.push(donor.clean_name);
    }
    return donors;
  }, []));
}

export default Fluxxor.createStore({
  initialize() {
    this.associations = candidates.concat(donations);

    this.donors = getDonors();
    this.candidates = getCandidates();
  },

  getAssociations() {
    return this.associations;
  },

  isDonor(name) {
    return this.donors.indexOf(name) !== -1;
  },

  isCandidate(name) {
    return this.candidates.indexOf(name) !== -1;
  },

  getDonations(name) {
    return donations.filter((entity) => {
      let donors = [];
      let donor = entity.donor;
      if (isEmpty(donor)) { return false; }

      if (entity.donor.directors) {
        donors = donors.concat(donor.directors.map((e) => e.clean_name));
        donors = donors.concat(donor.shareholders.map((e) => e.clean_name));
      } else {
        donors.push(entity.donor.clean_name);
      }

      if (isEmpty(donors)) { return false; }

      return donors.indexOf(name) !== -1;

    });
  },

  getCandidacies(name) {
    return candidates.filter((entity) => {
      return entity.clean_name === name;
    });
  },

  filterLeftDonations(donations) {
    return donations.filter((donation) => leftParties.indexOf(donation.party) !== -1);
  },

  filterRightDonations(donations) {
    return donations.filter((donation) => rightParties.indexOf(donation.party) !== -1);
  },

  filterLeftCandidacies(candidacies) {
    console.log(candidacies);
    return candidacies.filter((candidate) => leftParties.indexOf(candidate.party) !== -1);
  },

  filterRightCandidacies(candidacies) {
    return candidacies.filter((candidate) => rightParties.indexOf(candidate.party) !== -1);
  }

});
