import useAxios from "./axios";

const apiSettings = {

createListing: async (data) => {
    let form = new FormData();
    if (data.image)
        form.append("image", data.image, data.image.name);
    form.append("name", data.name);
    form.append("description", data.description);
    form.append("price", data.price);
    form.append("quantity", data.quantity);

const postProduct = await useAxios
        .post(`product/`, form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((res) => {
            return res;
        }).catch((error) => {
            return error.response;
        });

    if (postProduct.status === 201) {
        alert("Produto postado com êxito")
    }
    if (postProduct.status === 401) {
        alert("Somente o Adm pode postar produtos")
    }
    return postProduct;
    },
};

export default apiSettings;