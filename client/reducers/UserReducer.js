import * as actions from '../actions/actions';

export default function reducer(
  state = {
    username: 'rheaditi',
    password: 'hello@world',
    passwordConfirm: 'hello@world',
    creating: false,
  }, action) {
  let newState;

  switch (action.type) {
    case actions.EDIT_USER_DETAILS: {
      newState = {
        ...state,
        [action.key]: action.value,
      };
      break;
    }

    case actions.CREATE_USER_REQUEST: {
      newState = {
        ...state,
        creating: true,
      };
      break;
    }

    case actions.CREATE_USER_SUCCESS: {
      newState = {
        ...state,
        creating: false,
        username: '',
        password: '',
        passwordConfirm: '',
      };
      break;
    }

    case actions.CREATE_USER_FAILURE: {
      newState = {
        ...state,
        creating: false,
        message: action.message,
      };
      break;
    }

    default: {
      newState = state;
    }
  }

  return newState;
}
