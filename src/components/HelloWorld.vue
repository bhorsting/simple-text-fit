<script>
import Moveable from "vue3-moveable";
import {ref} from "vue";
import {textFit} from "../textfit/textFit";

export default {
  components: {Moveable},
  mounted() {
    textFit(this.$refs.targetRef);
  },
  setup() {
    const resizable = true;
    const keepRatio = false;
    const throttleResize = 1;
    const renderDirections = ["nw", "n", "ne", "w", "e", "sw", "s", "se"];
    const targetRef = ref(null);
    const desiredSize = 25;
    const onResize = e => {
      e.target.style.fontSize = `${desiredSize}px`;
      e.target.style.width = `${e.width}px`;
      e.target.style.height = `${e.height}px`;
      e.target.style.transform = e.drag.transform;
      textFit(e.target);
    };
    const onDrag = e => {
      e.target.style.transform = e.transform;
    };
    const onRotate = e => {
      e.target.style.transform = e.transform;
    };
    return {
      targetRef,
      resizable,
      keepRatio,
      throttleResize,
      renderDirections,
      onResize,
      onRotate,
      onDrag
    };
  }
};
</script>
<template>
  <div class="root">
    <div class="container">
      <div
          contenteditable="true"
          class="target"
          ref="targetRef"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
      <Moveable
          :originDraggable="true"
          :draggable="true"
          :rotatable="true"
          :target="targetRef"
          :resizable="resizable"
          :keepRatio="keepRatio"
          :throttleResize="throttleResize"
          :renderDirections="renderDirections"
          @resize="onResize"
          @rotate="onRotate"
          @drag="onDrag"/>
    </div>
  </div>
</template>
<style>
.target {
  position: absolute;
  width: 100px;
  height: 100px;
  background: black;
  color: darkorange;
  overflow: hidden;
}
</style>
