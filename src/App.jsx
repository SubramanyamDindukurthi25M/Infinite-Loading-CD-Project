import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import axios from "axios"
import swal from "sweetalert"
import { Heading } from "./Components/Heading"
import { Loader } from "./Components/Loader"
import { UnsplashImages } from "./Components/UnsplashImages"

export const App = () => {
    const [dataImages, setData] = useState([])
    const baseUrl = 'https://api.unsplash.com'
    const baseUrlTwo = `${baseUrl}/photos/random?client_id=${import.meta.env.VITE_UNSPLASH_DEVELOPERS_API}&count=10`

    useEffect(() => fetchImages(), [])

    const fetchImages = () => {
        axios
            .get(baseUrlTwo)
            .then((response) => {
                setData([...dataImages, ...response.data])
            })
            .catch((error) => swal(error.message))
    }

    return (
        <>
            <Heading/>
            <InfiniteScroll
                dataLength={dataImages.length}
                next={fetchImages}
                hasMore={true}
                loader={<Loader/>}
            >
                <UnsplashImages
                    data={dataImages}
                />
            </InfiniteScroll>
        </>
    )
}