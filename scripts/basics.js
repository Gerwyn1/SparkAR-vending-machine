const Scene = require('Scene');
const Diagnostics = require('Diagnostics');

(async () => {
  const animationDuration = 10;
  
  
  
  // To access class properties
  const directionalLightIntensity = directionalLight.intensity;
  
  Diagnostics.log('focal distance: ', focalDistance);
  Diagnostics.log('directional light: ', directionalLight);
  Diagnostics.log('directional light intensity: ', directionalLightIntensity);
  Diagnostics.log('plane: ', plane);

  // access scene object
  const focalDistance = await Scene.root.findFirst('Focal Distance');

  // access scene object(s)
  const [directionalLight, plane] = await Promise.all([
    Scene.root.findFirst('directionalLight0'),
    Scene.root.findFirst('plane0'),
  ]);

  // METHODS: Scene.root.findFirst(), Scene.root.findAll(), Scene.root.findByPath() -> access object using relative path

})();


// Store references to multiple scene objects