import 'dart:convert';

import 'package:votercountapp/src/models/party.dart';

class Person {
  Person({
    this.id,
    this.document,
    this.names,
    this.lastname1,
    this.lastname2,
    this.phone,
    this.birthdate,
    this.address,
    this.gender,
    this.vowel,
    this.president,
    this.delegate,
    this.secretary,
    this.candidate,
    this.position,
    this.description,
    this.observations,
    this.type,
    this.partyId,
    this.locationId,
    this.party,
  });

  int id;
  int document;
  String names;
  String lastname1;
  String lastname2;
  int phone;
  DateTime birthdate;
  String address;
  String gender;
  bool vowel;
  bool president;
  bool delegate;
  bool secretary;
  bool candidate;
  String position;
  String description;
  String observations;
  String type;
  int partyId;
  int locationId;
  Party party;

  factory Person.fromRawJson(String str) => Person.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory Person.fromJson(Map<String, dynamic> json) => Person(
        id            : int.tryParse(json["id"]),
        document      : int.tryParse(json["document"]),
        names         : json["names"],
        lastname1     : json["lastname1"],
        lastname2     : json["lastname2"],
        phone         : int.tryParse(json["phone"].toString()),
        birthdate     : DateTime.parse(json["birthdate"]),
        address       : json["address"],
        gender        : json["gender"],
        vowel         : json["vowel"],
        president     : json["president"],
        delegate      : json["delegate"],
        secretary     : json["secretary"],
        candidate     : json["candidate"],
        position      : json["position"],
        description   : json["description"],
        observations  : json["observations"],
        type          : json["type"],
        partyId       : int.tryParse(json["party_id"].toString()),
        locationId    : int.tryParse(json["location_id"].toString()),
        party         : Party.fromJson(json["Party"]),
      );

  Map<String, dynamic> toJson() => {
        "id"            : id,
        "document"      : document,
        "names"         : names,
        "lastname1"     : lastname1,
        "lastname2"     : lastname2,
        "phone"         : phone,
        "birthdate"     : birthdate.toIso8601String(),
        "address"       : address,
        "gender"        : gender,
        "vowel"         : vowel,
        "president"     : president,
        "delegate"      : delegate,
        "secretary"     : secretary,
        "candidate"     : candidate,
        "position"      : position,
        "description"   : description,
        "observations"  : observations,
        "type"          : type,
        "party_id"      : partyId,
        "location_id"   : locationId,
        "Party"         : party.toJson(),
      };
}
