<template>
  <div v-if="isLoaded">
        <!-- Round Counter -->
        <div class="round-counter">
            <h4 class="text-center">Round {{ round.number }}</h4>
            <p v-if="round.phase === 'breathHold'">{{ formattedElapsedTime }}</p>
        </div>
        <b-container>
            <div
                v-if="round.number === 0"
                class="m-auto main-button"
                @click="breathCyclePhase()" 
            >
                <h1>Start</h1>
            </div>
            <div 
                v-if="round.phase === 'breathCycle'"
                id="pulse"
                class="text-center pulse main-button"
                @click="breathHoldPhase()" 
            >{{ breathCycles }}</div>
            <div 
                v-if="round.phase === 'breathHold'"
                class="m-auto main-button"
                @click="deepBreathPhase()"
            >
                <h1>Breath In</h1>
            </div>
            <div 
                v-if="round.phase === 'deepBreath'"
                id="timer2"
                class="text-center inhale main-button"
            >{{ deepBreathTime }}</div>
        </b-container>
        <!-- Instructions -->
        <div class="instructions">
            <h5 v-if="round.phase === 'breathCycle'">Breath deeply for 30-40 times (click the circle to end the cycle)</h5>
            <h5 v-if="round.phase === 'breathHold'">Let go and hold your breath</h5>
            <h5 v-if="round.phase === 'deepBreath'">Take a deep breath in and hold for 15 seconds</h5>
            <h5 v-if="round.phase === 'smallPause'">Small Pause</h5>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // page load
            isLoaded: false,
            // breath variables
            breathCycles: 0,
            deepBreathTime: 0,
            // stopwatch
            elapsedTime: 0,
            timer: undefined,
            // round object
            round: {
                // track round number
                number: 0,
                // track phase
                phase: undefined,
            },
            // how the round is made up
            phases: [
                // 30-40 deep breaths
                'breathCycle',
                // hold breath as long as you can
                'breathHold',
                // deep breath in, and hold for 15s
                'deepBreath',
                // small pause before starting next round
                'smallPause'
            ],
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
        // go through phases
        breathCyclePhase() {
            // check if not already running
            if ( this.round.phase !== this.phases[0]) {
                // adjust round object
                this.round.phase = this.phases[0];
                // set amount of breaths
                this.breathCycles = 1;
                // start breath
                this.breathingLoop();
                // set round number
                this.round.number++;
            }
        },
        breathHoldPhase() {
            // check if not already running
            if ( this.round.phase !== this.phases[1]) {
                // adjust round object
                this.round.phase = this.phases[1];
                // start stopwatch
                this.startStopwatch();
            }
        },
        deepBreathPhase() {
            // check if not already running
            if ( this.round.phase !== this.phases[2]) {
                // adjust round object
                this.round.phase = this.phases[2];
                // set hold time
                this.deepBreathTime = 15;
                // start hold
                this.deepBreathCountdown();
            }
        },
        smallPausePhase() {
            // check if not already running
            if ( this.round.phase !== this.phases[3]) {
                // adjust round object
                this.round.phase = this.phases[3];
                // reset stopwatch
                this.stopStopwatch();
                this.resetStopwatch();
                // start a new round
                setTimeout(() => {
                    this.breathCyclePhase();
                }, 500);
            }
        },
        // Breathing cycle method
        breathingLoop() {
            if ( this.breathCycles === 41 ) {
                // go to next phase
                this.breathHoldPhase();
                return;
            }
            if( this.breathCycles < 41 ) {
                // cancel function
                setTimeout(() => {
                    // count up
                    this.breathCycles += 1
                    this.breathingLoop()
                }, 4000);
            } 
        },
        // Breath hold cycle methods (stopwatch methods)
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
        // Deep breath method
        deepBreathCountdown() {
            if ( this.deepBreathTime === 0 ) {
                // go to next phase/round
                this.smallPausePhase();
                return;
            }
            if( this.round.phase === 'deepBreath' ) {
                // breath hold
                setTimeout(() => {
                    // count down (change to count up)
                    this.deepBreathTime -= 1
                    this.deepBreathCountdown()
                }, 1000);
            }
        },
    },
}
</script>

<style>

</style>