import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:votercountapp/src/views/auth/login.page.dart';
import 'package:votercountapp/src/views/auth/register.page.dart';
import 'package:votercountapp/src/views/home/home.page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown
    ]);
    
    return MaterialApp(
      title: 'Elecciones4SW',
      debugShowCheckedModeBanner: false,
      initialRoute: LoginPage.route,
      theme: ThemeData.light(),
      routes: {
        HomePage.route: (_) => HomePage(),
        LoginPage.route: (_) => LoginPage(),
        RegisterPage.route: (_) => RegisterPage(),
      },
    );
  }
}
