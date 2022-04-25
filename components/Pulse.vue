<template>
  <div v-if="isLoaded">
        <!-- Round Counter -->
        <div class="round-counter">
            <h4 class="text-center">Round {{ roundNumber }}</h4>
            <p v-if="breathHold === true">{{ formattedElapsedTime }}</p>
        </div>
        <b-container>
            <h1 
                v-if="activePulse"
                id="pulse"
                class="text-center"
                :class="[{ 'pulse': activePulse }]"
                @click="toggleBreathHold" 
            >{{ breathCycles }}</h1>
            <h1 
                v-if="activeExpand"
                id="timer2"
                class="text-center inhale"
            >{{ breathInHold }}</h1>
            <div>
                <b-btn
                    class="m-auto"
                    :style="[ activePulse || activeExpand || breathInHold === 15 ? 'display: none;': 'display: block;']"
                    @click="breathCycle" 
                >
                    <h1>Start</h1>
                </b-btn>
                <b-btn 
                    class="m-auto"
                    :style="[ activePulse || activeExpand || breathInHold === 0  ? 'display: none;': 'display: block;']"
                    @click="oneBreath"
                >
                    <h1>One Deep Breath</h1>
                </b-btn>
            </div>
        </b-container>
        <!-- Instructions -->
        <div class="instructions">
            <h5 v-if="activePulse && !breathHold">Breath deeply for 30-40 times (click the circle to end the cycle)</h5>
            <h5 v-if="breathHold && !activeExpand">Let go and hold your breath</h5>
            <h5 v-if="activeExpand">Take a deep breath in and hold for 15 seconds</h5>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isLoaded: false,
            activePulse: false,
            activeInhale: false,
            activeExpand: false,
            breathCycles: 0,
            breathInHold: 0,
            breathHold: false,
            roundNumber: 0,
            // stopwatch
            elapsedTime: 0,
            timer: undefined,
        }
    },
    computed: {
        formattedElapsedTime() {
            const date = new Date(null);
            date.setSeconds(this.elapsedTime / 1000);
            const utc = date.toUTCString();
            return utc.substr(utc.indexOf(":") + 1, 6);
        }
    },
    mounted() {
        this.isLoaded = true;
    },
    methods: {
        // Animation toggle
        togglePulse() {
            this.activePulse = !this.activePulse;
        },
        toggleExpand() {
            this.activeExpand = !this.activeExpand;
        },
        toggleBreathHold() {
            // cancel animation
            this.breathHold = !this.breathHold;
        },
        // Breathing cycle method
        breathingLoop() {
            if ( this.breathHold === true ) {
                this.togglePulse();
                this.breathCycles = 41;
                // stopwatch
                this.startStopwatch();
                return;
            };
            if( this.breathCycles < 41 ) {
                // cancel function
                setTimeout(() => {
                    // count up
                    this.breathCycles += 1
                    console.log(this.breathCycles)
                    this.breathingLoop()
                }, 4000);
            } 
            if ( this.breathCycles === 41 ) {
                // animation
                this.togglePulse();
            }
        },
        // breath hold timer
        // stopwatch methods
        startStopwatch() {
            this.timer = setInterval(() => {
                this.elapsedTime += 1000;
        }, 1000);
        },
        stopStopwatch() {
            clearInterval(this.timer);
        },
        resetStopwatch() {
            this.elapsedTime = 0;
        },
        // breath in and 15 second hold
        breathHoldCountdown() {
            if( this.breathInHold > 0 && this.breathCycles === 41 ) {
                // breath hold
                setTimeout(() => {
                    // count down (change to count up)
                    this.breathInHold -= 1
                    console.log(this.breathInHold)
                    this.breathHoldCountdown()
                }, 1000);
            }
            if ( this.breathInHold === 0 ) {
                // reset stopwatch
                this.stopStopwatch();
                this.resetStopwatch();
                // start animation and breath cycle again
                this.toggleExpand();
                this.breathCycle();
            }
        },
        breathCycle() {
            // set amount of breaths
            this.breathCycles = 1;
            // set hold time
            this.breathInHold = 15;
            // activate animation
            this.togglePulse();
            // start breath
            this.breathingLoop();
            this.roundNumber++;
        },
        oneBreath() {
            // activate animation
            this.toggleExpand();
            // start hold
            this.breathHoldCountdown();
            // toggle back breathHold
            this.toggleBreathHold();
        },
    },
}
</script>

<style>
body,
html {
    height: 100%;
    user-select: none;
    overflow-x: hidden;
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

.no-display {
    display: none;
}
.no-animation {
    animation: none !important;
}
/* buttons */
.btn {
    font-size: 48px;
    border: none;
    border-radius: 100%;
    height: 240px;
    width: 240px;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,211,255,0.29173676306460083) 100%, rgba(255,255,255,0) 100%); 
    text-shadow: 0 0 10px black;
}
.btn:hover, .btn-secondary:active {
    background: lightseagreen !important;
}

.round-counter {
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
}
.round-counter h1 {
    padding: 12px;
    font-size: 3.2em;
    font-weight: 700;
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
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,211,255,0.29173676306460083) 100%, rgba(255,255,255,0) 100%); 
    color: white;
    text-shadow: 0 0 10px black;
    animation-name: pulse;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    /* animation-play-state: running; */
}
.inhale {
    height: 500px;
    width: 500px;
    line-height: 500px;
    margin: 0 auto;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,211,255,0.29173676306460083) 100%, rgba(255,255,255,0) 100%); 
    color: white;
    text-shadow: 0 0 25px black;
    border-radius: 100%;
    animation-name: inhale;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: 1;
    /* animation-play-state: running; */
}

.instructions {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 24px;
    text-align: center;
}

@keyframes pulse {
    0% {
        transform: scale(.5);
        border-radius: 100%;
    }

    100% {
        transform: scale(2.0);
        border-radius: 400%;
    }
}
@keyframes inhale {
    0% {
        transform: scale(.1);
        border-radius: 100%;
    }
    100% {
        transform: scale(1);
        border-radius: 100%;
    }
}
</style>