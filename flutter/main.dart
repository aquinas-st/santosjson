import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Álbuns - Flutter',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: UserAlbumsScreen(userName: 'São Tomás de Aquino'),
    );
  }
}

class UserAlbumsScreen extends StatelessWidget {
  final String userName;
  UserAlbumsScreen({required this.userName});

  final List<Map<String, dynamic>> albums = List.generate(6, (i) => {
        'id': i + 1,
        'title': 'Álbum ${i + 1}',
      });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Álbuns de $userName')),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: GridView.builder(
          itemCount: albums.length,
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
            childAspectRatio: 3 / 2,
          ),
          itemBuilder: (context, index) {
            final album = albums[index];
            return GestureDetector(
              onTap: () {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('Abrindo ${album['title']}...')),
                );
              },
              child: Container(
                color: Colors.grey[300],
                child: Center(child: Text(album['title'])),
              ),
            );
          },
        ),
      ),
    );
  }
}
