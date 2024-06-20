import 'package:flutter/material.dart';
import 'package:flutter_appauth/flutter_appauth.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'environment_config.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final FlutterAppAuth _appAuth = FlutterAppAuth();
  String? _accessToken;
  String? _idToken;
  String? _refreshToken;
  Map<String, dynamic>? _profile;

  Future<void> _login() async {
    // PRINT ENVIRONMENT CONFIG
    print('Client ID: ${EnvironmentConfig.clientId}');
    print('Redirect URL: ${EnvironmentConfig.redirectUrl}');
    print('Issuer: ${EnvironmentConfig.issuer}');
    print('Discovery URL: ${EnvironmentConfig.discoveryUrl}');

    try {
      final AuthorizationTokenResponse? result =
          await _appAuth.authorizeAndExchangeCode(
        AuthorizationTokenRequest(
          EnvironmentConfig.clientId,
          EnvironmentConfig.redirectUrl,
          discoveryUrl: EnvironmentConfig.discoveryUrl,
          scopes: ['openid', 'profile', 'email'],
        ),
      );

      if (result != null) {
        setState(() {
          _accessToken = result.accessToken;
          _idToken = result.idToken;
          _refreshToken = result.refreshToken;
          _profile = _decodeJWT(_idToken!);
        });
        if (result.idToken != null) {
          print('Profile: $_profile');
        }
      }
    } catch (e) {
      print('Error during login: $e');
    }
  }

  Future<void> _fetchUserInfo() async {
    if (_accessToken != null) {
      try {
        final response = await http.get(
          Uri.parse(
              '${EnvironmentConfig.issuer}/protocol/openid-connect/userinfo'),
          headers: {'Authorization': 'Bearer $_accessToken'},
        );

        if (response.statusCode == 200) {
          final userInfo = json.decode(response.body);
          print('User info: $userInfo');
        } else {
          print(
              'Failed to fetch user info: ${response.statusCode} ${response.body}');
        }
      } catch (e) {
        print('Error fetching user info: $e');
      }
    }
  }

  Future<void> _logout() async {
    print('Logging out...');
    print(_refreshToken);
    if (_refreshToken != null) {
      try {
        final response = await http.post(
          Uri.parse(
              'https://auth1.demo.greengage-project.eu/auth/realms/greengage/protocol/openid-connect/logout'),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body:
              'client_id=${Uri.encodeQueryComponent(EnvironmentConfig.clientId)}&refresh_token=${Uri.encodeQueryComponent(_refreshToken!)}',
        );

        print(' ');
        print(' ');
        print(' ');
        print(_profile);
        print(' ');
        print(' ');
        print(' ');

        if (response.statusCode == 204) {
          setState(() {
            _accessToken = null;
            _idToken = null;
            _refreshToken = null;
            _profile = null;
          });
          print('Logged out successfully');
        } else {
          print('Failed to logout: ${response.statusCode} ${response.body}');
        }
      } catch (e) {
        print('Error during logout: $e');
      }
    }
  }

  Map<String, dynamic> _decodeJWT(String token) {
    final parts = token.split('.');
    if (parts.length != 3) {
      throw Exception('Invalid token');
    }

    final payload = _decodeBase64(parts[1]);
    final payloadMap = json.decode(payload);
    if (payloadMap is! Map<String, dynamic>) {
      throw Exception('Invalid payload');
    }

    return payloadMap;
  }

  String _decodeBase64(String str) {
    String output = str.replaceAll('-', '+').replaceAll('_', '/');

    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw Exception('Illegal base64url string');
    }

    return utf8.decode(base64Url.decode(output));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Login with Keycloak')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            if (_accessToken != null)
              ElevatedButton(
                onPressed: _logout,
                child: Text('Logout'),
              ),
            if (_profile != null) ...[
              Text('Name: ${_profile!['name']}',
                  style: TextStyle(fontSize: 16)),
              Text('Preferred Username: ${_profile!['preferred_username']}',
                  style: TextStyle(fontSize: 16)),
              Text('Locale: ${_profile!['locale']}',
                  style: TextStyle(fontSize: 16)),
              if (_profile!['picture'] != null)
                Image.network(_profile!['picture']),
              Container(
                margin: EdgeInsets.only(bottom: 16),
                child: Text('Id: ${_profile!['sid']}',
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.red,
                      fontWeight: FontWeight.bold,
                    )),
              ),
            ],
            Text('Access Token: $_accessToken', style: TextStyle(fontSize: 16)),
            if (_accessToken != null)
              if (_idToken != null)
                Text('ID Token: $_idToken', style: TextStyle(fontSize: 16)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _login,
              child: Text('Login with Keycloak'),
            ),
            if (_accessToken != null)
              ElevatedButton(
                onPressed: _fetchUserInfo,
                child: Text('Fetch User Info'),
              ),
          ],
        ),
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: LoginPage(),
  ));
}
