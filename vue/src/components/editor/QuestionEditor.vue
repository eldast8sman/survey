<template>
    <div>
        <!--Question Index-->
        <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold">
                {{ index + 1 }}. {{ model.question }}
            </h3>

            <div class="flex items-center">
                <!--Add new Question-->
                <button
                    type="button"
                    @click="addQuestion()"
                    class="
                        flex
                        items-center
                        text-xs
                        py-1
                        px-3
                        mr-2
                        rounded-sm
                        text-white
                        bg-gray-600
                        hover:bg-gray-700
                    "
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-4 w-4 -mt-1 inline-block" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                    >
                        <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2"
                        d="M12 4v16m8-8H4" 
                        />
                    </svg>
                    Add
                </button>
                <!--/Add new Question-->

                <!--Delete Question-->
                <button
                    type="button"
                    @click="deleteQuestion()"
                    class="
                        flex
                        items-center
                        text-xs
                        py-1
                        px-3
                        rounded-sm
                        border border-transparent
                        text-red-500
                        hover:border-red-600
                    "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                    Delete
                </button>
                <!--/Delete Question-->
            </div>
        </div>
        <!--Question Index-->
        <div class="grid gap-3 grid-cols-12">
            <!--Question-->
            <div class="mt-3 col-span-9">
                <label
                    :for="'question_text_' + model.data"
                    class="block text-sm font-medium text-gray-700"
                >
                    Question Text      
                </label>
                <input 
                    type="text"
                    :name="'question_text_' + model.data"
                    v-model="model.question"
                    @change="dataChange"
                    :id="'question_text_' + model.data"
                    class="
                        mt-1
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                    "
                />    
            </div>
            <!--/Question-->

            <!--Question Type-->
            <div class="mt-3 col-span-3">
                <label
                    for="question_type"
                    class="block text-sm font-medium text-gray-700"
                >
                    Select Question Type
                </label>
                <select
                    id="question_type"
                    name="question_type"
                    v-model="model.type"
                    @change="typeChange"
                    class="
                        mt-1
                        block
                        w-full
                        py-2
                        px-3
                        border border-gray-300
                        bg-white
                        rounded-md
                        shadow-sm
                        focus:outline-none
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        sm:text-sm
                    "
                >
                    <option v-for="type in questionTypes" :key="type" :value="type">
                        {{ upperCaseFirst(type) }}
                    </option>
                </select>
            </div>
            <!--/Question Type-->
        </div>

        <!--Question Description-->
        <div class="mt-3 col-span-9">
            <label
                :for="'question_text_' + model.id"
                class="block text-sm font-medium text-gray-700"
            >
                Description
            </label>
            <textarea
                :name="'question_text_' + model.id"
                v-model="model.description"
                @change="dataChange"
                :id="'question_text_' + model.id"
                class="
                    mt-1
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-300
                    rounded-md
                "
            />
        </div>
        <!--/ Question Description-->
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    question: Object,
    index: Number,
});

const emit = defineEmits(["change", "addQuestion", "deleteQuestion"]);

//Re-create the whole question data to avoid unintentional reference change
const model = ref(JSON.parse(JSON.stringify(props.question)));

</script>

<style>

</style>