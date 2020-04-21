AFRAME.registerComponent('do-something', {
  init: function () {
    var sceneEl = this.el;
    var datos = sceneEl.querySelector('#datos');
    var nama_planet = sceneEl.querySelector('#nama_planet');
    // var masa_text = sceneEl.querySelector('#masa_text');
    // var volumen_text = sceneEl.querySelector('#volumen_text');
    // var gravedad_text = sceneEl.querySelector('#gravedad_text');
    var merkurius = sceneEl.querySelector('#merkurius');
    var venus = sceneEl.querySelector('#venus');
    var bumi = sceneEl.querySelector('#bumi');
    var mars = sceneEl.querySelector('#mars');
    var jupiter = sceneEl.querySelector('#jupiter');
    var saturnus = sceneEl.querySelector('#saturnus');
    var uranus = sceneEl.querySelector('#uranus');
	var neptunus = sceneEl.querySelector('#neptunus');
	var matahari = sceneEl.querySelector('#matahari');

		matahari.addEventListener('click', function (evt) {
		nama_planet.setAttribute('value', "Matahari");
		datos.object3D.visible = true;
		setTimeout(() => { datos.object3D.visible = false; }, 8000);
	});

    merkurius.addEventListener('click', function (evt) {
  		nama_planet.setAttribute('value',"Merkurius");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
  	});

  	venus.addEventListener('click', function (evt) {
  		nama_planet.setAttribute('value',"Venus");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
  	});

    bumi.addEventListener('click', function (evt) {
	    nama_planet.setAttribute('value',"Bumi");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
	});

	mars.addEventListener('click', function (evt) {
	    nama_planet.setAttribute('value',"Mars");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
	});

	jupiter.addEventListener('click', function (evt) {
	    nama_planet.setAttribute('value',"Jupiter");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
	});

	saturnus.addEventListener('click', function (evt) {
	    nama_planet.setAttribute('value',"Saturnus");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
	});

	uranus.addEventListener('click', function (evt) {
	    nama_planet.setAttribute('value',"Uranus");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
	});

	neptunus.addEventListener('click', function (evt) {
	    nama_planet.setAttribute('value',"Neptunus");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
	});

  	}

});