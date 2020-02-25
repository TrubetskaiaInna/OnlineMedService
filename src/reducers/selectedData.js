import { selectedData } from '../constants'

const initialState = {
  selectedData: null

}

export default (state = initialState, action) => {
  switch (action.type) {
    case selectedData.SET_SELECTED_DATA:
      return {
        selectedData: action.payload
      }
    case selectedData.CLEAR_SELECTED_DATA:
      return {
        selectedData: null
      }
    default:
      return state
  }
}
