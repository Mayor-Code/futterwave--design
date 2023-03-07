<script>
export default {
  methods: {
    drop(e) {
      let target = e.currentTarget;
      target.querySelector(".drop-list").classList.toggle("hidden");
      target.querySelector(".drop-list").classList.toggle("flex");
      target.querySelector(".drop-icon").classList.toggle("bx-chevron-down");
      target.querySelector(".drop-icon").classList.toggle("bx-chevron-up");
    },
  },
};
</script>
<template>
  <div class="pt-20 pb-4 px-4 text-[#1d1d1d]">
    <div class="max-w-[1100px] mx-auto">
      <div class="desktop:flex desktop:justify-between">
        <div
          @click="drop"
          class="border-b border-gray-200 py-4 desktop:border-none desktop:w-52"
        >
          <span class="flex justify-between text-lg font-medium items-center">
            <span>Products</span
            ><span class="text-2xl desktop:hidden"
              ><i class="drop-icon bx bx-chevron-down"></i
            ></span>
          </span>
          <span class="drop-list desktop:flex flex-col gap-6 mt-4 hidden">
            <a href="#">Collect Payments</a>
            <a href="#">Send Money</a>
            <a href="#">Store</a>
            <a href="#">Payment Links</a>
            <a href="#">Invoices</a>
            <a href="#">Capital</a>
            <a href="#">Grow</a>
            <a href="#">Card Issuing</a>
            <a href="#">FaaS</a>
          </span>
        </div>
        <div
          @click="drop"
          class="border-b border-gray-200 py-4 desktop:border-none desktop:w-52"
        >
          <span class="flex justify-between text-lg font-semibold items-center">
            <span>Resources</span
            ><span class="text-2xl desktop:hidden"
              ><i class="drop-icon bx bx-chevron-down"></i
            ></span>
          </span>
          <span class="drop-list desktop:flex flex-col gap-6 mt-4 hidden">
            <a href="#">Pricing</a>
            <a href="#">Support</a>
            <a href="#">Blog</a>
            <a href="#">Integrations</a>
            <a href="#">Why you got charged</a>
            <a href="#">Cookie settings</a>
          </span>
        </div>
        <div
          @click="drop"
          class="border-b border-gray-200 py-4 desktop:border-none desktop:w-52"
        >
          <span class="flex justify-between text-lg font-semibold items-center">
            <span>Developers</span
            ><span class="text-2xl desktop:hidden"
              ><i class="drop-icon bx bx-chevron-down"></i
            ></span>
          </span>
          <span class="drop-list desktop:flex flex-col gap-6 mt-4 hidden">
            <a href="#">API Documentation</a>
            <a href="#">API Reference</a>
            <a href="#">API Status</a>
          </span>
        </div>
        <div
          @click="drop"
          class="border-b border-gray-200 py-4 desktop:border-none desktop:w-52"
        >
          <span class="flex justify-between text-lg font-semibold items-center">
            <span>Flutterwave</span
            ><span class="text-2xl desktop:hidden"
              ><i class="drop-icon bx bx-chevron-down"></i
            ></span>
          </span>
          <span class="drop-list desktop:flex flex-col gap-6 mt-4 hidden">
            <a href="#">Customers</a>
            <a href="#">Careers</a>
            <a href="#">Press kit</a>
            <a href="#">Covid 19</a>
            <a href="#">Barter</a>
            <a href="#">Disha</a>
            <a href="#">Send</a>
          </span>
        </div>
        <div
          @click="drop"
          class="border-b border-gray-200 py-4 desktop:border-none desktop:w-56"
        >
          <span class="flex justify-between text-lg font-semibold items-center">
            <span>Contact</span
            ><span class="text-2xl desktop:hidden"
              ><i class="drop-icon bx bx-chevron-down"></i
            ></span>
          </span>
          <span class="drop-list desktop:flex flex-col gap-6 mt-4 hidden">
            <a href="#">hi@flutterwavego.com</a>
            <a href="#">+234 1-8889595</a>
            <a href="#">0700-FLUTTERWAVE</a>
            <a href="#">Twitter Support</a>
            <span
              >Call lines are open 08:00 to 17:00 WAT, Mondays - Fridays</span
            >
          </span>
        </div>
      </div>
      <div>
        <div
          class="desktop:border-t border-gray-200 desktop:py-4 desktop:flex desktop:flex-row-reverse justify-between"
        >
          <div
            @click="drop"
            class="border-b border-gray-200 py-4 desktop:border-none"
          >
            <span
              class="flex justify-between text-lg font-semibold items-center desktop:hidden"
            >
              <span>Connect</span
              ><span class="text-2xl"
                ><i class="drop-icon bx bx-chevron-down"></i
              ></span>
            </span>
            <span
              class="drop-list mt-4 desktop:mt-0 flex-col desktop:flex-row desktop:flex gap-6 hidden"
            >
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">LinkedIn</a>
              <a href="#">Capital</a>
            </span>
          </div>
          <div class="border-b border-gray-200 py-6 desktop:border-none">
            <span class="flex items-center">
              <span
                ><img
                  class="rounded-[50%] w-5 h-5 object-cover mr-2"
                  src="https://flutterwave.com/images/flags/ng.svg"
              /></span>
              <span>Nigeria</span>
              <span class="text-xl -mb-1"
                ><i class="bx bx-chevron-down"></i
              ></span>
            </span>
          </div>
        </div>
        <div
          class="desktop:border-t border-gray-200 desktop:py-4 flex flex-col-reverse desktop:flex-row flex-wrap justify-between gap-2"
        >
          <div class="py-8 shrink-0 order-1 desktop:py-0">
            <p>&copy; Flutterwave</p>
          </div>
          <div
            @click="drop"
            class="border-b border-gray-200 py-4 desktop:border-none order-2 desktop:py-0"
          >
            <span
              class="flex justify-between text-lg font-semibold items-center desktop:hidden shrink-0"
            >
              <span>Legal</span
              ><span class="text-2xl"
                ><i class="drop-icon bx bx-chevron-down"></i
              ></span>
            </span>
            <span
              class="drop-list flex-col mt-4 desktop:mt-0 desktop:flex-row desktop:flex gap-6 hidden"
            >
              <a href="#" class="min-w-fit">Privacy policy</a>
              <a href="#" class="min-w-fit">Terms of use</a>
              <a href="#" class="min-w-fit">Cookie policy</a>
              <a href="#" class="min-w-fit">Merchant service agreement</a>
              <a href="#" class="min-w-fit">Payment protection promise</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
a:hover {
  color: rgb(74, 222, 128);
}
</style>
