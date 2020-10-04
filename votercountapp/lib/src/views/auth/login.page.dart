import 'package:flutter/material.dart';

import 'package:votercountapp/src/models/user.dart';
import 'package:votercountapp/src/views/home/home.page.dart';
import 'package:votercountapp/src/providers/auth.service.dart';

class LoginPage extends StatefulWidget {
  static String route = "login";
  LoginPage({Key key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  User _user = User();
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    _onSavedFormField(String textField, String value) {
      switch (textField) {
        case 'document':
          _user.document = int.tryParse(value);
          break;
        case 'password':
          _user.password = int.tryParse(value);
          break;
        default:
          return;
      }
    }

    _submitButtonForm() async {
      if (!_formKey.currentState.validate()) return;
      _formKey.currentState.save();
      if (await AuthService.trySignIn(_user)) {
        Navigator.pushReplacementNamed(context, HomePage.route);
      }
    }

    final size = MediaQuery.of(context).size;
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: Container(
        child: Container(
          alignment: Alignment.center,
          child: Form(
            key: _formKey,
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Container(
                    padding: EdgeInsets.symmetric(vertical: 20),
                    child: Text(
                      "INICIO SESIÓN",
                      style: TextStyle(
                        fontSize: 25,
                        fontWeight: FontWeight.w500,
                        fontStyle: FontStyle.normal,
                        fontFamily: "serif",
                      ),
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.symmetric(vertical: 10),
                    child: Image.asset('assets/urn.png'),
                  ),
                  Container(
                    child: TextFormField(
                      maxLength: 8,
                      textAlign: TextAlign.start,
                      onSaved: (val) => _onSavedFormField('document', val),
                      decoration: InputDecoration(
                        hintText: "Documento",
                        prefixIcon: Icon(Icons.security),
                      ),
                      keyboardType: TextInputType.numberWithOptions(
                        decimal: false,
                        signed: false,
                      ),
                      validator: (value) {
                        return num.tryParse(value) == null
                            ? 'Número Requerido'
                            : null;
                      },
                    ),
                    padding: EdgeInsets.symmetric(vertical: 10, horizontal: 20),
                  ),
                  Container(
                    child: TextFormField(
                      obscureText: true,
                      keyboardType: TextInputType.numberWithOptions(
                        decimal: false,
                        signed: false,
                      ),
                      onSaved: (val) => _onSavedFormField('password', val),
                      textAlign: TextAlign.start,
                      decoration: InputDecoration(
                        hintText: "Contraseña",
                        prefixIcon: Icon(Icons.lock_outline),
                      ),
                      validator: (value) {
                        return value.isEmpty ? 'Campo Requerido' : null;
                      },
                    ),
                    padding: EdgeInsets.symmetric(vertical: 10, horizontal: 20),
                  ),
                  Container(
                    padding: EdgeInsets.symmetric(vertical: 25),
                    child: RaisedButton.icon(
                      onPressed: () => _submitButtonForm(),
                      icon: Icon(Icons.send),
                      label: Text(
                        "Continuar",
                        style: TextStyle(
                          fontSize: 17,
                          fontWeight: FontWeight.bold,
                          fontFamily: "serif",
                        ),
                      ),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(15),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(.4),
            borderRadius: BorderRadius.only(
              bottomRight: Radius.circular(40),
              topLeft: Radius.circular(40),
            ),
            border: Border.all(
              color: Colors.white,
              style: BorderStyle.solid,
            ),
          ),
        ),
        // gradient
        padding: EdgeInsets.symmetric(
          horizontal: size.width * .1,
          vertical: size.height * .19,
        ),
        alignment: Alignment.center,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topRight,
            end: Alignment.bottomLeft,
            stops: [.2, .5, .7],
            colors: [Colors.red, Colors.yellow, Colors.green],
          ),
        ),
      ),
      floatingActionButton: OutlineButton.icon(
        onPressed: () {},
        icon: Icon(Icons.new_releases),
        label: Text(
          "NUEVO",
          style: TextStyle(
            fontFamily: "serif",
            fontSize: 20,
          ),
        ),
      ),
    );
  }
}
