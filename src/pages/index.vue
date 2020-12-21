<template>
  <div>
    <SignupHero id="signup" />

    <!-- <TextSection
      header="إجلب رؤيتك إلى الحياة"
      subheader="مصنوع للإستعمال باللغة العربيه وللإستخدام السلس بدون معرفة سابقة
      بالتصميم الغرافيكي. صمم شعار جذاب و محترف لشركتك بمساعدة تطبيق مربع الآن!"
    /> -->
    <MultiImageSection />
    <TextSection
      class="-mt-6"
      id="how-it-works"
      header="خطوات تصميم شعارك المثالي."
    />
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-2 mx-auto">
        <div class="flex flex-wrap">
          <ImageAndText
            header="١. أدخل اسم الشركه و مجال العمل"
            subheader="زودنا بالمعلومات الأساسية التي نحتاجها لبدء تصميم شعارك المثالي."
            image="gif1.gif"
          />
          <ImageAndText
            header="٢. اختر لوحة ألوان لشعارك"
            subheader="اختر لوحة الألوان الخاصة بك التي ستحدد إنطباع علامتك التجارية على زبائنك."
            image="gif2.gif"
          />
          <ImageAndText
            header="٣. اختر شعارك المفضل"
            subheader="هنا يمكنك اختيار تصميم شعارك من قائمة لا نهاية لها من الشعارات."
            image="gif3.gif"
          />
          <ImageAndText
            header="٤. قم بتعديل شعارك كما تريد"
            subheader="هنا تستطيع تخصيص كل شيء من الخط إلى اللون إلى حجم العناصر لإنشاء لوجو جاهز ومثالي."
            image="gif4.gif"
          />
        </div>
      </div>
    </section>
    <Benefits id="benefits" />
    <TextSection
      class="-mt-2"
      id="meet-the-team"
      header="تعرف على فريقنا"
      subheader="يتكون فريقنا من مصممين ومطورين ومبرمجين موهوبين للغاية. اكتشف من هم!"
    />
    <div
      class="max-w-screen-xl px-4 py-8 mx-auto mb-20 text-center sm:px-6 md:py-12 lg:px-8"
    >
      <div class="space-y-12">
        <ul
          class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
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
    <TextSection
      class=""
      subheader="يمنحك برنامج تصميم شعار مربع كل ما تحتاجه لإطلاق علامة تجارية مذهلة من اليوم
            الأول. أفضل جزء أن الذكاء الاصطناعي سيقوم بمعظم التصميم الجرافيكي،
            و يوفر لك التحكم الإبداعي الكامل!"
    />
    <Button href="/#signup" />
  </div>
</template>



<script>
import ImageAndText from '../components/ImageAndText.vue';
export default {
  components: { ImageAndText },
};
</script>
