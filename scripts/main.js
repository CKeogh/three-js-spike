const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x427AA1 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();



// // game logic
// const update = () => {

// }

// // draw scene
// const render = () => {
//     renderer.render(scene, camera);
// }

// //run game loop (update, render, repeat)
// const GameLoop = () => {
//     requestAnimationFrame(GameLoop);
//     update();
//     render();
// }

// GameLoop();