import 'package:flutter_dotenv/flutter_dotenv.dart';

class EnvironmentConfig {
  static String get clientId => dotenv.env['CLIENT_ID'] ?? '';
  static String get redirectUrl => dotenv.env['REDIRECT_URL'] ?? '';
  static String get issuer => dotenv.env['ISSUER'] ?? '';
  static String get discoveryUrl => dotenv.env['DISCOVERY_URL'] ?? '';
}
