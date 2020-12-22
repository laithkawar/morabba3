<template>
  <section>
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
  </section>
</template>