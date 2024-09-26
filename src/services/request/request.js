import { db } from "../../../db";

class RequestService {
    createRequest(request) {
        localStorage.setItem(`request${request.id}`, JSON.stringify(request));
        db.requests.push(request);
        console.log(db.requests);
        return db.requests[db.requests.length - 1];
    };
    updateRequest(request, action) {
        if (action == 'sum') {
            db.requests[request.id - 1].quantity += request.quantity;
        } else if (action == 'sub') {
            db.requests[request.id - 1].quantity -= request.quantity;
        } 
        else {
            db.requests[request.id - 1] = request;
        }
        localStorage.setItem(`request${request.id}`, JSON.stringify(db.requests[request.id - 1]));
        return db.requests[request.id - 1];
    };
    deleteRequest(idDb, idLocal) {
        console.log(idDb, idLocal, db.requests);
        db.requests.slice(idDb, 1);
        console.log(db.requests);
        localStorage.removeItem(`request${idLocal}`);
        console.log('Passou do localStorage', idLocal);
        // this.correctIndexLocalStorage();
    };
    finishRequest(id) {
        let request = db.requests[id - 1];
        request.id = (db.sold.length) + 1;
        db.sold.push(...request);
        this.deleteRequest(id);
    };
    populateRequest() {
        let nRequest = 1;
        let request = undefined;

        console.log('Antes while');
        while (request !== null) {
            request = JSON.parse(localStorage.getItem(`request${nRequest}`));

            if (request !== null) {
                db.requests.push({id: request.id, name: request.name, quantity: request.quantity});
            }
            nRequest++;
        }
        console.log('Depois while');
        console.log(db.requests);
        return db.requests;
    }
    // correctIndexLocalStorage() {
    //     db.requests.forEach((request, index) => {
    //         console.log('ForEach');
    //         localStorage.removeItem(`request${request.id}`);
    //         localStorage.setItem(`request${index + 1}`, JSON.stringify(db.requests[request.id - 1]));
    //         request.id = index + 1;
    //         console.log(request.id);
    //     });
    // }
}

export default new RequestService();