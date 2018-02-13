export function LocalStorageSyncReducer(reducer) {
  return function newReducer(state, action) {

    const localStorageKey = 'redux_state';

    // Restore state
    const localStorageStateValue = localStorage.getItem(localStorageKey);
    if (state == null && localStorageStateValue != null) {
      state = JSON.parse(localStorageStateValue);
    }

    // Execute initial reducer
    const nextState = reducer(state, action);

    // Save state
    localStorage.setItem(localStorageKey, JSON.stringify(nextState));

    return nextState;
  };
}
