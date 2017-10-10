<template>
  <footer>
    <div class="copyright">
      本服务由<s>XXX</s>提供，热线: <s>400 1234 456</s>
    </div>
  </footer>
</template>

<script>
    export default {}
</script>

<style scoped>
  footer {
  	position: fixed;
    bottom: 0.413rem;
    width: 100%;
    background: #fff;
  }
  .copyright {
    color: #adadad;
    text-align: center;
  }

  .copyright s {
    color: #2e76fc;
    text-decoration: none;
  }
</style>
