const personn = data => {
	const basic = data;

	const add_civil = data_civil =>{
		person.civil = data_civil;
	};

	const add_electronic = data_en =>{
		person.electronic = data_en;
	}

	const _specified = attName =>{
		personn[attName] != undefined ? return false : return true;
	}

	const add_specified = (attName, value) =>{
		personn._specified() ? personn[attName] = value : personn.update(attName, value);
	}

	const update = (attName, value) =>{
		personn.old[attName].val = value; // we need to add the timestamp
		personn[attName] = value;
	}
}
