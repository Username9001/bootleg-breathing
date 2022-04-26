<template>
  <div v-if="isLoaded">
        <!-- Round Counter -->
        <div class="round-counter">
            <h4 class="text-center">Round {{ round.number }}</h4>
            <p v-if="round.phase === 'breathHold'">{{ formattedElapsedTime }}</p>
        </div>
        <b-container>
            <div 
                v-if="round.phase === 'breathCycle'"
                id="pulse"
                class="text-center pulse main-button"
                @click="breathHoldPhase()" 
            >{{ breathCycles }}</div>
            <div 
                v-if="round.phase === 'deepBreath'"
                id="timer2"
                class="text-center inhale main-button"
            >{{ deepBreathTime }}</div>
            <div
                v-if="round.number === 0"
                class="m-auto main-button"
                @click="breathCyclePhase()" 
            >
                <h1>Start</h1>
            </div>
            <div 
                v-if="round.phase === 'breathHold'"
                class="m-auto main-button"
                @click="deepBreathPhase()"
            >
                <h1>One Deep Breath</h1>
            </div>
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
            isLoaded: false,
            activePulse: false,
            activeInhale: false,
            activeExpand: false,
            breathCycles: 0,
            deepBreathTime: 0,
            breathHold: false,
            // stopwatch
            elapsedTime: 0,
            timer: undefined,
            // define everything happening in a round within an object
            round: {
                // track round number
                number: 0,
                // track phase
                phase: undefined,
                // breath counter

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
            // adjust round object
            this.round.phase = this.phases[0];
            // set amount of breaths
            this.breathCycles = 1;
            // start breath
            this.breathingLoop();
            // set round number
            this.round.number++;
        },
        breathHoldPhase() {
            // adjust round object
            this.round.phase = this.phases[1];
        },
        deepBreathPhase() {
            // adjust round object
            this.round.phase = this.phases[2];
            // set hold time
            this.deepBreathTime = 15;
            // start hold
            this.breathHoldCountdown();
        },
        smallPausePhase() {
            // adjust round object
            this.round.phase = this.phases[3];
            // start a new round
            setTimeout(() => {
                this.breathCyclePhase();
            }, 1500);
        },
        // Breathing cycle method
        breathingLoop() {
            if ( this.round.phase === 'breathHold') {
                // this.togglePulse();
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
                // this.togglePulse();
                this.round.phase = 'breathHold';
                this.startStopwatch();
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
            if( this.round.phase === 'deepBreath' ) {
                // breath hold
                setTimeout(() => {
                    // count down (change to count up)
                    this.deepBreathTime -= 1
                    console.log(this.deepBreathTime)
                    this.breathHoldCountdown()
                }, 1000);
            }
            if ( this.deepBreathTime === 0 ) {
                // reset stopwatch
                this.stopStopwatch();
                this.resetStopwatch();
                // go to next phase/round
                console.log('starting next round...');
                this.round.phase = 'smallPause';
                // give some extra time between stages
                setTimeout(() => {
                    this.breathCyclePhase();
                }, 1500);
                // start animation and breath cycle again
                this.toggleExpand();
            }
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

</style>