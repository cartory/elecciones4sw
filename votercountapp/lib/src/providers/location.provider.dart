import 'dart:convert';

import 'package:http/http.dart' as http;

import 'package:votercountapp/src/models/env.dart' as env;
import 'package:votercountapp/src/models/location.dart';

class LocationProvider {
  all({int id}) async {
    List<Location> tmp = List<Location>();
    try {
      final res = await http.get("${env.uri}/locations/$id");
      Map data = json.decode(res.body);
      print(data);
    } catch (e) {
      print(e);
    }
    return tmp;
  }
}
