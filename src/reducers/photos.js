import { INCREASE_PHOTO_SCORE, DECREASE_PHOTO_SCORE } from '../actions';

export default (state = {}, action) => {

  const withoutPhoto = (photo) => photo.id !== action.photo.id;

  switch (action.type){
    case INCREASE_PHOTO_SCORE:
      return [{...action.photo, score: action.photo.score + 1}, ...(state.filter(withoutPhoto))];
    case DECREASE_PHOTO_SCORE:
      return [{...action.photo, score: action.photo.score - 1}, ...(state.filter(withoutPhoto))];
    default:
      return state;
  }
}
