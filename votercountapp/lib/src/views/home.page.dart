import 'package:flutter/material.dart';
import 'package:votercountapp/src/views/form.dart';

class HomePage extends StatefulWidget {
  static String routeName = "HomePage";

  HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int selectedRadio = 0;
  int selectedRadioTile = 0;
  @override
  Widget build(BuildContext context) {
    // final size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: _appBar,
      body: ActForm(),
      bottomNavigationBar: _bottomNavigationBar,
    );
  }
}

final _bottomNavigationBar = BottomNavigationBar(
  type: BottomNavigationBarType.fixed,
  backgroundColor: Color.fromRGBO(157, 101, 201, 1),
  selectedItemColor: Colors.white,
  unselectedItemColor: Colors.white.withOpacity(.6),
  selectedFontSize: 14,
  unselectedFontSize: 14,
  onTap: (value) => print("onTap"),
  items: [
    BottomNavigationBarItem(
      title: Text('Salir'),
      icon: Icon(Icons.exit_to_app),
    ),
    BottomNavigationBarItem(
      title: Text('Imágenes'),
      icon: Icon(Icons.dashboard),
    ),
  ],
);

final _appBar = AppBar(
  elevation: 50,
  centerTitle: true,
  toolbarHeight: 100,
  brightness: Brightness.dark,
  excludeHeaderSemantics: false,
  title: Text("Elecciones Bolivia 2020"),
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.only(
      bottomRight: Radius.circular(50),
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
    icon: Icon(Icons.ac_unit),
    onPressed: () => print("button"),
  ),
);
