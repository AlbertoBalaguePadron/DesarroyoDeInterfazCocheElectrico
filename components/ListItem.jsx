import { Pressable, Image, StyleSheet, Text, View } from 'react-native';
const ListItem = ({texto}) => {
    return (
        <View style={styles.listItem}>
                <Pressable style={{flexDirection: "row", alignItems: 'flex-start', width: "100%",}}>
                        <Text style={styles.textType}>{texto}</Text>

                </Pressable>
        
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        marginTop: 50,
        flex: 1, 
        marginTop: 10,
        marginLeft: 10,  
        backgroundColor: "#55FF00",
        borderRadius: 10, 
        flexDirection: 'row',
        textAlign: 'center', 
        alaingContent: 'center',       
        width: 300,
        height: 100,
    },

    textType:{
        marginLeft: 15,
        flex: 2,
        color: "black",     
        fontSize: 15,
        alignContent: 'center'
    },
});

export default ListItem;