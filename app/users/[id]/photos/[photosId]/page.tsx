import React from 'react'

interface Props {
    params: {
        id: number;
        photosId: number;
    }
}
const PhotoPage = ({ params: { id, photosId } }: Props) => {
    return (
        <div>Photo Details {id} {photosId}</div>
    )
}

export default PhotoPage