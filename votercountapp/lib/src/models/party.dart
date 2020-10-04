import 'dart:convert';

class Party {
  Party({
    this.id,
    this.name,
    this.icon,
    this.acronym,
    this.pdf,
  });

  int id;
  String name;
  String icon;
  String acronym;
  String pdf;

  factory Party.fromRawJson(String str) => Party.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory Party.fromJson(Map<String, dynamic> json) {
    return Party(
      id      : json["id"],
      name    : json["name"],
      icon    : json["icon"],
      acronym : json["acronym"],
      pdf     : json["pdf"],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      "id"      : id,
      "name"    : name,
      "icon"    : icon,
      "acronym" : acronym,
      "pdf"     : pdf,
    };
  }
}
