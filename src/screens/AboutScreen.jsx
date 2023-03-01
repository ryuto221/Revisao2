import { Text } from "react-native";
import { View } from "react-native-paper";
import styles from "../utils/styles";


export default function AboutScreen(){
    return(
        <View
            style={styles.container}
        >
            <Text>Olá sou a About Screen</Text>
        </View>
    )
}