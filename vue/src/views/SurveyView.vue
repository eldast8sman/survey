<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                    {{ model.id ? model.title : "Create a Survey" }}
                </h1>
            </div>
        </template>
        <form @submit.prevent="saveSurvey">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                  <!-- Image -->
                    <img 
                        v-if="model.image"
                        :src="model.image"
                        :alt="model.title"
                        class="w-64 h-48 object-cover"
                    />
                    <span
                        v-else
                        class="
                            flex
                            items-center
                            justify-center
                            h-12
                            w-12
                            rounded-full
                            overflow-hiddeb
                            bg-gray-100
                        "
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="h-[80%] w-[80%] text-gray-300" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path 
                                fill-rule="evenodd" 
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
                                clip-rule="evenodd" 
                            />
                        </svg>
                    </span>
                    <button
                        type="button"
                        class="
                            display-relative
                            overflow-hidden
                            ml-5
                            bg-white
                            py-2
                            px-3
                            border border-gray-300
                            rounded-md
                            shadow-sm
                            text-sm
                            leading-4
                            font-medium
                            text-gray-700
                            hover:bg-gray-50
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-indigo-500
                        "
                    >
                        Change
                    </button>
                  <!--/ Image --> 
            </div>
        </form>
    </PageComponent>
</template>

<script setup>
import store from "../store";
import { ref } from "vue";
import {useRoute} from "vue-router";

import PageComponent from "../components/PageComponent.vue";

const route = useRoute();

// Create empty Survey
let model = ref({
    title: "",
    status: false,
    description: null,
    image: null,
    expire_date: null,
    questions: []
});

if(route.params.id){
    model.value = store.state.surveys.find(
        (s) => s.id === parseInt(route.params.id)
    )
}
</script>

<style></style>