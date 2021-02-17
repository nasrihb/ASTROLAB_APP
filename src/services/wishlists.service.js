import axios from "axios";

const base_API = "http://localhost:4000/app";

class WishlistService {


    AddWishList(name) {
        return axios.post(base_API+"/AddWish",name);
    }
    GetWishlist(){
        return axios.get(base_API+"/ListWishlist");
    }



}

export default new WishlistService;