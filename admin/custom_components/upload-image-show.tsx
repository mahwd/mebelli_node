import React from 'react'
import {Box} from '@admin-bro/design-system'
import {BasePropertyProps} from 'admin-bro'
import {getFilesPathesByKey} from "../../config/helpers";


const Show: React.FC<BasePropertyProps> = (props) => {
    const {record} = props
    const images = getFilesPathesByKey('images', record?.params)

    return (
        <Box marginBottom={'25px'}>
            {
                images.map((image, index) =>
                    <img style={{margin: 'auto 15px', padding: 5, border: '1px solid #cdd'}} src={image} key={index}  height={"100px"} alt={"image"}/>
                )
            }
        </Box>
    )
}

export default Show
