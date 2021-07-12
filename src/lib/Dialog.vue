<template>
  <template v-if="visible">
    <div class="kanlan-dialog-overlay" @click="onClickOverlay"></div>
    <div class="kanlan-dialog-wrapper">
      <div class="kanlan-dialog">
        <header>标题
          <span @click="close" class="kanlan-dialog-close">&times</span>
        </header>
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
        </main>
        <footer>
          <Button level="main" @click="ok">OK</Button>
          <Button @click="cancel">Cancel</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    ok:{
      type:Function
    },
    cancel:{
      type:Function
    }
  },
  components: {
    Button
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };
    const onClickOverlay = () => {
      if(props.closeOnClickOverlay) {
         close()
      }
    };
    const ok = ()=>{
      if(props.ok && props.ok() !== false){
        close()
      }
    }
    const cancel = ()=>{
      close()
    }
    return {close, onClickOverlay,ok,cancel};
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.kanlan-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    font-size: 1.5em;
    color: #707070;

    &:hover {
      cursor: pointer;
      color: black;
    }
  }
}
</style>