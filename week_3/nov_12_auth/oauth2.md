# OAuth 2 explained

* Site-A registers with Site-B, and obtains a Secret and an ID.

* When User tells Site-A to access Site-B, User is sent to Site-B where she tells Site-B that she would indeed like to give Site-A permissions to specific information.

* Site-B redirects User back to Site-A, along with an Authorization Code.

* Site-A then passes that Authorization Code along with its Secret back to Site-B in return for a Security Token.

* Site-A then makes requests to Site-B on behalf of User by bundling the Security Token along with requests.
