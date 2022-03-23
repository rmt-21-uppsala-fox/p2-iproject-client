<template>
<div class="row pt-3 ml-5">
    <div class="col-8">
        <CheckoutCard v-for="productPackage in cart" :key="productPackage.id" :productPackage=productPackage></CheckoutCard>
    </div>
    <div class="col-4 border border-secondary rounded grid w-25">
        <h3>Checkout</h3>
        <br>
        <CheckoutItems v-for="productPackage in cart" :key="productPackage.id" :productPackage=productPackage></CheckoutItems>

        <div class="row">
            <div class="col-6 pe-5">
                <p class="font-weight-bold text-nowrap">This Month's Total </p>
            </div>
            <div class="col-6 ps-5">
                <p v-if="cartTotalAmount === 0">Rp. 0</p>
                <p v-else>Rp. {{cartTotalAmount}}</p>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-6 text-nowrap">
                <button v-b-modal.modal-2 type="button" @click="faceRecognition" class="btn btn-outline-success btn-sm"><i class="fa-solid fa-face-grin-beam fa-xl"></i> Face Payment</button>
            </div>
            <div class="col-6">
                <b-button v-b-modal.modal-1 type="button" @click="doXenditPay" class="btn btn-outline-primary btn-sm">Xendit Pay</b-button>
            </div>
        </div>

    </div>
    <div>
        <div id="canvas"></div>
        <div>

            <b-modal id="modal-1" title="XenditPay" size="xl" hide-footer="true" hide-header="true">
                <iframe :src="invoiceUrl" height="600" width="1100"></iframe>
            </b-modal>

            <video id="videoInput" width="1100" height="600" muted controls></video>
            <b-modal id="modal-2" title="FacePay" size="xl" hide-footer="true" hide-header="true">
            </b-modal>
        </div>
    </div>

</div>
</template>

<script>
import CheckoutCard from '../components/CheckoutCard.vue'
import CheckoutItems from '../components/CheckoutItems.vue'

import * as faceapi from 'face-api.js';
export default {
    name: 'CheckoutView',
    components: {
        CheckoutCard,
        CheckoutItems,
    },
    data() {
        return {
            invoiceUrl: ''
        }
    },
    methods: {
        async doXenditPay() {
            const invoiceUrl = await this.$store.dispatch('doXenditPay')
            this.invoiceUrl = invoiceUrl
        },
        async faceRecognition() {
            try {
                const video = this.$el.querySelector('video')

                console.log(video);

                const options = {
                    video: true
                }

                const stream = await navigator.mediaDevices.getUserMedia(options)
                video.srcObject = stream

                console.log(stream);

                console.log(this.$store.state.labeledDescriptors);

                const faceMatcher = new faceapi.FaceMatcher(this.$store.state.labeledDescriptors, 0.6)

                video.addEventListener('play', () => {
                    const canvas = faceapi.createCanvasFromMedia(video)

                    // video.append(canvas)

                    document.body.append(canvas)

                    const displaySize = {
                        width: video.width,
                        height: video.height
                    }

                    faceapi.matchDimensions(canvas, displaySize)

                    let interval = setInterval(async () => {
                        const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors()

                        const resizedDetections = faceapi.resizeResults(detections, displaySize)
                        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

                        const results = resizedDetections.map((d) => {
                            return faceMatcher.findBestMatch(d.descriptor)
                        })
                        console.log(results[0].label)
                        results.forEach((result, i) => {
                            const box = resizedDetections[i].detection.box
                            const drawBox = new faceapi.draw.DrawBox(box, {
                                label: result.toString()
                            })
                            drawBox.draw(canvas)
                        })

                    }, 100)

                    setTimeout(() => {
                        clearInterval(interval)
                    }, 5000);
                })
            } catch (error) {
                console.log(error);
            }
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart
        },
        cartTotalAmount() {
            let totalAmount = 0
            this.$store.state.cart.forEach((item) => {
                totalAmount += item.price
            })

            return totalAmount
        }
    }
}
</script>

<style>

</style>
