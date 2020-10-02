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
          // _textFormField(
          //   'Nombre',
          //   initialValue: _product.name,
          //   textInputType: TextInputType.text,
          //   textCapitalization: TextCapitalization.sentences,
          // ),
          // _textFormField(
          //   'Descripción',
          //   initialValue: _product.description,
          //   textCapitalization: TextCapitalization.sentences,
          //   textInputType: TextInputType.multiline,
          // ),
          // _textFormField('Precio',
          //     initialValue: _product.price.toString(),
          //     textCapitalization: TextCapitalization.none,
          //     textInputType:
          //         TextInputType.numberWithOptions(decimal: true, signed: false),
          //     number: true),
          // _textFormField(
          //   'Cantidad',
          //   initialValue: _product.stock.toString(),
          //   textCapitalization: TextCapitalization.none,
          //   textInputType:
          //       TextInputType.numberWithOptions(decimal: true, signed: false),
          //   number: true,
          // ),
        ],
      ),
    );
  }

  _displayDialog(BuildContext context) async {
    return showDialog(
      context: context,
      builder: (_) {
        return AlertDialog(
          title: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.file_upload),
              SizedBox(width: 5),
              Text("Recurso?"),
            ],
          ),
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
      child: image == null
          ? Image.asset('assets/no-image.png')
          : Image.file(image, fit: BoxFit.cover, height: 321),
    );
  }

  // Widget _textFormField(String textField,
  //     {String initialValue,
  //     TextInputType textInputType,
  //     TextCapitalization textCapitalization,
  //     bool number = false}) {
  //   return TextFormField(
  //       initialValue: initialValue,
  //       keyboardType: textInputType,
  //       textCapitalization: textCapitalization,
  //       decoration: InputDecoration(labelText: textField),
  //       onSaved: (value) => _onSavedFormField(textField, value),
  //       validator: (value) {
  //         return number
  //             ? _isNumber(value) ? null : 'Número Requerido'
  //             : value == null || value == '' && textField != 'Descripción'
  //                 ? 'Campo Requerido'
  //                 : null;
  //       });
  // }

  // List<Widget> _actionButtonList() {
  //   return [
  //     IconButton(
  //       icon: Icon(Icons.photo_size_select_actual),
  //       onPressed: () => _getImageFile(ImageSource.gallery),
  //     ),
  //     IconButton(
  //       icon: Icon(Icons.camera_alt),
  //       onPressed: () => _getImageFile(ImageSource.camera),
  //     ),
  //   ];
  // }

  // bool _isNumber(String s) => num.tryParse(s) != null;

  // _onSavedFormField(String textField, String value) {
  //   switch (textField) {
  //     case 'Nombre':
  //       _product.name = value;
  //       break;
  //     case 'Descripción':
  //       _product.description = value;
  //       break;
  //     case 'Precio':
  //       _product.price = double.parse(value);
  //       break;
  //     default:
  //       /* stock*/
  //       _product.stock = double.parse(value);
  //   }
  // }

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
