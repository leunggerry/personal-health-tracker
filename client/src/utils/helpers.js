export function pluralize(name, count) {
	if (count === 1) {
		return name;
	}
	return name + 's';
}

export function idbPromise(storeName, method, object) {
	return new Promise((resolve, reject) => {
		const request = window.indexedDB.open('shop-shop', 1);
		let db, tx, store;
		request.onupgradeneeded = function (e) {
			const db = request.result;
			db.createObjectStore('products', { keyPath: '_id' });
			db.createObjectStore('categories', { keyPath: '_id' });
			db.createObjectStore('cart', { keyPath: '_id' });
		};

		request.onerror = function (e) {
			console.log('There was an error');
		};

		request.onsuccess = function (e) {
			db = request.result;
			tx = db.transaction(storeName, 'readwrite');
			store = tx.objectStore(storeName);

			db.onerror = function (e) {
				console.log('error', e);
			};

			switch (method) {
				case 'put':
					store.put(object);
					resolve(object);
					break;
				case 'get':
					const all = store.getAll();
					all.onsuccess = function () {
						resolve(all.result);
					};
					break;
				case 'delete':
					store.delete(object._id);
					break;
				default:
					console.log('No valid method');
					break;
			}

			tx.oncomplete = function () {
				db.close();
			};
		};
	});
}

export function getDay() {
	const d = new Date();

	switch (d.getDay()) {
		case 1:
			return 'mondayWorkouts';
		case 2:
			return 'tuesdayWorkouts';
		case 3:
			return 'wednesdayWorkouts';
		case 4:
			return 'thursdayWorkouts';
		case 5:
			return 'fridayWorkouts';
		case 6:
			return 'satdayWorkouts';
		case 7:
		default:
			return 'sundayWorkouts';
	}
}
