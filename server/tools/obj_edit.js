// Functions used to manipulates objects

export function testKeys = (obj, keypath) => {
	// Return undefined if there is no keys
	return keypath.split(".").reduce((o, x) => {
		return (typeof o == "undefined" || o === null)?o : o[x];
	}, obj);
}


// add a single key
export function nestedKey = (obj, keypath, value) => {
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

// add multiple keys
export function nestedKeys = (obj, keysAndValues) => {
	/*
	keyAndValues[0] = {
		key: "key1.key2.key3",
		value: val
	}
	*/
	var keyResult = [];

	for (const elt of keysAndValues){
		if(typeof keyResult.push(testKeys(obj, elt.key)) === "undefined"){
			nestedKey(obj, elt.key, elt.value);
		}else{
			keyResult.push({
				key: elt.key,
				value: elt.value
			});
		}
	}
	return keyResult;
}