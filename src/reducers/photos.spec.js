import {INCREASE_PHOTO_SCORE, DECREASE_PHOTO_SCORE, SELECT_PHOTO, DESELECT_PHOTO} from '../actions';
import photos from './photos';
import deepfreeze from 'deepfreeze';

const photo = {
  id: 2,
  title: 'kitten',
  src: '2.jpg',
  score: 0,
  selected: true
};
const initialState = [{...photo}];

deepfreeze(initialState);

describe('photos reducer', () => {

  it('should handle INCREASE_PHOTO_SCORE', () => {
    expect(photos(initialState, {
      type: INCREASE_PHOTO_SCORE,
      photo,
    })).toEqual([{
      ...photo,
      score: photo.score + 1
    }])
  });

  it('should handle DECREASE_PHOTO_SCORE', () => {
    expect(photos(initialState, {
      type: DECREASE_PHOTO_SCORE,
      photo,
    })).toEqual([{
      ...photo,
      score: photo.score - 1
    }])
  });

  it('should handle SELECT_PHOTO', () => {
    expect(photos(initialState, {
      type: SELECT_PHOTO,
      photo,
    })).toEqual([{
      ...photo,
      selected: true
    }])
  });

  it('should handle DESELECT_PHOTO', () => {
    const selectedPhoto = {...photo, selected: true};
    expect(photos(initialState, {
      type: DESELECT_PHOTO,
      photo: selectedPhoto,
    })).toEqual([{
      ...selectedPhoto,
      selected: false
    }])
  });

});

