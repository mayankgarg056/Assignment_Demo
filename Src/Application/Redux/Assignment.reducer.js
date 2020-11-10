import * as types from './ReduxConstant';

export function AssignMentReducer  (state = {}, action)  {
    switch (action.type) {
        case types.GET_ALL_MUSIC_FILE_RESPONSE:
        return { ...state, getAllMusicResponse: action.data }
        default:
            return state
    }
}