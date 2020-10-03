import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:permission_handler/permission_handler.dart';

class ActForm extends StatefulWidget {
  @override
  _ActFormState createState() => _ActFormState();
}

class _ActFormState extends State<ActForm> {
  final formKey = GlobalKey<FormState>();
  final scaffoldKey = GlobalKey<ScaffoldState>();

  File image;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: scaffoldKey,
      body: SingleChildScrollView(
        child: Container(
          child: _form(),
          padding: EdgeInsets.all(15),
        ),
      ),
    );
  }

  Widget _form() {
    return Form(
      key: formKey,
      child: Column(
        children: <Widget>[
          _imageFile(),
          DropdownButton<String>(
            value: 'A',
            hint: Text("Seleccione Localidad"),
            icon: Icon(Icons.location_on),
            items: <String>['A', 'B', 'C', 'D'].map((String value) {
              return DropdownMenuItem<String>(
                value: value,
                child: Text(value),
              );
            }).toList(),
            onChanged: (val) {
              print(val);
            },
          )
        ],
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

  // _submitButtonForm() {
  //   if (!formKey.currentState.validate()) return;
  //   formKey.currentState.save();
  //   if (image == null) return;

  //   // _product.id == null
  //   //     ? provider.create(_product, image)
  //   //     : provider.update(_product, _product.id, image);
  // }

  _getImageFile(ImageSource imageSource) async {
    // ignore: deprecated_member_use
    image = await ImagePicker.pickImage(source: imageSource);
    setState(() {});
  }
}
