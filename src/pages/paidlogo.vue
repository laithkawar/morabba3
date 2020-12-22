<template>
  <div>
    <SignupHero id="signup" paid="true" />
    <MultiImageSection />
    <ImageAndTextCol />
    <BenefitsCom id="benefits" />
    <TeamSectionCom />
    <TextAndButton />
    <Button paid="true" />
  </div>
</template>

<script>
import ImageAndText from '../components/ImageAndText.vue';
export default {
  components: { ImageAndText },
};
</script>