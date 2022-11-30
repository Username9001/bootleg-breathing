exports.ids = [2];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/sounds/BreathInSoundNew.mp3");

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/sounds/BreathOutSound.mp3");

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/sounds/ChimeLow.mp3");

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/sounds/ChimeHigh.mp3");

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/sounds/music/AncientAtonal.mp3");

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/sounds/music/AutumnSky.mp3");

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/sounds/music/JapaneseWaterGarden.mp3");

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/sounds/music/OldWaterMill.mp3");

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/sounds/music/Space.mp3");

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/sounds/music/Tibetan.mp3");

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/sounds/music/Viking1.mp3");

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pulse.vue?vue&type=template&id=12a6f73a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.isLoaded ? _c('div', [_c('b-alert', {
    staticClass: "explanation-alert",
    attrs: {
      "variant": "light",
      "dismissible": ""
    },
    model: {
      value: _vm.showAlert,
      callback: function ($$v) {
        _vm.showAlert = $$v;
      },
      expression: "showAlert"
    }
  }, [_c('div', [_vm._v("\n            " + _vm._s(_vm.explanationNotice) + "\n            "), _c('hr'), _vm._v("\n            " + _vm._s(_vm.developmentNotice) + "\n            "), _c('hr'), _vm._v(" "), _c('a', {
    staticClass: "github-link",
    attrs: {
      "href": "https://github.com/Username9001/bootleg-breathing",
      "target": "_blank"
    }
  }, [_vm._v("\n                Github Page\n            ")])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"previous-round-time\">", "</div>", [_c('p', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.collapse-1",
      modifiers: {
        "collapse-1": true
      }
    }],
    staticClass: "text-center"
  }, [_vm._ssrNode("<i>" + _vm._ssrEscape("Previous round: " + _vm._s(_vm.previousRoundTime)) + "</i> <label>(Click to view all rounds)</label>")])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"round-counter\">", "</div>", [_vm._ssrNode("<h4 class=\"text-center\">" + _vm._ssrEscape("Round " + _vm._s(_vm.round.number)) + "</h4> " + (_vm.round.phase === 'breathHold' ? "<p>" + _vm._ssrEscape(_vm._s(_vm.formattedElapsedTime)) + "</p>" : "<!---->") + " "), _c('b-collapse', {
    staticClass: "text-center",
    attrs: {
      "id": "collapse-1"
    }
  }, [_c('div', {
    staticClass: "times-list"
  }, [_c('ul', [_vm._v("\n                    All Round Times:\n                    "), _vm._l(_vm.roundTimes, function (roundTime) {
    return _c('li', {
      key: roundTime.round
    }, [_vm._v("\n                        Round #" + _vm._s(roundTime.round) + " - " + _vm._s(roundTime.time) + "\n                    ")]);
  })], 2)]), _vm._v(" "), _c('b-btn', {
    on: {
      "click": function ($event) {
        return _vm.clearRoundTimes();
      }
    }
  }, [_vm._v("\n                Clear round times\n            ")])], 1)], 2), _vm._ssrNode(" "), _c('b-container', [_vm.round.number === 0 ? _c('div', {
    staticClass: "m-auto main-button",
    on: {
      "click": function ($event) {
        return _vm.breathCyclePhase();
      }
    }
  }, [_c('h1', [_vm._v("Start")])]) : _vm._e(), _vm._v(" "), _vm.round.phase === 'breathCycle' ? _c('div', {
    staticClass: "text-center pulse main-button",
    attrs: {
      "id": "pulse"
    },
    on: {
      "click": function ($event) {
        return _vm.breathHoldPhase();
      }
    }
  }, [_vm._v(_vm._s(_vm.breathCycles))]) : _vm._e(), _vm._v(" "), _vm.round.phase === 'breathHold' ? _c('div', {
    staticClass: "m-auto main-button",
    on: {
      "click": function ($event) {
        return _vm.deepBreathPhase();
      }
    }
  }, [_c('h1', [_vm._v("Breath In")])]) : _vm._e(), _vm._v(" "), _vm.round.phase === 'deepBreath' ? _c('div', {
    staticClass: "text-center m-auto inhale main-button",
    attrs: {
      "id": "timer2"
    },
    on: {
      "click": function ($event) {
        return _vm.skipDeepBreath();
      }
    }
  }, [_vm._v(_vm._s(_vm.deepBreathTime))]) : _vm._e(), _vm._v(" "), _vm.round.phase === 'smallPause' ? _c('div', {
    staticClass: "m-auto exhale main-button"
  }) : _vm._e()]), _vm._ssrNode(" <div class=\"instructions\">" + (_vm.round.phase === 'breathCycle' ? "<h5>" + _vm._ssrEscape("\n            Breathe deeply for " + _vm._s(_vm.cycleAmount) + " times \n            ") + "<small>\n                (click the circle to end the cycle)\n            </small></h5>" : "<!---->") + " " + (_vm.round.phase === 'breathHold' ? "<h5>\n            Let go and hold your breath\n            <small>\n                (click the circle when breathing in)\n            </small></h5>" : "<!---->") + " " + (_vm.round.phase === 'deepBreath' ? "<h5>" + _vm._ssrEscape("\n            Take a deep breath in and hold for " + _vm._s(_vm.deepHoldAmount) + " seconds \n            ") + "<br> <small>\n                (click circle to skip)\n            </small></h5>" : "<!---->") + " " + (_vm.round.phase === 'smallPause' ? "<h5>Get back into that rhythm</h5>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"bottom-buttons\">", "</div>", [_c('b-btn', {
    staticClass: "reset-button",
    attrs: {
      "variant": "dark"
    },
    on: {
      "click": function ($event) {
        return _vm.finishSet();
      }
    }
  }, [_vm._v("\n            End Set\n        ")]), _vm._ssrNode(" "), _c('b-btn', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.modal-1",
      modifiers: {
        "modal-1": true
      }
    }],
    staticClass: "modal-toggle",
    attrs: {
      "variant": "dark"
    }
  }, [_vm._v("Options")])], 2), _vm._ssrNode(" "), _c('b-modal', {
    attrs: {
      "id": "modal-1",
      "title": "Options",
      "header-bg-variant": "dark",
      "body-bg-variant": "dark",
      "footer-bg-variant": "dark",
      "text-variant": "dark",
      "shadow": ""
    }
  }, [_c('div', {
    staticClass: "px-3 py-2 accordion"
  }, [_c('div', {
    staticClass: "option-buttons row"
  }, [_c('b-form-group', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sound-input",
      modifiers: {
        "sound-input": true
      }
    }],
    staticClass: "my-0 text-center"
  }, [_c('h4', {
    staticClass: "border-bottom pb-4 mb-0"
  }, [_vm._v("\n                        Sounds\n                        "), _c('span', [_vm._v("▼")])])]), _vm._v(" "), _c('b-collapse', {
    staticClass: "m-auto",
    attrs: {
      "id": "sound-input",
      "visible": ""
    }
  }, [_c('b-form-group', {
    attrs: {
      "description": "Guided breath to follow"
    }
  }, [_c('b-btn', {
    staticClass: "options-button",
    on: {
      "click": function ($event) {
        return _vm.toggleSound();
      }
    }
  }, [_vm._v("\n                            Breathing sound\n                            "), _vm.soundActive ? _c('small', [_vm._v("\n                                ✓\n                            ")]) : _vm._e()])], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "description": "1 minute intervals during hold"
    }
  }, [_c('b-btn', {
    staticClass: "options-button",
    on: {
      "click": function ($event) {
        return _vm.toggleLowChime();
      }
    }
  }, [_vm._v("\n                            Chime sound 1\n                            "), _vm.lowChimeActive ? _c('small', [_vm._v("\n                                ✓\n                            ")]) : _vm._e()])], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "description": "3 breaths before hold"
    }
  }, [_c('b-btn', {
    staticClass: "options-button",
    on: {
      "click": function ($event) {
        return _vm.toggleHighChime();
      }
    }
  }, [_vm._v("\n                            Chime sound 2\n                            "), _vm.highChimeActive ? _c('small', [_vm._v("\n                                ✓\n                            ")]) : _vm._e()])], 1), _vm._v(" "), _c('b-form-group', {
    attrs: {
      "description": "Background track"
    }
  }, [_c('b-btn', {
    staticClass: "options-button",
    on: {
      "click": function ($event) {
        return _vm.toggleMusic();
      }
    }
  }, [_vm._v("\n                            Music\n                            "), _vm.musicOn ? _c('small', [_vm._v("\n                                ✓\n                            ")]) : _vm._e()])], 1), _vm._v(" "), _vm.musicOn ? _c('b-form-group', {
    staticClass: "music-select",
    attrs: {
      "description": "select a track"
    }
  }, [_c('b-form-select', {
    attrs: {
      "options": _vm.selectableTracks
    },
    model: {
      value: _vm.selectedMusic,
      callback: function ($$v) {
        _vm.selectedMusic = $$v;
      },
      expression: "selectedMusic"
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c('b-form-group', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.numeric-input",
      modifiers: {
        "numeric-input": true
      }
    }],
    staticClass: "my-0 text-center"
  }, [_c('h4', {
    staticClass: "border-bottom py-4 mb-0"
  }, [_vm._v("\n                        Cycle / Timing\n                        "), _c('span', [_vm._v("▼")])])]), _vm._v(" "), _c('b-collapse', {
    staticClass: "m-auto",
    attrs: {
      "id": "numeric-input",
      "visible": ""
    }
  }, [_c('b-form-group', [_c('label', {
    staticClass: "is-block text-center",
    attrs: {
      "for": "cycleAmount"
    }
  }, [_vm._v("Number of breaths per cycle (20-60)")]), _vm._v(" "), _c('h5', {
    staticClass: "text-center"
  }, [_vm._v("\n                            " + _vm._s(_vm.cycleAmount) + "\n                        ")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "slider-input",
    attrs: {
      "type": "range",
      "min": "20",
      "max": "60"
    },
    model: {
      value: _vm.cycleAmount,
      callback: function ($$v) {
        _vm.cycleAmount = $$v;
      },
      expression: "cycleAmount"
    }
  })], 1), _vm._v(" "), _c('b-form-group', [_c('label', {
    staticClass: "is-block text-center",
    attrs: {
      "for": "deepHoldAmount"
    }
  }, [_vm._v("Deep breath retention time (10-30s)")]), _vm._v(" "), _c('h5', {
    staticClass: "text-center"
  }, [_vm._v("\n                            " + _vm._s(_vm.deepHoldAmount) + " s\n                        ")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "slider-input",
    attrs: {
      "type": "range",
      "min": "10",
      "max": "30"
    },
    model: {
      value: _vm.deepHoldAmount,
      callback: function ($$v) {
        _vm.deepHoldAmount = $$v;
      },
      expression: "deepHoldAmount"
    }
  })], 1), _vm._v(" "), _c('b-form-group', [_c('label', {
    staticClass: "is-block text-center",
    attrs: {
      "for": "pauseDuration"
    }
  }, [_vm._v("Pause duration between sets (2.5-8s)")]), _vm._v(" "), _c('h5', {
    staticClass: "text-center"
  }, [_vm._v("\n                            " + _vm._s(_vm.pauseDuration / 1000) + " s\n                        ")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "slider-input",
    attrs: {
      "type": "range",
      "min": "2.5",
      "max": "8",
      "step": ".5"
    },
    model: {
      value: _vm.pauseDuration,
      callback: function ($$v) {
        _vm.pauseDuration = $$v;
      },
      expression: "pauseDuration"
    }
  })], 1)], 1)], 1)])])], 2) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Pulse.vue?vue&type=template&id=12a6f73a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pulse.vue?vue&type=script&lang=js&
// breathing sounds
const breathInSound = __webpack_require__(28).default;

const breathOutSound = __webpack_require__(29).default; // chimes


const chimeLow = __webpack_require__(30).default;

const chimeHigh = __webpack_require__(31).default; // music tracks


const ancientAtonal = __webpack_require__(32).default;

const autumnSky = __webpack_require__(33).default;

const japaneseWaterGarden = __webpack_require__(34).default;

const oldWaterMill = __webpack_require__(35).default;

const space = __webpack_require__(36).default;

const tibetan = __webpack_require__(37).default;

const viking = __webpack_require__(38).default;

/* harmony default export */ var Pulsevue_type_script_lang_js_ = ({
  data() {
    return {
      // explanation alert
      explanationNotice: 'Hello, you can use this app to do guided breathing exercises. It is meant as a free replacement for the Wim Hof Method app.',
      developmentNotice: 'While you can use this app as is, it is still in development. If you find any issues or bugs, please let me know.',
      largeExplanation: 'Welcome, this app is meant as a support for guided breathing. It loosely follows the Wim Hof Method, first taking around 40 deep breaths in and out. Then on the last breath out, release and hold for as long as possible. Then take a deep breath in and hold for approximately 15 seconds. After that, repeat this cycle as many times as you prefer. In this app, you can adjust these times to your own preference.',
      showAlert: true,
      activeLoop: false,
      // round times
      roundTimes: [],
      // audio
      soundActive: true,
      breathInSound,
      breathOutSound,
      lowChimeActive: true,
      highChimeActive: true,
      chimeLow,
      chimeHigh,
      voiceActive: false,
      musicOn: true,
      selectedMusic: tibetan,
      selectableTracks: [{
        value: ancientAtonal,
        text: 'Ancient Atonal'
      }, {
        value: autumnSky,
        text: 'Autumn Sky'
      }, {
        value: japaneseWaterGarden,
        text: 'Japanese Water Garden'
      }, {
        value: oldWaterMill,
        text: 'Old Water Mill'
      }, {
        value: space,
        text: 'Space'
      }, {
        value: tibetan,
        text: 'Tibetan'
      }, {
        value: viking,
        text: 'Viking'
      }],
      // page load
      isLoaded: false,
      // breath variables
      breathCycles: 0,
      cycleAmount: 40,
      deepBreathTime: 0,
      deepHoldAmount: 15,
      breathTime: 3500,
      pauseDuration: 2500,
      // stopwatch
      elapsedTime: 0,
      timer: undefined,
      // round object
      round: {
        // track round number
        number: 0,
        // track phase
        phase: undefined
      },
      // how the round is made up
      phases: [// 30-40 deep breaths
      'breathCycle', // hold breath as long as you can
      'breathHold', // deep breath in, and hold for 15s
      'deepBreath', // small pause before starting next round
      'smallPause', // end
      'end'],
      previousRoundTime: undefined,
      activeModal: false,
      // TESTING
      musicTime: 0
    };
  },

  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") + 1, 6);
    },

    currentMusic() {
      const currentTrack = new Audio(this.selectedMusic);
      currentTrack.volume = .1;
      return currentTrack;
    },

    musicTimestamp() {
      const music = this.currentMusic;
      const timestamp = music.currentTime;
      console.log('time', timestamp);
      return timestamp;
    }

  },
  watch: {
    selectedMusic(newValue) {
      if (newValue) {
        console.log('the track you selected is:', newValue);
        this.stopMusic();
      }
    },

    musicTime(newValue) {
      if (newValue) {
        console.log('timestamp:', this.musicTimestamp); // this.musicTimestamp
      }
    }

  },

  mounted() {
    this.isLoaded = true;
  },

  methods: {
    // reset
    finishSet() {
      if (confirm("are you sure you want to finish the set?")) {
        this.round.number = 0;
        this.round.phase = this.phases[4];
        this.activeLoop = false; // reset stopwatch

        this.stopStopwatch();
        this.resetStopwatch(); // stop music

        this.stopMusic(); // reset vars

        this.timer = undefined;
        this.formattedElapsedTime = undefined;
        this.deepHoldAmount = 15;
        this.cycleAmount = 40;
        console.log("set finished", this.round.phase);
      }
    },

    // sounds
    toggleSound() {
      this.soundActive = !this.soundActive;
      console.log(this.soundActive);
    },

    playSounds() {
      if (this.round.phase === this.phases[0] && this.soundActive === true) {
        const inSound = new Audio(this.breathInSound);
        const outSound = new Audio(this.breathOutSound);
        inSound.play();
        setTimeout(() => {
          if (this.round.phase === this.phases[0]) {
            outSound.play();
          }
        }, this.breathTime / 2);
      }
    },

    playBreathIn() {
      if (this.round.phase === this.phases[2] && this.soundActive === true) {
        const inSound = new Audio(this.breathInSound);
        inSound.play();
      }
    },

    playBreathOut() {
      if (this.round.phase === this.phases[3] && this.soundActive === true) {
        const outSound = new Audio(this.breathOutSound);
        outSound.play();
      }
    },

    // Chimes
    toggleLowChime() {
      this.lowChimeActive = !this.lowChimeActive;
      console.log(this.lowChimeActive);
    },

    toggleHighChime() {
      this.highChimeActive = !this.highChimeActive;
      console.log(this.highChimeActive);
    },

    playLowChime() {
      if (this.round.phase === this.phases[0] && this.lowChimeActive === true) {
        const chimeLow = new Audio(this.chimeLow);
        chimeLow.play();
        console.log('playing low chime');
      }
    },

    playHighChime() {
      const chimeHigh = new Audio(this.chimeHigh);

      if (this.round.phase === this.phases[1] && this.highChimeActive === true) {
        chimeHigh.play();
        console.log('playing high chime');
      }
    },

    // Voice
    toggleVoice() {
      this.voiceActive = !this.voiceActive;
      console.log(this.voiceActive);
    },

    // Music
    toggleMusic() {
      this.musicOn = !this.musicOn;
      console.log(this.musicOn);
    },

    checkMusic() {
      // const currentMusic = new Audio(this.selectedMusic)
      if (this.musicOn === false) {
        this.currentMusic.pause(); // this.stopMusic()
      }

      if (this.musicOn === true) {
        // this.currentMusic.currentTime = 0
        this.currentMusic.play();
      }
    },

    sampleMusic() {
      this.currentMusic.pause();
      this.playMusic(); // setTimeout( () => {
      //     this.stopMusic()
      // }, 5000 )
    },

    playMusic() {
      if (this.currentMusic.currentTime === 0) {
        this.currentMusic.play();
      }
    },

    stopMusic() {
      if (this.currentMusic.currentTime !== 0) {
        this.currentMusic.pause();
        this.currentMusic.currentTime = 0;
      }
    },

    // go through phases
    // breath cycle phase
    breathCyclePhase() {
      // check if not already running
      if (this.round.phase !== this.phases[0]) {
        // adjust round object
        this.round.phase = this.phases[0]; // set amount of breaths

        this.breathCycles = 1; // set round number

        this.round.number++; // start music if set

        this.checkMusic(); // start loop

        this.activeLoop = true;
        this.breathingLoop();
      }
    },

    // breath hold phase
    breathHoldPhase() {
      // check if not already running
      if (this.round.number !== 0 && this.round.phase !== this.phases[1]) {
        // check the music
        this.checkMusic(); // end breath loop

        this.activeLoop = false; // adjust round object

        this.round.phase = this.phases[1]; // start stopwatch

        this.startStopwatch(); // console
      }
    },

    // deep breath in phase
    deepBreathPhase() {
      // check if not already running
      if (this.round.phase !== this.phases[2]) {
        // check the music
        this.checkMusic(); // log previous round time

        this.previousRoundTime = this.formattedElapsedTime; // add to round times list

        this.roundTimes.push({
          round: this.round.number,
          time: this.previousRoundTime
        }); // reset stopwatch

        this.stopStopwatch();
        this.resetStopwatch(); // adjust round object

        this.round.phase = this.phases[2]; // set hold time

        this.deepBreathTime = this.deepHoldAmount; // start hold

        this.deepBreathCountdown(); // play sound

        this.playBreathIn(); // console
        // setTimeout( () => {
        //     console.log('deep breath phase')
        // }, 200 )
      }
    },

    skipDeepBreath() {
      console.log('skipping deep breath phase');
      this.deepBreathTime = 0;
      this.smallPausePhase();
    },

    // small pause between cycles
    smallPausePhase() {
      // check if not already running
      if (this.round.phase !== this.phases[3]) {
        // check the music
        this.checkMusic(); // adjust round object

        this.round.phase = this.phases[3]; // audio cue

        this.playBreathOut(); // reset stopwatch

        this.stopStopwatch();
        this.resetStopwatch(); // start a new round

        setTimeout(() => {
          this.breathCyclePhase();
        }, this.pauseDuration);
      }
    },

    // Breathing cycle method
    breathingLoop() {
      // max breathing count
      if (this.breathCycles === this.cycleAmount + 1 || this.activeLoop === false) {
        // go to next phase
        this.breathHoldPhase();
        return;
      } // main loop


      if (this.breathCycles < this.cycleAmount + 1 && this.round.phase === this.phases[0] && this.activeLoop === true) {
        // play sound
        this.playSounds(); // play high chimes with last 3 breaths

        if (this.breathCycles === this.cycleAmount - 2) {
          this.playLowChime();
        } // cancel function


        setTimeout(() => {
          // count up
          this.breathCycles += 1;
          this.breathingLoop();
          console.log('breathing loop', this.breathCycles); // console
          // setTimeout( () => {
          //     console.log('breathing loop', this.breathCycles);
          // }, 200 )
        }, this.breathTime);
      }
    },

    // Breath hold cycle methods (stopwatch methods)
    startStopwatch() {
      this.timer = undefined;
      this.chimeTimer = 60000;
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
        console.log('checking speed', this.formattedElapsedTime); // play chimes

        if (this.elapsedTime % this.chimeTimer === 0) {
          this.playHighChime();
        }
      }, 1000);
    },

    stopStopwatch() {
      clearInterval(this.timer);
    },

    resetStopwatch() {
      this.elapsedTime = 0;
      this.timer = undefined;
    },

    // Deep breath method
    deepBreathCountdown() {
      if (this.deepBreathTime === 0) {
        // go to next phase/round
        this.smallPausePhase(); // return;
      }

      if (this.round.phase === 'deepBreath') {
        // breath hold
        setTimeout(() => {
          // count down (change to count up)
          this.deepBreathTime -= 1;
          this.deepBreathCountdown();
        }, 1000);
      }
    },

    clearRoundTimes() {
      if (confirm("are you sure you want to clear the round times?")) {
        this.roundTimes = [];
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Pulse.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Pulsevue_type_script_lang_js_ = (Pulsevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Pulse.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Pulsevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "56da8c98"
  
)

/* harmony default export */ var Pulse = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pulse.js.map