export default `

	const interceptor = {
		set: function(target, prop, val, receiver) {
			return Reflect.set(target, prop, val, receiver);
		},
		get: function(target, prop, receiver) {
			return Reflect.get(target, prop, receiver);
		},
	}

	var store = new Proxy({}, interceptor);
`