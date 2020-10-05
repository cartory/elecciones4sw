import 'dart:convert';

class Act {
  Act({
    this.codigo,
    this.nro,
    this.apertura,
    this.cierre,
    this.distrito,
    this.recinto,
  });

  int codigo;
  int nro;
  String apertura;
  String cierre;
  int distrito;
  int recinto;

  factory Act.fromRawJson(String str) => Act.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory Act.fromJson(Map<String, dynamic> json) {
    return Act(
        codigo: json["codigo"],
        nro: json["nro"],
        apertura: json["apertura"],
        cierre: json["cierre"],
        distrito: json["distrito"],
        recinto: json["recinto"]);
  }

  Map<String, dynamic> toJson() {
    return {
      "codigo": codigo,
      "nro": nro,
      "apertura": apertura,
      "cierre": cierre,
      "recinto": recinto,
    };
  }
}
