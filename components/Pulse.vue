<template>
    <div v-if="isLoaded">
        <!-- Previous round time -->
        <div 
            class="previous-round-time"
        >
            <p class="text-center">
                <i>Previous round: {{ previousRoundTime }}</i>
            </p>
        </div>
        <!-- Round Counter -->
        <div class="round-counter">
            <h4 class="text-center">Round {{ round.number }}</h4>
            <p v-if="round.phase === 'breathHold'">{{ formattedElapsedTime }}</p>
        </div>
        <!-- Main button / seconds counter -->
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
            <h5 v-if="round.phase === 'breathCycle'">Breath deeply for {{ cycleAmount }} times (click the circle to end the cycle)</h5>
            <h5 v-if="round.phase === 'breathHold'">Let go and hold your breath</h5>
            <h5 v-if="round.phase === 'deepBreath'">Take a deep breath in and hold for {{ deepHoldAmount }} seconds (click circle to skip)</h5>
            <h5 v-if="round.phase === 'smallPause'">Get back into that rhythm</h5>
        </div>
        <!-- Options -->
        <!-- <Options /> -->
        <b-btn class="reset-button" @click="finishSet()">
            Reset Breathing Exercise
        </b-btn>
        <b-btn v-b-modal.modal-1 class="modal-toggle">Change Options</b-btn>
        <b-modal id="modal-1" title="Options" bg-variant="dark" text-variant="light" shadow>
            <div class="px-3 py-2 accordion">
                <div class="option-buttons row">
                    <b-btn class="" @click="toggleSound()">
                        Breathing sound
                        <small v-if="soundActive">
                            &#10003;
                        </small>
                    </b-btn>
                    <b-btn class="" @click="toggleChimes()">
                        Chime sounds
                        <small v-if="chimesActive">
                            &#10003;
                        </small>
                    </b-btn>
                    <b-btn class="" @click="toggleVoice()">
                        Voice (N/A)
                        <small v-if="voiceActive">
                            &#10003;
                        </small>
                    </b-btn>
                    <b-form-group>
                        <label for="cycleAmount">Breath Cycles (20-60)</label>
                        <b-form-spinbutton id="cycleAmount" v-model="cycleAmount" min="20" max="60"></b-form-spinbutton>
                    </b-form-group>
                    <b-form-group>
                        <label for="deepHoldAmount">Breath Hold Time (10-30s)</label>
                        <b-form-spinbutton id="deepHoldAmount" v-model="deepHoldAmount" min="10" max="30"></b-form-spinbutton>
                    </b-form-group>
                </div>
            </div>
        </b-modal>
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
            voiceActive: false,
            // page load
            isLoaded: false,
            // breath variables
            breathCycles: 0,
            cycleAmount: 40,
            deepBreathTime: 0,
            deepHoldAmount: 15,
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
            previousRoundTime: undefined,
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
            // reset vars
            this.deepHoldAmount = 15
            this.cycleAmount = 40
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
        playBreathOut() {
            if ( this.round.phase === this.phases[2] && this.soundActive === true ) {
                const outSound = new Audio(this.breathOutSound)
                outSound.play()
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
                console.log('playing low chime')
            }
        },
        playHighChime() {
            if ( this.round.phase === this.phases[2] && this.chimesActive === true ) {
                const chimeHigh = new Audio(this.chimeHigh)
                chimeHigh.play()
                console.log('playing high chime')
            }
        },
        // Voice
        toggleVoice() {
            this.voiceActive = !this.voiceActive
            console.log(this.voiceActive)
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
                // log previous round time
                this.previousRoundTime = this.formattedElapsedTime
                // adjust round object
                this.round.phase = this.phases[2]
                // set hold time
                this.deepBreathTime = this.deepHoldAmount
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
                // audio cue
                this.playBreathOut()
                // adjust round object
                this.round.phase = this.phases[3]
                // reset stopwatch
                this.stopStopwatch()
                this.resetStopwatch()
                // start a new round
                setTimeout(() => {
                    this.breathCyclePhase()
                }, 2500)
            }
        },
        // Breathing cycle method
        breathingLoop() {
            // max breathing count
            if ( this.breathCycles === this.cycleAmount + 1 || this.activeLoop === false ) {
                // go to next phase
                this.breathHoldPhase()
                return
            }
            // main loop
            if( this.breathCycles < this.cycleAmount + 1 && this.round.phase === this.phases[0] ) {
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
            this.timer = undefined
            this.timer = setInterval(() => {
                this.elapsedTime += 1000
                // play chimes
                if ( this.chimesActive === true && ( this.elapsedTime % 60000 === 0 ) ) {
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