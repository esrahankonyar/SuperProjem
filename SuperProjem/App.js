import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";

export default class HomeActivity extends Component {

  constructor(props) {
      super(props)
      this.array=[],
      this.state = {
        TextInputValue: '',
		arrayHolder: []
      }
  }

 componentDidMount() {

 this.setState({ arrayHolder: [...this.array] })

 }
 ChangeTextFunction =()=> {
    const { TextInputValue }  = this.state ;
	this.array.push({title : TextInputValue });
      this.setState({

        TextValue: TextInputValue,
		arrayHolder: [...this.array]

      })

  }
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
         Barkodunuzu taratınız:
        </Text>

        <TextInput
          style={{marginLeft:'2%',height: 45,width: "95%",borderColor: "gray",borderWidth: 2, borderRadius:10}}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Veri Giriniz"
          //set the value in state.
          onChangeText={TextInputValue => this.setState({TextInputValue})}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />

        <View style={[{ width: "93%", marginTop: 15, marginLeft:12 }]}>
          <Button style={{borderRadius:30}}

          onPress={this.ChangeTextFunction}
          title="KAYDET"
          color="#00B0FF"
          />
        </View>

        <View style={{margin:'2%'}}>
           <Text style={{marginBottom: 20, fontSize: 35, textAlign:'center'}}> {this.state.TextValue} </Text>
        </View>
		<View>
		<FlatList
          ref = "flatList"
          onContentSizeChange={()=> this.refs.flatList.scrollToEnd()}

          data={this.state.arrayHolder}

          width='100%'
          height='50%'
          extraData={this.state.arrayHolder}

          keyExtractor={(index) => index.toString()}

          ItemSeparatorComponent={this.FlatListItemSeparator}

          renderItem={({ item }) => <Text style={styles.item} > {item.title} </Text>}
        />
		</View>

      </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 18,
    textAlign: "left",
    margin: 10,
    fontWeight: "bold"
  },
  baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
	item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});