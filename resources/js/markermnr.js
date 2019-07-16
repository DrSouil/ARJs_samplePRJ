AFRAME.registerComponent('registerevents', {
		init: function () {

			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
					console.log('markerFound', markerId);

				if(markerId=='1')
				{
					console.log('you found the sound');

					var sceneEl = document.querySelector('a-scene');

					sceneEl.querySelector('#thesound').components.sound.playSound();
				}

			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('markerLost', markerId);

				var sceneEl = document.querySelector('a-scene');

				if(sceneEl.querySelector('#thesound').components.sound.isPlaying==true){
				sceneEl.querySelector('#thesound').components.sound.stopSound();
				console.log("Stop the sound");}
			});
		},
	});
