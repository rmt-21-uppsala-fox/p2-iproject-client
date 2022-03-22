<template>
  <div>
    <div ref="Gallery3d"></div>
  </div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "GalleryPage",
  data() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    const player = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );

    return {
      scene: scene,
      camera: camera,
      renderer: renderer,
      container: null,
      players: [],
      player: player,
    };
  },
  created() {
    var pgeometry = new THREE.PlaneGeometry(100, 100);
    var pmaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    var floor = new THREE.Mesh(pgeometry, pmaterial);
    floor.material.side = THREE.DoubleSide;
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1;

    this.scene.add(floor);
    this.scene.add(this.player);

    this.player.position.x = 0;

    this.camera.position.z = this.player.position.z + 5;
    this.camera.position.y = this.player.position.y + 3;
    this.camera.rotation.x = this.player.rotation.x + -0.5;

    this.player.add(this.camera);
  },
  mounted() {
    this.renderer.setSize(600, 400);
    this.$refs.Gallery3d.appendChild(this.renderer.domElement);
    this.animate();
    document.onkeydown = (e) => {
      this.movePlayer(e);
    };
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    movePlayer(e) {
      if (e.keyCode === 37) {
        this.player.rotation.y += 0.1;
      }
      if (e.keyCode === 39) {
        this.player.rotation.y -= 0.1;
      }
      if (e.keyCode === 38) {
        this.player.translateZ(-0.5);
      }
      if (e.keyCode === 40) {
        this.player.translateZ(0.5);
      }
    },
  },
};
</script>

<style>
</style>