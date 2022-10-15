import {makeAutoObservable} from "mobx";

class StoreUser {
   userInfo = null;
   token = null;

    constructor() {
        makeAutoObservable(this);
    }

    setUserInfo(userData) {
        this.user = userData;
    }

    setToken(token) {
        this.token = token;
    }
};

const storeUser= new StoreUser();

export default storeUser;
export { StoreUser };