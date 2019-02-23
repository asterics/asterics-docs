#!/bin/bash
# openssl req -x509 -nodes \
#  -out cert.pem           \
#  -keyout key.pem         \
#  -newkey rsa:2048        \
#  -sha256                 \
#  -subj /CN=localhost     \
#  -extensions EXT         \
#  -config <( printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth" )

# openssl req -new -x509 \
#  -newkey rsa:2048 \
#  -sha256 -nodes   \
#  -days 3560       \
#  -keyout key.pem  \
#  -out cert.pem    \
#  -config localhost.cnf

openssl genrsa -aes256 -out cakey.pem 2048
openssl req -new -x509 -subj "/CN=myca" -extensions v3_ca -days 3650 -key cakey.pem -sha256 -out cacert.pem -config localhost.cnf

# openssl req -new -x509 \
#  -subj "/CN=myca"      \
#  -extensions v3_ca     \
#  -newkey rsa:2048      \
#  -sha256 -nodes        \
#  -days 3560            \
#  -keyout key.pem       \
#  -out cert.pem         \
#  -config localhost.cnf

openssl genrsa -out key.pem 2048
openssl req -subj "/CN=localhost" -extensions v3_req -sha256 -new -key key.pem -out localhost.csr
openssl x509 -req -extensions v3_req -days 3650 -sha256 -in localhost.csr -CA cacert.pem -CAkey cakey.pem -CAcreateserial -out localhost.crt -extfile localhost.cnf