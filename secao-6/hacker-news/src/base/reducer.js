import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_SEARCH,
  HANDLE_PAGE,
} from './actions';

import { numberDecrease, numberIncrease } from '../utils/numberControl';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        numberPages: action.payload.nbPages,
      };

    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      };

    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      };

    case HANDLE_PAGE:
      return {
        ...state,
        page:
          action.payload === 'inc'
            ? numberIncrease(state.page, Number(state.numberPages - 1))
            : numberDecrease(state.page, Number(state.numberPages - 1)),
      };

    default:
      throw new Error(`no matching "${action.type} action type"`);
  }
};

export default reducer;
