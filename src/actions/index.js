export const INCREASE_PHOTO_SCORE = 'INCREASE_PHOTO_SCORE';
export const DECREASE_PHOTO_SCORE = 'DECREASE_PHOTO_SCORE';

export const increasePhotoScore = (photo) => ({
  type: INCREASE_PHOTO_SCORE,
  photo
});

export const decreasePhotoScore = (photo) => ({
  type: DECREASE_PHOTO_SCORE,
  photo
});

