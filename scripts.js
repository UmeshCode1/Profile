// Hero Section Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('hero-animation').appendChild(renderer.domElement);

// Infinity Logo Geometry
const curve = new THREE.CurvePath();
const points = [];
for (let i = 0; i <= 200; i++) {
    const t = (i / 200) * Math.PI * 2;
    const x = Math.sin(t) * Math.cos(t);
    const y = Math.sin(t);
    const z = Math.cos(t);
    points.push(new THREE.Vector3(x, y, z));
}
const path = new THREE.CatmullRomCurve3(points);
const geometry = new THREE.TubeGeometry(path, 100, 1, 8, true);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const infinityLogo = new THREE.Mesh(geometry, material);
scene.add(infinityLogo);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    infinityLogo.rotation.x += 0.01;
    infinityLogo.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
