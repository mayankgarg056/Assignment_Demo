import * as ReduxConstant from './ReduxConstant';

export function GetAllMusicData(data) {
  return ({ type: ReduxConstant.GET_ALL_MUSIC_FILE_REQUEST, data });
}

// remove all music data
export function RemoveAllMusicData(data) {
  return ({ type: ReduxConstant.GET_ALL_MUSIC_FILE_RESPONSE, data });
}