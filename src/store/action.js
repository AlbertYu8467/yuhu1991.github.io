export default {
	addNum({commit,state},id){
		commit('remember_answer',id) 
		if(state.itemNum < state.list.length) {
			commit('add',1)
		}
	},
	init({commit}) {
		commit('inital')
	},
	count({commit}) {
		commit('remember_timer')
	}
}