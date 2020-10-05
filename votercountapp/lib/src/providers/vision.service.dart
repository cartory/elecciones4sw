import 'dart:ui';
import 'dart:io';

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
  static Future<List<List>> detecFromFile(File img) async {
    final txtrcon = FirebaseVision.instance.textRecognizer();
    final visiontxt = await txtrcon.processImage(
      FirebaseVisionImage.fromFile(img),
    );

    Offset p;
    double dx, dy;
    List<List> votes = List();
    bool blanco = true, nulo = true;

    visiontxt.blocks.forEach((block) {
      if (block.text.toUpperCase().contains("C.C")) {
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
      }
    });

    visiontxt.blocks.forEach((block) {
      String digits = _getDigits(block.text);
      Offset pb = block.cornerPoints[0];
      if (digits.isNotEmpty) {
        votes.forEach((cols) {
          Offset o = cols[0];
          if (o.dy < pb.dy && pb.dy < o.dy + dy / 2) {
            if (o.dx < pb.dx && pb.dx < o.dx + dx) {
              print("C1:${cols[1]}\t$digits");
              cols[2] = int.parse(digits);
            } else {
              print("C2:${cols[1]}\t$digits");
              cols[3] = int.parse(digits);
            }
          }
        });
      }
    });

    txtrcon.close();

    return votes;
  }
}
