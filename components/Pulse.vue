<template>
  <b-container v-if="isLoaded">
        <h1 
            id="timer"
            class="text-center"
            :class="[activePulse ? 'pulse': '']"
        >{{ breathCycles }}</h1>
        <!-- <h1 
            id="timer2"
            class="text-center"
        >{{ breathInHold }}</h1> -->
        <b-btn 
            @click="biggerCycle" 
            :style="[activePulse ? 'display: none;': 'display: block;']"
        >Start</b-btn>
        <!-- <b-btn @click="reset">Stop</b-btn> -->
  </b-container>
</template>

<script>
export default {
    data() {
        return {
            isLoaded: false,
            activePulse: false,
            breathCycles: undefined,
            breathInHold: 15,
        }
    },
    mounted() {
        this.isLoaded = true;
        // this.countDownTimer();
    },
    methods: {
        // Animation toggle
        toggleAnimation() {
            this.activePulse = !this.activePulse;
        },
        // Breathing cycle method
        breathTimer() {
            if( this.breathCycles > 0 ) {
                setTimeout(() => {
                    // count down (change to count up)
                    this.breathCycles -= 1
                    console.log(this.breathCycles)
                    this.breathTimer()
                }, 3000);
            } 
            if ( this.breathCycles === 0 ) {
                this.toggleAnimation();
            }
        },
        breathHoldCountdown() {
            if( this.breathInHold > 0 ) {
                setTimeout(() => {
                    // count down (change to count up)
                    this.breathInHold -= 1
                    console.log(this.breathInHold)
                    this.breathHoldCountdown()
                }, 1000);
            } 
        },
        breathCycle() {
            // set amount of breaths
            this.breathCycles = 4;
            // activate animation
            this.toggleAnimation();
            // start breath
            this.breathTimer();
        },
        biggerCycle() {
            this.breathCycle();
            // start hold
            if( this.breathCycles === 0 ) {
                // this.breathInHold = 15;
                this.breathHoldCountdown();
            }
        }
    }
}
</script>

<style>
body,
html {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
}

p {
  text-align: center;
  font-size: 60px;
  margin-top: 0px;
}

.ball-counter {
    display: block;
    border: 2px solid black;
    border-radius: 240px;
    width: 240px;
    height: 240px;
    padding: 12px;
    margin: auto;
}
.pulse {
    height: 250px;
    width: 250px;
    line-height: 250px;
    margin: 0 auto;
    background-color: orange;
    color: white;
    text-shadow: 0 0 25px black;
    animation-name: pulse;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-play-state: running;
}
.hold {
    height: 250px;
    width: 250px;
    margin: 0 auto;
    background-color: green;
    animation: none;
    border-radius: 100%;
}

@keyframes pulse {
    0% {
        transform: scale(.5);
        /* background-color: green; */
        border-radius: 100%;
    }

    50% {
        /* background-color: orange; */
    }

    100% {
        transform: scale(2.0);
        border-radius: 400%;
        /* background-color: red; */
    }
}
</style>