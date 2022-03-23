<template>
<div class="row pt-3 " style="margin-left: 7%; margin-top: 3%">
    <div class="col-8">
        <h2 v-if="$store.state.cart.length < 1" class="p-5">Your cart is empty, please add some item into your cart</h2>
        <CheckoutCard v-for="productPackage in cart" :key="productPackage.id" :productPackage=productPackage></CheckoutCard>
    </div>
    <div class="col-4 border border-secondary rounded grid w-25">
        <h3 class="mt-4">Checkout</h3>
        <br>
        <CheckoutItems v-for="productPackage in cart" :key="productPackage.id" :productPackage=productPackage></CheckoutItems>

        <div class="row">
            <div class="col-6 pe-5">
                <p class="font-weight-bold text-nowrap">This Month's Total</p>
            </div>
            <div class="col-6 ps-5">
                <p v-if="cartTotalAmount === 0">Rp. 0</p>
                <p v-else>{{cartTotalAmount}}</p>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-6 text-nowrap">
                <button v-if="$store.state.cart.length > 0" v-b-modal.modal-2 type="button" @click="faceRecognition" class="btn btn-outline-success btn-sm"><i class="fa-solid fa-face-grin-beam fa-xl"></i> Face Payment</button>
            </div>
            <div class="col-6">
                <button v-if="$store.state.ableToPay && $store.state.cart.length > 0" v-b-modal.modal-1 type="button" @click="doXenditPay" class="btn btn-primary btn-sm">Xendit Pay</button>
            </div>
        </div>

    </div>
    <div>
        <div>

            <b-modal id="modal-1" title="XenditPay" size="xl" hide-footer="true" hide-header="true">
                <iframe :src="invoiceUrl" height="600" width="1100"></iframe>
            </b-modal>

            <span v-show="showFaceRecognition" id="canvas" style="position: absolute; z-index: 2; left: 37.5%; top: 20%"></span>
            <video v-show="showFaceRecognition" id="videoInput" style="position: absolute; z-index: 1 ; left: 37.5%; top: 20%" width="450" height="400" muted controls autoplay></video>

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
            invoiceUrl: '',
            showFaceRecognition: false,
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
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(totalAmount);
        }
    },
    methods: {
        async doXenditPay() {
            this.invoiceUrl = await this.$store.dispatch('doXenditPay')
        },
        async faceRecognition() {
            try {
                this.showFaceRecognition = true
                const video = this.$el.querySelector('video')
                const canvasElem = this.$el.querySelector('#canvas')
                let detectedUserName = []

                const options = {
                    video: true
                }

                const stream = await navigator.mediaDevices.getUserMedia(options)
                video.srcObject = stream
                const tracks = stream.getTracks();

                const faceMatcher = new faceapi.FaceMatcher(this.$store.state.labeledDescriptors, 0.6)

                video.addEventListener('play', () => {
                    const canvas = faceapi.createCanvasFromMedia(video)

                    canvasElem.append(canvas)

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
                        detectedUserName.push(results[0].label)
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
                        this.showFaceRecognition = false

                        tracks[0].stop;
                        if (detectedUserName.includes(localStorage.currentUserName)) {
                            this.$store.commit('setAbleToPay')
                        } else {
                            alert('Not Authorized')
                        }
                    }, 3000);
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
