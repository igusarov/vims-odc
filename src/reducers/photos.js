import { INCREASE_PHOTO_SCORE, DECREASE_PHOTO_SCORE, SELECT_PHOTO, DESELECT_PHOTO } from '../actions';

export default (state = {}, action) => {

  const withoutPhoto = (photo) => photo.id !== action.photo.id;

  switch (action.type){
    case INCREASE_PHOTO_SCORE:
      return [{...action.photo, score: action.photo.score + 1}, ...(state.filter(withoutPhoto))];
    case DECREASE_PHOTO_SCORE:
      return [{...action.photo, score: action.photo.score - 1}, ...(state.filter(withoutPhoto))];
    case SELECT_PHOTO:
      return [{...action.photo, selected: true}, ...(state.filter(withoutPhoto))];
    case DESELECT_PHOTO:
      return [{...action.photo, selected: false}, ...(state.filter(withoutPhoto))];
    default:
      return state;
  }
}
