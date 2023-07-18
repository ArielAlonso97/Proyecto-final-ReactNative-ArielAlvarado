import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/styles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    
}

export default function Button({ title, onPress }: ButtonProps) {
   
    return (
        <TouchableOpacity 
            style={
                 
                Styles.btnDark 
                
            } 
            onPress={onPress}>
            <Text 
               style={
                   Styles.smallTextLight
                   
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
