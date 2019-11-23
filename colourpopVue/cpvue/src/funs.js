import axios from "axios"

export default {
    getEyePalettes(callback) {
        axios.get("product/eyepalettes")
            .then((result) => {
                callback(result)
                //console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    getDetails(pid, callback) {
        //console.log(pid)
        var url = `product/details`
        var obj = {
            pid
        }
        axios.get(url, {
            params: obj
        }).then((result) => {
            //console.log(result)
            callback(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    getRegist(data, callback){

        axios.post("user/api/v1/regist", data)
            .then(result=>{
                callback(result)
            })
            .catch(err=>{
                console.log(err)
            })
    },
    getLogin(data, callback) {
        axios.post("user/api/v1/login", data)
            .then(result => {
                callback(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    getAccount(data, callback) {
        axios.get(`user/api/v1/account/`)
        .then(result=>{
            callback(result)
        })
        .catch(err=>{
            console.log(err)
        })
    }

}