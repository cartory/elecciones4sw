import 'dart:convert';

class User {
  User({
    this.document,
    this.password,
  });

  int document;
  dynamic password;

  factory User.fromRawJson(String str) => User.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      document: json["document"],
      password: json["password"],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      "document": document.toString(),
      "password": password.toString(),
    };
  }
}
