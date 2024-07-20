export const setUser = (user) => ({
  type: 'user_login',
  payload: user,
});

export const updateFavorites = (favorites) => ({
  type: 'favorites_changed',
  payload: favorites,
});
