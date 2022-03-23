<template>
<div class="home">
    <form>
        <div class="input-group my-5 w-50 mx-auto">
            <input type="text" class="form-control" placeholder="Search Products">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </div>
    </form>
    <div class="justify-content-center">
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
            this.$store.commit('setFaceApiLoaded')

            const labels = ['Captain America', 'Tony Stark', 'Thor', 'Tommy']
            Promise.all(labels.map(async (label) => {
                const descriptions = []
                for (let i = 1; i <= 2; i++) {
                    const img = await faceapi.fetchImage(`/assets/labeled_images/${label}/${i}.jpg`)

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
