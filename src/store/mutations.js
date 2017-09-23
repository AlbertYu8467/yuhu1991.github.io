export default {
	add(state,num) {
		state.itemNum += num;
	},
	remember_answer(state,id) {
		state.answerid.push(id)
	},
	remember_timer(state) {
		state.timer = setInterval(()=>{
			state.allTime++;
		},1000)
	},
	inital(state) {
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	}
}