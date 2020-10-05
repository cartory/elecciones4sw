import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_cropper/image_cropper.dart';

import 'package:image_picker/image_picker.dart';
import 'package:votercountapp/src/models/act.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:votercountapp/src/providers/vision.service.dart';

class ActForm extends StatefulWidget {
  @override
  _ActFormState createState() => _ActFormState();
}

class _ActFormState extends State<ActForm> {
  final formKey = GlobalKey<FormState>();
  final scaffoldKey = GlobalKey<ScaffoldState>();

  File image;
  Map<String, dynamic> data;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: scaffoldKey,
      body: SingleChildScrollView(
        child: Container(
          child: _getForm(),
          padding: EdgeInsets.all(15),
        ),
      ),
    );
  }

  _displayDialog(BuildContext context) async {
    return showDialog(
      context: context,
      builder: (_) {
        return AlertDialog(
          content: Column(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              ListTile(
                title: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.camera_alt),
                    SizedBox(width: 10),
                    Text("Cámara")
                  ],
                ),
                onTap: () => _getImageFile(ImageSource.camera),
              ),
              ListTile(
                title: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.photo_library),
                    SizedBox(width: 10),
                    Text("Galería")
                  ],
                ),
                onTap: () => _getImageFile(ImageSource.gallery),
              ),
              (image != null)
                  ? ListTile(
                      title: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.crop),
                          SizedBox(width: 10),
                          Text("Editar")
                        ],
                      ),
                      onTap: () => _cropImage(),
                    )
                  : Container(),
            ],
          ),
        );
      },
    );
  }

  Widget _imageFile() {
    return InkWell(
      onTap: () async {
        await Permission.camera.request();
        await Permission.mediaLibrary.request();
        _displayDialog(context);
      },
      child: ClipRRect(
        borderRadius: BorderRadius.circular(15),
        child: image == null
            ? Image.asset('assets/no-image.png',
                fit: BoxFit.cover, width: double.infinity, height: 321)
            : Image.file(image,
                fit: BoxFit.cover, width: double.infinity, height: 321),
      ),
    );
  }

  Future<Null> _cropImage() async {
    File croppedFile = await ImageCropper.cropImage(
        sourcePath: image.path,
        aspectRatioPresets: Platform.isAndroid
            ? [
                CropAspectRatioPreset.square,
                CropAspectRatioPreset.ratio3x2,
                CropAspectRatioPreset.original,
                CropAspectRatioPreset.ratio4x3,
                CropAspectRatioPreset.ratio16x9
              ]
            : [
                CropAspectRatioPreset.original,
                CropAspectRatioPreset.square,
                CropAspectRatioPreset.ratio3x2,
                CropAspectRatioPreset.ratio4x3,
                CropAspectRatioPreset.ratio5x3,
                CropAspectRatioPreset.ratio5x4,
                CropAspectRatioPreset.ratio7x5,
                CropAspectRatioPreset.ratio16x9
              ],
        androidUiSettings: AndroidUiSettings(
            toolbarTitle: 'Cropper',
            toolbarColor: Colors.deepOrange,
            toolbarWidgetColor: Colors.white,
            initAspectRatio: CropAspectRatioPreset.original,
            lockAspectRatio: false),
        iosUiSettings: IOSUiSettings(
          title: 'Cropper',
        ));
    if (croppedFile != null) {
      setState(() => image = croppedFile);
      data = await TextRecon.detecFromFile(image);
      print(data);
    }
  }

  Widget _getForm() {
    return Form(
      key: formKey,
      child: Container(),
    );
  }

  List<Widget> _constructData() {
    List<Widget> tmp = List();

    // Act acta = data["acta"];
    // List<List> locs = data["locs"];
    // List<List> votos = data["votos"];
    return tmp;
  }

  Widget _getActa(Act acta, ) {
    return Container(
      child: Column(

      ),
    );
  }

  _getImageFile(ImageSource imageSource) async {
    // ignore: deprecated_member_use
    File picked = await ImagePicker.pickImage(source: imageSource);
    setState(() => image = picked);
    if (image != null) {
      data = await TextRecon.detecFromFile(image);
      print(data);
    }
  }
}
