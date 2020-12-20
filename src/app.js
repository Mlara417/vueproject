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
			goalA: 'Finish and learn vue!',
			goalB: 'Master Vue and build apps!',
			link: 'https://vuejs.org/'
		};
	},
	methods: {
		outputGoal() {
			const randomNumber = Math.random();
			if(randomNumber < 0.5) {
				return this.goalA;
			} else {
				return this.goalB;
			}
		}
	}
}).mount('#user-goal');

Vue.createApp({
	data() {
		return {
			message: 'Interpolation Test'
		};
	}
}).mount('#interpolation-test');

Vue.createApp({
	data() {
		return {
			counter: 0
		};
	},
	methods: {
		clickButton() {
			this.counter++
		}
	}
}).mount('#clickTest');

Vue.createApp({
	data() {
		return {
			tasks: [
				'Take out trash',
				'Finish Hw',
				'Go for a run'
			]
		};
	}
}).mount('#listItem');