import 'dart:io';
import 'dart:ui';

import 'package:votercountapp/src/models/act.dart';
import 'package:firebase_ml_vision/firebase_ml_vision.dart';

double _getDx(List<Offset> points, Offset p) {
  return (points[0].dx - p.dx) + (points[3].dx - p.dx) / 2;
}

double _getDy(List<Offset> points, Offset p) {
  return (points[0].dy - p.dy) + (points[1].dy - p.dy) / 2;
}

String _getDigits(String str) {
  String tmp = "";
  for (int i = 0; i < str.length; i++) {
    if (int.tryParse(str[i]) != null) {
      tmp += str[i];
    }
  }
  return tmp;
}

bool _inRange(Offset o, Offset p, {int limit = 5}) {
  return o.dx - limit < p.dx && p.dx < o.dx + limit;
}

Offset middlePoint(List<Offset> p) {
  return Offset(
    (p[0].dx + p[1].dx) / 2,
    (p[0].dy + p[1].dy) / 2,
  );
}

class TextRecon {
  static detecFromFile(File img) async {
    final txtrcon = FirebaseVision.instance.textRecognizer();
    final visiontxt = await txtrcon.processImage(
      FirebaseVisionImage.fromFile(img),
    );

    List<List> locs = List();
    Offset mp, p, tp;
    double dx, dy, px, py;
    List<List> votes = List();
    bool blanco = true, nulo = true;

    Act acta = Act(
      apertura: DateTime.now().toIso8601String(),
      cierre: DateTime.now().toIso8601String(),
    );

    visiontxt.blocks.forEach((block) {
      if (block.text.toLowerCase().contains("depart") && tp == null) {
        tp = block.cornerPoints[0];
        px = block.cornerPoints[1].dx - tp.dx;
        locs.add([tp, block.text]);
      } else if (block.text.toLowerCase().contains("provincia:")) {
        if (tp != null) {
          py = _getDy(block.cornerPoints, tp);
          locs.add([tp, block.text.toLowerCase()]);
        }
      } else if (block.text.toLowerCase().contains("icipio:")) {
        if (tp != null) {
          py = _getDy(block.cornerPoints, tp);
          locs.add([tp, block.text.toLowerCase()]);
        }
      } else if (block.text.toLowerCase().contains("calidad:")) {
        if (tp != null) {
          py = _getDy(block.cornerPoints, tp);
          locs.add([tp, block.text.toLowerCase()]);
        }
      } else if (block.text.toLowerCase().contains("recinto:")) {
        if (tp != null) {
          py = _getDy(block.cornerPoints, tp);
          locs.add([tp, block.text.toLowerCase()]);
        }
      } else if (block.text.toUpperCase().contains("O DE MESA") && mp == null) {
        mp = middlePoint(block.cornerPoints);
      } else if (block.text.toUpperCase().contains("MESA:")) {
        if (mp != null) {
          if (block.cornerPoints[0].dx < mp.dx) {
            acta.nro = int.tryParse(_getDigits(block.text));
          }
        }
      } else if (block.text.toUpperCase().contains("CIR.")) {
        if (mp != null) {
          if (block.cornerPoints[0].dx < mp.dx) {
            acta.distrito = int.tryParse(_getDigits(block.text));
          }
        }
      } else if (block.text.toUpperCase().contains("C.C")) {
        if (p == null) {
          p = block.cornerPoints[0];
          votes.add([p, block.text.toUpperCase(), 0, 0]);
        } else {
          dx = _getDx(block.cornerPoints, p);
        }
      } else if (block.text.toUpperCase().contains("FPV")) {
        if (dy == null) {
          if (p != null) {
            dy = _getDy(block.cornerPoints, p);
            votes.add([block.cornerPoints[0], block.text.toUpperCase(), 0, 0]);
          }
        }
      } else if (block.text.toUpperCase().contains("BLANC")) {
        if (blanco) {
          votes.add([block.cornerPoints[0], block.text.toUpperCase(), 0, 0]);
          blanco = false;
        }
      } else if (block.text.toUpperCase().contains("NUL")) {
        if (nulo) {
          votes.add([block.cornerPoints[0], block.text.toUpperCase(), 0, 0]);
          nulo = false;
        }
      } else {
        if (p != null) {
          if (_inRange(block.cornerPoints[0], p)) {
            votes.add([block.cornerPoints[0], block.text.toUpperCase(), 0, 0]);
          }
        }
        if (mp != null) {
          if (block.cornerPoints[0].dx < mp.dx) {
            if (acta.codigo == null) {
              acta.codigo = int.tryParse(block.text);
            }
          }
        }
      }
    });

    visiontxt.blocks.forEach((block) {
      String digits = _getDigits(block.text);
      Offset pb = block.cornerPoints[0];
      if (digits.isNotEmpty) {
        votes.forEach((cols) {
          Offset o = cols[0];
          if (o.dy < pb.dy && pb.dy < o.dy + 5) {
            if (o.dx < pb.dx && pb.dx < o.dx + px * 1.3) {
              print("C1:${cols[1]}\t$digits");
              cols[2] = int.parse(digits);
            } else {
              print("C2:${cols[1]}\t$digits");
              cols[3] = int.parse(digits);
            }
          }
        });
      }
      locs.forEach((cols) {
        Offset o = cols[0];
        if (block.cornerPoints[0].dx < o.dx + px * 1.3) {
          if (o.dy - 5 < block.cornerPoints[0].dy) {
            if (block.cornerPoints[0].dy < o.dy + 5) {
              // print(block.text);
              cols[1] = block.text;
            }
          }
        }
      });
    });

    print("DEBUG");
    txtrcon.close();
  }
}
