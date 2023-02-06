import { createNamespacedHelpers } from "vuex"
import { NAMESPACE } from "@/store/modules/app/types"
import state from './state'
import mutations from './mutations'
import actions from './actions'

const { mapMutations, mapActions, mapState } = createNamespacedHelpers(NAMESPACE)

export { mapMutations, mapActions, mapState }
export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions
}