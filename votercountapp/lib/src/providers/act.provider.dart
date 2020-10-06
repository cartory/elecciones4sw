import 'dart:convert';

import 'package:http/http.dart' as http;

import 'package:votercountapp/src/models/act.dart';
import 'package:votercountapp/src/models/env.dart' as env;

class ActProvider {
  static store({Act act, List<List> voters}) async {
    try {
      Map tmp = Map.fromIterable(
        voters,
        key: (cols) => cols[0],
        value: (cols) => "${cols[1]},${cols[2]}",
      );

      final res = await http.post(
        "${env.uri}/tables",
        body: {
          "acta": act.toRawJson(),
          "votos": json.encode(tmp),
        },
      );
      
      print(res);
    } catch (e) {
      print(e);
    }
  }
}
