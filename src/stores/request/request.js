import { defineStore } from 'pinia';
import { db } from '../../../db';
import RequestService from '@/services/request/request';

export const useRequestStore = defineStore('request', () => {
    const createRequest = (request) => {
        const indexVerify = db.requests.findIndex(item => item.name === request.name);

        if (indexVerify != -1) {
            RequestService.updateRequest(request);
        } else {
            RequestService.createRequest(request);
        }
    };

    const updateRequest = (request) => {
        const update = RequestService.updateRequest(request);
        return update;
    };

    const deleteRequest = (id) => {
        RequestService.deleteRequest(id);
    };
    
    return { createRequest, updateRequest, deleteRequest };
});