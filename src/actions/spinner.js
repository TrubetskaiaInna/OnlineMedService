import { spinner } from '../constants'

const showLoading = () => {
  return {
    type: spinner.SHOW_LOADING
  }
}

const hideLoading = () => {
  return { type: spinner.HIDE_LOADING }
}

export default {
  showLoading,
  hideLoading
}
