
"# Showcase-It" 


```
    build production
    npm run ionic:build --prod

    ionic build browser --prod
```

#Generate a keystore
cd to "C:\Program Files\Java\jdk1.8.0_91\bin"

#generate a debugkey
keytool -genkey -v -keystore androiddebugkey -alias showcaseit -keyalg RSA -keysize 2048 -validity 10000

#generate a release key
keytool -genkey -v -keystore showcaseit.keystore -alias showcaseit -keyalg RSA -keysize 2048 -validity 10000

#Add keystore to facebook keyhashes
keytool -exportcert -alias showcaseit -keystore "C:\Users\pc\ShowcaseIt\showcaseit.keystore" | openssl sha1 -binary | openssl base64
or
keytool -exportcert -alias showcaseit -keystore "C:\Users\pc\ShowcaseIt\showcaseit.keystore" | "C:\Users\pc\openssl\bin\openssl.exe" sha1 -binary | "C:\Users\pc\openssl\bin\openssl.exe" base64
<-- Download openssl if not working and put it in the directory

#.gitignore
src/
resources/
typings/
.editorconfig
.firebaserc
androiddebugkey
config.xml
copy.config.js
debug.log
firebase.json
ionic.config.json
package-lock.json
package.json
README.md
showcaseit.keystore
tsconfig.json
tslint.json
