<template>
  <div>
    <SignupHero id="signup" v-bind:paid="true" v-bind:paidheader="true" />
    <MultiImageSection />
    <ImageAndTextCol />
    <BenefitsCom id="benefits" />
    <TeamSectionCom />
    <TextAndButton />
    <Button link="#signup" v-bind:paid="true" />
  </div>
</template>

<script>
import ImageAndText from '../components/ImageAndText.vue';
export default {
  components: { ImageAndText },
};
</script>