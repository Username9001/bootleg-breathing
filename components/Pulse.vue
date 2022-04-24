<template>
  <div v-if="isLoaded">
        <!-- Round Counter -->
        <div class="round-counter">
            <h1 class="text-center">Round {{ roundNumber }}</h1>
        </div>
        <b-container>
            <h1 
                id="timer"
                class="text-center"
                :class="[activePulse ? 'pulse': 'no-display']"
                @click="toggleBreathHold" 
            >{{ breathCycles }}</h1>
            <h1 
                id="timer2"
                class="text-center"
                :class="[activeExpand ? 'inhale': 'no-display']"
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
            <!-- <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2> -->
            <h2 v-if="activePulse">Breath deeply for 30-40 times (click orange to end cycle)</h2>
            <h2 v-if="breathHold">Hold your breath</h2>
            <h2 v-if="activeExpand">Take a deep breath in and hold for 15 seconds</h2>
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
        breathTimer() {
            if( this.breathCycles < 41 ) {
                // cancel function
                if ( this.breathHold === true ) {
                    this.breathCycles = 41;
                    this.togglePulse();
                    return;
                };
                setTimeout(() => {
                    // count up
                    this.breathCycles += 1
                    console.log(this.breathCycles)
                    this.breathTimer()
                }, 4000);
            } 
            if ( this.breathCycles === 41 ) {
                this.togglePulse();
            }
        },
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
            this.breathTimer();
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
    animation: none !important;
}

/* buttons */
.btn {
    font-size: 48px;
    border: none;
    border-radius: 100%;
    height: 240px;
    width: 240px;
    background: lightblue;
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
    background-color: orange;
    color: beige;
    text-shadow: 0 0 25px black;
    animation-name: pulse;
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    /* animation-play-state: running; */
}
.inhale {
    height: 500px;
    width: 500px;
    line-height: 500px;
    margin: 0 auto;
    background-color: lightblue;
    color: white;
    text-shadow: 0 0 25px black;
    border-radius: 100%;
    animation-name: inhale;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    animation-iteration-count: 1;
    /* animation-play-state: running; */
}
.hold {
    height: 250px;
    width: 250px;
    margin: 0 auto;
    background-color: green;
    animation: none;
    border-radius: 100%;
}

.instructions {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 48px 24px;
    text-align: center;
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