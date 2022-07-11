<template>
  <div class="relative py-6 w-full">
    <!-- <span v-show="focus" class="absolute top-0 left-0 text-sm">
      {{ placeholder }}
    </span>
    <span v-show="hover" class="block absolute top-0 right-0 text-black-100">{{
      hoverText
    }}</span> -->
    <label :for="id" class="text-primary-900 font-medium text-base">{{
      label
    }}</label>
    <div v-if="isPhone" class="flex w-full items-center">
      <label
        class="phone border border-solid px-2 py-2 rounded-lg text-primary-900"
        :for="id"
      >
        +56</label
      >
      <input
        type="tel"
        maxlength="9"
        minlength="9"
        :placeholder="placeholder"
        class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full phone-input"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        @focusin="focus = true"
        @focusout="focus = false"
        :id="id"
        :value="value"
        @keyup="handler"
        @blur="handler"
        autocomplete="off"
        required
      />
    </div>
    <input
      v-else-if="password"
      minlength="6"
      type="password"
      :placeholder="placeholder"
      class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @focusin="focus = true"
      @focusout="focus = false"
      :id="id"
      :value="value"
      :disabled="disabled"
      @blur="handler"
      @keyup="handler"
      required
    />
    <input
      v-else-if="date"
      placeholder="dd/mm/yyyy"
      type="date"
      pattern="[1-9][0-9]{2}"
      max="2022-12-31"
      :placeholder="placeholder"
      class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @focusin="focus = true"
      @focusout="focus = false"
      :id="id"
      :value="value"
      :disabled="disabled"
      @blur="handler"
      required
    />
    <input
      v-else-if="money"
      type="text"
      :placeholder="placeholder"
      class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @focusin="focus = true"
      @focusout="focus = false"
      :id="id"
      :value="valorRenta"
      :disabled="disabled"
      @blur="handlerMoney"
      required
    />
    <input
      v-else
      type="text"
      :placeholder="placeholder"
      class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @focusin="focus = true"
      @focusout="focus = false"
      :id="id"
      :value="value"
      :disabled="disabled"
      @blur="handler"
      required
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { formatNumbers } from "../../assets/helpers/validate";
const props = defineProps({
  placeholder: String,
  hoverText: String,
  id: String,
  label: String,
  isPhone: Boolean,
  value: String,
  disabled: Boolean,
  password: Boolean,
  date: Boolean,
  money: Boolean,
  valor: Number,
});

const valorRenta = ref(props.valor);
const emit = defineEmits(["update:text", "textvalue"]);
const handler = (e) => {
  emit("update:text", e.target.value);
  emit("textvalue", e.target.value);
};

const handlerMoney = (e) => {
  if (e.target.value.includes("$")) {
    let desFormat = e.target.value.replaceAll("$", "").replaceAll(".", "");
    emit("update:text", desFormat);
    e.target.value = formatNumbers(desFormat);
  } else {
    emit("update:text", e.target.value);
    e.target.value = formatNumbers(e.target.value);
  }
};

const hover = ref(false);
let focus = ref(false);

watch(props, () => {
  if (props.valor != "") {
    valorRenta.value = formatNumbers(props.valor);
  }
});
</script>

<style scoped>
.phone {
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  border-right: 1;
}
.phone-input {
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border-left: 0;
}
</style>
