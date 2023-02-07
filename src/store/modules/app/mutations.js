import * as types from './types'
import router from '../../../router'

export default {
    [types.LOGIN](state, { success, token, returnPath }) {
        if (success) {
            token = ''
            router.push(`/${returnPath}`)
        }
    },
    [types.LOGOUT](state) {
        state.is_login = false
        state.admin = false
    },
    [types.SET_CURRENT_PRODUCT](state, product) {
        state.current_product = product
    },
    [types.SET_USER_INFO](state, { is_admin }) {
        state.user.admin = is_admin
        state.is_login = true
    }
}