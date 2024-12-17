
Array.from(btnArray).forEach((element) => {
			element.addEventListener('click', () => {
				let type = element.getAttribute('data-type');
				let id = element.getAttribute('data-id');


				switch (type) {
					case 'equal':
						equal();
						break;

					case 'operator':
						printValue(id);
						break;

					case 'number':
						printValue(id);
						break;
					
					case 'clear':
						clearInput();
						break;	

					default:
						break;
				}
			})

		})
document.addEventListener('keydown', (event) => {
if (event.keyCode !== 13) {
	for (let i = 0; i < btnArray.length; i++) {
		let id = btnArray[i].getAttribute('data-id');
		if (id === event.key) {
			btnArray[i].click();
		}
	}
	} else {
		equal();
}    
});






// }); ??
