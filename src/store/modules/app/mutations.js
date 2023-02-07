import * as types from './types'
import router from '../../../router'

export default {
    [types.LOGIN](state, { success, token, returnPath }) {
        if (success) {
            token = ''
            router.push(`/${returnPath}`)
        }
    },
    [types.SET_CURRENT_PRODUCT](state, product) {
        state.current_product = product
    }
}