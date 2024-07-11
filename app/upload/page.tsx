'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
    public_id: string;
}
const UploadPage = () => {
    const [publicId, setPublicId] = useState('');
    return (
        <>
            {publicId && <CldImage src={publicId} height={270} width={180} alt='A screenshot' />}
            <CldUploadWidget uploadPreset="practice_app"
                onUpload={(result, widget) => {
                    if (result.event !== 'success') {
                        return
                    }
                    const info = result.info as CloudinaryResult;
                    setPublicId(info.public_id);

                }} options={
                    {
                        sources: ['camera', 'local'],
                        multiple: true,
                        maxFiles: 3,
                        maxFileSize: 2048
                    }}>
                {({ open }) => {
                    return (
                        <button className='btn  btn-primary' onClick={() => open()}>
                            Upload an Image
                        </button>
                    );
                }}
            </CldUploadWidget>
        </>
    )
}

export default UploadPage   