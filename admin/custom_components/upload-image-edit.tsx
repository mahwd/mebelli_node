import React, {FC, Fragment} from 'react'
import {BasePropertyProps} from 'admin-bro'
import {Box, Label, DropZone, DropZoneProps} from '@admin-bro/design-system'
// import styled from "styled-components";
import {getFilesPathesByKey} from "../../config/helpers";

// const BoxContainer = styled.div`
//   margin-bottom: 50px;
// `
// const Img = styled.img`
//margin: 15px;
//padding: 5px;
//border: 1px solid #cdd;
// `


const Edit: FC<BasePropertyProps> = (props) => {
    const {property, onChange, record} = props

    const handleDropZoneChange: DropZoneProps['onChange'] = (files) => {
        console.log(property.name, files)
        onChange && onChange(property.name, files)
    }

    const images = getFilesPathesByKey('images', record?.params)

    return (
        <Box className={'upload-box'} marginBottom={'xxl'}>
            <Fragment>
                <Label>{property.label}</Label>
                <DropZone onChange={handleDropZoneChange} multiple={true}/>
            </Fragment>
            {images && images.length &&
            images.map((image, index) =>
                <img
                    src={image}
                    key={index}
                    height={"100px"}
                    alt={"image"}/>
            ) || ""}
        </Box>
    )
}

export default Edit
