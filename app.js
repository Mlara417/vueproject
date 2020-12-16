Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: ''
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue);
			this.enteredValue = '';
		}
	}
}).mount('#goalApp');

Vue.createApp({
	data() {
		return {
			userGoal: 'Learn Vue',
			link: 'https://vuejs.org/'
		};
	}
}).mount('#user-goal');


/* var app = new Vue({
	el: '#app',
	data: {
	  goals: [],
	  enteredValue: ''
	},
	methods: {
		addGoal: function (event) {
			if(event){
				this.goals.push(this.enteredValue);
				this.enteredValue = '';
			}
		}
	}
  }); */