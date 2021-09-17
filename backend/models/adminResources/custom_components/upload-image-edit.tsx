import React, {FC, Fragment} from 'react'
import {BasePropertyProps} from 'admin-bro'
import {Box, Label, DropZone, DropZoneProps} from '@admin-bro/design-system'
import styled from "styled-components";

const BoxContainer = styled.div`
  margin-bottom: 50px;
`

const Edit: FC<BasePropertyProps> = (props) => {
    const {property, onChange, record} = props

    const handleDropZoneChange: DropZoneProps['onChange'] = (files) => {
        // @ts-ignore
        onChange(property.name, files[0])
        console.log(property.name, files)
    }

    return (
        <BoxContainer>
            <Box className={'upload-box'}>
                <Fragment>
                    <Label>{property.label}</Label>
                    <DropZone onChange={handleDropZoneChange}/>
                </Fragment>
                {record?.params?.  && <img width="100px" alt="image" src={record.params.thumbnailUrl}/>}
            </Box>
        </BoxContainer>
    )
}

export default Edit
