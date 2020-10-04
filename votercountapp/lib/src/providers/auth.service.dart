import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:votercountapp/src/models/person.dart';

import 'package:votercountapp/src/models/user.dart';
import 'package:votercountapp/src/models/env.dart' as env;

class AuthService {
  static Future<bool> trySignIn(User user) async {
    final res = await http.post("${env.uri}/signin", body: user.toJson());
    Map data = json.decode(res.body);
    if (data["auth"]) {
      Map json = data["data"];
      String token = data["token"];
      Person p = Person.fromJson(json);
      print(p);
      print(token);
    }
    return data["auth"];
  }
}
