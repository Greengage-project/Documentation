from flask import Flask, session, redirect, url_for, request
from flask_oidc import OpenIDConnect

app = Flask(__name__)
# DISABLE SSL CERTIFICATE  OIDC
app.config.update({
    'SECRET_KEY': 'your-secret-goes-here',
    'OIDC_CLIENT_SECRETS': './client_secrets.json',
    'OIDC_COOKIE_SECURE': False,
    'OIDC_CALLBACK_ROUTE': '/oidc/callback',
    'OIDC_SCOPES': ['openid']
})

oidc = OpenIDConnect(app)


@app.route('/')
def home():
    """
    This is the home page. It will display a login link if the user is not
    logged in, or a logout link with the user's username if they are logged in.

    :return: The home page HTML.
    """
    if not oidc.user_loggedin:
        return 'Hello World | <a href="/login">Login</a>'
    info = oidc.user_getinfo(['preferred_username', 'email', 'sub'])
    user_id = info.get('sub')
    return f'Logged in as {user_id} | <a href="/logout">Logout</a>'


@app.route('/login')
@oidc.require_login
def login():
    """
    This is the login page. It will redirect the user to Keycloak for
    authentication.

    :return: A redirect to Keycloak.
    """
    return 'Authenticated | <a href="/logout">Logout</a>'


@app.route('/oidc/callback')
def callback():
    """
    This is the callback route for Keycloak. It will redirect the user back to
    the home page.

    :return: A redirect to the home page.
    """
    oidc.callback()
    return redirect(url_for('home'))


@app.route('/logout')
def logout():
    """
    This is the logout page. It will log the user out of the application and
    Keycloak.

    :return: A redirect to the home page.
    """
    oidc.logout()
    return redirect(url_for('home'))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True, ssl_context='adhoc')
