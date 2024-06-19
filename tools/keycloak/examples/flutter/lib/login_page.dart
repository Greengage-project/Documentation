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
        });
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
          print('Failed to fetch user info');
        }
      } catch (e) {
        print('Error fetching user info: $e');
      }
    }
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
              Text('Access Token: $_accessToken',
                  style: TextStyle(fontSize: 16)),
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
