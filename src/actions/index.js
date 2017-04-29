export const INCREASE_PHOTO_SCORE = 'INCREASE_PHOTO_SCORE';
export const DECREASE_PHOTO_SCORE = 'DECREASE_PHOTO_SCORE';
export const SELECT_PHOTO = 'SELECT_PHOTO';
export const DESELECT_PHOTO = 'DESELECT_PHOTO';

export const increasePhotoScore = (photo) => ({
  type: INCREASE_PHOTO_SCORE,
  photo
});

export const decreasePhotoScore = (photo) => ({
  type: DECREASE_PHOTO_SCORE,
  photo
});

export const selectPhoto = (photo) => ({
  type: SELECT_PHOTO,
  photo
});

export const deselectPhoto = (photo) => ({
  type: DESELECT_PHOTO,
  photo
});

