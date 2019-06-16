<template>
  <v-carousel hide-delimiters touch height="200">
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/images/20170923_135144.jpg")
        },
        {
          src:
            "https://lh3.googleusercontent.com/uryHUsqMRx1GkyQN_wbMv0T57WVhEHGcvsIk4jU59z_uUCGS3_KrSBVRhPU3FoD6QUhfCEdFpiEc0eggMJ4gz6lOiJBoQ-NvQH9-LwNvWBGW4vdwW45wlDVbbtW3v-PP1REWCle5-_GC6hzUlwF0o_hdJoksEyTHwpIqHA6JFN0UJ9C3dn0FUce5U_1OyufNwxuJutkCBvhKaNVICRfgzNbYLEdgiTS7UIPx_17OMA6Jvaq-qe95Z1gwlGSMdGEiW_E3Oeml6lxICYzmvzYd8swu3RQamFLqo_2fEgLIQeFx4roZnSXqN9PgiGWXUAY7POQvrOHAkgiCATuzIrFTO1tApKmKS1xFrTjjzV1SjaUd9kvnt5sqUzSv94SjNmusugzQwoVVZEnGWtm9bs_jD-V6pnoSpfjO0ZaRMnyU7WmkVxxXH7TFflN2DZuZVvhJe99qXD-bx_qGUUzFmhTTESlAe7UhOD9SVMuMferSNIREW7TVrRzLIjVkX90AWkzi4qOHg8wiuaM77_gic6CZSJZrqO0yYH9HJK0mmk4q44LcBLHVM9Hs6szfM5eg26E1aFv5RgSD9Imt69QA_P9GtHkApXC5NsJQEkAbdc4xzBlPov-UccqZQ8l4kg-685cvaQef4EE1dNdyed6zPRRZ4grlldbel67NclrSaRRBQZ3wYwV3Xs4654mFo7wwUIPVV6vkq2VGl-FdwDZwsB0Q2LAJ=w1858-h423-no"
        },
        {
          src: require("@/assets/images/20190607_161626.jpg")
        }
      ]
    };
  }
};
</script>