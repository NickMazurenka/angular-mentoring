export function LocalStorageSyncReducer(reducer) {
  return function newReducer(state, action) {

    const localStorageKey = 'auth_state';

    // Restore state
    const localStorageStateValue = localStorage.getItem(localStorageKey);
    if (state == null && localStorageStateValue != null) {
      const auth = JSON.parse(localStorageStateValue);
      state = { ...state, auth };
    }

    // Execute initial reducer
    const nextState = reducer(state, action);

    // Save state
    localStorage.setItem(localStorageKey, JSON.stringify(nextState.auth));

    return nextState;
  };
}
