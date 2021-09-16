import React, {FC} from 'react'
import {BasePropertyProps} from 'admin-bro'
import {Box, Label, DropZone, DropZoneProps} from '@admin-bro/design-system'
import styled from "styled-components";

const BoxContainer = styled.div`
  margin-bottom: 50px;
`

const Edit: FC<BasePropertyProps> = (props) => {
    const {property, onChange} = props

    const handleDropZoneChange: DropZoneProps['onChange'] = (files) => {
        // @ts-ignore
        onChange(property.name, files[0])
        console.log(files)
    }

    return (
        <BoxContainer>
            <Box className={'upload-box'}>
                <Label>{property.label}</Label>
                <DropZone onChange={handleDropZoneChange}/>
            </Box>
        </BoxContainer>
    )
}

export default Edit
