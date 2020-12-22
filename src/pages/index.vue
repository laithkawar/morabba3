<template>
  <div>
    <SignupHero id="signup" />
    <MultiImageSection />
    <ImageAndTextCol />
    <BenefitsCom id="benefits" />
    <TeamSectionCom />
    <TextAndButton />
    <Button />
  </div>
</template>

<script>
import ImageAndText from '../components/ImageAndText.vue';
export default {
  components: { ImageAndText },
};
</script>
