import instance from "./http";

export default {
    async dataRequest() {
        const res = await instance({
            url: "js/data.json",
            method: 'get',
        })
        return res.data;
    }
}