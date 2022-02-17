import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'


/**
 * Base
 */

// Debug (Dat gui)
const gui =new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')


// Texture
const textureLoader=new THREE.TextureLoader()
const cubeTextureLoader= new THREE.CubeTextureLoader()


const doorColorTexture=textureLoader.load('/textures/door/color.jpg')
const doorAlphaTexture=textureLoader.load('/textures/door/alpha.jpg')
const doorAmbientOcclusionTexture=textureLoader.load('/textures/door/ambientOcclusion.jpg')
const doorMetalnessTexture=textureLoader.load('/textures/door/metalness.jpg')
const doorRoughnessTexture=textureLoader.load('/textures/door/roughness.jpg')
const doorNormalTexture=textureLoader.load('/textures/door/normal.jpg')
const doorHeightTexture=textureLoader.load('/textures/door/height.jpg')

const matCapTexture=textureLoader.load('/textures/matcaps/1.png')

const gradientTexture=textureLoader.load('/textures/gradients/5.jpg')
// gradientTexture.minFilter=THREE.NearestFilter
// gradientTexture.magFilter=THREE.NearestFilter
// gradientTexture.generateMipmaps=false

const environmetMapTexture=cubeTextureLoader.load([
    '/textures/environmentMaps/4/px.png',
    '/textures/environmentMaps/4/nx.png',
    '/textures/environmentMaps/4/py.png',
    '/textures/environmentMaps/4/ny.png',
    '/textures/environmentMaps/4/pz.png',
    '/textures/environmentMaps/4/nz.png',
])

//! Materials

//*MeshBasicMaterial
// const material =new THREE.MeshBasicMaterial()
// material.map=doorColorTexture
// material.color.set('yellow')
// material.wireframe=true
// material.transparent=true
// material.opacity=0.5

// material.alphaMap=doorAlphaTexture
// material.side=THREE.BackSide
// material.side=THREE.BackSide
// material.side=THREE.DoubleSide

//*MeshNormalMaterial
// const material =new THREE.MeshNormalMaterial()
// material.wireframe=true
// material.flatShading=true

//*MeshMatcapMaterial
// const material =new THREE.MeshMatcapMaterial()
// material.wireframe=true
// material.matcap=matCapTexture

//*DepthMaterial
// const material =new THREE.MeshDepthMaterial()

// *LambertMaterial
// const material=new THREE.MeshLambertMaterial()

//*PhongMaterial

// const material=new THREE.MeshPhongMaterial()
// material.shininess=500
// material.specular=new THREE.Color(0xff4554)

//* ToonMaterial
// gradientTexture.minFilter=THREE.NearestFilter
// gradientTexture.magFilter=THREE.NearestFilter
// gradientTexture.generateMipmaps=false
// const material=new THREE.MeshToonMaterial()
// material.gradientMap=gradientTexture

// *MeshStandardMaterial
// const material=new THREE.MeshStandardMaterial()
// material.metalness=0.7
// material.roughness=0.2

// material.map=doorColorTexture
// material.aoMap=doorAmbientOcclusionTexture
// material.aoMapIntensity=3

// material.displacementMap= doorHeightTexture
// material.displacementScale=0.05

// material.normalMap=doorNormalTexture
// material.normalScale.set(0.8,0.8)

// material.alphaMap=doorAlphaTexture
// material.transparent=true

// material.metalnessMap=doorMetalnessTexture
// material.roughnessMap=doorRoughnessTexture

// *Environmental Maps
const material=new THREE.MeshStandardMaterial()
material.metalness=0.7
material.roughness=0.2

// material.map=doorColorTexture
// material.aoMap=doorAmbientOcclusionTexture
// material.aoMapIntensity=3

// material.displacementMap= doorHeightTexture
// material.displacementScale=0.05

// material.normalMap=doorNormalTexture
// material.normalScale.set(0.8,0.8)

// material.alphaMap=doorAlphaTexture
// material.transparent=true

// material.metalnessMap=doorMetalnessTexture
// material.roughnessMap=doorRoughnessTexture

material.envMap=environmetMapTexture

gui.add(material,'metalness').min(0).max(1).step(0.0001)
gui.add(material,'roughness').min(0).max(1).step(0.0001)
gui.add(material,'aoMapIntensity').min(0).max(10).step(0.0001)
gui.add(material,'displacementScale').min(0).max(1).step(0.0001)
// gui.add(material,'normalScale').min(0).max(1).step(0.0001)



// Shapes (geometry)
const sphere=new THREE.Mesh(new THREE.SphereBufferGeometry(0.5,64,64),material)
sphere.position.x=-1.5
sphere.geometry.setAttribute('uv2',new THREE.BufferAttribute(sphere.geometry.attributes.uv.array,2))

const plain=new THREE.Mesh(new THREE.PlaneBufferGeometry(1,1,20,20),material)
plain.geometry.setAttribute('uv2',new THREE.BufferAttribute(plain.geometry.attributes.uv.array,2))
const torus=new THREE.Mesh(new THREE.TorusBufferGeometry(0.3,0.2,60,128),material)
torus.position.x=1.5
torus.geometry.setAttribute('uv2',new THREE.BufferAttribute(torus.geometry.attributes.uv.array,2))



// Scene
const scene = new THREE.Scene()
scene.add(sphere,plain,torus )

//Lights
const ambientLight=new THREE.AmbientLight(0xffffff,0.5)
scene.add(ambientLight)

const pointLight =new THREE.PointLight(0xffffff,0.5)
pointLight.position.x=2
pointLight.position.y=2
pointLight.position.z=2
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // update objects
    sphere.rotation.y=0.1 *elapsedTime
    plain.rotation.y=0.1 *elapsedTime
    torus.rotation.y=0.1 *elapsedTime

    sphere.rotation.x=0.2 *elapsedTime
    plain.rotation.x=0.2 *elapsedTime
    torus.rotation.x=0.2 *elapsedTime




    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()