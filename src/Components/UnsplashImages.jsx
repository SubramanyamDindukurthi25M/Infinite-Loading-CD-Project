export const UnsplashImages = ({data}) => {
    return (
        <>
            <div className="row m-2">
                {
                    data.map((image) => {
                        const{urls,id,tags} = image
                        return (
                            <div className="col-lg-3 col-sm-6 my-2 mx-auto" key={id}>
                                <img 
                                    src={urls.thumb} 
                                    alt={tags} 
                                    className="img-fluid bg-secondary img-thumbnail h-100"
                                />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}