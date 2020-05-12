module.exports = {

    verifyUser: (request, response, next) => {
        let key = 'abc';
        let token = request.header('token');

        let _decrypt = method.decrypt(token);
        _decrypt = JSON.parse(_decrypt);

        if (_decrypt.key != key) {
            response.send({
                "Key": "Invalid Key"
            });
            return;
        }
        next();
    }
};