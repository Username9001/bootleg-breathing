<template>
    <div v-if="isLoaded">
        <!-- Explanation Alert -->
        <b-alert v-model="showAlert" class="explanation-alert" variant="light" dismissible>
            <div>
                {{ explanationNotice }}
            </div>
        </b-alert>
        <!-- Previous round time -->
        <div 
            class="previous-round-time"
        >        
            <p v-b-toggle.collapse-1 class="text-center">
                <i>Previous round: {{ previousRoundTime }}</i>
                <label>(Click to view all rounds)</label>
            </p>
            <!-- round times list -->
        </div>
        <!-- Round Counter -->
        <div class="round-counter">
            <h4 class="text-center">Round {{ round.number }}</h4>
            <p v-if="round.phase === 'breathHold'">{{ formattedElapsedTime }}</p>
            <b-collapse id="collapse-1" class="text-center">
                <div class="times-list">
                    <ul>
                        All Round Times:
                        <li v-for="roundTime in roundTimes" :key="roundTime.round">
                            Round #{{ roundTime.round }} - {{ roundTime.time }}
                        </li>
                    </ul>
                </div>
                <b-btn @click="clearRoundTimes()">
                    Clear round times
                </b-btn>
            </b-collapse>
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
                class="text-center m-auto inhale main-button"
                @click="skipDeepBreath()"
            >{{ deepBreathTime }}</div>
            <div 
                v-if="round.phase === 'smallPause'"
                class="m-auto exhale main-button"
            >
                <!-- <h1>Exhale</h1> -->
            </div>
        </b-container>
        <!-- Instructions -->
        <div class="instructions">
            <h5 v-if="round.phase === 'breathCycle'">Breathe deeply for {{ cycleAmount }} times (click the circle to end the cycle)</h5>
            <h5 v-if="round.phase === 'breathHold'">Let go and hold your breath</h5>
            <h5 v-if="round.phase === 'deepBreath'">Take a deep breath in and hold for {{ deepHoldAmount }} seconds (click to skip)</h5>
            <h5 v-if="round.phase === 'smallPause'">Get back into that rhythm</h5>
        </div>
        <!-- Options -->
        <!-- <Options /> -->
        <div class="bottom-buttons">
            <b-btn class="reset-button" variant="dark" @click="finishSet()">
                End Set
            </b-btn>
            <b-btn v-b-modal.modal-1 class="modal-toggle" variant="dark">Options</b-btn>
        </div>
        <b-modal id="modal-1" title="Options" header-bg-variant="dark" body-bg-variant="dark" footer-bg-variant="dark" text-variant="dark" shadow>
            <div class="px-3 py-2 accordion">
                <div class="option-buttons row">
                    <!-- Sounds -->
                    <b-form-group v-b-toggle.sound-input class="my-0 text-center">
                        <h4 class="border-bottom pb-4 mb-0">
                            Sounds
                            <span>&#9660;</span>
                        </h4>
                    </b-form-group>
                    <b-collapse id="sound-input" visible class="m-auto">
                        <b-btn class="options-button" @click="toggleSound()">
                            Breathing sound
                            <small v-if="soundActive">
                                &#10003;
                            </small>
                        </b-btn>
                        <b-btn class="options-button" @click="toggleMusic()">
                            Music
                            <small v-if="musicOn">
                                &#10003;
                            </small>
                        </b-btn>
                        <b-form-group v-if="musicOn" class="music-select" description="select a track">
                            <b-form-select v-model="selectedMusic" :options="selectableTracks"></b-form-select>
                            <b-btn @click="sampleMusic()">
                                Play music
                            </b-btn>
                            <b-btn @click="stopMusic()">
                                stop music
                            </b-btn>
                            <div v-if="currentMusic">
                                {{ currentMusic.duration }}
                            </div>
                        </b-form-group>
                    </b-collapse>
                    <b-form-group v-b-toggle.numeric-input class="my-0 text-center">
                        <h4 class="border-bottom py-4 mb-0">
                            Cycle / Timing
                            <span>&#9660;</span>
                        </h4>
                    </b-form-group>
                    <b-collapse id="numeric-input" visible class="m-auto">
                        <b-form-group>
                            <label class="is-block text-center" for="cycleAmount">Number of breaths per cycle (20-60)</label>
                            <h5 class="text-center">
                                {{ cycleAmount }}
                            </h5>
                            <b-form-input v-model="cycleAmount" type="range" class="slider-input" min="20" max="60"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <label class="is-block text-center" for="deepHoldAmount">Deep breath retention time (10-30s)</label>
                            <h5 class="text-center">
                                {{ deepHoldAmount }} s
                            </h5>
                            <b-form-input v-model="deepHoldAmount" type="range" class="slider-input" min="10" max="30"></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <label class="is-block text-center" for="pauseDuration">Pause duration between sets</label>
                            <h5 class="text-center">
                                {{ pauseDuration }} s
                            </h5>
                            <b-form-input v-model="pauseDuration" type="range" class="slider-input" min="2.5" max="8" step=".5"></b-form-input>
                        </b-form-group>
                    </b-collapse>

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

// music tracks
const ancientAtonal = require("@/assets/sounds/music/AncientAtonal.mp3").default;
const autumnSky = require("@/assets/sounds/music/AutumnSky.mp3").default;
const japaneseWaterGarden = require("@/assets/sounds/music/JapaneseWaterGarden.mp3").default;
const oldWaterMill = require("@/assets/sounds/music/OldWaterMill.mp3").default;
const space = require("@/assets/sounds/music/Space.mp3").default;
const tibetan = require("@/assets/sounds/music/Tibetan.mp3").default;
const viking = require("@/assets/sounds/music/Viking1.mp3").default;

export default {
    data() {
        return {
            // explanation alert
            explanationNotice: 'Welcome, this app is meant as a support for guided breathing. It loosely follows the Wim Hof Method, first taking around 40 deep breaths in and out. Then on the last breath out, release and hold for as long as possible. Then take a deep breath in and hold for approximately 15 seconds. After that, repeat this cycle as many times as you prefer. In this app, you can adjust these times to your own preference.',
            showAlert: true,
            activeLoop: false,
            // round times
            roundTimes: [],
            // audio
            soundActive: true,
            breathInSound,
            breathOutSound,
            chimesActive: false,
            chimeLow,
            chimeHigh,
            voiceActive: false,
            musicOn: true,
            selectedMusic: viking,
            selectableTracks: [
                { 
                    value: ancientAtonal,
                    text: 'Ancient Atonal',
                    
                },
                { 
                    value: autumnSky,
                    text: 'Autumn Sky',
                    
                },
                { 
                    value: japaneseWaterGarden,
                    text: 'Japanese Water Garden',
                    
                },
                { 
                    value: oldWaterMill,
                    text: 'Old Water Mill',
                    
                },
                { 
                    value: space,
                    text: 'Space',
                    
                },
                { 
                    value: tibetan,
                    text: 'Tibetan',
                },
                { 
                    value: viking,
                    text: 'Viking',
                }
            ],
            // page load
            isLoaded: false,
            // breath variables
            breathCycles: 0,
            cycleAmount: 40,
            deepBreathTime: 0,
            deepHoldAmount: 15,
            breathTime: 3500,
            pauseDuration: 2.5,
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
            activeModal: false,
            // TESTING
            musicTime: 0,
        }
    },
    computed: {
        formattedElapsedTime() {
            const date = new Date(null)
            date.setSeconds(this.elapsedTime / 1000)
            const utc = date.toUTCString()
            return utc.substr(utc.indexOf(":") + 1, 6)
        },
        currentMusic() {
            const currentTrack = new Audio(this.selectedMusic)
            return currentTrack
        },
        musicTimestamp() {
            const music = this.currentMusic
            const timestamp = music.currentTime
            console.log('time', timestamp)
            return timestamp
        },
    },
    watch: {
        selectedMusic(newValue) {
            if ( newValue ) {
                console.log('the track you selected is:', newValue )
                this.stopMusic()
            }
        },
        musicTime(newValue) {
            if ( newValue ) {
                console.log('timestamp:', this.musicTimestamp)
                // this.musicTimestamp
            }
        }
    },
    mounted() {
        this.isLoaded = true
    },
    methods: {
        // reset
        finishSet() {
            if(confirm("are you sure you want to finish the set?")) {
                this.round.number = 0
                this.round.phase = this.phases[4]
                this.activeLoop = false
                // reset stopwatch
                this.stopStopwatch()
                this.resetStopwatch()
                // stop music
                this.stopMusic()
                // reset vars
                this.timer = undefined
                this.formattedElapsedTime = undefined
                this.deepHoldAmount = 15
                this.cycleAmount = 40
                console.log("set finished", this.round.phase)
            }
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
            if ( this.round.phase === this.phases[3] && this.soundActive === true ) {
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
        // Music
        toggleMusic() {
            this.musicOn = !this.musicOn
            console.log(this.musicOn)
        },
        checkMusic() {
            // const currentMusic = new Audio(this.selectedMusic)
            if ( this.musicOn === false ) {
                this.currentMusic.pause()
                // this.stopMusic()
            }
            if ( this.musicOn === true ) {
                // this.currentMusic.currentTime = 0
                this.currentMusic.play()
            }
        },
        sampleMusic() {
            this.currentMusic.pause()
            this.playMusic()
            // setTimeout( () => {
            //     this.stopMusic()
            // }, 5000 )
        },
        playMusic() {
            if ( this.currentMusic.currentTime === 0 ) {
                this.currentMusic.play()
            }
        },
        stopMusic() {
            if ( this.currentMusic.currentTime !== 0 ) {
                this.currentMusic.pause()
                this.currentMusic.currentTime = 0
            }
        },
        // go through phases
        // breath cycle phase
        breathCyclePhase() {
            // check if not already running
                if ( this.round.phase !== this.phases[0]) {
                    // adjust round object
                    this.round.phase = this.phases[0]
                    // set amount of breaths
                    this.breathCycles = 1
                    // set round number
                    this.round.number++
                    // start music if set
                    this.checkMusic()
                    // start loop
                    this.activeLoop = true
                    this.breathingLoop()
                }
        },
        // breath hold phase
        breathHoldPhase() {
            // check if not already running
            if ( this.round.number !== 0 && this.round.phase !== this.phases[1]) {
                // check the music
                this.checkMusic()
                // end breath loop
                this.activeLoop = false
                // adjust round object
                this.round.phase = this.phases[1]
                // start stopwatch
                this.startStopwatch()
                // console
            }
        },
        // deep breath in phase
        deepBreathPhase() {
            // check if not already running
            if ( this.round.phase !== this.phases[2] ) {
                // check the music
                this.checkMusic()
                // log previous round time
                this.previousRoundTime = this.formattedElapsedTime
                // add to round times list
                this.roundTimes.push({ round: this.round.number, time: this.previousRoundTime})
                // reset stopwatch
                this.stopStopwatch()
                this.resetStopwatch()
                // adjust round object
                this.round.phase = this.phases[2]
                // set hold time
                this.deepBreathTime = this.deepHoldAmount
                // start hold
                this.deepBreathCountdown()
                // play sound
                this.playBreathIn()
                // console
                // setTimeout( () => {
                //     console.log('deep breath phase')
                // }, 200 )
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
                // check the music
                this.checkMusic()
                // adjust round object
                this.round.phase = this.phases[3]
                // audio cue
                this.playBreathOut()
                // reset stopwatch
                this.stopStopwatch()
                this.resetStopwatch()
                // start a new round
                setTimeout(() => {
                    this.breathCyclePhase()
                }, this.pauseDuration * 1000)
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
            if( this.breathCycles < this.cycleAmount + 1 && this.round.phase === this.phases[0] && this.activeLoop === true ) {
                // play sound
                this.playSounds()
                // cancel function
                setTimeout(() => {
                    // count up
                    this.breathCycles += 1
                    this.breathingLoop()
                    console.log('breathing loop', this.breathCycles);
                    // console
                    // setTimeout( () => {
                    //     console.log('breathing loop', this.breathCycles);
                    // }, 200 )
                }, this.breathTime)
            } 
        },
        // Breath hold cycle methods (stopwatch methods)
        startStopwatch() {
            this.timer = undefined
            this.timer = setInterval(() => {
                this.elapsedTime += 1000
                console.log('checking speed', this.formattedElapsedTime)
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
                // return;
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
        clearRoundTimes() {
            if(confirm("are you sure you want to clear the round times?")) {
                this.roundTimes = []
            }
        },
    },
}
</script>

<style lang="scss">

</style>