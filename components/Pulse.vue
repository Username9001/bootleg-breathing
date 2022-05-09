<template>
  <div v-if="isLoaded">
      <!-- Reset button -->
      <div class="option-buttons">
        <b-btn class="m-auto" @click="finishSet()">
            Reset
        </b-btn>
        <hr>
        <b-btn class="m-auto" @click="toggleSound()">
            Breathing sound
        </b-btn>
        <div v-if="soundActive">
            Sounds active
        </div>
        <hr>
        <b-btn class="m-auto" @click="toggleChimes()">
            Chime sounds
        </b-btn>
        <div v-if="chimesActive">
            Chimes active
        </div>
      </div>
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
                @click="skipDeepBreath()"
            >{{ deepBreathTime }}</div>
        </b-container>
        <!-- Instructions -->
        <div class="instructions">
            <h5 v-if="round.phase === 'breathCycle'">Breath deeply for 30-40 times (click the circle to end the cycle)</h5>
            <h5 v-if="round.phase === 'breathHold'">Let go and hold your breath</h5>
            <h5 v-if="round.phase === 'deepBreath'">Take a deep breath in and hold for 15 seconds (click circle to skip)</h5>
            <h5 v-if="round.phase === 'smallPause'">Get back into that rhythm</h5>
        </div>
  </div>
</template>

<script>
const breathInSound = require("@/assets/sounds/BreathInSound.mp3").default;
const breathOutSound = require("@/assets/sounds/BreathOutSound.mp3").default;

const chimeLow = require("@/assets/sounds/ChimeLow.mp3").default;
const chimeHigh = require("@/assets/sounds/ChimeHigh.mp3").default;

export default {
    data() {
        return {
            activeLoop: false,
            // audio
            soundActive: true,
            breathInSound,
            breathOutSound,
            chimesActive: true,
            chimeLow,
            chimeHigh,
            // page load
            isLoaded: false,
            // breath variables
            breathCycles: 0,
            deepBreathTime: 0,
            breathTime: 3500,
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
                'smallPause',
                // end
                'end'
            ],
        }
    },
    computed: {
        formattedElapsedTime() {
            const date = new Date(null)
            date.setSeconds(this.elapsedTime / 1000)
            const utc = date.toUTCString()
            return utc.substr(utc.indexOf(":") + 1, 6)
        }
    },
    mounted() {
        this.isLoaded = true
    },
    methods: {
        // reset
        finishSet() {
            this.round.number = 0
            this.round.phase = this.phases[4]
            this.stopStopwatch()
            this.resetStopwatch()
            console.log("set finished", this.round.phase)
        },
        // sounds
        toggleSound() {
            this.soundActive = !this.soundActive
            console.log(this.soundActive)
        },
        playSounds() {
            if (this.round.phase === this.phases[0] && this.soundActive === true ) {
                const inSound = new Audio(this.breathInSound)
                const outSound = new Audio(this.breathOutSound)
                inSound.play()
                setTimeout(() => {
                    if (this.round.phase === this.phases[0]) {
                        outSound.play()
                    }
                }, this.breathTime / 2 )
            } 
        },
        playBreathIn() {
            if ( this.round.phase === this.phases[2] && this.soundActive === true ) {
                const inSound = new Audio(this.breathInSound)
                inSound.play()
            }
        },
        // Chimes
        toggleChimes() {
            this.chimesActive = !this.chimesActive
            console.log(this.chimesActive)
        },
        playLowChime() {
            if ( this.round.phase === this.phases[1] && this.chimesActive === true ) {
                const chimeLow = new Audio(this.chimeLow)
                chimeLow.play()
                console.log('playing')
            }
        },
        playHighChime() {
            if ( this.round.phase === this.phases[2] && this.chimesActive === true ) {
                const chimeHigh = new Audio(this.chimeHigh)
                chimeHigh.play()
                console.log('playing')
            }
        },
        // go through phases
        // breath cycle phase
        breathCyclePhase() {
            // check if not already running
                // All the taxing stuff you do
                if ( this.round.phase !== this.phases[0]) {
                    // adjust round object
                    this.round.phase = this.phases[0]
                    // set amount of breaths
                    this.breathCycles = 1
                    // set round number
                    this.round.number++
                    // start loop
                    this.activeLoop = true
                    setTimeout( () => {
                        // start breath
                        this.breathingLoop()
                        console.log('breath cycle phase')
                    }, 200 )
                }
        },
        // breath hold phase
        breathHoldPhase() {
            // check if not already running
            if ( this.round.phase !== this.phases[1]) {
                // end breath loop
                this.activeLoop = false
                // adjust round object
                this.round.phase = this.phases[1]
                // start stopwatch
                this.startStopwatch()
                // console
                setTimeout( () => {
                    console.log('breath hold phase')
                }, 200 )
            }
        },
        // deep breath in phase
        deepBreathPhase() {
            // check if not already running
            if ( this.round.phase !== this.phases[2]) {
                // adjust round object
                this.round.phase = this.phases[2]
                // set hold time
                this.deepBreathTime = 15
                // start hold
                this.deepBreathCountdown()
                // play sound
                this.playBreathIn()
                // console
                setTimeout( () => {
                    console.log('deep breath phase')
                }, 200 )
            }
        },
        skipDeepBreath() {
            console.log('skipping deep breath phase')
            this.deepBreathTime = 0
            this.smallPausePhase()
        },
        // small pause between cycles
        smallPausePhase() {
            // check if not already running
            if ( this.round.phase !== this.phases[3]) {
                // adjust round object
                this.round.phase = this.phases[3]
                // reset stopwatch
                this.stopStopwatch()
                this.resetStopwatch()
                // start a new round
                setTimeout(() => {
                    this.breathCyclePhase()
                }, 1500)
            }
        },
        // Breathing cycle method
        breathingLoop() {
            // max breathing count
            if ( this.breathCycles === 41 || this.activeLoop === false ) {
                // go to next phase
                this.breathHoldPhase()
                return
            }
            // main loop
            if( this.breathCycles < 41 && this.round.phase === this.phases[0] ) {
                // play sound
                this.playSounds()
                // cancel function
                setTimeout(() => {
                    // count up
                    this.breathCycles += 1
                    this.breathingLoop()
                    // console
                    setTimeout( () => {
                        console.log('breathing loop', this.breathCycles);
                    }, 200 )
                }, this.breathTime)
            } 
        },
        // Breath hold cycle methods (stopwatch methods)
        startStopwatch() {
            this.timer = setInterval(() => {
                this.elapsedTime += 1000
                // play chimes
                if ( this.chimesActive === true && ( this.elapsedTime === 1000 || this.elapsedTime % 60000 === 0 ) ) {
                    this.playLowChime()
                }
            }, 1000)
        },
        stopStopwatch() {
            clearInterval(this.timer)
        },
        resetStopwatch() {
            this.elapsedTime = 0
            this.timer = undefined
        },
        // Deep breath method
        deepBreathCountdown() {
            if ( this.deepBreathTime === 0 ) {
                // go to next phase/round
                this.smallPausePhase()
                return;
            }
            if ( this.deepBreathTime === 1 ) {
                this.playHighChime()
            }
            if( this.round.phase === 'deepBreath' ) {
                // breath hold
                setTimeout(() => {
                    // count down (change to count up)
                    this.deepBreathTime -= 1
                    this.deepBreathCountdown()
                }, 1000)
            }
        },
    },
}
</script>

<style lang="scss">

</style>