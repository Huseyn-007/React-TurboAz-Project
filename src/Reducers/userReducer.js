const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user_login':
      return {
        ...state,
        user: action.payload,
      };
    case 'user-logout':
      return {
        ...state,
        user: null,
      };
    case 'favorites_changed':
      return {
        ...state,
        user: {
          ...state.user,
          favorites: action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
