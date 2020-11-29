<template>
  <div>
    <SignupHero />
    <FullWidthImage />
    <TextSection
      header="إجلب رؤيتك إلى الحياة"
      subheader="مصنوع للإستعمال باللغة العربيه وللإستخدام السلس بدون معرفة سابقة
      بالتصميم الغرافيكي. صمم شعار جذاب و محترف لشركتك بمساعدة تطبيق مربع الآن!"
    />
    <MultiImageSection />
    <TextSection
      id="how-it-works"
      header="خطوات تصميم شعارك المثالي."
      subheader="يمنحك مربع كل ما تحتاجه لإطلاق علامتك التجارية لتبدو رائعة من اليوم
            الأول. أفضل جزء؟ يقوم الذكاء الاصطناعي بعمل معظم التصميم الجرافيكي،
            و يوفر لك التحكم الإبداعي الكامل. لا تضيع وقتك على مصمم باهظ الثمن!"
    />
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-2 mx-auto">
        <div class="flex flex-wrap">
          <ImageAndText
            header="١.أدخل اسم الشركه و مجال العمل"
            subheader="زودنا بالمعلومات الأساسية التي نحتاجها لبدء تصميم شعارك المثالي."
            image="gif1.gif"
          />
          <ImageAndText
            header="٢.اختر لوح ألوان لعلامتك التجارية"
            subheader="اختر أو اصنع لوحة الألوان الخاصة بك التي ستحدد الحالة المزاجية لعلامتك التجارية."
            image="gif2.gif"
          />
          <ImageAndText
            header="٣.اختر شعارك المفضل"
            subheader="هنا يمكنك اختيار الشعار المثالي لعملك من قائمة لا نهاية لها من الشعارات."
            image="gif3.gif"
          />
          <ImageAndText
            header="٤.قم بتعديل شعارك كما تريد"
            subheader="هنا يمكنك تخصيص كل شيء من الخط إلى اللون إلى حجم العناصر لإنشاء الشعار المثالي."
            image="gif4.gif"
          />
        </div>
      </div>
    </section>
    <Button />
    <TeamSection />
  </div>
</template>




<script>
import ImageAndText from '../components/ImageAndText.vue';
export default {
  components: { ImageAndText },
};
</script>
