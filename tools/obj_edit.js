// Functions used to manipulates objects

export function testKeys = (obj, keypath) => {
	// Return undefined if there is no keys
	return keypath.split(".").reduce((o, x) => {
		return (typeof o == "undefined" || o === null)?o : o[x];
	}, obj);
}



export function nestedKeys = (obj, keypath, value) => {
	// keypath = "key1.key2.key3.key4"
	const keyArray = keypath.split(".");
	const lastKeyIndex = keyArray.length - 1;
	for(var i = 0; i < lastKeyIndex; ++ i){
		const key = keyArray[i];
		if(!(key in obj))
			obj[key] = {};
		obj = obj[key];
	}
	obj[keyArray[lastKeyIndex]] = value;
}

