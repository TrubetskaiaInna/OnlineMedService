import { selectedData } from '../constants'

const setSelectedData = (payload) => {
  return {
    type: selectedData.SET_SELECTED_DATA,
    payload
  }
}

const clearSelectedData = () => {
  return { type: selectedData.CLEAR_SELECTED_DATA }
}
export default {
  setSelectedData,
  clearSelectedData
}
