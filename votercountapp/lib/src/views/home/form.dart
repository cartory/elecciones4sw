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
  List<List> data;
  Act acta;

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
                    Text("Cámara"),
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
                    Text("Galería"),
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
      ),
    );
    if (croppedFile != null) {
      data = await TextRecon.detecFromFile(image = croppedFile);
      setState(() => print(data));
    }
  }

  List<Widget> _getChildrenForm() {
    List<Widget> tmp = [_imageFile()];
    if (acta != null) {
      tmp.addAll([
        SizedBox(height: 10),
        Center(
          child: Text(
            "DATOS MESA",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 25,
            ),
          ),
        ),
        SizedBox(height: 10),
        _getActa(),
        SizedBox(height: 10),
        Center(
          child: Text(
            "RECUENTO",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 25,
            ),
          ),
        ),
        SizedBox(height: 10),
      ].map((e) => e));
    }
    if (data != null) {
      tmp.addAll([
        SizedBox(height: 10),
        _getMesa(),
        Container(
          padding: EdgeInsets.symmetric(vertical: 25),
          child: RaisedButton.icon(
            onPressed: () {
              if (data != null) {
                print("PUSH DATA");
              } else {
                print("REJECT");
              }
            },
            icon: Icon(Icons.cloud_upload),
            label: Text(
              "SUBIR",
              style: TextStyle(
                fontSize: 17,
                fontWeight: FontWeight.bold,
                fontFamily: "serif",
              ),
            ),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(15),
            ),
          ),
        ),
      ].map((e) => e));
    }
    return tmp;
  }

  Widget _form() {
    return Form(
      key: formKey,
      child: Column(
        children: _getChildrenForm(),
      ),
    );
  }

  Widget _getActa() {
    return Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            padding: EdgeInsets.symmetric(horizontal: 20),
            child: TextFormField(
              initialValue: acta.codigo?.toString(),
              textAlign: TextAlign.start,
              onSaved: (val) => print("DEBUG"),
              decoration: InputDecoration(
                hintText: "\tCódigo Mesa",
                prefixIcon: Icon(Icons.code),
              ),
              keyboardType: TextInputType.numberWithOptions(
                decimal: false,
                signed: false,
              ),
              validator: (value) {
                return num.tryParse(value) == null ? 'Número Requerido' : null;
              },
            ),
          ),
          Container(
            padding: EdgeInsets.symmetric(horizontal: 20),
            child: TextFormField(
              initialValue: acta.nro?.toString(),
              textAlign: TextAlign.start,
              onSaved: (val) => print(val),
              decoration: InputDecoration(
                hintText: "\tNúmero",
                prefixIcon: Icon(Icons.format_list_numbered_rtl),
              ),
              keyboardType: TextInputType.numberWithOptions(
                decimal: false,
                signed: false,
              ),
              validator: (value) {
                return num.tryParse(value) == null ? 'Número Requerido' : null;
              },
            ),
          ),
          Container(
            padding: EdgeInsets.symmetric(horizontal: 20),
            child: TextFormField(
              textAlign: TextAlign.start,
              onSaved: (val) => print(val),
              decoration: InputDecoration(
                hintText: "\tLocalidad",
                prefixIcon: Icon(Icons.not_listed_location),
              ),
            ),
          ),
        ],
      ),
    );
  }

  List<DataRow> _getDataRows() {
    return data?.map((cols) {
      return DataRow(cells: [
        DataCell(Text(cols[1])),
        DataCell(
          TextFormField(
            initialValue: cols[2].toString(),
            textAlign: TextAlign.start,
            onSaved: (val) => print("DEBUG"),
            keyboardType: TextInputType.numberWithOptions(
              decimal: false,
              signed: false,
            ),
            validator: (value) {
              return num.tryParse(value) == null ? 'Número Requerido' : null;
            },
          ),
        ),
        DataCell(
          TextFormField(
            initialValue: cols[3].toString(),
            textAlign: TextAlign.start,
            onSaved: (val) => print("DEBUG"),
            keyboardType: TextInputType.numberWithOptions(
              decimal: false,
              signed: false,
            ),
            validator: (value) {
              return num.tryParse(value) == null ? 'Número Requerido' : null;
            },
          ),
        ),
      ]);
    })?.toList();
  }

  Widget _getMesa() {
    return Container(
      child: DataTable(
        columns: [
          DataColumn(label: Text("Partido")),
          DataColumn(label: Text("Presidente")),
          DataColumn(label: Text("Uninominal")),
        ],
        rows: _getDataRows(),
      ),
    );
  }

  _getImageFile(ImageSource imageSource) async {
    // ignore: deprecated_member_use
    File picked = await ImagePicker.pickImage(source: imageSource);
    if (picked != null) {
      acta = await TextRecon.getAct(image = picked);
      setState(() => print(acta));
    }
  }
}
