<template>
  <b-container v-if="isLoaded">
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
        <b-row>
            <b-btn 
                :style="[ activePulse || activeExpand || breathInHold === 15 ? 'display: none;': 'display: block;']"
                @click="biggerCycle" 
            >Rhythmic Breath</b-btn>
            <!-- <b-btn 
                @click="toggleBreathHold" 
            >Stop Breathing</b-btn> -->
            <b-btn 
                :style="[ activePulse || activeExpand || breathInHold === 0  ? 'display: none;': 'display: block;']"
                @click="oneBreath"
            >One Deep Breath</b-btn>
            <!-- <b-btn @click="reset">Stop</b-btn> -->
        </b-row>
  </b-container>
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
            this.breathHold = !this.breathHold;
        },
        // Breathing cycle method
        breathTimer() {
            if( this.breathCycles > 0 ) {
                // cancel function
                if ( this.breathHold === true ) {
                    this.breathCycles = 0;
                    this.togglePulse();
                    return;
                };
                setTimeout(() => {
                    // count down (change to count up)
                    this.breathCycles -= 1
                    console.log(this.breathCycles)
                    this.breathTimer()
                }, 4000);
            } 
            if ( this.breathCycles === 0 ) {
                this.togglePulse();
            }
        },
        breathHoldCountdown() {
            if( this.breathInHold > 0 && this.breathCycles === 0 ) {
                // breath hold
                setTimeout(() => {
                    // count down (change to count up)
                    this.breathInHold -= 1
                    console.log(this.breathInHold)
                    this.breathHoldCountdown()
                }, 1200);
            }
            if ( this.breathInHold === 0 ) {
                this.toggleExpand();
            }
        },
        breathCycle() {
            // set amount of breaths
            this.breathCycles = 40;
            // set hold time
            this.breathInHold = 15;
            // activate animation
            this.togglePulse();
            // start breath
            this.breathTimer();
        },
        biggerCycle() {
            this.breathCycle();
        },
        stopBreathing() {
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
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-play-state: running;
}
.inhale {
    height: 250px;
    width: 250px;
    line-height: 250px;
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