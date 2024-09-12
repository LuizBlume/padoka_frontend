import { db } from "../../../db";

class RequestService {
    finishRequest(id) {
        let request = db.requests[id - 1];
        request.id = (db.sold.length) + 1
        db.sold.push(...request);
        db.requests.pop(id - 1, 1);
    }
    updateRequest(request) {
        db.requests[request.id - 1] = request;
    }
    deleteRequest(id) {
        db.requests.pop(id - 1, 1);
    }
}