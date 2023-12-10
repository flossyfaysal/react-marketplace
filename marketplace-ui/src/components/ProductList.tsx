import { Card, Heading, Image, Text } from '@chakra-ui/react'

function ItemList() {
    return (
        <Card>
            <Image
                width={"300px"}
                src='https://scontent.fzyl2-2.fna.fbcdn.net/v/t45.5328-4/405755619_7296444643720223_4570008484701714623_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeF9PfXaRUAf8EcLSFQRBcxS6qzo2lAG58XqrOjaUAbnxU4n2rZCb0JmFQeYWS7qz6Wuwkk58IGbdy7bGQ0CZaO2&_nc_ohc=U3jmHS5xztAAX9he3tE&_nc_ht=scontent.fzyl2-2.fna&oh=00_AfBBR__Mk4tXheaf_N_5S9Z-WCh9l9c_sUMEFDQOo8cjTg&oe=657B06A7' />
            <Text>1000</Text>
            <Heading>Iphone Charger</Heading>
            <Text>Dhaka</Text>
        </Card>
    )
}

export default ItemList