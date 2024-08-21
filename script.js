ipt type="text/javascript" src="./script.js">
		const student={
			name: "mohan"
		}
		Object.prototype.getkeys= function(){ 
			return Object.keys(this)
		};
		console.log(student.getkeys());
