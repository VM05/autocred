<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center modal"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              v-if="props.modalWithError"
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Formulario Incompleto
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Porfavor verifica que hayas ingresado todos los campos de
                  manera correcta.
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-secondary-900 px-4 py-2 text-sm font-medium text-white hover:bg-secondary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-800 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Ok lo verificaré!
                </button>
              </div>
            </DialogPanel>
            <DialogPanel
              v-else
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Formulario Enviado
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Dentro de poco uno de nuestros copilotos se contactará contigo
                  para guiarte en este proceso.
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-secondary-900 px-4 py-2 text-sm font-medium text-white hover:bg-secondary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-800 focus-visible:ring-offset-2"
                  @click="reload"
                >
                  Ok gracias!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, onUpdated } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const emit = defineEmits(["closeModal"]);

const props = defineProps({
  isOpen: Boolean,
  modalWithError: Boolean,
});

const isOpenmodal = ref(props.isOpen);

function closeModal() {
  isOpenmodal.value = false;
  emit("closeModal", isOpenmodal.value);
}

function reload() {
  location.reload();
}

onUpdated(() => {
  isOpenmodal.value = props.isOpen;
});
</script>

<style>
.modal {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
