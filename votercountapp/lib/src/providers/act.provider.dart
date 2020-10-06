import 'package:http/http.dart' as http;

import 'package:votercountapp/src/models/act.dart';
import 'package:votercountapp/src/models/env.dart' as env;

class ActProvider {
  static store({Act act, List<List> voters}) async {
    print(act);
    print(voters);
  }
}
