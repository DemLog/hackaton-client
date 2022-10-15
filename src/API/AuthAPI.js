import {APIBase} from "./APIBase";


class AuthAPI extends APIBase{
    async authClient(login, password) {
        return await super.authUser({login, password, "app_id": 1});
    }

    async authDispatcher(login, password) {
        return await super.authUser({login, password, "app_id": 2});
    }
}

const authAPI = new AuthAPI();

export default authAPI;