import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { db } from "../../../db";
import RequestService from '@/services/request/request';

export const useRequestStore = defineStore('request', () => {
    const requestsStore = ref([]);
    const currentIndex = ref(0);
    const editMode = reactive({
        id: null
    });
    const currentQuantity = ref(0);

    const createRequest = (request) => {
        RequestService.createRequest(request);
        // requestsStore.value.push(RequestService.createRequest(request));
    };
    const updateRequest = (request, action) => {
        const update = RequestService.updateRequest({...request}, action);
        requestsStore.value[currentIndex.value] = update;
    };
    const deleteRequest = (idDb, idLocal) => {
        console.log(idDb, idLocal);
        RequestService.deleteRequest(idDb, idLocal);
        requestsStore.value.splice(idDb, 1);
    };
    const finishRequest = (id) => {
        RequestService.finishRequest(id);
        requestsStore.value.splice(currentIndex.value - 1, 1);
    };
    const populateRequest = () => {
        if (requestsStore.value.length == 0) {
            console.log('Populate funcionando!');
            requestsStore.value = RequestService.populateRequest();
        } else {
            console.log('Populate chamado');
        }
        return requestsStore.value;
    };
    const findIndexRequest = (request, action) => {
        currentIndex.value = db.requests.findIndex((item) => item.name == request.name);

        if (currentIndex.value == -1) {
            createRequest({id: db.requests.length + 1, name: request.name, quantity: request.quantity});
        } 
        else if (currentIndex.value != -1 && action == 'sum') {
            console.log('SUM');
            updateRequest({id: currentIndex.value + 1, name: request.name, quantity: request.quantity}, action);
        } 
        else if (currentIndex.value != -1 && action == 'sub') {
            if (request.quantity == 0) {
                deleteRequest(currentIndex.value, db.requests[currentIndex.value].id);
            } else {
                updateRequest({id: currentIndex.value + 1, name: request.name, quantity: request.quantity}, action)
            }
        }
        else if (currentIndex.value != -1 && action == 'edit') {
            updateRequest({id: currentIndex.value + 1, name: request.name, quantity: request.quantity}, action);
        }
        else if (currentIndex.value != -1 && action == 'del') {
            deleteRequest(currentIndex.value, request.id);
        }
        else if (currentIndex.value != -1 && action == 'fin') {
            finishRequest(currentIndex.value + 1);
        }
    };
    // const unMountedRequest = () => {
    //     requestsStore.value = [];
    //     db.requests = [];
    // }

    return { requestsStore, editMode, currentQuantity, createRequest, updateRequest, deleteRequest, finishRequest, populateRequest, findIndexRequest };
});