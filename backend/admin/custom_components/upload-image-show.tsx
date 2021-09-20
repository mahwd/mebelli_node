import React from 'react'
import {Box} from '@admin-bro/design-system'
import {BasePropertyProps} from 'admin-bro'
import {getFilesPathesByKey} from "../../config/helpers";
import styled from "styled-components";

const Img = styled.img`
  margin: auto 15px;
  padding: 5px;
  border: 1px solid #cdd;  
`

const Show: React.FC<BasePropertyProps> = (props) => {
    const {record} = props
    const images = getFilesPathesByKey('images', record?.params)

    return (
        <Box marginBottom={'25px'}>
            {
                images.map((image, index) =>
                    <Img src={image} key={index}  height={"100px"} alt={"image"}/>
                )
            }
        </Box>
    )
}

export default Show
