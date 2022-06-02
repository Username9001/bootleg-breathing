<template>
  <div>
    <b-button v-b-toggle.sidebar-variant>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <div class="option-buttons row">
            <b-btn class="" @click="toggleSound()">
                Breathing sound
                <div v-if="soundActive">
                    &#10003;
                </div>
            </b-btn>
            <b-btn class="" @click="toggleChimes()">
                Chime sounds
                <div v-if="chimesActive">
                    &#10003;
                </div>
            </b-btn>
            <b-btn class="" @click="finishSet()">
                Reset
            </b-btn>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {

}
</script>