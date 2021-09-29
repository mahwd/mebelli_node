import React from 'react'
import { Box} from '@admin-bro/design-system'
import { BasePropertyProps } from 'admin-bro'

const List: React.FC<BasePropertyProps> = (props) => {
    const { record } = props

    const srcImg = record?.params.imageUrl
    console.log(record?.params)
    return (
        <Box>
            {srcImg ? (
                <img src={srcImg} width="100px" alt="image"/>
            ) : 'no images'}
        </Box>
    )
}

export default List
