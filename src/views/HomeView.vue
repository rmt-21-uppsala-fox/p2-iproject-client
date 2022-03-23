<template>
<div class="home">
    <div class="justify-content-center mt-5 pt-2">
        <span class="pre-title">BEST-SELLING HOUSEHOLD ESSENTIAL</span>
        <br>
        <span class="main-title">Featured Products</span>
    </div>

    <div class="row justify-content-center my-5">
        <ProductCard v-for="productPackage in packages" :key="productPackage.id" :productPackage="productPackage"></ProductCard>
    </div>
</div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import * as faceapi from 'face-api.js';
export default {
    name: 'HomeView',
    components: {
        ProductCard
    },
    computed: {
        packages() {
            return this.$store.state.packages
        }
    },
    async created() {
        if (!this.$store.state.faceRecognitionLoaded) {
            await faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models')
            await faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models')
            await faceapi.nets.ssdMobilenetv1.loadFromUri('/assets/models')
        
            await this.$store.dispatch('fetchImages')

            const images = this.$store.state.imagesUrl

            const labels = ['Tony Stark', localStorage.currentUserName]
            Promise.all(labels.map(async (label) => {
                const descriptions = []
                for (let i = 0; i <= 1; i++) {
                    
                    const img = await faceapi.fetchImage(images[label][i]);

                    const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
                    descriptions.push(detections.descriptor)
                }
                return new faceapi.LabeledFaceDescriptors(label, descriptions)
            })).then((data) => {
                this.$store.commit('setLabeledDescriptors', data)
                this.$store.commit('setFaceRecognitionLoaded')
            })
        }
    },
    mounted() {
        this.$store.dispatch('fetchPackages')
    }
}
</script>
