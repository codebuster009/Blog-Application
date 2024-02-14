import { useEffect } from "react";
import { fetchBlogs } from "../../redux/features/blogs/blogsSlice";
import { useDispatch, useSelector } from "react-redux"

const PostCards = () => {
  const dispatch = useDispatch();
  const {blogs , isLoading , isError , error} = useSelector(state => state.blogs)
  //dispatch actions to show blogs
useEffect(()=> {
  dispatch(fetchBlogs())
}, [dispatch])
console.log(blogs)
  return (
    <div className="w-full lg:w-2/3">
    <a className="block rounded w-full lg:flex mb-10"/>
    </div>
  )
}

export default PostCards