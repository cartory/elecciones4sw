import 'dart:convert';

class Act {
  Act({
    this.id,
    this.codigo,
    this.nro,
    this.apertura,
    this.cierre,
    this.recinto,
  });

  int id;
  int codigo;
  int nro;
  String apertura;
  String cierre;
  int recinto;

  factory Act.fromRawJson(String str) => Act.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory Act.fromJson(Map<String, dynamic> json) {
    return Act(
      id        : json["id"],
      codigo    : json["codigo"],
      nro       : json["nro"],
      apertura  : json["apertura"],
      cierre    : json["cierre"],
      recinto   : json["recinto"],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      "id"        : id,
      "codigo"    : codigo,
      "nro"       : nro,
      "apertura"  : apertura,
      "cierre"    : cierre,
      "recinto"   : recinto,
    };
  }
}
