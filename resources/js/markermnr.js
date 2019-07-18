AFRAME.registerComponent('registerevents', {
		init: function () {

			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
					console.log('markerFound', markerId);

				// if(markerId=='1')
				// {
				// 	console.log('you found the sound');
				//
				// 	var sceneEl = document.querySelector('a-scene');
				//
				// 	sceneEl.querySelector('#thesound').components.sound.playSound();
				// }
				var sceneEl = document.querySelector('a-scene');
				switch(markerId)
				{
					case "1":
					sceneEl.querySelector('#treesound').components.sound.playSound();
					break;
					case "2":
					sceneEl.querySelector('#saxophonesound').components.sound.playSound();
					break;
					case "3":
					sceneEl.querySelector('#bb8sound').components.sound.playSound();
					break;
					case "4":
					sceneEl.querySelector('#catsound').components.sound.playSound();
					break;
					case "5":
					sceneEl.querySelector('#chickensound').components.sound.playSound();
					break;
					case "6":
					 sceneEl.querySelector('#fountainsound').components.sound.playSound();
					break;
					case "7":
					sceneEl.querySelector('#godzillasound').components.sound.playSound();
					break;
					case "8":
					sceneEl.querySelector('#handsound').components.sound.playSound();
					break;
					case "9":
					sceneEl.querySelector('#rocketsound').components.sound.playSound();
					break;
					case "10":
					sceneEl.querySelector('#crocodilesound').components.sound.playSound();
					break;

				}








			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('markerLost', markerId);

				var sceneEl = document.querySelector('a-scene');

				if(sceneEl.querySelector('#treesound').components.sound.isPlaying==true){
				sceneEl.querySelector('#treesound').components.sound.stopSound();
				}
				if(sceneEl.querySelector('#saxophonesound').components.sound.isPlaying==true){
				sceneEl.querySelector('#saxophonesound').components.sound.stopSound();
				}
				if(sceneEl.querySelector('#bb8sound').components.sound.isPlaying==true){
				sceneEl.querySelector('#bb8sound').components.sound.stopSound();
				}
				if(sceneEl.querySelector('#catsound').components.sound.isPlaying==true){
				sceneEl.querySelector('#catsound').components.sound.stopSound();
				}
				if(sceneEl.querySelector('#chickensound').components.sound.isPlaying==true){
				sceneEl.querySelector('#chickensound').components.sound.stopSound();
				}
				if(sceneEl.querySelector('#fountainsound').components.sound.isPlaying==true){
				sceneEl.querySelector('#fountainsound').components.sound.stopSound();
				}
				if(sceneEl.querySelector('#godzillasound').components.sound.isPlaying==true){
				sceneEl.querySelector('#godzillasound').components.sound.stopSound();
				}
				if(sceneEl.querySelector('#handsound').components.sound.isPlaying==true){
				sceneEl.querySelector('#handsound').components.sound.stopSound();
				}
				if(sceneEl.querySelector('#rocketsound').components.sound.isPlaying==true){
				sceneEl.querySelector('#rocketsound').components.sound.stopSound();
				}
				if(sceneEl.querySelector('#crocodilesound').components.sound.isPlaying==true){
				sceneEl.querySelector('#crocodilesound').components.sound.stopSound();
				}
			});
		},
	});
