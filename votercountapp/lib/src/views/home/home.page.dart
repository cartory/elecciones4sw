import 'package:flutter/material.dart';

// import 'package:votercountapp/src/models/party.dart';
import 'package:votercountapp/src/models/person.dart';
import 'package:votercountapp/src/views/home/form.dart';

class HomePage extends StatefulWidget {
  static String route = "home";
  static String token;
  static Person person;

  HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int selectedRadio = 0;
  int selectedRadioTile = 0;

  @override
  Widget build(BuildContext context) {
    final _appBar = AppBar(
      elevation: 50,
      centerTitle: true,
      toolbarHeight: 80,
      brightness: Brightness.dark,
      excludeHeaderSemantics: false,
      title: Text("Delegado - ${HomePage.person.party.acronym.split(",")[0]}"),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.only(
          bottomRight: Radius.circular(30),
        ),
        side: BorderSide(
          color: Colors.blue,
          style: BorderStyle.solid,
          width: .1,
        ),
      ),
      flexibleSpace: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.only(
            bottomRight: Radius.circular(50),
          ),
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Colors.purple,
              Colors.blue,
            ],
          ),
        ),
      ),
      leading: IconButton(
        icon: Icon(Icons.supervisor_account),
        onPressed: () => print("button"),
      ),
    );

    return Scaffold(
      appBar: _appBar,
      body: ActForm(),
      // bottomNavigationBar: _bottomNavigationBar,
    );
  }
}
