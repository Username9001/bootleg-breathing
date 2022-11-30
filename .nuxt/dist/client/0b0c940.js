(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{311:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/sounds/BreathInSoundNew.mp3"},312:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/sounds/BreathOutSound.mp3"},313:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/sounds/ChimeLow.mp3"},314:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/sounds/ChimeHigh.mp3"},315:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/sounds/music/AncientAtonal.mp3"},316:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/sounds/music/AutumnSky.mp3"},317:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/sounds/music/JapaneseWaterGarden.mp3"},318:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/sounds/music/OldWaterMill.mp3"},319:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/sounds/music/Space.mp3"},320:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/sounds/music/Tibetan.mp3"},321:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/sounds/music/Viking1.mp3"},322:function(t,e,n){"use strict";n.r(e);n(38);var o=n(311).default,r=n(312).default,c=n(313).default,h=n(314).default,l=n(315).default,d=n(316).default,m=n(317).default,v=n(318).default,f=n(319).default,_=n(320).default,C=n(321).default,y={data:function(){return{explanationNotice:"Hello, you can use this app to do guided breathing exercises. It is meant as a free replacement for the Wim Hof Method app.",developmentNotice:"While you can use this app as is, it is still in development. If you find any issues or bugs, please let me know.",largeExplanation:"Welcome, this app is meant as a support for guided breathing. It loosely follows the Wim Hof Method, first taking around 40 deep breaths in and out. Then on the last breath out, release and hold for as long as possible. Then take a deep breath in and hold for approximately 15 seconds. After that, repeat this cycle as many times as you prefer. In this app, you can adjust these times to your own preference.",showAlert:!0,activeLoop:!1,roundTimes:[],soundActive:!0,breathInSound:o,breathOutSound:r,lowChimeActive:!0,highChimeActive:!0,chimeLow:c,chimeHigh:h,voiceActive:!1,musicOn:!0,selectedMusic:_,selectableTracks:[{value:l,text:"Ancient Atonal"},{value:d,text:"Autumn Sky"},{value:m,text:"Japanese Water Garden"},{value:v,text:"Old Water Mill"},{value:f,text:"Space"},{value:_,text:"Tibetan"},{value:C,text:"Viking"}],isLoaded:!1,breathCycles:0,cycleAmount:40,deepBreathTime:0,deepHoldAmount:15,breathTime:3500,pauseDuration:2500,elapsedTime:0,timer:void 0,round:{number:0,phase:void 0},phases:["breathCycle","breathHold","deepBreath","smallPause","end"],previousRoundTime:void 0,activeModal:!1,musicTime:0}},computed:{formattedElapsedTime:function(){var t=new Date(null);t.setSeconds(this.elapsedTime/1e3);var e=t.toUTCString();return e.substr(e.indexOf(":")+1,6)},currentMusic:function(){var t=new Audio(this.selectedMusic);return t.volume=.1,t},musicTimestamp:function(){var t=this.currentMusic.currentTime;return console.log("time",t),t}},watch:{selectedMusic:function(t){t&&(console.log("the track you selected is:",t),this.stopMusic())},musicTime:function(t){t&&console.log("timestamp:",this.musicTimestamp)}},mounted:function(){this.isLoaded=!0},methods:{finishSet:function(){confirm("are you sure you want to finish the set?")&&(this.round.number=0,this.round.phase=this.phases[4],this.activeLoop=!1,this.stopStopwatch(),this.resetStopwatch(),this.stopMusic(),this.timer=void 0,this.formattedElapsedTime=void 0,this.deepHoldAmount=15,this.cycleAmount=40,console.log("set finished",this.round.phase))},toggleSound:function(){this.soundActive=!this.soundActive,console.log(this.soundActive)},playSounds:function(){var t=this;if(this.round.phase===this.phases[0]&&!0===this.soundActive){var e=new Audio(this.breathInSound),n=new Audio(this.breathOutSound);e.play(),setTimeout((function(){t.round.phase===t.phases[0]&&n.play()}),this.breathTime/2)}},playBreathIn:function(){this.round.phase===this.phases[2]&&!0===this.soundActive&&new Audio(this.breathInSound).play()},playBreathOut:function(){this.round.phase===this.phases[3]&&!0===this.soundActive&&new Audio(this.breathOutSound).play()},toggleLowChime:function(){this.lowChimeActive=!this.lowChimeActive,console.log(this.lowChimeActive)},toggleHighChime:function(){this.highChimeActive=!this.highChimeActive,console.log(this.highChimeActive)},playLowChime:function(){this.round.phase===this.phases[0]&&!0===this.lowChimeActive&&(new Audio(this.chimeLow).play(),console.log("playing low chime"))},playHighChime:function(){var t=new Audio(this.chimeHigh);this.round.phase===this.phases[1]&&!0===this.highChimeActive&&(t.play(),console.log("playing high chime"))},toggleVoice:function(){this.voiceActive=!this.voiceActive,console.log(this.voiceActive)},toggleMusic:function(){this.musicOn=!this.musicOn,console.log(this.musicOn)},checkMusic:function(){!1===this.musicOn&&this.currentMusic.pause(),!0===this.musicOn&&this.currentMusic.play()},sampleMusic:function(){this.currentMusic.pause(),this.playMusic()},playMusic:function(){0===this.currentMusic.currentTime&&this.currentMusic.play()},stopMusic:function(){0!==this.currentMusic.currentTime&&(this.currentMusic.pause(),this.currentMusic.currentTime=0)},breathCyclePhase:function(){this.round.phase!==this.phases[0]&&(this.round.phase=this.phases[0],this.breathCycles=1,this.round.number++,this.checkMusic(),this.activeLoop=!0,this.breathingLoop())},breathHoldPhase:function(){0!==this.round.number&&this.round.phase!==this.phases[1]&&(this.checkMusic(),this.activeLoop=!1,this.round.phase=this.phases[1],this.startStopwatch())},deepBreathPhase:function(){this.round.phase!==this.phases[2]&&(this.checkMusic(),this.previousRoundTime=this.formattedElapsedTime,this.roundTimes.push({round:this.round.number,time:this.previousRoundTime}),this.stopStopwatch(),this.resetStopwatch(),this.round.phase=this.phases[2],this.deepBreathTime=this.deepHoldAmount,this.deepBreathCountdown(),this.playBreathIn())},skipDeepBreath:function(){console.log("skipping deep breath phase"),this.deepBreathTime=0,this.smallPausePhase()},smallPausePhase:function(){var t=this;this.round.phase!==this.phases[3]&&(this.checkMusic(),this.round.phase=this.phases[3],this.playBreathOut(),this.stopStopwatch(),this.resetStopwatch(),setTimeout((function(){t.breathCyclePhase()}),this.pauseDuration))},breathingLoop:function(){var t=this;this.breathCycles!==this.cycleAmount+1&&!1!==this.activeLoop?this.breathCycles<this.cycleAmount+1&&this.round.phase===this.phases[0]&&!0===this.activeLoop&&(this.playSounds(),this.breathCycles===this.cycleAmount-2&&this.playLowChime(),setTimeout((function(){t.breathCycles+=1,t.breathingLoop(),console.log("breathing loop",t.breathCycles)}),this.breathTime)):this.breathHoldPhase()},startStopwatch:function(){var t=this;this.timer=void 0,this.chimeTimer=1e4,this.timer=setInterval((function(){t.elapsedTime+=1e3,console.log("checking speed",t.formattedElapsedTime),t.elapsedTime%t.chimeTimer==0&&t.playHighChime()}),1e3)},stopStopwatch:function(){clearInterval(this.timer)},resetStopwatch:function(){this.elapsedTime=0,this.timer=void 0},deepBreathCountdown:function(){var t=this;0===this.deepBreathTime&&this.smallPausePhase(),"deepBreath"===this.round.phase&&setTimeout((function(){t.deepBreathTime-=1,t.deepBreathCountdown()}),1e3)},clearRoundTimes:function(){confirm("are you sure you want to clear the round times?")&&(this.roundTimes=[])}}},A=y,w=n(68),component=Object(w.a)(A,(function(){var t=this,e=t._self._c;return t.isLoaded?e("div",[e("b-alert",{staticClass:"explanation-alert",attrs:{variant:"light",dismissible:""},model:{value:t.showAlert,callback:function(e){t.showAlert=e},expression:"showAlert"}},[e("div",[t._v("\n            "+t._s(t.explanationNotice)+"\n            "),e("hr"),t._v("\n            "+t._s(t.developmentNotice)+"\n            "),e("hr"),t._v(" "),e("a",{staticClass:"github-link",attrs:{href:"https://github.com/Username9001/bootleg-breathing",target:"_blank"}},[t._v("\n                Github Page\n            ")])])]),t._v(" "),e("div",{staticClass:"previous-round-time"},[e("p",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticClass:"text-center"},[e("i",[t._v("Previous round: "+t._s(t.previousRoundTime))]),t._v(" "),e("label",[t._v("(Click to view all rounds)")])])]),t._v(" "),e("div",{staticClass:"round-counter"},[e("h4",{staticClass:"text-center"},[t._v("Round "+t._s(t.round.number))]),t._v(" "),"breathHold"===t.round.phase?e("p",[t._v(t._s(t.formattedElapsedTime))]):t._e(),t._v(" "),e("b-collapse",{staticClass:"text-center",attrs:{id:"collapse-1"}},[e("div",{staticClass:"times-list"},[e("ul",[t._v("\n                    All Round Times:\n                    "),t._l(t.roundTimes,(function(n){return e("li",{key:n.round},[t._v("\n                        Round #"+t._s(n.round)+" - "+t._s(n.time)+"\n                    ")])}))],2)]),t._v(" "),e("b-btn",{on:{click:function(e){return t.clearRoundTimes()}}},[t._v("\n                Clear round times\n            ")])],1)],1),t._v(" "),e("b-container",[0===t.round.number?e("div",{staticClass:"m-auto main-button",on:{click:function(e){return t.breathCyclePhase()}}},[e("h1",[t._v("Start")])]):t._e(),t._v(" "),"breathCycle"===t.round.phase?e("div",{staticClass:"text-center pulse main-button",attrs:{id:"pulse"},on:{click:function(e){return t.breathHoldPhase()}}},[t._v(t._s(t.breathCycles))]):t._e(),t._v(" "),"breathHold"===t.round.phase?e("div",{staticClass:"m-auto main-button",on:{click:function(e){return t.deepBreathPhase()}}},[e("h1",[t._v("Breath In")])]):t._e(),t._v(" "),"deepBreath"===t.round.phase?e("div",{staticClass:"text-center m-auto inhale main-button",attrs:{id:"timer2"},on:{click:function(e){return t.skipDeepBreath()}}},[t._v(t._s(t.deepBreathTime))]):t._e(),t._v(" "),"smallPause"===t.round.phase?e("div",{staticClass:"m-auto exhale main-button"}):t._e()]),t._v(" "),e("div",{staticClass:"instructions"},["breathCycle"===t.round.phase?e("h5",[t._v("\n            Breathe deeply for "+t._s(t.cycleAmount)+" times \n            "),e("small",[t._v("\n                (click the circle to end the cycle)\n            ")])]):t._e(),t._v(" "),"breathHold"===t.round.phase?e("h5",[t._v("\n            Let go and hold your breath\n            "),e("small",[t._v("\n                (click the circle when breathing in)\n            ")])]):t._e(),t._v(" "),"deepBreath"===t.round.phase?e("h5",[t._v("\n            Take a deep breath in and hold for "+t._s(t.deepHoldAmount)+" seconds \n            "),e("br"),t._v(" "),e("small",[t._v("\n                (click circle to skip)\n            ")])]):t._e(),t._v(" "),"smallPause"===t.round.phase?e("h5",[t._v("Get back into that rhythm")]):t._e()]),t._v(" "),e("div",{staticClass:"bottom-buttons"},[e("b-btn",{staticClass:"reset-button",attrs:{variant:"dark"},on:{click:function(e){return t.finishSet()}}},[t._v("\n            End Set\n        ")]),t._v(" "),e("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"modal-toggle",attrs:{variant:"dark"}},[t._v("Options")])],1),t._v(" "),e("b-modal",{attrs:{id:"modal-1",title:"Options","header-bg-variant":"dark","body-bg-variant":"dark","footer-bg-variant":"dark","text-variant":"dark",shadow:""}},[e("div",{staticClass:"px-3 py-2 accordion"},[e("div",{staticClass:"option-buttons row"},[e("b-form-group",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sound-input",modifiers:{"sound-input":!0}}],staticClass:"my-0 text-center"},[e("h4",{staticClass:"border-bottom pb-4 mb-0"},[t._v("\n                        Sounds\n                        "),e("span",[t._v("▼")])])]),t._v(" "),e("b-collapse",{staticClass:"m-auto",attrs:{id:"sound-input",visible:""}},[e("b-form-group",{attrs:{description:"Guided breath to follow"}},[e("b-btn",{staticClass:"options-button",on:{click:function(e){return t.toggleSound()}}},[t._v("\n                            Breathing sound\n                            "),t.soundActive?e("small",[t._v("\n                                ✓\n                            ")]):t._e()])],1),t._v(" "),e("b-form-group",{attrs:{description:"1 minute intervals during hold"}},[e("b-btn",{staticClass:"options-button",on:{click:function(e){return t.toggleLowChime()}}},[t._v("\n                            Chime sound 1\n                            "),t.lowChimeActive?e("small",[t._v("\n                                ✓\n                            ")]):t._e()])],1),t._v(" "),e("b-form-group",{attrs:{description:"3 breaths before hold"}},[e("b-btn",{staticClass:"options-button",on:{click:function(e){return t.toggleHighChime()}}},[t._v("\n                            Chime sound 2\n                            "),t.highChimeActive?e("small",[t._v("\n                                ✓\n                            ")]):t._e()])],1),t._v(" "),e("b-form-group",{attrs:{description:"Background track"}},[e("b-btn",{staticClass:"options-button",on:{click:function(e){return t.toggleMusic()}}},[t._v("\n                            Music\n                            "),t.musicOn?e("small",[t._v("\n                                ✓\n                            ")]):t._e()])],1),t._v(" "),t.musicOn?e("b-form-group",{staticClass:"music-select",attrs:{description:"select a track"}},[e("b-form-select",{attrs:{options:t.selectableTracks},model:{value:t.selectedMusic,callback:function(e){t.selectedMusic=e},expression:"selectedMusic"}})],1):t._e()],1),t._v(" "),e("b-form-group",{directives:[{name:"b-toggle",rawName:"v-b-toggle.numeric-input",modifiers:{"numeric-input":!0}}],staticClass:"my-0 text-center"},[e("h4",{staticClass:"border-bottom py-4 mb-0"},[t._v("\n                        Cycle / Timing\n                        "),e("span",[t._v("▼")])])]),t._v(" "),e("b-collapse",{staticClass:"m-auto",attrs:{id:"numeric-input",visible:""}},[e("b-form-group",[e("label",{staticClass:"is-block text-center",attrs:{for:"cycleAmount"}},[t._v("Number of breaths per cycle (20-60)")]),t._v(" "),e("h5",{staticClass:"text-center"},[t._v("\n                            "+t._s(t.cycleAmount)+"\n                        ")]),t._v(" "),e("b-form-input",{staticClass:"slider-input",attrs:{type:"range",min:"20",max:"60"},model:{value:t.cycleAmount,callback:function(e){t.cycleAmount=e},expression:"cycleAmount"}})],1),t._v(" "),e("b-form-group",[e("label",{staticClass:"is-block text-center",attrs:{for:"deepHoldAmount"}},[t._v("Deep breath retention time (10-30s)")]),t._v(" "),e("h5",{staticClass:"text-center"},[t._v("\n                            "+t._s(t.deepHoldAmount)+" s\n                        ")]),t._v(" "),e("b-form-input",{staticClass:"slider-input",attrs:{type:"range",min:"10",max:"30"},model:{value:t.deepHoldAmount,callback:function(e){t.deepHoldAmount=e},expression:"deepHoldAmount"}})],1),t._v(" "),e("b-form-group",[e("label",{staticClass:"is-block text-center",attrs:{for:"pauseDuration"}},[t._v("Pause duration between sets (2.5-8s)")]),t._v(" "),e("h5",{staticClass:"text-center"},[t._v("\n                            "+t._s(t.pauseDuration/1e3)+" s\n                        ")]),t._v(" "),e("b-form-input",{staticClass:"slider-input",attrs:{type:"range",min:"2.5",max:"8",step:".5"},model:{value:t.pauseDuration,callback:function(e){t.pauseDuration=e},expression:"pauseDuration"}})],1)],1)],1)])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);