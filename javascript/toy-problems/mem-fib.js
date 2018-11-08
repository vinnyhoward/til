const memFib = (idx, arrCache) => {
	arrCache = arrCache || [];

	if (arrCache[idx]) return arrCache[idx];
	else {
		if (idx < 3) return 1;
		else {
			arrCache[idx] = memFib(idx - 1, arrCache) + memFib(idx - 2, arrCache);
			console.log('Arr Cache:', arrCache[idx]);
		}
	}
	return arrCache[idx];
};

console.log(memFib(12));
