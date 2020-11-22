export { default as Button } from '../../src/components/Button.vue'
export { default as Footer } from '../../src/components/Footer.vue'
export { default as FullWidthImage } from '../../src/components/FullWidthImage.vue'
export { default as Head } from '../../src/components/Head.vue'
export { default as ImageAndText } from '../../src/components/ImageAndText.vue'
export { default as MultiImageSection } from '../../src/components/MultiImageSection.vue'
export { default as MyComponent } from '../../src/components/MyComponent.vue'
export { default as NavBar } from '../../src/components/NavBar.vue'
export { default as SignupHero } from '../../src/components/SignupHero.vue'
export { default as TeamSection } from '../../src/components/TeamSection.vue'
export { default as TextSection } from '../../src/components/TextSection.vue'

export const LazyButton = import('../../src/components/Button.vue' /* webpackChunkName: "components/Button" */).then(c => c.default || c)
export const LazyFooter = import('../../src/components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyFullWidthImage = import('../../src/components/FullWidthImage.vue' /* webpackChunkName: "components/FullWidthImage" */).then(c => c.default || c)
export const LazyHead = import('../../src/components/Head.vue' /* webpackChunkName: "components/Head" */).then(c => c.default || c)
export const LazyImageAndText = import('../../src/components/ImageAndText.vue' /* webpackChunkName: "components/ImageAndText" */).then(c => c.default || c)
export const LazyMultiImageSection = import('../../src/components/MultiImageSection.vue' /* webpackChunkName: "components/MultiImageSection" */).then(c => c.default || c)
export const LazyMyComponent = import('../../src/components/MyComponent.vue' /* webpackChunkName: "components/MyComponent" */).then(c => c.default || c)
export const LazyNavBar = import('../../src/components/NavBar.vue' /* webpackChunkName: "components/NavBar" */).then(c => c.default || c)
export const LazySignupHero = import('../../src/components/SignupHero.vue' /* webpackChunkName: "components/SignupHero" */).then(c => c.default || c)
export const LazyTeamSection = import('../../src/components/TeamSection.vue' /* webpackChunkName: "components/TeamSection" */).then(c => c.default || c)
export const LazyTextSection = import('../../src/components/TextSection.vue' /* webpackChunkName: "components/TextSection" */).then(c => c.default || c)
