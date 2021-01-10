<template>
  <div>
    <SignupHero id="signup" :paid="true" :paidheader="true" />
    <MultiImageSection />
    <ImageAndTextCol />
    <BenefitsCom id="benefits" />
    <TeamSectionCom />
    <TextAndButton />
    <Button link="#signup" :paid="true" />
  </div>
</template>

<script>
import ImageAndText from '../components/ImageAndText.vue';
export default {
  components: { ImageAndText },
};
</script>