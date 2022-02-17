import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// group
const group=new THREE.Group()
// scene.add(group)

const cube1 = new THREE.Mesh( new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x2EFF00 }))

const cube2= new THREE.Mesh( new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x005CFF }))
cube2.position.x=2

const cube3= new THREE.Mesh( new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xFFC200 }))
cube3.position.x=-2

group.add(cube1)
group.add(cube2)
group.add(cube3)

group.position.y=1
group.rotation.z=3.14*0.3




/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0011 })
const mesh = new THREE.Mesh(geometry, material)

// scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

// position
// mesh.position.x=0.7
// mesh.position.y=-0.6
// mesh.position.z=2


console.log(mesh.position.length())
mesh.position.set(1.7,1.4,1)
console.log(mesh.position.distanceTo(camera.position))
mesh.position.normalize()

// axes helper
const axesHelper=new THREE.AxesHelper(4)
scene.add(axesHelper)

// camera position
camera.position.x=0
camera.position.y=1
camera.position.z=5

camera.position.x=5
camera.position.y=3
camera.lookAt( mesh.position)

// // scale
// mesh.scale.x=2
// mesh.scale.y=0.5
// mesh.scale.z=0.5
// mesh.scale.set(0.5,1,0.5)

// mesh.rotation.reorder('YXZ')

// // Rotation
// mesh.rotation.y=3.54159
// mesh.rotation.x=Math.PI/2
// mesh.rotation.z=Math.PI*1.5


// // look at camera
// camera.lookAt(new THREE.Vector3(4,0,3))
// camera.lookAt(mesh.position)







/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)