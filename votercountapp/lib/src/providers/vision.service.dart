import 'dart:io';

import 'package:firebase_ml_vision/firebase_ml_vision.dart';

class TextRecon {
  static detecFromFile(File img) async {
    final txtrcon = FirebaseVision.instance.textRecognizer();
    final visiontxt = await txtrcon.processImage(
      FirebaseVisionImage.fromFile(img),
    );

    visiontxt.blocks.forEach((block) {
      print(block.text);
    });
    print(visiontxt);
    txtrcon.close();
  }
}
