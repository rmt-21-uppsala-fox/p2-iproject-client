<template>
<div class="row pt-3">
    <div class="col-8 grid">
        <CheckoutCard></CheckoutCard>
        <CheckoutCard></CheckoutCard>
        <CheckoutCard></CheckoutCard>
        <CheckoutCard></CheckoutCard>

    </div>
    <div class="col-4 border border-secondary rounded grid w-25">
        <h3>Checkout</h3>
        <CheckoutItems></CheckoutItems>
        <CheckoutItems></CheckoutItems>
        <CheckoutItems></CheckoutItems>

        <div class="row">
            <div class="col-6 pe-5">
                <p class="text-nowrap">Total Discount</p>
            </div>
            <div class="col-6 ps-5">
                <small >Rp. -15.000</small>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-6 pe-5">
                <p class="font-weight-bold text-nowrap">This Month's Total </p>
            </div>
            <div class="col-6 ps-5">
                <p>Rp. 80.996</p>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-6 text-nowrap">
                <button type="button" class="btn btn-outline-success btn-sm"><i class="fa-solid fa-face-grin-beam fa-xl"></i> Face Payment</button>
            </div>
            <div class="col-6">
                <button type="button" class="btn btn-outline-primary btn-sm">Xendit Pay</button>
            </div>
        </div>

    </div>
    <div>
        <!-- <button @click="openModal" class="btn btn-primary">Open modal</button>

        <div class="modal modal-lg">
            <div class="modal-content">
                <div class="modal-body">
                    'Hellweowowoe'
                    <video id="videoInput" width="760" height="550" muted controls></video>
                </div>
            </div>
        </div> -->
        <div id="canvas"></div>
        <video id="videoInput" width="350" height="250" muted controls></video>
        <div>
            <b-button v-b-modal.modal-1>Launch demo modal</b-button>

            <b-modal id="modal-1" title="BootstrapVue">
            </b-modal>
        </div>
    </div>

</div>
</template>

<script>
import CheckoutCard from '../components/CheckoutCard.vue'
import CheckoutItems from '../components/CheckoutItems.vue'

// import * as faceapi from 'face-api.js';
export default {
    name: 'CheckoutView',
    components: {
        CheckoutCard,
        CheckoutItems,
    },
    methods: {
        // start() {
        //     console.log(this.$el.querySelector('video'));
        // }
    },
    // async mounted() {
    //     try {
    //         const video = this.$el.querySelector('video')
    //         await faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models')
    //         await faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models')
    //         await faceapi.nets.ssdMobilenetv1.loadFromUri('/assets/models')

    //         console.log(faceapi.nets);
    //         console.log(video);
    //         document.body.append('Models Loaded')

    //         const options = {
    //             video: true
    //         }

    //         const stream = await navigator.mediaDevices.getUserMedia(options)
    //         video.srcObject = stream

    //         console.log(stream);

    //         const labels = ['Captain America', 'Tony Stark', 'Thor', 'Tommy']
    //         const labeledDescriptors = await Promise.all(labels.map(async (label) => {
    //             const descriptions = []
    //             for (let i = 1; i <= 2; i++) {
    //                 const img = await faceapi.fetchImage(`/assets/labeled_images/${label}/${i}.jpg`)

    //                 const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
    //                 descriptions.push(detections.descriptor)
    //             }
    //             return new faceapi.LabeledFaceDescriptors(label, descriptions)
    //         }))
    //         console.log(labeledDescriptors);

    //         document.body.append(' Green Light')

    //         const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6)

    //         video.addEventListener('play', () => {
    //             const canvas = faceapi.createCanvasFromMedia(video)

    //             // video.append(canvas)

    //             // console.log(document.body);
    //             document.body.append(canvas)

    //             const displaySize = {
    //                 width: video.width,
    //                 height: video.height
    //             }

    //             faceapi.matchDimensions(canvas, displaySize)

    //             let interval = setInterval(async () => {
    //                 const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors()

    //                 const resizedDetections = faceapi.resizeResults(detections, displaySize)
    //                 canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

    //                 const results = resizedDetections.map((d) => {
    //                     return faceMatcher.findBestMatch(d.descriptor)
    //                 })
    //                 console.log(results[0].label)
    //                 results.forEach((result, i) => {
    //                     const box = resizedDetections[i].detection.box
    //                     const drawBox = new faceapi.draw.DrawBox(box, {
    //                         label: result.toString()
    //                     })
    //                     drawBox.draw(canvas)
    //                 })

    //             }, 100)

    //             setTimeout(() => {
    //                 clearInterval(interval)
    //             }, 5000);
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}
</script>

<style>

</style>
