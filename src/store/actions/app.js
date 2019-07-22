import { APP } from '../actionType';

export const ACTION_CREATORS = {
  loading: function (status = true) {
    return {
      type: APP.SET_LOADING,
      payload: status,
    };
  },
};
