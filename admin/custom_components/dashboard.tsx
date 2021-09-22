import React, {useEffect, useState} from 'react'
import {ApiClient} from 'admin-bro'
import {Box, Button} from '@admin-bro/design-system'

const api = new ApiClient()

const Dashboard = () => {
    const [data, setData] = useState<{ some: string }>({some: "someData"})

    useEffect(() => {
        api.getDashboard().then((response) => {
            setData(response.data)
            debugger
        })
    }, [])

    return (
        <Box variant="grey" display="flex">
            <Box variant="white" marginBottom='15px'>
                <Button variant={"primary"} href={"/admin/resources/Category/actions/new"}>Add new category</Button>
            </Box>
            <Box variant="white">
                <Button variant={"primary"} href={"/admin/resources/Product/actions/new"}>Add new product</Button>
            </Box>
        </Box>
    )
}

export default Dashboard
