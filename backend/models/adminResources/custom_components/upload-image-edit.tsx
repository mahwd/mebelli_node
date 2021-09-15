import React, { Component, FC } from 'react'
import { BasePropertyProps } from 'admin-bro'
import {Box, Label, DropZone, DropZoneProps} from '@admin-bro/design-system'

const Edit: FC<BasePropertyProps> = (props) => {
    const {property, onChange} = props

    const handleDropZoneChange:DropZoneProps['onChange'] = (files) => {
        onChange(property.name, files[0])
        console.log(files)
    }

    return(
        <Box>
            <Label>{property.label}</Label>
            <DropZone onChange={handleDropZoneChange} />
        </Box>
    )
}

export default Edit

// import React from 'react'
// import { BasePropertyProps } from 'admin-bro'
// import { Box, Label } from '@admin-bro/design-system'

// const Edit: React.FC<BasePropertyProps> = (props) => {
//     const {property, onChange} = props

//     return(
//         <Box>{property.label}</Box>
//     )
// }

// export default Edit