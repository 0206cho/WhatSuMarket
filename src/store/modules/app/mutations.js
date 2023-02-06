import * as types from './types'
import router from '../../../router'

export default {
    [types.LOGIN](state, { success, token, returnPath }) {
        if (success) {
            token = ''
            router.push(`/${returnPath}`)
        }
    }
}