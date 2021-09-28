import React from 'react'
import {Label, Box, DropZone, DropZoneProps, DropZoneItem} from '@admin-bro/design-system'
import {BasePropertyProps} from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
    const {property, onChange, record} = props

    const handleDropZoneChange: DropZoneProps['onChange'] = (files) => {
        onChange && onChange(property.name, files[0])
    }

    const image = record?.params.image
    const photoToUpload = record?.params[property.name]

    return (
        <Box marginBottom="xxl">
            <Label>{property.label}</Label>
            <DropZone onChange={handleDropZoneChange}/>
            {image && !photoToUpload && (
                <DropZoneItem src={image}/>
            )}
        </Box>
    )
}

export default Edit
