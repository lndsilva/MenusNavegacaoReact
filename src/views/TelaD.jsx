import React from "react";
import { View, Text, Button } from "react-native";
import TextoCentral from "../componentes/TextoCentral";

export default props => {
    return (
        <View style={{flex:1}}>   
                <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                    <Button 
                        title="Abrir"
                        onPress={()=>props.navigation.openDrawer()}
                    />
                    <Button 
                        title="Fechar"
                        onPress={()=>props.navigation.closeDrawer()}
                    />
                    <Button 
                        title="Toggle"
                        onPress={()=>props.navigation.toggleDrawer()}
                    />
                </View>          
            
                <TextoCentral corFundo='#6196A6'>
                    TelaD!
               
                </TextoCentral>
                
            
        </View>
    )
}