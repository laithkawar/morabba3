<template>
  <div>
    <SignupHero />
    <Benefits />
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
    <TextSection
      header="تعارف على الفريق"
      subheader="يتكون فريقنا من مصممين ومطورين ومبرمجين موهوبين للغاية. اكتشف من هم
            أدناه!"
    />
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto text-center sm:px-6 lg:px-8 lg:py-24"
    >
      <div class="space-y-12">
        <ul
          class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
        >
          <TeamSection
            image="laith.jpg"
            name="ليث قعوار"
            position="مؤسس و مصمم رئيسي"
          />
          <TeamSection
            image="tamer1.jpg"
            name="تامر إسماعيل"
            position="مبرمج أول"
          />
          <TeamSection
            image="marwa.png"
            name="مروى تميمي"
            position="رئيسة قسم التسويق"
          />
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
import ImageAndText from '../components/ImageAndText.vue';
export default {
  components: { ImageAndText },
};
</script>
