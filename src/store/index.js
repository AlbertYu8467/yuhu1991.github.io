import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
	itemNum: 1,
	allTime: 0,
	timer: '',
	list:[
		{
			"topic_id": 20,
			"topic_name": "你喜欢什么类型的女孩",
			"topic_answer":[
				{
					"topic_answer_id": 1,
					"topic_id": 20,
					"answer_name": "温柔的",
					"is_standard_answer": 0
				},
				{
					"topic_answer_id": 2,
					"topic_id": 20,
					"answer_name": "漂亮的",
					"is_standard_answer": 0
				},
				{
					"topic_answer_id": 3,
					"topic_id": 20,
					"answer_name": "善良的",
					"is_standard_answer": 0
				},
				{
					"topic_answer_id": 4,
					"topic_id": 20,
					"answer_name": "活泼的",
					"is_standard_answer": 1
				},
			]
		},
		{
			"topic_id": 21,
			"topic_name": "你最想去哪约会",
			"topic_answer":[
				{
					"topic_answer_id": 5,
					"topic_id": 21,
					"answer_name": "电影院",
					"is_standard_answer": 1
				},
				{
					"topic_answer_id": 6,
					"topic_id": 21,
					"answer_name": "海边",
					"is_standard_answer": 0
				},
				{
					"topic_answer_id": 7,
					"topic_id": 21,
					"answer_name": "出租屋",
					"is_standard_answer": 0
				},
				{
					"topic_answer_id": 8,
					"topic_id": 21,
					"answer_name": "公园",
					"is_standard_answer": 0
				},
			]
		},
		{
			"topic_id": 22,
			"topic_name": "你最想在什么地方举行婚礼",
			"topic_answer":[
				{
					"topic_answer_id": 9,
					"topic_id": 22,
					"answer_name": "教堂",
					"is_standard_answer": 1
				},
				{
					"topic_answer_id": 10,
					"topic_id": 22,
					"answer_name": "大草原",
					"is_standard_answer": 0
				},
				{
					"topic_answer_id": 11,
					"topic_id": 22,
					"answer_name": "大酒店",
					"is_standard_answer": 0
				},
				{
					"topic_answer_id": 12,
					"topic_id": 21,
					"answer_name": "故乡",
					"is_standard_answer": 0
				},
			]
		},
		{
			"topic_id": 23,
			"topic_name": "到目前为止你暗恋过几个人",
			"topic_answer":[
				{
					"topic_answer_id": 13,
					"topic_id": 23,
					"answer_name": "三个以下",
					"is_standard_answer": 1
				},
				{
					"topic_answer_id": 14,
					"topic_id": 23,
					"answer_name": "三到五个",
					"is_standard_answer": 0
				},
				{
					"topic_answer_id": 15,
					"topic_id": 23,
					"answer_name": "五到十个",
					"is_standard_answer": 0
				},
				{
					"topic_answer_id": 16,
					"topic_id": 23,
					"answer_name": "十个以上",
					"is_standard_answer": 0
				},
			]
		}
	],
	answerid: []
}
export default new Vuex.Store({
	state,
	actions,
	mutations
})