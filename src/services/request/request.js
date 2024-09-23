import { db } from "../../../db";

class RequestService {
    createRequest(request) {
        db.requests.push(request);
    };
    updateRequest(request) {
        db.requests[request.id - 1].quantity += request.quantity
        return db.requests[request.id];
    };
    deleteRequest(id) {
        db.requests.pop(id - 1, 1);
    };
    finishRequest(id) {
        let request = db.requests[id - 1];
        request.id = (db.sold.length) + 1
        db.sold.push(...request);
        db.requests.pop(id - 1, 1);
    };
};

export default new RequestService();