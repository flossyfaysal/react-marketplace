import { HStack, List, ListItem, Text } from "@chakra-ui/react"
import { BsAlarm, BsApple } from "react-icons/bs";


function CategoryList() {
    return (
        <List>
            <ListItem>
                <HStack>
                    <BsAlarm />
                    <Text>Vehichle</Text>
                </HStack>
            </ListItem>
            <ListItem>
                <HStack>
                    <BsApple />
                    <Text>Electronics</Text>
                </HStack>
            </ListItem>
        </List>
    )
}

export default CategoryList