import publicAxios from "../../../publicAxios";
export const getBlogs = async () => {
    const response = await publicAxios.get('/blogs');
    return response.data;
}