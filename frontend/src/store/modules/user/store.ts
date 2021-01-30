import { Module } from 'vuex';
import { IRootState } from '@/store/types';
import actions from './store/actions';
import getters from './store/getters';
import mutations from './store/mutations';
import { IUser } from './types';

const state = {
  avatar: '',
  name: 'Jane Doe',
  status: 'active',
  position: 'Web-designer',
  email: localStorage.getItem('app-rs-email') || '',
  token: localStorage.getItem('app-rs-token') || '',
};

const user: Module<IUser, IRootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};

export default user;
