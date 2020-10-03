import 'dart:convert';

class Location {
  Location({
    this.id,
    this.type,
    this.name,
    this.district,
    this.locationId,
    this.locations,
  });

  int id;
  String type;
  String name;
  dynamic district;
  int locationId;
  List<Location> locations;

  factory Location.fromRawJson(String str) {
    return Location.fromJson(json.decode(str));
  }

  String toRawJson() => json.encode(toJson());

  factory Location.fromJson(Map<String, dynamic> json) {
    return Location(
      id          : json["id"],
      type        : json["type"],
      name        : json["name"],
      district    : json["district"],
      locationId  : json["location_id"],
      locations   : json["Locations"] == null
                    ? null 
                    : List<Location>.from(json["Locations"].map((x) => Location.fromJson(x))),
    );
  }

  Map<String, dynamic> toJson() {
    return {
        "id"          : id,
        "type"        : type,
        "name"        : name,
        "district"    : district,
        "location_id" : locationId,
        "Locations"   : locations == null
                        ? null 
                        : List<dynamic>.from(locations.map((x) => x.toJson())),
      };
  }
}
